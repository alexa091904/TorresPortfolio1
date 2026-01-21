# Professional Portfolio Website

A modern, responsive React portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## Features

### 🎨 Design & UX
- **Clean, Minimalist Design**: Professional layout suitable for academic and industry use
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Consistent Styling**: Unified color palette, typography, and spacing
- **Visual Hierarchy**: Clear content organization with intuitive navigation
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

### ✨ Animations & Interactions
- **Smooth Animations**: Framer Motion for elegant fade-in, slide, and stagger effects
- **Scroll Animations**: Content animates as it enters the viewport
- **Hover Effects**: Subtle, non-distracting interactions on buttons and cards
- **Performance Optimized**: Animations enhance usability without sacrificing speed

### 📄 Sections
1. **Hero Section**: Name, title, and professional summary with CTA buttons
2. **About Me**: Personal biography with profile image and statistics
3. **Skills**: Technical skills with progress bars and soft skills showcase
4. **Projects**: Featured projects with descriptions, technologies, and links
5. **Experience**: Work experience and education timeline
6. **Contact**: Contact form, information, and social media links
7. **Footer**: Copyright and back-to-top navigation

### 🛠️ Technical Stack
- **React 18**: Latest React with hooks and functional components
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: React animation library
- **React Icons**: Icon library for UI elements

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Header navigation with mobile menu
│   │   └── Footer.jsx          # Footer with social links
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills section with progress bars
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Experience.jsx      # Experience timeline
│   │   └── Contact.jsx         # Contact form
│   ├── hooks/
│   │   └── useInView.js        # Custom hook for scroll animations
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── index.html                  # HTML template
└── README.md                   # This file
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or Navigate to Project**
   ```bash
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customization

### Update Personal Information
Edit the following files to customize content:

- **Hero Section**: `src/sections/Hero.jsx`
  - Change name and title
  - Update professional summary

- **About Section**: `src/sections/About.jsx`
  - Replace profile image
  - Update biography and statistics

- **Skills Section**: `src/sections/Skills.jsx`
  - Add/remove technical skills
  - Adjust proficiency levels

- **Projects Section**: `src/sections/Projects.jsx`
  - Add your projects with descriptions
  - Update technologies and links

- **Experience Section**: `src/sections/Experience.jsx`
  - Add work experience and education
  - Update achievements

- **Contact Section**: `src/sections/Contact.jsx`
  - Update contact information
  - Add social media links

### Color Customization
Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a2e',      // Main background
      secondary: '#16213e',    // Secondary background
      accent: '#0f3460',       // Accent color
      highlight: '#e94560',    // Primary highlight/CTA color
    },
  },
}
```

### Add New Sections
1. Create a new file in `src/sections/`
2. Use the `useInView` hook for scroll animations
3. Import and add to `App.jsx`

## Component Documentation

### Navigation Component
- Fixed header with smooth scroll links
- Mobile responsive hamburger menu
- Active section highlighting
- Accessibility: ARIA labels and semantic HTML

### Hero Section
- Full-screen introduction with animated elements
- Floating background shapes
- Call-to-action buttons
- Scroll indicator

### About Section
- Two-column layout (text + image)
- Animated entrance on scroll
- Statistics display
- Glowing image effect

### Skills Section
- Technical skills with progress bars
- Icon integration with react-icons
- Soft skills grid
- Staggered animations

### Projects Section
- 3-column responsive grid
- Project cards with hover animations
- Technology tags
- GitHub and demo links

### Experience Section
- Timeline layout with alternating cards
- Animated timeline dots
- Work and education badges
- Achievement lists

### Contact Section
- Contact form with validation
- Success message feedback
- Contact information cards
- Social media links

### useInView Hook
Custom React hook for intersection-based animations:
- Trigger animations when element enters viewport
- Optional one-time trigger
- Configurable threshold

```javascript
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.2,
})
```

## Performance Optimization

- **Lazy Loading**: Animations trigger on scroll using Intersection Observer
- **CSS Optimization**: Tailwind CSS purges unused styles in production
- **Code Splitting**: Vite automatically handles code splitting
- **Image Optimization**: Use optimized image formats and sizes
- **Minimal Dependencies**: Only essential libraries included

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

✓ Semantic HTML structure  
✓ ARIA labels on interactive elements  
✓ Keyboard navigation support  
✓ Focus indicators on interactive elements  
✓ Color contrast ratios meet WCAG AA standards  
✓ Alt text placeholders for images  
✓ Proper heading hierarchy  

## Deployment

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Connect GitHub repository to Vercel
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

## License

This portfolio template is open source and available under the MIT License.

## Support & Customization

For additional features or customization needs:
- Review component comments for implementation details
- Check Framer Motion documentation: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/docs
- React documentation: https://react.dev/

## Future Enhancements

Consider adding:
- Dark/Light mode toggle
- Multi-language support
- Blog section with markdown support
- Search functionality
- CMS integration
- Email notification system
- Analytics integration

---

**Happy coding! 🚀**
