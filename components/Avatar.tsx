import React from "react"
import Image from "next/image"
import { useMoralis } from "react-moralis"

function Avatar({username=""}) {
  const { user } = useMoralis()

  return (
    <Image
      src={`https://avatars.dicebear.com/api/avataaars/${username || user.get('ethAddress')}.svg`}
      layout="fill"
      className="rounded-full"
    />
  )
}

export default Avatar
