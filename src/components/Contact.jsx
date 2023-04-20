import React from 'react'
import {useState} from 'react';

const Contact = () => {
    

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const handleChange = event => {
    if (!validateEmail(event.target.value)) {
        setErrorMessage('Email is invalid');
    } else {
        setErrorMessage(null);
    }
    setEmail(event.target.value);
  };

  return (
    <div name='Contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className='pb-8 text-center'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                    Contact
                </p>
                <p className='py-6'>
                    Send me a message personally, and I will respond ASAP!
                </p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="mailto:focrult@gmail.com"  className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder='Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input id="email" value={email} onChange={handleChange}
                    type="text" name="email" placeholder='Email' 
                    className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    {errorMessage && <h3 style={{color: 'red'}}>{errorMessage}</h3>}
                    <textarea name="message" rows="10" placeholder="Start typing..." className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className=" text-white bg-gradient-to-b from-blue-500 to-blue-900 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact