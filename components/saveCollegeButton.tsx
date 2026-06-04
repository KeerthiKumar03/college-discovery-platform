"use client";

export default function SaveCollegeButton({
  collegeId,
}: {
  collegeId: string;
}) {
  const saveCollege = async () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    if (!user.id) {
      alert("Please login first");
      return;
    }

    const res = await fetch("/api/save-college", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        collegeId,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("College saved!");
    } else {
      alert("Failed to save");
    }
  };

  return (
    <button
      onClick={saveCollege}
      className="bg-green-600 text-white px-4 py-2 rounded mt-4"
    >
      Save College
    </button>
  );
}