'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  youtube_link: string;
  createdAt: string; // Hinzugefügt, um das Erstellungsdatum zu speichern
};

export default function HomeProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects?limit=4')  // Fetch only 4 projects for the homepage
      .then((res) => res.json())
      .then((data) => {
        // Projekte nach Erstellungsdatum sortieren
        const sortedProjects = data.sort((a: Project, b: Project) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setProjects(sortedProjects);
      });
  }, []);

  return (
    <div className="mt-20 mb-20 container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Meine Projekte</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl shadow-2xl border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div>
              <h3 className="text-lg font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-blue-200 mb-4 leading-relaxed">{project.description}</p>
              {project.image && <img src={project.image} alt={project.title} className="mt-2 rounded-lg w-full max-w-xs mx-auto shadow-lg" />}
            </div>
            <div>
              {project.youtube_link && 
                <Link 
                  href={project.youtube_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 mt-2 block font-medium transition-colors duration-300"
                >
                  Zum Projekt
                </Link>
              }
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/projects"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Mehr Projekte
        </Link>
      </div>
    </div>
  );
}
