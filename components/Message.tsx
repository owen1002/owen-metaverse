import React from "react"
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar"
import TimeAgo from "timeago-react"

function Message({ message }) {
  const { user } = useMoralis()

  const isMyMessage = message.get("ethAddress") === user.get("ethAddress")

  return (
    <div
      className={`flex flex-end space-x-2 relative ${
        isMyMessage && "justify-end"
      }`}
    >
      <div className={`relative g-8 w-8 ${isMyMessage && "order-last"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg bg-[#056162] ${
          isMyMessage ? "rounded-br-none" : "rounded-bl-none"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <TimeAgo
        datetime={message.createdAt}
        className={`text-[10px] text-gray-400 ${
          isMyMessage && "order-first pr-1"
        }`}
      />

      <p className="absolute -bottom-5 text-xs text-white">
        {message.get("username")}
      </p>
    </div>
  )
}

export default Message
