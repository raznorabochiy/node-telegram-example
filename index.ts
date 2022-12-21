import fetch from "node-fetch";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "./constants";

function sendTelegram(text: string) {
  const body = {
    chat_id: TELEGRAM_CHAT_ID,
    text,
    parse_mode: "markdown",
  };

  return fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
}

await sendTelegram("First message");
await sendTelegram("Second message _with_ *Markdown*");
