import React from 'react'

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">   
            
            <div className="pb-5">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-10">I am currently a student who is studying web development and cyber security. My goal for my future career is to pursue web development and help the industry grow in a positive way.
            I enjoy solving problems, learning from other like minded people when it comes to designing and programming complex back-end and front-end.</p>
        <br />
        <p className="text-xl">
        I have completed a number of projects and challenges throughout this course and in my own personal time. Trying to learn a large array of technologies to stand out. It would be great if you could take to time to review my projects!    
        </p>
        
        </div>
    </div>
  )
}

export default About