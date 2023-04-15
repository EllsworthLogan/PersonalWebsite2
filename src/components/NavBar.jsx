import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

  //Array containing link objects with two properties (to be used in navbar)
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'projects'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
        <div>
          <h1 className="font-signature text-5xl cursor-pointer hover:scale-105 hover:text-gray-500 duration-200">Logan</h1> 
        </div>
        <ul className='flex'>

          {/* Maps a link object to a list element*/}
          {links.map(link => (
            <li className="px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500  duration-200 capitalize">
              {link.link}
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default NavBar