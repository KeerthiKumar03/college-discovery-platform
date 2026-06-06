"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
}

export default function Home() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [fees, setFees] = useState("");

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch("/api/colleges");
        const data = await res.json();

        if (data.success) {
          setColleges(data.data);
        }
      } catch (error) {
        console.error(
          "Error fetching colleges:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  // Show loading screen
  if (loading) {
    return (
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">
          College Discovery Platform
        </h1>

        <p className="text-gray-400">
          Loading colleges...
        </p>
      </main>
    );
  }

  const filteredColleges = colleges.filter(
    (college) => {
      const matchesSearch = college.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesLocation =
        location === "" ||
        college.location === location;

      const matchesRating =
        rating === "" ||
        college.rating >= Number(rating);

      const matchesFees =
        fees === "" ||
        college.fees <= Number(fees);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesRating &&
        matchesFees
      );
    }
  );

  const uniqueLocations = [
    ...new Set(
      colleges.map(
        (college) => college.location
      )
    ),
  ];

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        College Discovery Platform
      </h1>

      {/* Compare Button */}
      <div className="mb-6">
        <Link
          href="/compare"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Compare Colleges
        </Link>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-3 rounded-lg w-full mb-4 text-black"
      />

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Location */}
        <select
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="border p-3 rounded-lg text-black"
        >
          <option value="">
            All Locations
          </option>

          {uniqueLocations.map((loc) => (
            <option
              key={loc}
              value={loc}
            >
              {loc}
            </option>
          ))}
        </select>

        {/* Rating */}
        <select
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
          className="border p-3 rounded-lg text-black"
        >
          <option value="">
            All Ratings
          </option>

          <option value="4">
            4+ Rating
          </option>

          <option value="4.5">
            4.5+ Rating
          </option>
        </select>

        {/* Fees */}
        <select
          value={fees}
          onChange={(e) =>
            setFees(e.target.value)
          }
          className="border p-3 rounded-lg text-black"
        >
          <option value="">
            All Fees
          </option>

          <option value="130000">
            Below ₹1,30,000
          </option>

          <option value="150000">
            Below ₹1,50,000
          </option>

          <option value="200000">
            Below ₹2,00,000
          </option>
        </select>
      </div>

      {/* Count */}
      <div className="mb-4">
        <p>
          Showing{" "}
          {filteredColleges.length}{" "}
          colleges
        </p>
      </div>

      {/* College Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.length > 0 ? (
          filteredColleges.map(
            (college) => (
              <Link
                href={`/college/${college.id}`}
                key={college.id}
              >
                <div className="border rounded-lg p-5 shadow cursor-pointer hover:shadow-lg transition">
                  <h2 className="text-xl font-bold">
                    {college.name}
                  </h2>

                  <p>
                    📍{" "}
                    {college.location}
                  </p>

                  <p>
                    ⭐ {college.rating}
                  </p>

                  <p>
                    💰 ₹
                    {college.fees.toLocaleString()}
                  </p>
                </div>
              </Link>
            )
          )
        ) : (
          <div className="col-span-full text-center text-gray-400 py-10">
            No colleges found matching
            your filters.
          </div>
        )}
      </div>
    </main>
  );
}