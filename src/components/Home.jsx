import React from 'react'
import HeroImg from '../assets/avatar.gif'


const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Welcome to,
                
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-950 relative inline-block">
                <span class="relative text-white">My React Portfolio</span>
                </span></h2>
                <br></br>
                <p className='text-gray-500 py-4 max-w-md'>
                    Hello, my name is Aedan and welcome to my React Portfolio.
                    Here is a little about me, I am student who is eager to become a full-stack developer. I have a great understanding of the technologies that are available, however, always
                    aspire to build on top of what I know and more. 
                </p>
                <p className='text-gray-500 py-4 max-w-md'>Read through my portfolio to find out more about me!<br/><br/>Hope to hear from you!</p>
            </div>
            <div>
                <img src={HeroImg} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"></img>
            </div>
        </div>
    </div>
  )
}

export default Home