# KALP.AI Landing Page Application

## Overview

This is a modern, full-stack web application for KALP.AI, an academic research and data analysis service company. The application features a professional landing page with service showcases, pricing information, and contact forms. It's built with React frontend and Express backend, using a PostgreSQL database with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Build Tool**: ESBuild for server bundling
- **Development**: TSX for TypeScript execution in development

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: Neon Database serverless connection
- **Schema Management**: Type-safe schema definitions with Zod integration

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Navigation with smooth scrolling
   - Hero section with company branding
   - About section highlighting team expertise
   - Services showcase with pricing
   - Why choose us section
   - Pricing tables with student discounts
   - Contact information with multiple channels
   - Footer with quick links

2. **UI Component Library**:
   - Complete Shadcn/ui component set
   - Custom styled components with Tailwind
   - Responsive design patterns
   - Accessible form controls

### Backend Components
1. **Server Setup**:
   - Express application with middleware
   - Request logging and error handling
   - JSON and URL-encoded body parsing
   - Development-specific Vite integration

2. **Storage Layer**:
   - Abstract storage interface (IStorage)
   - In-memory storage implementation for development
   - User management with CRUD operations
   - Database-ready structure for production

3. **Development Tools**:
   - Vite integration for HMR in development
   - Static file serving for production
   - Runtime error overlay for debugging

## Data Flow

### Frontend Data Flow
1. **Component Rendering**: React components render the landing page sections
2. **User Interactions**: Smooth scrolling navigation and form interactions
3. **State Management**: TanStack Query manages server state and caching
4. **API Communication**: HTTP requests to backend API endpoints

### Backend Data Flow
1. **Request Processing**: Express middleware handles incoming requests
2. **Route Handling**: API routes process business logic
3. **Data Operations**: Storage interface manages user data
4. **Response Generation**: JSON responses sent back to frontend

### Database Integration
1. **Schema Definition**: Drizzle schema defines user table structure
2. **Type Safety**: Zod schemas ensure runtime type validation
3. **Migrations**: Drizzle Kit manages database migrations
4. **Connection Management**: Neon serverless database connection

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Database ORM with type safety
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **eslint**: Code linting
- **prettier**: Code formatting

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Database**: Neon serverless PostgreSQL
- **Environment Variables**: DATABASE_URL for database connection
- **Build Process**: Vite builds frontend, ESBuild bundles backend

### Production Deployment
- **Frontend**: Static files served from dist/public
- **Backend**: Node.js server serving API and static files
- **Database**: PostgreSQL with Drizzle migrations
- **Build Command**: Combined frontend and backend build process

### File Structure
```
client/          - React frontend application
server/          - Express backend application
shared/          - Shared TypeScript definitions and schemas
migrations/      - Database migration files
dist/           - Production build output
attached_assets/ - Static assets (logos, images)
```

### Configuration Files
- **vite.config.ts**: Frontend build configuration
- **tsconfig.json**: TypeScript configuration
- **tailwind.config.ts**: Tailwind CSS configuration
- **drizzle.config.ts**: Database configuration
- **components.json**: Shadcn/ui configuration

This architecture provides a scalable foundation for the KALP.AI landing page with room for expansion into a full-featured academic services platform.