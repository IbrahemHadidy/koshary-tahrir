# Koshary El-Tahrir Modern Website

A modern redesign of Egypt's iconic restaurant website, featuring enhanced UI/UX and bilingual support.

## Key Features

- Bilingual support (English/Arabic) with RTL compatibility
- Modern restaurant UI/UX patterns
- Interactive menu with real-time cart management
- Branch locator with Google Maps integration
- Animated page transitions and hover effects
- Responsive design across all devices
- Toast notifications system
- Product details pages with image gallery
- Accessibility-focused implementation

## Tech Stack

- **Framework**: Next.js (App Router)  
  _Chosen for SEO benefits, SSR capabilities, and optimal performance crucial for restaurant websites_
- **Styling**: Tailwind CSS  
  _Utility-first CSS framework for rapid UI development and consistent design_
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **State Management**: React Context API (Cart)
- **Icons**: Lucide React
- **UI Components**: Custom Tailwind CSS
- **Image Optimization**: Next.js Image Component

## Tooling

- **Prettier**: Ensures consistent code style across the entire project
- **ESLint**: Catches potential errors and enforces best practices
- **TypeScript**: Provides type safety and better developer experience
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development

## Development Journey

### 1. Research & Data Collection

- Extracted menu items and nutritional information from original website
- Performed image optimization:
  - Cropped and resized product images
  - Created consistent image dimensions
- Conducted competitive analysis of restaurant websites
- Designed JSON data structure for menu items

### 2. Core Implementation

- Set up Next.js project with TypeScript
- Implemented bilingual support:
  - RTL/LTR layout switching
  - Dynamic content rendering
  - Locale-aware formatting
- Created interactive components:
  - Image gallery
  - Cart system with quantity controls
  - Animated navigation menu
- Developed restaurant-specific features:
  - Menu categorization system
  - Branch location cards

### 3. AI Collaboration

- Used AI assistance for:
  - Initial component scaffolding
  - Animation implementations
  - Responsive layout solutions
  - Accessibility improvements
- Performed manual enhancements:
  - Code quality refactoring
  - Performance optimizations
  - Cross-browser testing
  - Mobile-first adjustments

### 4. Quality Assurance

- Fixed critical issues:
  - RTL layout bugs
  - Z-index conflicts
  - Mobile touch issues
  - Form validation errors
- Added professional touches:
  - Custom hover states
  - Focus management
  - Semantic HTML
  - SEO metadata

### 5. Final Polish

- Integrated toast notifications
- Added success/error states
- Implemented smooth animations
- Created documentation
- Optimized build output
- Conducted user flow testing
