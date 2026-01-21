# Portfolio Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Architecture

### File Organization

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Header with navigation
│   └── Footer.jsx       # Footer section
├── sections/            # Page sections
│   ├── Hero.jsx         # Landing section
│   ├── About.jsx        # About me
│   ├── Skills.jsx       # Technical skills
│   ├── Projects.jsx     # Portfolio projects
│   ├── Experience.jsx   # Work history
│   └── Contact.jsx      # Contact form
├── hooks/               # Custom React hooks
│   └── useInView.js     # Scroll animation hook
├── App.jsx              # Main component
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## Component Details

### Navigation
- **Features**: Sticky header, mobile menu, smooth scroll
- **Props**: `isMenuOpen`, `setIsMenuOpen`
- **Key Tech**: Framer Motion, React Icons

### Hero
- **Features**: Animated intro, CTA buttons, floating shapes
- **Animation**: Staggered entrance, floating elements
- **Customization**: Update name, title, and description

### About
- **Features**: Profile image, bio, statistics
- **Layout**: Responsive two-column grid
- **Animation**: Scroll-triggered entrance

### Skills
- **Features**: Progress bars, soft skills grid, icons
- **Icons**: React Icons (50+ tech icons)
- **Customization**: Edit skill array in component

### Projects
- **Features**: Project cards, tech tags, links
- **Layout**: 3-column responsive grid
- **Customization**: Add/remove projects in array

### Experience
- **Features**: Timeline layout, alternating cards
- **Badges**: Work/Education distinction
- **Animation**: Staggered timeline reveal

### Contact
- **Features**: Contact form, social links, info cards
- **Form**: Client-side validation, success state
- **Customization**: Update email, phone, social URLs

### Footer
- **Features**: Copyright, scroll-to-top, animated heart
- **Animation**: Pulse effect on heart icon

## Customization Guide

### Update Personal Information

1. **Hero Section**
   - File: `src/sections/Hero.jsx`
   - Update: Name, title, description

```jsx
<h1>Hi, I'm <span>Your Name</span></h1>
<h2>Your Job Title</h2>
<p>Your professional summary</p>
```

2. **About Section**
   - File: `src/sections/About.jsx`
   - Update: Bio, achievements, profile image

```jsx
<p>Your biography here...</p>
<h3>50+</h3> {/* Change numbers */}
```

3. **Skills**
   - File: `src/sections/Skills.jsx`
   - Update: Skill names, proficiency levels

```javascript
const technicalSkills = [
  { name: 'React.js', level: 95, icon: FaReact, color: 'text-blue-400' },
  // Add more skills
]
```

4. **Projects**
   - File: `src/sections/Projects.jsx`
   - Update: Project details, links

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description...',
    technologies: ['React', 'Node.js'],
    link: 'https://project-url.com',
    github: 'https://github.com/username/project',
  },
]
```

5. **Experience**
   - File: `src/sections/Experience.jsx`
   - Update: Work history and education

```javascript
const experiences = [
  {
    title: 'Position',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Your role...',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
]
```

6. **Contact**
   - File: `src/sections/Contact.jsx`
   - Update: Email, phone, social links

```jsx
const contactInfo = [
  { value: 'your.email@example.com', link: 'mailto:...' },
  { value: '+1 (555) 000-0000', link: 'tel:...' },
]

const socialLinks = [
  { url: 'https://github.com/username', label: 'GitHub' },
]
```

### Styling & Colors

**Tailwind Configuration**: `tailwind.config.cjs`

```javascript
colors: {
  primary: '#1a1a2e',      // Main background
  secondary: '#16213e',    // Secondary background  
  accent: '#0f3460',       // Accent elements
  highlight: '#e94560',    // Primary color
}
```

**Global Styles**: `src/index.css`
- Custom scrollbar
- Focus styles
- Typography defaults

### Animations

**Framer Motion Setup**
- Used in all components
- Variants for coordinated animations
- `useInView` hook for scroll triggers

**Animation Patterns**
```jsx
// Container with staggered children
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>

// Item variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
```

## Adding New Sections

1. **Create Section File**
   ```bash
   # Create src/sections/YourSection.jsx
   ```

2. **Use Custom Hook**
   ```jsx
   import { useInView } from '../hooks/useInView'
   
   const { ref, inView } = useInView({
     triggerOnce: true,
     threshold: 0.2,
   })
   ```

3. **Add to App**
   ```jsx
   import YourSection from './sections/YourSection'
   
   <main>
     <YourSection />
   </main>
   ```

4. **Add Navigation Link**
   - Update `navItems` array in `Navigation.jsx`

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Compress before uploading
   - Lazy load with `loading="lazy"`

2. **Code Splitting**
   - Vite handles automatically
   - Monitor bundle size: `npm run build`

3. **Animation Performance**
   - Use `transform` and `opacity` for best performance
   - Avoid animating expensive properties
   - Test on mobile devices

4. **Accessibility**
   - Use semantic HTML
   - Add ARIA labels
   - Test keyboard navigation
   - Ensure color contrast

## Deployment Checklist

- [ ] Update personal information
- [ ] Replace profile image
- [ ] Add actual project links
- [ ] Update social media URLs
- [ ] Test on mobile and tablet
- [ ] Check accessibility with WAVE
- [ ] Build production: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Deploy to hosting platform

## Hosting Options

### Netlify (Recommended)
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Push to GitHub
2. Import project from Vercel dashboard
3. Auto-detects Vite configuration

### GitHub Pages
1. Update vite.config.js with base path
2. Run `npm run build`
3. Deploy dist/ to GitHub Pages

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder via FTP
3. Set up 404 redirect to index.html

## Browser DevTools Tips

1. **React DevTools Extension**
   - Inspect component tree
   - Check props and state

2. **Lighthouse Audit**
   - Performance metrics
   - Accessibility score
   - SEO recommendations

3. **Network Tab**
   - Monitor resource loading
   - Check file sizes

## Troubleshooting

### Port 3000 in Use
```bash
npm run dev -- --port 3002
```

### Module Not Found
- Check file paths
- Ensure correct imports
- Clear node_modules: `rm -r node_modules && npm install`

### Styling Issues
- Clear browser cache
- Rebuild Tailwind: `npm install`
- Check postcss config

### Animation Lag
- Reduce animation complexity
- Check browser performance
- Test on actual mobile device

## Resources

- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Tailwind**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

## Next Steps

1. Customize all personal information
2. Add real projects with links
3. Deploy to hosting platform
4. Set up custom domain
5. Monitor analytics
6. Gather feedback from users
7. Iterate and improve

---

**Enjoy building your portfolio! 🚀**
