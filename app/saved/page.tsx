"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SavedCollege {
  id: string;
  college: {
    id: string;
    name: string;
    location: string;
    fees: number;
    rating: number;
  };
}

export default function SavedPage() {
  const [savedColleges, setSavedColleges] = useState<SavedCollege[]>([]);

  useEffect(() => {
    fetch("/api/saved-colleges")
      .then((res) => res.json())
      .then((data) => {
        setSavedColleges(data.data);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <p>No saved colleges yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedColleges.map((item) => (
            <Link
              href={`/college/${item.college.id}`}
              key={item.id}
            >
              <div className="border rounded-lg p-5 shadow hover:shadow-lg cursor-pointer">
                <h2 className="text-xl font-bold">
                  {item.college.name}
                </h2>

                <p>📍 {item.college.location}</p>
                <p>⭐ {item.college.rating}</p>
                <p>
                  💰 ₹
                  {item.college.fees.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}