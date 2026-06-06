"use client";

import { useState } from "react";

export default function ReviewForm({
  collegeId,
}: {
  collegeId: string;
}) {
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        userName,
        rating,
        comment,
        collegeId,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert(
        "Review added successfully!"
      );

      setUserName("");
      setRating(5);
      setComment("");

      window.location.reload();
    } else {
      alert(
        "Failed to add review"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-6 mt-8"
    >
      <h2 className="text-2xl font-bold mb-4">
        Add Review
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) =>
          setUserName(
            e.target.value
          )
        }
        className="w-full border rounded p-3 mb-4 text-black"
        required
      />

      <select
        value={rating}
        onChange={(e) =>
          setRating(
            Number(
              e.target.value
            )
          )
        }
        className="w-full border rounded p-3 mb-4 text-black"
      >
        <option value={1}>
          1 Star
        </option>
        <option value={2}>
          2 Stars
        </option>
        <option value={3}>
          3 Stars
        </option>
        <option value={4}>
          4 Stars
        </option>
        <option value={5}>
          5 Stars
        </option>
      </select>

      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) =>
          setComment(
            e.target.value
          )
        }
        className="w-full border rounded p-3 mb-4 text-black"
        rows={4}
        required
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Submit Review
      </button>
    </form>
  );
}