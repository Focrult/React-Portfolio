import React from "react";
import { Link } from 'react-scroll';

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'About',
        },
        {
            id: 3,
            link: 'Portfolio',
        },
        {
            id: 4,
            link: 'Resume',
        },
        {
            id: 5,
            link: 'Contact',
        },
    ];


  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
    <div>
        
        </div>
        <ul className="flex">

            {links.map(({id,link}) => (
            <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
               <Link to={link} smooth duration={500}>{link}</Link>
            </li>

            ))}
        </ul>
    </div>
  );
};

export default NavBar