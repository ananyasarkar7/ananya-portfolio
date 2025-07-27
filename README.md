# Portfolio Website - Ananya Sarkar

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases projects, skills, and personal information in a clean, professional design.

## 🚀 Live Demo

[View Live Website](https://your-portfolio-url.com) *(Update this link after deployment)*

## 📱 Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with soft color palette
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Easy to Update**: Single configuration file for all content
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design with proper contrast and navigation

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Optimized for Vercel

## 🎨 Design Features

- **Color Palette**: Soft, encouraging colors (lavender, mint, peach tones)
- **Typography**: Poppins for headings, Inter for body text
- **Animations**: Subtle fade-ins and hover effects
- **Icons**: Custom SVG icons for social media and UI elements

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── images/                 # Store your profile pictures here
├── src/
│   ├── app/
│   │   ├── about/page.tsx     # About page
│   │   ├── projects/page.tsx  # Projects page
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Main layout with navbar/footer
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Navbar.tsx         # Navigation component
│       ├── Footer.tsx         # Footer component
│       └── ProjectCard.tsx    # Reusable project card
├── portfolio.config.js        # ⭐ MAIN CONFIG FILE
├── tailwind.config.js         # Tailwind configuration
└── README.md
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🔧 How to Update Your Portfolio

All personal information is stored in the `portfolio.config.js` file. This is your **single source of truth** for all content.

### 1. Personal Information

```javascript
// In portfolio.config.js
const portfolioConfig = {
  name: "Your Name",                    // Update with your name
  bio: "Your bio description...",       // Update your bio
  profileImage: "/images/your-photo.png", // Add your photo to public/images/
  location: "Your City, Country",       // Update your location
  email: "your.email@domain.com",       // Update your email
  // ...
}
```

### 2. Social Media Links

```javascript
socials: [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", url: "https://twitter.com/yourusername" },
  // Add or remove social links as needed
],
```

### 3. Skills

```javascript
skills: {
  "Languages": ["JavaScript", "Python", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["React", "Next.js", "Tailwind CSS"],
  "Tools & Platforms": ["Git & GitHub", "VS Code", "Figma"],
  "Currently Learning": ["TypeScript", "Node.js"]
  // Update these arrays with your skills
},
```

### 4. Projects

```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    tags: ["React", "CSS", "JavaScript"],
    link: "https://project-demo.com",  // Set to null if no live demo
    github: "https://github.com/username/repo",
  },
  // Add more projects...
],
```

### 5. SEO Settings

```javascript
seo: {
  title: "Your Name | Job Title",
  description: "Brief description for search engines",
}
```

### 6. Adding Your Profile Picture

1. Add your profile picture to `public/images/`
2. Update the `profileImage` path in `portfolio.config.js`
3. Recommended size: 400x400px or larger, square format

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your site
4. Update the live demo link in this README

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure custom domain if needed

## 🎨 Customization

### Colors

To change the color scheme, update `tailwind.config.js`:

```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  // ...
}
```

### Fonts

To change fonts, update the Google Fonts import in `src/app/globals.css` and the font families in `tailwind.config.js`.

### Layout

- **Navbar**: Edit `src/components/Navbar.tsx`
- **Footer**: Edit `src/components/Footer.tsx`
- **Page layouts**: Edit files in `src/app/`

## 📝 Content Writing Tips

### Bio Writing
- Keep it conversational and authentic
- Mention what sparked your interest in tech
- Include your learning goals and aspirations
- Show personality while staying professional

### Project Descriptions
- Explain the problem you solved
- Mention what you learned
- Keep descriptions concise but informative
- Use action words ("built", "designed", "implemented")

## 🔍 SEO Best Practices

- Update page titles and descriptions in each page file
- Use semantic HTML elements
- Include alt text for images
- Ensure fast loading times
- Mobile-friendly design (already implemented)

## 🧪 Testing

Before deploying:

1. **Test all links**: Ensure social media links and project links work
2. **Check responsiveness**: Test on different screen sizes
3. **Verify email links**: Make sure contact forms work
4. **Proofread content**: Check for typos and grammar

## 🆘 Troubleshooting

### Common Issues

1. **Images not showing**: Check file paths in `portfolio.config.js`
2. **Build errors**: Run `npm run build` to check for TypeScript errors
3. **Styling issues**: Clear browser cache and restart dev server

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Open an issue in this repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ and Next.js**

> Remember to update this README with your specific information and deployment details!
# ananya-portfolio
