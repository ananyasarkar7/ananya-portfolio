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
    title: "Photography Portfolio",
    description: "A showcase of my best photography work, organized by theme and category.",
    tags: ["Photography", "Creative"],
     // if no repo
  },
  {
  
    
  },

  // === Website Configuration ===
  // For SEO and metadata
  seo: {
    title: "Ananya sarkar| Aspiring Developer",
    description: "The personal portfolio of Ananya sarkar, a first-year computer science student.",
  }
};

module.exports = portfolioConfig;
