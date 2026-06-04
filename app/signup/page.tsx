"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  async function handleSignup(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch(
      "/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("Signup Successful");
      router.push("/login");
    } else {
      alert(data.message);
    }
  }

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Signup
      </h1>

      <form
        onSubmit={handleSignup}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="border p-3 w-full rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-3 w-full rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="border p-3 w-full rounded"
        />

        <button
          className="bg-black text-white px-4 py-3 rounded w-full"
        >
          Signup
        </button>
      </form>
    </main>
  );
}