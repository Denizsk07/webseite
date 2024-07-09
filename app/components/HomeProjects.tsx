'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  youtube_link: string;
};

export default function HomeProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects?limit=4')  // Fetch only 2 projects for the homepage
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="mt-20 mb-20 container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Meine Projekte</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.image && <img src={project.image} alt={project.title} className="mt-2 rounded-md w-full max-w-xs mx-auto" />}
            </div>
            <div>
              {project.youtube_link && 
                <Link 
                  href={project.youtube_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-teal-400 hover:text-teal-600 mt-2 block"
                >
                  Zum Projekt
                </Link>
              }
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/projects"
          className="px-4 py-2 bg-teal-400 text-black font-bold rounded-full hover:bg-teal-500 transition-all duration-300">
            Mehr Projekte
        </Link>
      </div>
    </div>
  );
}
