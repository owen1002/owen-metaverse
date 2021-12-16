import React from "react"
import Image from "next/image"
import { useMoralis } from "react-moralis"
import Background from "../public/images/Background.jpg"

function Login() {
  const { authenticate, isAuthenticating } = useMoralis()

  return (
    <div className="relative h-screen">
      <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-4">
        <div className="text-9xl bg-gradient-to-b from-red-300 to-orange-50 rounded-full h-60 w-60 flex justify-center items-center mb-4 hover:cursor-default">
          OS
        </div>
        <button
          className="bg-fuchsia-100 hover:bg-fuchsia-200 rounded-2xl p-5 font-bold shadow-md text-2xl w-56 flex justify-center items-center"
          onClick={() => authenticate()}
          disabled={isAuthenticating}
        >
          {isAuthenticating && (
            <div className="animate-spin rounded-full h-5 w-5 border-r-2 mr-3 border-black" />
          )}
          Enter App
        </button>
      </div>
      <div className="w-full h-full relative">
        <Image
          src={Background}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  )
}

export default Login
