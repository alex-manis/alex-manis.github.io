# Constants Directory

This directory contains all constants for easy editing and maintenance.

## Files Overview

### 📝 `content.js` - **MAIN CONTENT FILE**
**⭐ Edit this file to update ALL website content!**

This is the single source of truth for all your portfolio content. Everything is organized in clearly marked sections:

#### 👤 PERSONAL INFORMATION
- Your name and title
- Email address
- About section text
- Experience years
- Projects completed count
- Copyright information

#### 💻 SKILLS
- Frontend skills
- Backend skills
- Tools & DevOps skills
- Other skills (soft skills, methodologies)

#### 🚀 PROJECTS
- Project titles and descriptions
- Project features
- Technologies used
- Live URLs and GitHub links
- Project images (import at the top of the file)

#### 🎓 CERTIFICATES
- Certificate titles
- Issuers
- Dates
- Credential URLs

---

### ⚙️ Technical Configuration Files
*(Usually don't need to edit these)*

#### `navigation.js`
Navigation links and scroll behavior settings.

#### `animations.js`
Animation constants and configurations.

## 🎯 Quick Edit Guide

### ✏️ Change Your Name or Email
```javascript
// In content.js, find PERSONAL INFORMATION section
export const PERSONAL_INFO = {
  name: "Your New Name",
  email: "new.email@example.com",
  // ...
};
```

### ➕ Add a New Skill
```javascript
// In content.js, find SKILLS section
export const SKILLS_DATA = {
  Frontend: {
    skills: [
      "JavaScript",
      "TypeScript",
      "Your New Skill", // ← Add here
      // ...
    ],
  },
  // ...
};
```

### 📦 Add a New Project
```javascript
// In content.js
// 1. Import image at the top
import newProjectImg from "../assets/new_project.JPG";

// 2. Add to PROJECTS array
export const PROJECTS = [
  // ... existing projects
  {
    id: 9, // ← Next sequential number
    title: "New Project",
    description: "Short description...",
    about: "Detailed description...",
    features: ["Feature 1", "Feature 2"],
    technologies: ["React", "Node.js"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    image: newProjectImg,
  },
];
```

### 🎓 Add a Certificate
```javascript
// In content.js, find CERTIFICATES section
export const CERTIFICATES = [
  // ... existing certificates
  {
    id: 5, // ← Next sequential number
    title: "New Certificate",
    issuer: "Udemy",
    date: "January 2024",
    credentialUrl: "https://...",
  },
];
```

## 📂 File Structure

```
constants/
├── content.js      ← 🎯 EDIT THIS for all content
├── navigation.js   ← ⚙️ Technical (rarely edit)
├── animations.js   ← ⚙️ Technical (rarely edit)
├── index.js       ← ⚙️ Exports (don't edit)
└── README.md      ← 📖 This file
```

## ✅ Best Practices

1. **All content edits in one file** - Open `content.js` and everything is there!
2. **Use the emoji sections** - Easy to navigate with section markers (👤, 💻, 🚀, 🎓)
3. **Keep consistent formatting** - Follow existing structure
4. **Test after changes** - Run `npm run dev` to verify
5. **Sequential IDs** - Use next number when adding projects/certificates

## 🚀 That's It!

Just edit `content.js` and you're done. All components automatically use the updated content!
