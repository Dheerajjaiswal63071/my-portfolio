import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { 
  FaReact, 
  FaNodeJs
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiMysql,
  SiFirebase,
  SiNextdotjs
} from 'react-icons/si'

const TechStack = () => {
  const { isDarkMode } = useTheme();
  
  const technologies = [
    // Frontend
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    
    // Backend
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300' },
    
    // Database
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' }
  ]

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} py-20 transition-colors duration-300`} id="tech-stack">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-4">Tech Stack</h2>
        <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-16 max-w-3xl mx-auto transition-colors duration-300`}>
          The tools and technologies I use to build modern, scalable, and beautiful web applications.
        </p>
        
        {/* Dashed border container */}
        <div className={`border-2 border-dashed ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-2xl p-8 md:p-12 transition-colors duration-300`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {technologies.map((tech) => {
              const IconComponent = tech.icon
              return (
                <div
                  key={tech.name}
                  className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <IconComponent 
                      className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
