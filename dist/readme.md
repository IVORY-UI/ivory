# Ivory UI

A modern, utility-first CSS framework designed for building beautiful, responsive web applications faster and easier. Built with modern CSS features, accessibility in mind, and developer experience at its core.

![Ivory UI](https://img.shields.io/badge/Ivory-CSS%20Framework-blue?style=for-the-badge&logo=css3)
![Version](https://img.shields.io/badge/version-7.0.0-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)

## ✨ Features

- **Modern Design System** - Beautiful, consistent components with semantic color palette
- **Utility-First Approach** - Rapid development with comprehensive utility classes
- **Responsive by Default** - Mobile-first responsive design with modern breakpoints
- **Dark Mode Support** - Automatic dark mode detection with manual theme switching
- **Container Queries** - Modern layout capabilities based on container size
- **Accessibility First** - WCAG compliant components with proper focus management
- **Modern Animations** - Smooth transitions and micro-interactions
- **Highly Customizable** - Easy configuration and theming system
- **Modular Architecture** - Import only what you need
- **Performance Optimized** - Tree-shaking support and minimal CSS output

## 🚀 Quick Start

### Installation

```bash
npm install ivoryui-ivory
```

### CDN

```html
<!-- Full framework -->
<link rel="stylesheet" href="https://unpkg.com/ivoryui-ivory@7.0.0/dist/ivory.min.css">

<!-- Utilities only -->
<link rel="stylesheet" href="https://unpkg.com/ivoryui-ivory@7.0.0/dist/utils.min.css">

<!-- Components only -->
<link rel="stylesheet" href="https://unpkg.com/ivoryui-ivory@7.0.0/dist/components.min.css">
```

### Basic Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ivory CSS Framework</title>
    <link rel="stylesheet" href="https://unpkg.com/ivoryui-ivory@7.0.0/dist/ivory.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="iv-nav">
        <div class="iv-nav-container">
            <a href="#" class="iv-nav-brand">My App</a>
            <ul class="iv-nav-menu">
                <li class="iv-nav-item">
                    <a href="#" class="iv-nav-link active">Home</a>
                </li>
                <li class="iv-nav-item">
                    <a href="#" class="iv-nav-link">About</a>
                </li>
                <li class="iv-nav-item">
                    <a href="#" class="iv-nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto p-6">
        <div class="iv-card">
            <div class="iv-card-header">
                <h2 class="iv-card-header-text">Welcome to Ivory</h2>
            </div>
            <div class="iv-card-content">
                <p>Build beautiful interfaces with modern CSS utilities and components.</p>
                <div class="mt-4">
                    <button class="iv-btn btn-primary">Get Started</button>
                    <button class="iv-btn-o btn-primary ml-2">Learn More</button>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
```

## 🎨 Design System

### Color Palette

Ivory provides a comprehensive color system with semantic naming:

```scss
// Primary colors
.iv-btn.btn-primary { /* Blue theme */ }
.iv-btn.btn-success { /* Green theme */ }
.iv-btn.btn-danger { /* Red theme */ }
.iv-btn.btn-warning { /* Yellow theme */ }

// Utility classes
.text-blue-500 { color: #3b82f6; }
.bg-gray-100 { background-color: #f3f4f6; }
.border-red-300 { border-color: #fca5a5; }
```

### Typography

```html
<!-- Heading sizes -->
<h1 class="text-4xl font-bold">Large Heading</h1>
<h2 class="text-2xl font-semibold">Medium Heading</h2>
<h3 class="text-xl font-medium">Small Heading</h3>

<!-- Text utilities -->
<p class="text-base text-gray-700">Regular paragraph text</p>
<p class="text-sm text-gray-500">Small muted text</p>
<p class="text-lg font-medium">Large emphasized text</p>
```

### Spacing System

```html
<!-- Margin utilities -->
<div class="mt-4 mb-6 mx-auto">Spaced content</div>

<!-- Padding utilities -->
<div class="p-4 px-6 py-8">Padded content</div>

<!-- Responsive spacing -->
<div class="mt-2 md:mt-4 lg:mt-6">Responsive margin</div>
```

## 🧩 Components

### Buttons

```html
<!-- Button variants -->
<button class="iv-btn btn-primary">Primary Button</button>
<button class="iv-btn-o btn-primary">Outline Button</button>
<button class="iv-btn-f btn-primary">Flat Button</button>

<!-- Button sizes -->
<button class="iv-btn btn-primary btn-sm">Small</button>
<button class="iv-btn btn-primary">Default</button>
<button class="iv-btn btn-primary btn-lg">Large</button>
```

### Cards

```html
<div class="iv-card">
    <div class="iv-card-header">
        <h3 class="iv-card-header-text">Card Title</h3>
    </div>
    <div class="iv-card-content">
        <p>Card content goes here...</p>
    </div>
    <div class="iv-card-footer">
        <button class="iv-btn btn-primary">Action</button>
    </div>
</div>
```

### Forms

```html
<form class="iv-form-horizontal">
    <div class="iv-field">
        <label class="iv-label">Email</label>
        <input type="email" class="iv-input" placeholder="Enter your email">
    </div>
    <div class="iv-field">
        <label class="iv-label">Message</label>
        <textarea class="iv-textarea" placeholder="Enter your message"></textarea>
    </div>
    <button type="submit" class="iv-btn btn-primary">Submit</button>
</form>
```

### Navigation

```html
<nav class="iv-nav">
    <div class="iv-nav-container">
        <a href="#" class="iv-nav-brand">Logo</a>
        <ul class="iv-nav-menu">
            <li class="iv-nav-item">
                <a href="#" class="iv-nav-link active">Home</a>
            </li>
            <li class="iv-nav-item iv-nav-dropdown">
                <a href="#" class="iv-nav-link">Dropdown</a>
                <div class="iv-dropdown-menu">
                    <a href="#" class="iv-dropdown-item">Item 1</a>
                    <a href="#" class="iv-dropdown-item">Item 2</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
```

### Modals

```html
<div class="iv-modal" id="myModal">
    <div class="iv-modal-backdrop"></div>
    <div class="iv-modal-content">
        <div class="iv-modal-header">
            <h3 class="iv-modal-header-title">Modal Title</h3>
            <button class="iv-modal-header-close">&times;</button>
        </div>
        <div class="iv-modal-body">
            <p>Modal content goes here...</p>
        </div>
        <div class="iv-modal-footer">
            <button class="iv-btn btn-primary">Save</button>
            <button class="iv-btn">Cancel</button>
        </div>
    </div>
</div>
```

## 🎯 Utility Classes

### Layout

```html
<!-- Display -->
<div class="d-block">Block</div>
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>
<div class="d-none md:d-block">Responsive</div>

<!-- Flexbox -->
<div class="d-flex justify-center items-center">
    <div class="flex-1">Flex item</div>
</div>

<!-- Grid -->
<div class="d-grid grid-cols-3 gap-4">
    <div>Grid item</div>
    <div>Grid item</div>
    <div>Grid item</div>
</div>
```

### Spacing

```html
<!-- Margin -->
<div class="m-4">All sides</div>
<div class="mt-4 mb-6">Top and bottom</div>
<div class="mx-auto">Center horizontally</div>

<!-- Padding -->
<div class="p-4">All sides</div>
<div class="px-6 py-4">Horizontal and vertical</div>
```

### Colors

```html
<!-- Text colors -->
<p class="text-blue-500">Blue text</p>
<p class="text-gray-700">Gray text</p>

<!-- Background colors -->
<div class="bg-blue-100">Light blue background</div>
<div class="bg-gray-900 text-white">Dark background</div>

<!-- Border colors -->
<div class="border border-red-300">Red border</div>
```

## 🌙 Dark Mode

Ivory supports automatic dark mode detection and manual theme switching:

```html
<!-- Theme toggle -->
<button class="iv-theme-toggle" onclick="toggleTheme()">
    <span class="iv-theme-toggle-icon moon-icon">🌙</span>
    <span class="iv-theme-toggle-icon sun-icon">☀️</span>
    <span class="iv-theme-toggle-text">Toggle theme</span>
</button>

<script>
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);
</script>
```

## 📱 Container Queries

Modern layout capabilities based on container size:

```html
<div class="iv-container">
    <div class="iv-card">
        <!-- This card will adapt based on its container size -->
        <div class="cq-sm:d-none">Hidden on small containers</div>
        <div class="cq-md:grid-cols-2">Two columns on medium containers</div>
    </div>
</div>
```

## 🎭 Animations

Smooth animations and micro-interactions:

```html
<!-- Animation utilities -->
<div class="animate-fade-in">Fade in animation</div>
<div class="animate-bounce">Bounce animation</div>
<div class="animate-spin">Spin animation</div>

<!-- Hover effects -->
<div class="hover-lift">Lifts on hover</div>
<div class="hover-scale">Scales on hover</div>
<div class="hover-glow">Glows on hover</div>

<!-- Stagger animations -->
<div class="animate-stagger">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

## ⚙️ Configuration

Customize Ivory to match your design system:

```javascript
// ivory.config.js
module.exports = {
  colors: {
    primary: {
      500: '#your-brand-color',
      // ... more colors
    }
  },
  spacing: {
    // Custom spacing scale
  },
  breakpoints: {
    // Custom breakpoints
  },
  // ... more options
};
```

## 📦 Build System

### Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Lint SCSS files
npm run lint

# Fix linting issues
npm run lint:fix
```

### Custom Builds

```bash
# Build utilities only
npm run build:utils

# Build components only
npm run build:components

# Build everything
npm run build
```

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📚 Documentation

For complete documentation, visit [https://ivoryui.com](https://ivoryui.com)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/ivory.git
cd ivory

# Install dependencies
npm install

# Start development
npm run dev
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern CSS frameworks like Tailwind CSS and Bootstrap
- Built with modern web standards and best practices
- Community-driven development and feedback

## 📞 Support

- 📧 Email: support@ivoryui.com
- 💬 Discord: [Join our community](https://discord.gg/ivory)
- 🐛 Issues: [GitHub Issues](https://github.com/IVORY-UI/ivory/issues)
- 📖 Documentation: [https://ivoryui.com](https://ivoryui.com)

---

Made with ❤️ by the Ivory team and contributors
