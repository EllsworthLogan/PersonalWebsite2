import React from 'react'
import me from '/Users/logan/Desktop/untitled folder 2/logansite/src/images/portrait.jpg'
import {BsArrowRightSquare} from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='text-white'>
                <h2>
                    I'm a Computer Science student at Iowa State University
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero cupiditate quasi, ipsam reiciendis exercitationem voluptatum, doloribus veritatis eum esse hic, dolore dolores commodi autem blanditiis omnis ipsa facilis. Modi, aliquid!
                </p>
            </div>
            <div>
                <button>
                    Projects
                    <span>
                    <BsArrowRightSquare />
                    </span>
                </button>
            </div>
            <div>
                <img src={me} alt="me" className='rounded-2xl mx-auto w-1/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home