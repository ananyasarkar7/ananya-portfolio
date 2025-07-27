
const portfolioConfig = require('../../../portfolio.config.js');

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-soft-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-soft-600 max-w-2xl mx-auto">
            Get to know me a little better - my journey, passions, and what drives me in tech
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Picture Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 text-center sticky top-24">
              {/* Placeholder for profile picture */}
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
              <h2 className="text-2xl font-heading font-bold text-soft-900 mb-2">
                {portfolioConfig.name}
              </h2>
              <p className="text-soft-600 mb-4">
                📍 {portfolioConfig.location}
              </p>
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Story */}
            <div className="bg-white rounded-xl shadow-sm border border-soft-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-soft-900 mb-6">
                My Journey into Tech
              </h3>
              <div className="prose prose-lg text-soft-600 space-y-4">
                <p>
                  Hi there! I'm a first-year Computer Science student who discovered my passion for technology 
                  through a combination of curiosity and the desire to create something meaningful. My journey 
                  began when I built my first website in high school and was amazed by how code could bring 
                  ideas to life on the screen.
                </p>
                <p>
                  What excites me most about programming is the problem-solving aspect - breaking down complex 
                  challenges into smaller, manageable pieces and finding elegant solutions. I'm particularly 
                  drawn to front-end development because I love the intersection of technical skills and 
                  creative design.
                </p>
                <p>
                  As someone new to the field, I'm constantly learning and pushing myself to grow. Every 
                  project is an opportunity to discover something new, whether it's a JavaScript concept, 
                  a design principle, or a better way to structure my code.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-sm border border-soft-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-soft-900 mb-6">
                Education
              </h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-soft-900">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-soft-600 mb-2">
                    University of Mumbai • First Year Student
                  </p>
                  <p className="text-sm text-soft-500">
                    Currently studying core CS fundamentals including programming, 
                    data structures, algorithms, and web development.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills & Learning */}
            <div className="bg-white rounded-xl shadow-sm border border-soft-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-soft-900 mb-6">
                Current Focus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-soft-900 mb-3">
                    🎯 Currently Learning
                  </h4>
                  <div className="space-y-2">
                    {portfolioConfig.skills['Currently Learning'].map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="bg-accent-50 text-accent-700 px-3 py-2 rounded-lg text-sm border border-accent-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-soft-900 mb-3">
                    💪 Strengthening
                  </h4>
                  <div className="space-y-2">
                    {portfolioConfig.skills['Languages'].slice(0, 2).map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="bg-secondary-50 text-secondary-700 px-3 py-2 rounded-lg text-sm border border-secondary-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outside of Code */}
            <div className="bg-white rounded-xl shadow-sm border border-soft-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-soft-900 mb-6">
                Outside of Code
              </h3>
              <div className="prose prose-lg text-soft-600 space-y-4">
                <p>
                  When I'm not coding, you can find me exploring design trends on Pinterest, 
                  sketching in my notebook, or reading about the latest tech innovations. 
                  I'm also passionate about photography and love capturing the vibrant life 
                  of Mumbai through my lens.
                </p>
                <p>
                  I believe in the importance of work-life balance and enjoy spending time 
                  with friends, trying new cafes around the city, and staying active with 
                  yoga and weekend hikes. These experiences outside of tech help me bring 
                  fresh perspectives to my projects.
                </p>
              </div>
              
              {/* Fun Facts */}
              <div className="mt-6 bg-soft-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-soft-900 mb-3">Fun Facts About Me</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-soft-600">
                  <div className="flex items-center space-x-2">
                    <span>☕</span>
                    <span>Coffee enthusiast (3 cups/day minimum)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📸</span>
                    <span>Photography hobbyist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🎨</span>
                    <span>Figma addict and design lover</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🧘‍♀️</span>
                    <span>Morning yoga practitioner</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-soft-900 mb-4">
                Let's Connect!
              </h3>
              <p className="text-soft-600 mb-6">
                I'm always excited to meet new people and collaborate on interesting projects. 
                Feel free to reach out if you'd like to chat about tech, design, or anything else!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors"
                >
                  Send me an email
                </a>
                <a
                  href={portfolioConfig.socials.find((s: { name: string; url: string }) => s.name === 'LinkedIn')?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}