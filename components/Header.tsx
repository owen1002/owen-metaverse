import React from "react"
import { useMoralis } from "react-moralis"
import Logout from "./Logout"
import Avatar from "./Avatar"
import ChangeUserName from "./ChangeUserName"

function Header() {
  const { user } = useMoralis()

  return (
    <div className="text-white bg-[#131c21]">
      <div className="flex justify-between items-center h-20 px-4">
        <div className="flex justify-between items-center">
          <div className="h-16 w-16 relative rounded-full border-sky-200 border-2">
            <Avatar />
          </div>
          <div className="ml-4 text-2xl truncate flex items-center">
            {user.getUsername()}
            <ChangeUserName />
          </div>
        </div>
        <div>
          <div>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
