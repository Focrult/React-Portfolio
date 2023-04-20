import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/aedan-m-023489273/',
        },
        {
            id: 2,
            child: (
                <>
                <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Focrult',
        },
        {
            id: 3,
            child: (
                <>
                <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:focrult@gmail.com',
        }
    ]


  return (
    <div className="flex justify-center bottom-0 fixed">
       <ul>

        {links.map(({id, child, href, style}) => (
        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4"  + " " + style}>
        <a href={href} className="flex justify-between items-center w-full text-white">
            
                {child}
            </a>
        </li>
        ))}
        </ul> 
    </div>
  )
}

export default SocialLinks