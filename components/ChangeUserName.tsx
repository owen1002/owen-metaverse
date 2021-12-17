import React from "react"
import { PencilAltIcon } from "@heroicons/react/outline"
import { useMoralis } from "react-moralis"

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()

  const setUserName = () => {
    const username = prompt(`New Username: `)
    if (!username) return;
    setUserData({ username })
  }

  return (
    <button
      disabled={isUserUpdating}
      onClick={setUserName}
      className="text-white hover:bg-slate-100 hover:text-black active:opacity-30 rounded-lg p-1 mx-2 flex justify-center items-center"
    >
      <PencilAltIcon className="h-6 w-6" />
    </button>
  )
}

export default ChangeUserName
