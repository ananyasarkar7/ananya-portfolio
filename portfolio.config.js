// portfolio.config.js

/**
 * @type {import('next').NextConfig}
 */

const portfolioConfig = {
  // === Personal Information ===
  name: "Ananya Sarkar",
  bio: "A first-year Computer Science student with a passion for creating beautiful and functional web experiences. I'm currently exploring the world of front-end development and am excited to learn and grow my skills.",
  profileImage: "/images/profile-picture.png", // Path to a friendly, professional-looking photo
  location: "VIshakhapatnam, India",
  email: "ananyasarkar0507@gmail.com",

  // === Social Media Links ===
  // Add or remove links as needed
  socials: [
    { name: "GitHub", url: " https://github.com/ananyasarkar7" },
    { name: "LinkedIn", url: " https://www.linkedin.com/in/ananya-sarkar-9376ba31a/" },
    { name: "Twitter", url: "https://twitter.com/your-username" },
  ],

  // === Skills ===
  // Categorize skills for better presentation
  skills: {
    "Languages": ["Python", "HTML", "C"],
    "Tools & Platforms": ["Git & GitHub"],
    "Currently Learning": [" Git & GitHub"]
  },

  // === Projects ===
  // Add up to 3-4 of her best projects.
  projects: [
    {
      title: "Personal Portfolio Website",
      description: "My first personal website, built with Next.js and Tailwind CSS to showcase my skills and projects. Designed to be clean, responsive, and easy to update.",
      tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      link: "https://your-portfolio-url.com", // Link to the live project
      github: "https://github.com/your-username/portfolio-v1",
    },
    {
      title: "UniEvents - College Event Finder",
      description: "A simple web app for my college that lists upcoming events, workshops, and competitions. Helped me practice fetching and displaying data in React.",
      tags: ["React", "CSS", "JavaScript"],
      link: null, // Can be null if not deployed
      github: "https://github.com/your-username/uni-events",
    },
    {
      title: "Python Mini-Game",
      description: "A text-based adventure game built in Python. A fun project to solidify my understanding of core programming concepts like loops, functions, and classes.",
      tags: ["Python"],
      link: null,
      github: "https://github.com/your-username/python-game",
    },
  ],

  // === Website Configuration ===
  // For SEO and metadata
  seo: {
    title: "Ananya sarkar| Aspiring Developer",
    description: "The personal portfolio of Ananya sarkar, a first-year computer science student.",
  }
};

module.exports = portfolioConfig;
