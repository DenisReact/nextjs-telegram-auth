"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState<null | string>(null);
  const router = useRouter();

  // Hardcoded credentials
  const validUsername = "user";
  const validPassword = "password";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === validUsername && password === validPassword) {
      // auth simulation
      localStorage.setItem("authenticated", "true");
      router.push("/protected");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) setErrorMessage(null);
    setUsername(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) setErrorMessage(null);
    setPassword(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded-md w-96">
        <h1 className="text-xl font-semibold mb-4">Login</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 border w-full rounded"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border w-full rounded"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="submit" className="bg-blue-500 text-white mt-2 py-2 px-4 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}
