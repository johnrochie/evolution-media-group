# Evolution Media Group

A modern, dark-themed portfolio website showcasing web development work with an "autonomous design, human craft" philosophy.

## 🚀 Live Demo

[Coming Soon - Vercel Deployment]

## ✨ Features

- **Modern Dark Theme** - Sophisticated dark background (#0f0f0f) with cyan/teal accents (#00bcd4)
- **Beautiful Typography** - Playfair Display (serif headings) + Inter (sans body) fonts
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Project Portfolio** - Showcase of completed projects with cards
- **Services Section** - Clear presentation of offerings
- **Contact Form** - Modern dark-themed contact form

## 🎨 Sections

1. **Hero** - Eye-catching introduction with tagline "Autonomous design, human craft."
2. **About** - Visionary narrative about the future of autonomous web design
3. **Portfolio** - Featured projects (Travel Bug, Rei Bridal, Sensory Play Zone)
4. **Services** - Custom Website Development, Brand Identity, Deployment, Support
5. **Contact** - Simple form for inquiries
6. **Footer** - Social links and copyright

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Google Fonts (Playfair Display, Inter)
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd evolution-media-group

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Build for Production

```bash
npm run build
npm start
```

## 📤 Deployment

### Vercel

The project includes `vercel.json` for quick deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 🎯 Theme Colors

- **Primary Background:** `#0f0f0f`
- **Secondary Background:** `#1a1a1a`
- **Accent/Cyan:** `#00bcd4`
- **Text Primary:** `#ffffff`
- **Text Secondary:** `#9ca3af`

## 📝 Project Structure

```
evolution-media-group/
├── app/
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Main page with all sections
│   └── globals.css       # Global styles and CSS variables
├── public/               # Static assets
├── vercel.json          # Deployment configuration
└── README.md            # This file
```

## 🎨 Animation Effects

- **Fade In Up** - Elements fade in with upward motion
- **Glow Hover** - Cards glow on hover with cyan accent
- **Card Lift** - Project cards lift smoothly on hover
- **Smooth Scroll** - Native smooth scrolling for anchors

## 🔧 Customization

### Update Projects

Edit `projectData` array in `app/page.tsx`:

```typescript
const projectData = [
  {
    title: "Your Project",
    tagline: "Your Subtitle",
    url: "https://your-project.com",
    description: "Project description...",
    tech: ["Next.js", "Tailwind"],
    gradient: "from-cyan-400 to-emerald-400"
  }
];
```

### Update Services

Edit `services` array in `app/page.tsx`:

```typescript
const services = [
  {
    icon: YourIcon,
    title: "Your Service",
    description: "Service description..."
  }
];
```

### Change Colors

Update `app/globals.css` CSS variables:

```css
:root {
  --background: #0f0f0f;
  --accent: #00bcd4;
}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (single column)
- **Tablet:** 640px - 1024px (2 columns)
- **Desktop:** > 1024px (3 columns)

## 🚀 Performance

- Next.js 16 with App Router for optimal performance
- Tailwind CSS v4 for minimal CSS bundle
- Optimized animations with Framer Motion
- Native lazy loading for images (when added)

## 📄 License

Copyright © 2026 Evolution Media Group. All rights reserved.

---

**Built with autonomous design, human craft.**
