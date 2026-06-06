# 🎓 College Discovery Platform

A full-stack web application that helps students discover, compare, save, and review colleges based on various criteria such as location, ratings, fees, and placement statistics.

---

## 🚀 Features

### 🔐 Authentication

* User Signup
* User Login
* User Logout
* Protected routes for authenticated users

### 🏫 College Discovery

* View a list of colleges
* Search colleges by name
* Filter colleges by:

  * Location
  * Rating
  * Fees
* View detailed information about each college

### ⭐ Saved Colleges

* Save favorite colleges
* View all saved colleges
* Remove colleges from the saved list

### ⚖️ Compare Colleges

* Compare two colleges side-by-side
* Compare:

  * Location
  * Fees
  * Ratings
  * Average Package
  * Highest Package

### 📝 Reviews

* Add reviews for colleges
* View reviews from other users

### 🎨 User Interface

* Responsive design
* Modern UI using Tailwind CSS
* Loading states for improved user experience

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Prisma ORM

### Database

* PostgreSQL (Neon Database)

### Development Tools

* VS Code
* Git & GitHub

---

## 🗄️ Database Design

* Users can save multiple colleges
* Colleges can have multiple reviews
* Normalized relational structure implemented using Prisma ORM

---

## 📡 API Endpoints

### Authentication

* `POST /api/auth/register`
* `POST /api/auth/login`

### Colleges

* `GET /api/colleges`
* `GET /api/colleges/:id`
* `GET /api/compare`

### Saved Colleges

* `POST /api/save-college`
* `DELETE /api/save-college/:id`
* `GET /api/saved-colleges`

### Reviews

* `POST /api/reviews`
* `GET /api/reviews/:collegeId`

---

## 📂 Project Structure

```text
college-discovery-platform/
├── app/
│   ├── api/
│   ├── college/
│   ├── compare/
│   ├── login/
│   ├── signup/
│   ├── saved/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── prisma/
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd college-discovery-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="your_database_url"
```

### 4. Run Prisma Migrations

```bash
npx prisma migrate dev
```

### 5. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📸 Screenshots

### Home Page

![Home Page](./screenshots/home-page.png)

### Login Page

![Login Page](./screenshots/login-page.png)

### Signup Page

![Signup Page](./screenshots/signup-page.png)

### College Details Page

![College Details](./screenshots/college-details.png)

### Compare Colleges Page

![Compare Colleges](./screenshots/compare-page.png)

### Saved Colleges Page

![Saved Colleges](./screenshots/saved-colleges.png)

### Reviews Section

![Reviews](./screenshots/reviews-page.png)

---

## ✨ Key Highlights

* 🔎 Advanced search and filtering functionality
* ⭐ Save and manage favorite colleges
* ⚖️ Side-by-side college comparison
* 📝 College review system
* 🔐 Authentication and protected features
* 🗄️ Relational database design using Prisma ORM
* 📱 Responsive and user-friendly interface
* 🚀 Production-ready project architecture

---

## 🔮 Future Enhancements

* AI-based college recommendation system
* College ranking system
* Bookmark sharing between users
* Admin dashboard
* Review moderation system
* Email verification
* Deployment using Vercel and Neon

---

## 👨‍💻 Author

**Keerthi Kumar**

B.Tech Computer Science and Engineering Student

GitHub: https://github.com/KeerthiKumar03

LinkedIn: www.linkedin.com/in/keerthi-kumar-battipally-5b3b90322

---

## 📄 License

This project is developed for educational and learning purposes.
