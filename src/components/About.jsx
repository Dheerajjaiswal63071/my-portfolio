import React from "react";
import AboutImage from "../assets/hero-image1.jpeg";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} min-h-screen w-full flex items-center justify-center transition-colors duration-300`} id="about">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-96 rounded object-cover mb-6 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-6">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            
            {/* Programming Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>Java</span>
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>JavaScript</span>
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>SQL</span>
              </div>
            </div>

            {/* Core Concepts */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Core Concepts
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>DSA</span>
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>OOP</span>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>Git</span>
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>GitHub</span>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Databases
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>MySQL</span>
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>MongoDB</span>
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>Firebase</span>
              </div>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Others
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}>EmailJS</span>
              </div>
            </div>

            <div className="mt-8 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        3+
                    </h3>
                    <p>Years Experience</p>
                </div>
                                 <div>
                   <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                     50+
                   </h3>
                    <p>Projects Completed</p>
                </div>
                                 <div>
                   <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                     10+
                   </h3>
                    <p>Happy Clients</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;