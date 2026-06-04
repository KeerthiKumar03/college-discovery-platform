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
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data.data);
      });
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <main className="p-8">
    <h1 className="text-4xl font-bold mb-6">
      College Discovery Platform
    </h1>

    {/* Compare Button */}
    <div className="mb-6">
      <Link
        href="/compare"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Compare Colleges
      </Link>
    </div>

    <input
      type="text"
      placeholder="Search colleges..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-3 rounded-lg w-full mb-6"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredColleges.map((college) => (
        <Link
          href={`/college/${college.id}`}
          key={college.id}
        >
          <div className="border rounded-lg p-5 shadow cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-bold">
              {college.name}
            </h2>

            <p>📍 {college.location}</p>
            <p>⭐ {college.rating}</p>
            <p>💰 ₹{college.fees.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  </main>
);
}


