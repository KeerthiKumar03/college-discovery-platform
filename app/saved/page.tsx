"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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

  const router = useRouter();
const hasRedirected = useRef(false);

  useEffect(() => {
  const user = localStorage.getItem("user");

  if (!user && !hasRedirected.current) {
    hasRedirected.current = true;

    alert("Please login first");
    router.push("/login");
    return;
  }

  if (user) {
    fetchSavedColleges();
  }
}, [router]);

  const fetchSavedColleges = async () => {
    const res = await fetch("/api/saved-colleges");
    const data = await res.json();

    if (data.success) {
      setSavedColleges(data.data);
    }
  };

  const handleRemove = async (savedId: string) => {
    const confirmed = confirm(
      "Are you sure you want to remove this college from saved colleges?"
    );

    if (!confirmed) return;

    const res = await fetch(
      `/api/save-college/${savedId}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("College removed successfully!");

      setSavedColleges((prev) =>
        prev.filter(
          (college) =>
            college.id !== savedId
        )
      );
    } else {
      alert(
        data.message ||
          "Failed to remove college"
      );
    }
  };

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
            <div
              key={item.id}
              className="border rounded-lg p-5 shadow hover:shadow-lg"
            >
              <Link
                href={`/college/${item.college.id}`}
              >
                <div className="cursor-pointer">
                  <h2 className="text-xl font-bold">
                    {item.college.name}
                  </h2>

                  <p>
                    📍 {item.college.location}
                  </p>

                  <p>
                    ⭐ {item.college.rating}
                  </p>

                  <p>
                    💰 ₹
                    {item.college.fees.toLocaleString()}
                  </p>
                </div>
              </Link>

              <button
                onClick={() =>
                  handleRemove(item.id)
                }
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}