# Portfolio Website - Yash Shedge

## Overview

This is a modern, responsive personal portfolio website built for Yash Shedge, showcasing his expertise in AI, IoT, and full-stack development. The application features a clean, professional design with a purple color theme and multi-page navigation built with React Router DOM.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple
- **Development**: Hot module replacement with Vite middleware integration

## Key Components

### Client-Side Components
1. **Navigation System**: Fixed navbar with responsive mobile menu
2. **Page Components**: 
   - Home: Hero section with profile photo and social links
   - Projects: Grid layout showcasing GitHub repositories
   - About: Education timeline and personal information
   - Skills: Categorized technical skills display
   - Experience: Professional experience and achievements
   - Contact: Contact form with validation
3. **UI Library**: Complete shadcn/ui component system for consistent design
4. **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Server-Side Components
1. **Express Server**: RESTful API with middleware for logging and error handling
2. **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
3. **Storage Interface**: Abstracted storage layer with in-memory fallback
4. **Development Integration**: Vite middleware for seamless development experience

## Data Flow

### Client-Server Communication
1. Client makes HTTP requests to `/api/*` endpoints
2. Express server processes requests and interacts with storage layer
3. Responses are logged and returned with appropriate status codes
4. React Query manages caching and state synchronization on the client

### Database Schema
- **Users Table**: Basic user authentication structure with username and password fields
- **Extensible Design**: Schema can be extended for additional portfolio data

### Asset Management
- **Static Assets**: Profile photos and other media served through Vite's asset handling
- **Public Directory**: Built assets served from `dist/public` in production

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with modern hooks and concurrent features
- **UI Components**: Extensive Radix UI primitive collection
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Utilities**: Date manipulation with date-fns, class management with clsx

### Backend Dependencies
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle with Zod integration for type-safe database operations
- **Session Management**: PostgreSQL-based session storage
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **Type Checking**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Replit Integration**: Cartographer plugin for development environment

## Deployment Strategy

### Production Build Process
1. **Client Build**: Vite compiles React application to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Asset Optimization**: Vite handles code splitting and asset optimization
4. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for hot reloading and Vite middleware
- **Production**: Serves built assets and runs compiled Express server
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Deployment Targets
- **Replit Autoscale**: Configured for automatic scaling deployment
- **Port Configuration**: External port 80 mapped to internal port 5000
- **Build Commands**: Automated build process with npm scripts

## Changelog

```
Changelog:
- June 16, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```