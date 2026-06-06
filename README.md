# 🎓 College Discovery Platform

A full-stack web application that helps students discover, compare, save, and review colleges based on various criteria such as location, ratings, fees, and placement statistics.

## 🚀 Features

### 🔐 Authentication

* User Signup
* User Login
* User Logout
* Protected routes for saved colleges

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
* Remove colleges from saved list

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
* Loading states for better user experience

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

* PostgreSQL / SQLite (depending on your setup)

### Development Tools

* VS Code
* Git & GitHub

---

## 📂 Project Structure

```
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

### 1. Clone the repository

```bash
git clone <repository-url>
cd college-discovery-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="your_database_url"
```

### 4. Run Prisma migrations

```bash
npx prisma migrate dev
```

### 5. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
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
![College Details](./screenshots/compare-page.png)

### Compare Colleges Page
![Compare Colleges](./screenshots/reviews-page.png)

### Saved Colleges Page
![Saved Colleges](./screenshots/saved-colleges.png)

## 🔮 Future Enhancements

* College recommendation system
* Advanced filtering options
* User profiles
* Email verification
* College ranking charts
* AI-based college suggestions

---

## 👨‍💻 Author

**Keerthi Kumar**

B.Tech CSE Student

---

## 📄 License

This project is developed for educational purposes.
