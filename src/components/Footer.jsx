import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-800 text-white'} py-8 transition-colors duration-300`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Dheeraj</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-300'} transition-colors duration-300`}>
              Full-Stack Developer, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className={`w-full p-2 rounded-l-lg border focus:outline-none focus:border-green-400 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-white' 
                    : 'bg-gray-700 border-gray-500 text-white'
                }`}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className={`border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-600'} pt-4 flex flex-col md:flex-row 
          justify-between items-center transition-colors duration-300`}
        >
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-300'} transition-colors duration-300`}>
            &copy; {new Date().getFullYear()} Dheeraj. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
              <FaFacebook />
            </a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
              <FaTwitter />
            </a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/Dheerajjaiswal63071" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
              Privacy
            </a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;