import React from 'react'
import notetaker from '../assets/portfolio/notetaker.png'
import password from '../assets/portfolio/password.png'
import techblog from '../assets/portfolio/techblog.png'
import teamgenerator from '../assets/portfolio/teamgenerator.png'
import scheduler from '../assets/portfolio/scheduler.png'
import project2 from '../assets/portfolio/project2.png'

const Portfolio = () => {


    const portfolioArray = [
        {
            id: 1,
            src: notetaker,
            page: 'https://github.com/Focrult/Note-Taker'
        },
        {
            id: 2,
            src: password,
            page: 'https://github.com/Focrult/Random-Password-Generator'
        },
        {
            id: 3,
            src: techblog,
            page: 'https://github.com/Focrult/Tech-Blog'
        },
        {
            id: 4,
            src: project2,
            page: 'https://github.com/Focrult/Tech-Blog'
        },
        {
            id: 5,
            src: scheduler,
            page: 'https://github.com/Focrult/Work-Day-Scheduler'
        },
        {
            id: 6,
            src: teamgenerator,
            page: 'https://github.com/Focrult/Team-Profile-Generator'
        }
    ]
  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Here are more works so far!</p>
            </div>
            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portfolioArray.map(({id, src, page}) => (
                    

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/> 
                            <div className="flex items-center justify-center">
                                <a  rel="noreferrer" target="_blank" href={page} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Github Page</a>
                            </div>
                    </div>
    
                
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio