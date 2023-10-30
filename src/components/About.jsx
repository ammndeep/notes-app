import React from 'react';
import SidePic from '../assets/side.png';

const About = () => {
  return (
    <div className="flex place-items-start gap-10 justify-center h-screen">
      <div className="text-center px-5 py-5 mt-20">
        <h1 className="text-4xl font-bold ">About My Project</h1>
        <p className="text-lg text-gray-700 mb-8 mt-5">
          This is a Basic Notes Keeping Web App. I Built this in React JS. <br/>
          For Storing Notes I used localStorage.
        </p>
        <div className=" mt-3 ">
        <a
          href="https://github.com/ammndeep/notes-app"
          className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
        >
          Source Code 📝
        </a>
      </div>
      </div>

      <div className='mt-10'>
        <img src={SidePic} alt="ScreenShot" className='w-60 shadow-2xl rounded-md'/>
      </div>
    </div>
  );
};

export default About;
