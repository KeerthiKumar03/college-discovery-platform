📚 College Discovery Platform

A full-stack web application that helps students discover, compare, and save colleges using advanced search, filtering, authentication, and personalized features.

Built with Next.js 15, TypeScript, Prisma, PostgreSQL, and TailwindCSS, this project focuses on scalable architecture, clean API design, and real-world product thinking.

📌 Features
🔍 1. College Listing + Advanced Search
Search colleges by name or keyword
Filter by:
📍 Location
💰 Fees range
⭐ Rating
Pagination support (?page=1&limit=10)
Optimized database queries using Prisma findMany()
🎓 2. College Detail Page

Each college page shows:

College overview
Courses offered:
CSE
ECE
IT
Placement details:
Average package
Highest package
Student reviews and ratings
⚖️ 3. College Comparison System

Compare 2–3 colleges side-by-side in a structured table:

Feature	College A	College B	College C
Fees	✔	✔	✔
Avg Package	✔	✔	✔
Rating	✔	✔	✔
Helps students make data-driven decisions
Clean and intuitive UI for better comparison
🔐 4. Authentication + Saved Colleges
User registration and login
JWT / session-based authentication
Save or remove colleges
View personalized saved list
Protected APIs for user-specific data
🛠️ Tech Stack
Frontend
Next.js 15 (App Router)
React + TypeScript
TailwindCSS
Shadcn UI
TanStack Query
Backend
Next.js API Routes
Prisma ORM
PostgreSQL (Neon)
Zod validation
Authentication
JWT / NextAuth (based on implementation)
🗄️ Database Schema Overview

Main entities:

User
College
Course
Review
SavedCollege

Relationships:

Users can save multiple colleges
Colleges have multiple courses and reviews
Normalized relational structure using Prisma ORM
📡 API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
Colleges
GET /api/colleges
GET /api/colleges/:id
GET /api/colleges/search
GET /api/compare
Saved Colleges
POST   /api/save
DELETE /api/save/:id
GET    /api/save
📂 Folder Structure
src/
 ├── app/              # Pages (Next.js App Router)
 ├── components/
 │     ├── college/
 │     ├── compare/
 │     ├── filters/
 │     └── shared/
 ├── lib/
 │     ├── prisma.ts
 │     ├── auth.ts
 │     └── validations.ts
 ├── services/
 ├── hooks/
 ├── types/
 ├── actions/
 └── app/api/
✨ Key Highlights
🔎 Advanced search & filtering with Prisma
⚡ Pagination for performance optimization
🔐 Secure authentication system
📊 Real-time college comparison feature
🧠 Clean modular architecture
🚀 Production-ready backend design (even without deployment)
🎯 Future Improvements
AI-based college recommendation system
Bookmark sharing between users
College ranking system
Admin dashboard
Review moderation system
Deployment (Vercel + Neon)
👨‍💻 Author
Name: Your Name
GitHub: https://github.com/your-username
LinkedIn: https://linkedin.com/in/your-profile
📄 License

This project is open-source and available under the MIT License.

🔥 Important Tip (for placements)

Even without deployment, you can say:

“This is a full-stack production-level system with authentication, relational DB design, and optimized API routes. Deployment is pending, but the system is fully functional locally.”

That actually sounds strong in interviews.