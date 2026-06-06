import { prisma } from "@/lib/prisma";
import ReviewForm from "@/components/ReviewForm";
import SaveCollegeButton from "@/components/saveCollegeButton";

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
  include: {
    reviews: true,
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

<ReviewForm
  collegeId={college.id}
/>

<div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">
    Student Reviews
  </h2>

  {college.reviews.length ===
  0 ? (
    <p>
      No reviews yet.
    </p>
  ) : (
    <div className="space-y-4">
      {college.reviews.map(
        (review) => (
          <div
            key={review.id}
            className="border rounded-lg p-4"
          >
            <h3 className="font-bold">
              {
                review.userName
              }
            </h3>

            <p>
              ⭐
              {
                review.rating
              }
              /5
            </p>

            <p>
              {
                review.comment
              }
            </p>
          </div>
        )
      )}
    </div>
  )}
</div>
      <SaveCollegeButton collegeId={college.id} />
    </main>
  );
}