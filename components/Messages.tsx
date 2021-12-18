import React from "react"
import { useMoralis, useMoralisQuery } from "react-moralis"
import Message from "./Message"
import SendMessage from "./SendMessage"

const DURATION = 15

function Messages() {
  const endOfMessageRef = React.useRef(null)

  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * DURATION)),
    [],
    {
      live: true,
    }
  )

  return (
    <div className="pb-56">
      <div className="space-y-5 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
      </div>
    </div>
  )
}

export default Messages
