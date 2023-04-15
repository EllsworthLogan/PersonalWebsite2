import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 fixed">
      <div>
        <h1 className="text-5xl font-signature">Logan</h1>
      </div>
    </div>
  )
}

export default NavBar