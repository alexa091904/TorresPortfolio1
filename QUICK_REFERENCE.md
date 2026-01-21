# ⚡ Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development (opens http://localhost:3001)
npm run dev

# Build for production
npm run build

# Test production build
npm run preview
```

## 📝 Quick Customization

### Update Your Name & Info
**File**: `src/sections/Hero.jsx`
```jsx
<h1>Hi, I'm <span>YOUR NAME HERE</span></h1>
<h2>YOUR JOB TITLE HERE</h2>
<p>YOUR SUMMARY HERE</p>
```

### Update About Section
**File**: `src/sections/About.jsx`
- Edit bio paragraphs
- Update statistics (50+, 5+, etc.)
- Replace profile image

### Add/Update Skills
**File**: `src/sections/Skills.jsx`
- Edit `technicalSkills` array
- Edit `softSkills` array
- Adjust proficiency levels (0-100)

### Add/Update Projects
**File**: `src/sections/Projects.jsx`
- Edit `projects` array
- Add your project details
- Update links and technologies

### Add/Update Experience
**File**: `src/sections/Experience.jsx`
- Edit `experiences` array
- Add work and education entries
- Update achievements

### Update Contact Info
**File**: `src/sections/Contact.jsx`
- Update `contactInfo` array (email, phone)
- Update `socialLinks` array
- Verify form fields

## 🎨 Change Colors

**File**: `tailwind.config.cjs`
```javascript
colors: {
  primary: '#1a1a2e',      // Main background
  secondary: '#16213e',    // Secondary bg
  accent: '#0f3460',       // Accents
  highlight: '#e94560',    // CTAs
}
```

## 📱 Responsive Breakpoints

- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

Example:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Text size changes on tablet and desktop
</div>
```

## 🎬 Add Animation to New Section

1. Import hooks and Framer Motion:
```jsx
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
```

2. Use the hook:
```jsx
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.2,
})
```

3. Add animation:
```jsx
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>
```

## 🔗 Add Navigation Link

**File**: `src/components/Navigation.jsx`
```javascript
const navItems = [
  // ... existing items
  { id: 'newid', label: 'New Section', href: '#newid' },
]
```

## 📦 Install New Package

```bash
npm install package-name
```

Common packages:
- `npm install axios` - HTTP requests
- `npm install react-router-dom` - Routing
- `npm install zustand` - State management

## 🐛 Debug Issues

### Port 3000 Already in Use
```bash
npm run dev -- --port 3002
```

### Clear Cache & Rebuild
```bash
rm -r node_modules package-lock.json
npm install
```

### Check Errors
- Open browser DevTools (F12)
- Go to Console tab
- Look for red error messages

## 📊 Performance

### Check Bundle Size
```bash
npm run build
# Check the dist/ folder size
```

### Lighthouse Score
1. Press F12 in browser
2. Go to Lighthouse tab
3. Click "Analyze page"
4. Target: 90+ on all metrics

## 🌐 Deploy Steps

### Netlify
1. Push code to GitHub
2. Visit netlify.com
3. Click "New site from Git"
4. Select your repository
5. Deploy!

### Vercel
1. Visit vercel.com
2. Import project from GitHub
3. Click Deploy
4. Done!

## 🔄 Common Tasks

### Update Multiple Sections
- Edit each component file
- Save file
- Dev server auto-refreshes

### Replace Profile Image
1. Save image to `public/` folder (optional)
2. Update image path in `About.jsx`
3. Image displays immediately

### Add New Icon
1. Browse react-icons: https://react-icons.github.io/react-icons/
2. Import: `import { FaIconName } from 'react-icons/fa'`
3. Use: `<FaIconName />`

### Change Animation Speed
In component animation settings:
```jsx
transition={{ duration: 0.6 }} // Change 0.6 to desired seconds
```

### Change Mobile Menu Color
**File**: `tailwind.config.cjs`
```javascript
colors: {
  secondary: '#16213e', // Menu background
}
```

## 📚 File Organization

- **Components**: `src/components/`
- **Sections**: `src/sections/`
- **Hooks**: `src/hooks/`
- **Styles**: `src/index.css`
- **Config**: Root folder (vite.config.js, etc.)
- **Docs**: Root folder (README.md, DEVELOPMENT.md, etc.)

## 🎯 Before Deploying

- [ ] Run `npm run build`
- [ ] Run `npm run preview`
- [ ] Test on mobile
- [ ] Check all links
- [ ] Verify contact form
- [ ] Test navigation
- [ ] Check Lighthouse score
- [ ] Verify custom domain (if applicable)

## 📞 Quick Help

| Issue | Solution |
|-------|----------|
| Port in use | `npm run dev -- --port 3002` |
| Styles not showing | Clear cache, rebuild |
| Images missing | Check image path |
| Component not updating | Save file, check console |
| Build fails | `rm -r node_modules && npm install` |
| Deploy fails | Check dist/ folder has content |

## 🔐 Environment Setup

**For backend/API integration (optional):**

Create `.env.local`:
```
VITE_API_URL=https://api.example.com
```

Use in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📱 Test Responsive Design

1. Open DevTools (F12)
2. Click device toggle (phone icon)
3. Select device or responsive size
4. Test all sections on different sizes

## ✅ Final Checklist

- [ ] Customize all text
- [ ] Update contact info
- [ ] Add projects
- [ ] Replace images
- [ ] Test on mobile
- [ ] Check accessibility
- [ ] Build project
- [ ] Deploy
- [ ] Test live site
- [ ] Set up custom domain

## 🎓 Learning Resources

Quick links:
- **React**: react.dev
- **Vite**: vitejs.dev
- **Tailwind**: tailwindcss.com
- **Framer Motion**: framer.com/motion
- **React Icons**: react-icons.github.io

## 💡 Tips & Tricks

1. **Auto-format code**: Install Prettier extension
2. **Check accessibility**: Use WAVE browser extension
3. **Test performance**: Use Lighthouse in DevTools
4. **Monitor bundle size**: Use webpack-bundle-analyzer
5. **Get feedback**: Share live site with others

---

**Ready to build your portfolio? Start with `npm run dev`! 🚀**
