import { prisma } from "@/lib/prisma";
import SaveCollegeButton from "../../../components/saveCollegeButton";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          College not found
        </h1>
      </div>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p className="mb-2">
        📍 {college.location}
      </p>

      <p className="mb-2">
        ⭐ Rating: {college.rating}
      </p>

      <p className="mb-2">
        💰 Fees: ₹{college.fees.toLocaleString()}
      </p>

      <p className="mb-2">
        📈 Average Package: ₹
        {college.avgPackage.toLocaleString()}
      </p>

      <p className="mb-4">
        🚀 Highest Package: ₹
        {college.highestPackage.toLocaleString()}
      </p>

      <div className="border rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-2">
          Overview
        </h2>

        <p>{college.overview}</p>
      </div>

      <SaveCollegeButton collegeId={college.id} />
    </main>
  );
}