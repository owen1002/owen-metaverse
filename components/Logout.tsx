import React from "react"
import { useMoralis } from "react-moralis"
import { LogoutIcon } from "@heroicons/react/outline"

function Logout() {
  const { logout } = useMoralis()
  return (
    <button
      onClick={logout}
      className="text-white hover:bg-slate-100 hover:text-black active:opacity-30 rounded-lg p-2 mx-4 flex justify-center items-center text-xl"
    >
      <LogoutIcon className="h-6 w-6 mr-2" />
      Logout
    </button>
  )
}

export default Logout
