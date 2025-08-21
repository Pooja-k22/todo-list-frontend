import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate= useNavigate()

  const logout= ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    navigate('/')
  }
  return (
   <>
    {/* Header */}
      <header className="bg-purple-900 sticky top-0 z-10 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">🍁TODO </h1>
        <button
          onClick={logout}
          className="bg-[#2a0a2a] px-4 py-2 rounded-full hover:bg-white hover:text-black"
        >
          Logout
        </button>
      </header>
   </>
  )
}

export default Header