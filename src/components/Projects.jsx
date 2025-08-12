import React from "react";
import { useTheme } from '../context/ThemeContext'
import employeeMSImage from "../assets/portfolio.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Portfolio",
    technologies: "React.js",
    image: employeeMSImage,
    github: "https://github.com/Dheerajjaiswal63071/my-portfolio",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} py-20 transition-colors duration-300`} id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} p-6 rounded-lg hover:shadow-lg 
            transform transition-all duration-300 hover:scale-105`}>
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 transition-colors duration-300`}>{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;