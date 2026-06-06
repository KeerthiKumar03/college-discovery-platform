"use client";

import { useEffect, useState } from "react";

interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  avgPackage: number;
  highestPackage: number;
}

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data.data));
  }, []);

  const c1 = colleges.find((c) => c.id === college1);
  const c2 = colleges.find((c) => c.id === college2);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Compare Colleges
      </h1>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <select
          value={college1}
          onChange={(e) => setCollege1(e.target.value)}
          className="border p-3 rounded text-black"
        >
          <option value="">Select College 1</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          value={college2}
          onChange={(e) => setCollege2(e.target.value)}
          className="border p-3 rounded text-black"
        >
          <option value="">Select College 2</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {c1 && c2 && (
        <>
          <div className="mb-6 p-4 border rounded-lg bg-gray-900">
            <h2 className="text-2xl font-bold mb-2">
              Recommended College
            </h2>

            <p>
              {c1.rating > c2.rating
                ? c1.name
                : c2.name}
              {" "}
              has the higher rating.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="border-collapse border w-full">
              <tbody>
                <tr>
                  <td className="border p-3 font-bold">
                    Feature
                  </td>
                  <td className="border p-3 font-bold">
                    {c1.name}
                  </td>
                  <td className="border p-3 font-bold">
                    {c2.name}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Location
                  </td>
                  <td className="border p-3">
                    {c1.location}
                  </td>
                  <td className="border p-3">
                    {c2.location}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Fees
                  </td>

                  <td
                    className={`border p-3 ${
                      c1.fees < c2.fees
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    ₹{c1.fees.toLocaleString()}
                  </td>

                  <td
                    className={`border p-3 ${
                      c2.fees < c1.fees
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    ₹{c2.fees.toLocaleString()}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Rating
                  </td>

                  <td
                    className={`border p-3 ${
                      c1.rating > c2.rating
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    {c1.rating}
                  </td>

                  <td
                    className={`border p-3 ${
                      c2.rating > c1.rating
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    {c2.rating}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Average Package
                  </td>

                  <td
                    className={`border p-3 ${
                      c1.avgPackage >
                      c2.avgPackage
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    ₹
                    {c1.avgPackage.toLocaleString()}
                  </td>

                  <td
                    className={`border p-3 ${
                      c2.avgPackage >
                      c1.avgPackage
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    ₹
                    {c2.avgPackage.toLocaleString()}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Highest Package
                  </td>

                  <td
                    className={`border p-3 ${
                      c1.highestPackage >
                      c2.highestPackage
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    ₹
                    {c1.highestPackage.toLocaleString()}
                  </td>

                  <td
                    className={`border p-3 ${
                      c2.highestPackage >
                      c1.highestPackage
                        ? "bg-green-600"
                        : ""
                    }`}
                  >
                    ₹
                    {c2.highestPackage.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}