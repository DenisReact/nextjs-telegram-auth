import { ITelegramUser } from "@app/types/ITelegramUser";
import React, { useEffect, useRef } from "react";

interface TelegramLoginButtonProps {
  botName: string;
  buttonSize?: string;
  cornerRadius?: number;
  requestAccess?: string;
  usePic?: boolean;
  dataOnauth: (user: ITelegramUser) => void;
  dataAuthUrl?: string;
  lang?: string;
  widgetVersion: string;
}

const TelegramLoginButton: React.FC<TelegramLoginButtonProps> = ({
  botName,
  buttonSize,
  cornerRadius,
  requestAccess,
  usePic,
  dataOnauth,
  dataAuthUrl,
  lang,
  widgetVersion,
}) => {
  const instance = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.TelegramLoginWidget = {
      dataOnauth: (user) => dataOnauth(user),
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?" + widgetVersion;
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", buttonSize || "");
    if (cornerRadius !== undefined) {
      script.setAttribute("data-radius", cornerRadius.toString());
    }
    script.setAttribute("data-request-access", requestAccess || "");
    script.setAttribute("data-userpic", usePic ? "true" : "false");
    script.setAttribute("data-lang", lang || "");
    if (dataAuthUrl !== undefined) {
      script.setAttribute("data-auth-url", dataAuthUrl);
    } else {
      script.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)");
    }
    script.async = true;
    if (instance.current) {
      instance.current.appendChild(script);
    }
  }, [
    botName,
    buttonSize,
    cornerRadius,
    requestAccess,
    usePic,
    dataOnauth,
    dataAuthUrl,
    lang,
    widgetVersion,
  ]);

  return <div ref={instance}></div>;
};

export default TelegramLoginButton;
