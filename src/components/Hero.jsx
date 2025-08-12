import React from 'react'
import HeroImage from '../assets/hero-image1.jpeg'
import { useTheme } from '../context/ThemeContext'

const Hero = () => {
  const { isDarkMode } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
         <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} text-center h-screen w-full flex flex-col items-center justify-center transition-colors duration-300`}>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Dheeraj</span>
            , Full-Stack Developer
        </h1>
        <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            onClick={scrollToContact}
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
  )
}

export default Hero