# Plaimanas - Frontend Developer Practical Test Assignment

## 📋 Project Overview

This is a **Frontend Developer Practical Test Assignment** for **Plaimanas**, a modern and elegant fashion brand website. The project demonstrates responsive web design, interactive UI components, and smooth animations using vanilla HTML, CSS, and JavaScript.

## 🎯 Project Goals

- Create a responsive and mobile-friendly website
- Implement interactive navigation and menu systems
- Build reusable component-based JavaScript functionality
- Ensure cross-device compatibility and optimal user experience

## 📁 Project Structure

```
waranya_prawanno_plaimanas_practical_test/
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
│
├── assets/
│   ├── images/                # Image assets (PNG, JPG, etc.)
│   └── videos/                # Video assets (MP4, etc.)
│
├── css/
│   ├── style.css              # Desktop and main styles
│   └── mobile.css             # Mobile responsive styles (≤768px)
│
└── js/
    ├── nav.js                 # Navigation and hamburger menu
    ├── hamburger-menu.js      # Mobile hamburger menu functionality
    ├── mobile-nav.js          # Mobile navigation handler
    ├── submenu.js             # Submenu (Editorial) functionality
    ├── hero.js                # Hero section animations
    ├── img-card.js            # Image card components
    ├── img-card-with-desc.js  # Image cards with descriptions
    ├── frequently-question.js # FAQ accordion functionality
    ├── language.js            # Language dropdown switcher
    └── field.js               # Form field label animations
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Styling with flexbox, responsive design
- **JavaScript (Vanilla)** - No frameworks/libraries
- **Bootstrap 5.3.8** - Grid system and utilities
- **Google Fonts** - Hanken Grotesk, Noto Sans Thai, Sarabun

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: Full layout (>768px)
- **Mobile**: Optimized single-column layout (≤768px)

### Mobile Fixes Applied:

- Removed excessive `100vw` usage (causes horizontal scrollbar)
- Added `overflow-x: hidden` to prevent scrolling issues
- Mobile navigation overlay properly sized

## ✨ Key Features

### Navigation

- Desktop: Horizontal navbar with hover effects
- Mobile: Hamburger menu with slide-in navigation
- Language/Currency dropdown selector
- Editorial submenu in full-screen overlay mode

### Components

- **Hero Section**: Full-screen video background with animated title
- **Image Cards**: Interactive cards with hover effects and descriptions
- **Marquee**: Animated scrolling text banner
- **FAQ Section**: Accordion-style frequently asked questions
- **Form Fields**: Animated label transitions with floating effect
- **Footer**: Newsletter subscription and contact information

### Animations

- Smooth page transitions
- Hover effects on interactive elements
- Mobile menu slide-in animation
- Hero image scaling and positioning

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone or download the project
2. Open `index.html` in your web browser
3. No installation or build process needed!

## 📖 Usage

- **Desktop**: Open the website and use desktop navigation
- **Mobile**: Open on a mobile device or use browser dev tools to test responsive design
- **Toggle Menu**: Click the hamburger icon on mobile to see the navigation menu
- **Navigation**: Click menu items to navigate sections
- **Language Selector**: Click the language dropdown (TH-USD / US-USD) at the top

## 🎨 Styling Guide

### Main CSS Files

- `css/style.css` - All desktop and shared styles
- `css/mobile.css` - Mobile-specific overrides and responsive adjustments

### Color Scheme

- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Gray (#828282, #E0E0E0)
- **Background**: Light Gray (#F8F9F8)

### Typography

- **Headings**: Hanken Grotesk (900 weight)
- **Body Text**: Noto Sans Thai, Sarabun (for Thai font support)
- **UI Text**: Arial (fallback)

## 🔧 JavaScript Modules

Each JavaScript file handles specific functionality:

| File                     | Purpose                                 |
| ------------------------ | --------------------------------------- |
| `nav.js`                 | Main navigation and hamburger toggle    |
| `hamburger-menu.js`      | Hamburger menu animations               |
| `submenu.js`             | Editorial submenu management            |
| `hero.js`                | Hero section animations and transitions |
| `img-card.js`            | Image card rendering                    |
| `img-card-with-desc.js`  | Image cards with descriptions           |
| `frequently-question.js` | FAQ accordion toggle                    |
| `language.js`            | Language/currency selector              |
| `field.js`               | Form field label animations             |

## 🐛 Known Issues & Fixes

### Fixed Issues:

- ✅ **Horizontal Scrollbar on Mobile**: Changed `100vw` to `100%` in body and submenu-container
- ✅ **Mobile Layout Overflow**: Added `overflow-x: hidden` to prevent horizontal scrolling

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📄 License

This is a practical test assignment and may be subject to the testing organization's terms and conditions.

## 👤 Author

Waranya Prawanno Plaimanas Practical Test

---

**Last Updated**: March 6, 2026
