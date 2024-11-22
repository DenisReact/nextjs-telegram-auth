"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@app/@/components/ui/button";
import { ITelegramUser } from "@app/types/ITelegramUser";

export default function ProtectedPage() {
  const [user, setUser] = React.useState<ITelegramUser | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const userStr = localStorage.getItem("telegramUser") || "";
    const userData: ITelegramUser = JSON.parse(userStr);

    if (!userData) {
      router.push("/login");
    }

    setUser(userData);
  }, [router]);

  const onLogout = () => {
    localStorage.removeItem("telegramUser");
    // Remove the cookie by setting its expiration date to a past date
    document.cookie = "https://oauth.telegram.org=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  if (!user) return null;

  console.log(user);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to the Protected Page!</h1>
      <p>Check user data in console</p>
      <Button className="uppercase" variant="default" onClick={onLogout}>
        logout
      </Button>
    </div>
  );
}
