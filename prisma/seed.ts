import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "CVR College of Engineering",
        location: "Hyderabad",
        fees: 140000,
        rating: 4.3,
        overview: "Top engineering college in Hyderabad",
        avgPackage: 650000,
        highestPackage: 4400000,
      },
      {
        name: "CBIT",
        location: "Hyderabad",
        fees: 150000,
        rating: 4.5,
        overview: "One of the best private colleges",
        avgPackage: 700000,
        highestPackage: 5200000,
      },
      {
        name: "VNR VJIET",
        location: "Hyderabad",
        fees: 155000,
        rating: 4.6,
        overview: "Excellent placements and academics",
        avgPackage: 800000,
        highestPackage: 5400000,
      },
      {
        name: "MREC",
        location: "Hyderabad",
        fees: 120000,
        rating: 4.1,
        overview: "Growing engineering institution",
        avgPackage: 500000,
        highestPackage: 1800000,
      }
    ],
  });

  console.log("Seeded successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());