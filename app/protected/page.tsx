"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@app/@/components/ui/button";

export default function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const auth = localStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const onLogout = () => {
    localStorage.removeItem("authenticated");
    router.push("/login");
  };

  if (!isAuthenticated) return null; // Show nothing until authentication is verified

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to the Protected Page!</h1>
      <Button className="uppercase" variant="default" onClick={onLogout}>
        logout
      </Button>
    </div>
  );
}
