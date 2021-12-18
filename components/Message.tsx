import React from "react"
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar"
import TimeAgo from "timeago-react"
import { getUsernameColor } from "../lib/getUsernameColor"

function Message({ message }) {
  const { user } = useMoralis()

  const isMyMessage = message.get("ethAddress") === user.get("ethAddress")

  return (
    <div
      className={`space-x-2 flex  ${isMyMessage && "justify-end"}`}
    >
      <div className={`flex items-center `}>
        <div className={`relative h-8 w-8 ${isMyMessage && "order-last ml-2"}`}>
          <Avatar username={message.get("ethAddress")} />
        </div>
        <div
          className={`flex flex-col px-4 py-2 rounded-lg bg-gray-800 text-white ${
            isMyMessage ? "rounded-br-none" : "rounded-bl-none"
          }`}
        >
          <p
            className={`flex text-xs font-bold ${
              isMyMessage ? "justify-end" : "justify-start"
            } text-[${getUsernameColor(message.get("ethAddress"))}]`}
          >
            {message.get("username")}
          </p>
          <p
            className={`flex text-sm ${
              isMyMessage ? "justify-end" : "justify-start"
            }`}
          >
            {message.get("message")}
          </p>
        </div>
      </div>

      <div className={`${isMyMessage && "order-first pr-2"} flex items-end`}>
        <TimeAgo
          datetime={message.createdAt}
          className={`text-[10px] text-gray-400 `}
        />
      </div>
    </div>
  )
}

export default Message
