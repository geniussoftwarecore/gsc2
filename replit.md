# Mobile App Development Service Platform

## Overview
Comprehensive full-stack application for a mobile app development service platform with React/Vite frontend, Express backend, and PostgreSQL database. The platform provides Arabic/English bilingual support with professional service offerings.

## Recent Changes (Sept 19, 2025)
- ✅ **Mobile App Service Redesign Complete**: Updated service name to "تطوير تطبيقات الموبايل"
- ✅ **Interactive 7-Step Planning Wizard**: Completely redesigned mobile app planning system
  - Step 1: App type selection (ecommerce, educational, healthcare, etc.)
  - Step 2: Platform selection (iOS, Android, Cross-platform)
  - Step 3: Feature selection (comprehensive list of app features)
  - Step 4: Project details (name, description, timeline, budget)
  - Step 5: File uploads (optional attachments)
  - Step 6: Contact information
  - Step 7: Review and submit
- ✅ **Full Backend Integration**: Connected to existing `/api/mobile-app-orders` API
- ✅ **File Upload System**: Implemented complete file upload functionality with multer
- ✅ **Database Persistence**: All form data properly stored in `mobileAppOrders` table
- ✅ **Professional UI/UX**: Interactive mobile icons, progress tracking, validation

## User Preferences
- Prefers bilingual support (Arabic/English) with RTL layout support
- Focuses on professional service presentation
- Values comprehensive step-by-step user experiences
- Prefers existing backend integration over creating new APIs

## Project Architecture

### Frontend (React/Vite)
- **Framework**: React 18 with Vite for fast development
- **UI Library**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions

### Backend (Express/Node.js)
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **File Uploads**: Multer for handling multipart form data
- **API Design**: RESTful endpoints with comprehensive error handling
- **Session Management**: Express sessions with database store

### Database Schema
- **Services**: Service offerings with multilingual support
- **MobileAppOrders**: Comprehensive mobile app development requests
- **Testimonials**: Client testimonials and reviews
- **File storage**: Organized uploads in `uploads/mobile-app-orders/`

### Key Features
- **Bilingual Support**: Arabic/English with proper RTL layout
- **Interactive Wizards**: Step-by-step forms for complex processes
- **File Upload System**: Secure file handling and storage
- **Professional Design**: Modern UI with smooth animations
- **Responsive Layout**: Mobile-first design approach
- **SEO Optimized**: Meta tags and Open Graph implementation

## Development Guidelines
- Always use existing backend APIs when available
- Maintain bilingual support in all new features
- Follow shadcn/ui design patterns
- Use TanStack Query for all API interactions
- Implement proper validation with Zod schemas
- Add data-testid attributes for all interactive elements

## Current Status
✅ **Production Ready**: Mobile app development service fully functional
✅ **End-to-End Testing**: Complete workflow from frontend to database
✅ **File Upload System**: Working file attachment system
✅ **Professional UI**: Interactive and responsive design
✅ **Database Integration**: All data properly persisted

## Next Steps (Future Enhancements)
- User authentication system
- Admin dashboard for managing orders
- Real-time status updates for projects
- Automated email notifications
- Payment integration
- Project portfolio showcase