import ProjectCard from "../../components/ProjectCard";

const portfolioConfig = require('../../../portfolio.config.js');

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string | null;
  github: string;
}

export default function Projects() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-soft-900 mb-6">
            My Work
          </h1>
          <p className="text-xl text-soft-600 max-w-3xl mx-auto">
            Here's a collection of projects I've been working on. Each one represents a step in my learning journey 
            and showcases different skills I've been developing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioConfig.projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-soft-900 mb-4">
            More Projects Coming Soon!
          </h2>
          <p className="text-soft-600 mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects and learning new technologies. 
            Follow my GitHub to see what I'm building next, or reach out if you'd like to collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={portfolioConfig.socials.find((s: { name: string; url: string }) => s.name === 'GitHub')?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-soft-900 text-white px-6 py-3 rounded-full font-medium hover:bg-soft-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View GitHub Profile
            </a>
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-colors"
            >
              Let's Collaborate
            </a>
          </div>
        </div>

        {/* Skills Used Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-heading font-bold text-soft-900 text-center mb-8">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ...portfolioConfig.skills['Languages'],
              ...portfolioConfig.skills['Frameworks & Libraries'],
              ...portfolioConfig.skills['Tools & Platforms']
            ].map((skill: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-soft-200 rounded-full text-sm font-medium text-soft-700 hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}