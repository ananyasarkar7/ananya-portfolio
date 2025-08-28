// portfolio.config.js
const portfolioConfig = {
  name: "Ananya Sarkar",
  bio: "A first-year Computer Science student with a passion for creating beautiful and functional web experiences. I'm currently exploring the world of front-end development and am excited to learn and grow my skills.",
  profileImage: "/images/profile-picture.png",
  location: "Visakhapatnam, India",
  email: "ananyasarkar0507@gmail.com",

  // === Currently Learning ===
  currentlyLearning: ["Git", "GitHub"], // <-- comma is important

  // === Projects ===
  projects: [
    {
      title: "Photography Portfolio",
      description:
        "A showcase of my best photography work, organized by theme and category.",
      tags: ["Photography", "Creative"],
    },
  ],

  // === Social Media Links ===
  social: {
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
};

export default portfolioConfig; // or: module.exports = portfolioConfig;
