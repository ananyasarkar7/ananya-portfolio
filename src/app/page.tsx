import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

const portfolioConfig = require('../../portfolio.config.js');

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string | null;
  github: string;
}

export default function Home() {
  // Get first 2 projects for featured section
  const featuredProjects = portfolioConfig.projects.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-soft-900 mb-6">
              Hi, I'm {portfolioConfig.name} 👋
            </h1>
            <p className="text-xl sm:text-2xl text-soft-600 mb-8 max-w-3xl mx-auto">
              {portfolioConfig.bio}
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {portfolioConfig.socials.map((social: { name: string; url: string }) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-600 hover:text-primary-600 transition-colors"
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.name === 'GitHub' && (
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {social.name === 'LinkedIn' && (
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {social.name === 'Twitter' && (
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link
              href="/projects"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-soft-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-soft-600 max-w-2xl mx-auto">
              Here are the technologies I'm currently working with and learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(portfolioConfig.skills).map(([category, skills]) => (
              <div key={category} className="bg-soft-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-heading font-semibold text-soft-900 mb-4">
                  {category}
                </h3>
                <div className="space-y-2">
                  {(skills as string[]).map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white px-3 py-2 rounded-lg text-sm text-soft-700 border border-soft-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-soft-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-soft-600 max-w-2xl mx-auto">
              Here are some of my recent projects that I'm most proud of
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project: Project, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-600 hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
