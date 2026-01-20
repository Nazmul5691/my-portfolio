import { useParams, Link, Navigate } from 'react-router';

import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projectData } from './data/projectData';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((p) => p.id === parseInt(id || '0'));

  // If project not found, redirect to home
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.name}
          </h1>
          <p className="text-gray-400 text-lg">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            <Github size={20} />
            View Repository
          </a>
          
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 hover:brightness-110 rounded-full transition-all"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.languages.map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-sm font-semibold"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Project Details Sections */}
        <div className="space-y-8">
          {/* Project Overview */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Project Overview
            </h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.projectOverview}
            </p>
          </div>

          {/* Tech Stack */}
          {project.techStack && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Tech Stack
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.techStack}
              </p>
            </div>
          )}

          {/* Authentication */}
          {project.authentication && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Authentication & Security
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.authentication}
              </p>
            </div>
          )}

          {/* Payment System */}
          {project.paymentSystem && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Payment System
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.paymentSystem}
              </p>
            </div>
          )}

          {/* Core Features */}
          {project.coreFeatures && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Core Features
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.coreFeatures}
              </p>
            </div>
          )}

          {/* Design & UI */}
          {project.designUI && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Design & UI
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.designUI}
              </p>
            </div>
          )}

          {/* Page Breakdowns */}
          {project.pageBreakdowns && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Page Breakdowns
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.pageBreakdowns}
              </p>
            </div>
          )}

          {/* Performance & Hosting */}
          {project.performanceHosting && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Performance & Hosting
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.performanceHosting}
              </p>
            </div>
          )}

          {/* Folder Structure */}
          {project.folderStructure && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Folder Structure
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.folderStructure}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;