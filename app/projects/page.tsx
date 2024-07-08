'use client';

import { useState, useEffect } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  youtube_link: string;
  category: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const categorizedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center text-white mb-12">Projekte</h1>
      {Object.keys(categorizedProjects).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">{category}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorizedProjects[category].map((project) => (
              <li key={project.id} className="bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-teal-300 mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.image && <img src={project.image} alt={project.title} className="mb-4 rounded-md w-full max-w-xs mx-auto" />}
                {project.youtube_link && 
                  <a 
                    href={project.youtube_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-indigo-400 hover:text-indigo-600 mt-2 block"
                  >
                    Zum Projekt
                  </a>
                }
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
