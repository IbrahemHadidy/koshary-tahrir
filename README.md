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
- Static Site Generation (SSG) for optimal performance
- SEO optimization for search engine visibility
- Per-component loading states with `loading.tsx`
- Global 404 page + route-specific not-found handling for product IDs

## Tech Stack

- **Framework**: Next.js (App Router)  
  _Chosen for SEO benefits, SSR capabilities, SSG and optimal performance crucial for restaurant websites_
  _Utilizes advanced features like route-specific loading.tsx, global not-found.tsx,  
  and dynamic route error handling for missing product IDs_
- **Styling**: Tailwind CSS  
  _Utility-first CSS framework for rapid UI development and consistent design_
- **Internationalization**: next-intl
- **Animations**: Custom keyframes (CSS-based animations)
- **State Management**: React Context API (Cart)
- **Icons**: Lucide React
- **UI Components**: Custom Tailwind CSS
- **Image Optimization**: Next.js Image Component
- **Static Site Generation (SSG)**: Pre-rendered pages for fast load times and SEO

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
- Implemented SSG:
  - Pre-rendered static pages for menu, branches, and product details using `generateStaticParams`
  - Ensured fast load times and SEO optimization for static content.
- Implemented loading states architecture:
  - Per-route loading.tsx files for component-level spinners
  - Skeleton patterns for content transitions
- Developed error boundary strategy:
  - Global app/not-found.tsx for 404 pages
  - Route-specific not-found.tsx for invalid product IDs
  - Context-aware error recovery flows

### 3. AI Collaboration

- Used AI assistance for:
  - Initial component scaffolding
  - Animation implementations (replaced with custom keyframes)
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
- Testing Verification:
  - Validated loading state transitions between routes
  - Tested 404 scenarios for both global and product-specific cases
  - Ensured error boundaries maintain navigation consistency

### 5. Final Polish

- Integrated toast notifications
- Added success/error states
- Implemented smooth animations using custom keyframes
- Created documentation
- Optimized build output
- Conducted user flow testing
