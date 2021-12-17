import Head from "next/head"
import Login from "../components/Login"
import { useMoralis } from "react-moralis"
import Header from "../components/Header"
import Messages from "../components/Messages"

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen bg-[#090e11] overflow-hidden">
      <Head>
        <title>Owen Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-x-screen-2xl mx-auto">
        {/* Header */}
        <Header />
        <Messages />
      </div>
      
    </div>
  )
}
