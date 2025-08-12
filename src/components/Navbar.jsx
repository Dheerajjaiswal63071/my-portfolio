import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} px-8 md:px-16 lg:px-24 w-full fixed top-0 left-0 z-50 transition-colors duration-300 shadow-lg`}>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Dheeraj</div>
            <div className='space-x-6'>
                <a href="#home" className={`hover:${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Home</a>
                <a href="#about" className={`hover:${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>About Me</a>
                <a href="#service" className={`hover:${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Services</a>
                <a href="#tech-stack" className={`hover:${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Tech Stack</a>
                <a href="#project" className={`hover:${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Projects</a>
                <a href="#contact" className={`hover:${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <button 
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-colors duration-300 ${
                        isDarkMode 
                            ? 'bg-gray-800 text-white hover:bg-gray-700' 
                            : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
                <button
                onClick={scrollToContact}
                 className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar