"use client";

import React from "react";
import { ITelegramUser } from "@app/types/ITelegramUser";
import { useRouter } from "next/navigation";
import TelegramLoginButton from "@app/components/telegram-login-button";

export default function LoginForm() {
  const router = useRouter();

  const handleBot = (user: ITelegramUser) => {
    console.log(user);
    // store info
    localStorage.setItem("telegramUser", JSON.stringify(user));
    router.push("/protected");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="p-6 bg-white shadow-md rounded-md w-96">
        <h1 className="text-xl font-semibold mb-4">Login</h1>
        <p className="text-sm mb-4">Connect your telegram to start using this app</p>
        <div id="telegramButton" className="flex justify-center text-center">
          <TelegramLoginButton
            dataOnauth={handleBot}
            botName="react_next_login_bot"
            widgetVersion="22"
            usePic
          />
        </div>
      </div>
    </div>
  );
}
