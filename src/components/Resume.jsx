import React from 'react'
import resume from '../assets/Resume.pdf'
//import resumeDownload from '../assets/resume'
const Resume = () => {

    return (
    <div name="Resume" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Resume</p>
                </div>
                <a href={resume} download className="cursor-pointer hover:underline font-medium text-gray-500">Download Resume Here</a>

            <div className="pb-8">
                <p className="text-2xl font-bold inline">Front-End Proficiencies</p>
                <ul className="pt-3">
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>HTML</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>CSS</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>JavaScript</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>Responsive Design</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>React</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>Bootstrap</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>TailwindCSS</li>
                </ul>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold inline">Back-End Proficiencie</p>
                <ul className="pt-3">
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>APIs</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>Node</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>Express</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>MySQL, Sequelize</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>MongoDB, Mongoose</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>REST</li>
                <li><i class="text-white fa-solid fa-arrow-right pr-3"></i>GraphQL</li>
                </ul>
            </div>
      
        </div>
    </div>
  )
}

export default Resume