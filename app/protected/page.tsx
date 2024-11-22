"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ITelegramUser } from "@app/types/ITelegramUser";
import Image from "next/image";
import LogoImage from "@app/public/globe.svg"; // change to your logo

export default function ProtectedPage() {
  const [user, setUser] = React.useState<ITelegramUser | null>(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const userStr = localStorage.getItem("telegramUser") || "";
    let userData: ITelegramUser | null = null;

    if (userStr) {
      try {
        userData = JSON.parse(userStr);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      if (!userData) {
        router.push("/login");
      }

      setUser(userData);
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen animate-pulse">
        <Image src={LogoImage} alt="Loading..." width={60} height={60} className="shadow-sm rounded-full" />
      </div>
    );
  }

  if (!user) return <h2 className="text-xl">Failed to load user data</h2>;

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to the Protected Page!</h1>
      <p>Username: {user.username}</p>
    </div>
  );
}
