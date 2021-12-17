import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import React from "react"
import { useMoralis } from "react-moralis"

function SendMessage({ endOfMessageRef }) {
  const [message, setMessage] = React.useState("")

  const { Moralis, user } = useMoralis()
  const sendMessage = (e) => {
    e.preventDefault()
    if (message === "") return

    const Messages = Moralis.Object.extend("Messages")
    const messages = new Messages()

    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message)
        }
      )
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" })
    setMessage("");
  }

  return (
    <div className="w-full bg-[#131c21] flex justify-center fixed bottom-20 py-2">
      <form className="flex w-11/12 bottom-10 bg-black opacity-80 px-6 py-2 max-w-2xl shadow-xl rounded-full items-center">
        <input
          type="text"
          className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} type="submit">
          <ArrowCircleRightIcon className="h-8 w-8 text-blue-400  rounded-full" />
        </button>
      </form>
    </div>
  )
}

export default SendMessage
