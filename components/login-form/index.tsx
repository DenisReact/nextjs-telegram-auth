"use client";

import React from "react";
import { ITelegramUser } from "@app/types/ITelegramUser";
import { useRouter } from "next/navigation";
import TelegramLoginButton from "@app/components/telegram-login-button";

export default function LoginForm() {
  const router = useRouter();

  const handleBot = (user: ITelegramUser) => {
    console.log(user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-md w-96">
        <h1 className="text-xl font-semibold mb-4">Login</h1>
        <p>Connect your telegram to start using this app</p>
        <div id="telegramButton">
          <TelegramLoginButton dataOnauth={handleBot} botName="react_next_login_bot" widgetVersion="22" />
        </div>
      </div>
    </div>
  );
}
