# GSC (Genius Software Core) - Replit Setup

## Project Overview
GSC is a comprehensive software development and CRM platform built with modern web technologies. The project uses a full-stack TypeScript setup with React frontend and Express backend.

## Current Setup Status
✅ **Successfully configured for Replit environment**
- PostgreSQL database connected
- Frontend and backend running on port 5000
- Vite dev server configured with proxy support
- Deployment configuration completed

## Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Full-stack**: Both served on single port (5000) with Vite middleware

## Development Workflow
- **Start**: Run workflow "Start application" or `npm run dev`
- **Build**: `npm run build`
- **Deploy**: Configured for autoscale deployment

## Key Configuration Changes Made
1. Fixed tsx execution by using `npx tsx` instead of `tsx`
2. Vite server already configured with `allowedHosts: true` for Replit proxy
3. Express server configured to bind to `0.0.0.0:5000`
4. Deployment configured for production builds

## Project Structure
- `/client/` - React frontend application
- `/server/` - Express backend API
- `/shared/` - Shared TypeScript types and schemas
- `/attached_assets/` - Project assets and uploaded files

## Database & CRM Features
The application includes:
- Admin-only CRM system
- User authentication and management
- Service and testimonial management
- Multi-language support (EN/AR)
- Real-time notifications

## Recent Changes (September 2025)
- ✅ **Mobile App Development Service Page Enhancement Completed (Latest - Sept 12, 2025)**
- ✅ **Complete mobile app service page with exactly 20 comprehensive app cards across 7 categories**
- ✅ **Enhanced "What You'll Get" section with 8 concrete Arabic benefit points**
- ✅ **Enhanced "How We Work" section with 4 clear Arabic development process steps**
- ✅ **Working category filters and comprehensive app showcase**
- ✅ **Proper CTA routing and mobile app service identification**
- ✅ **All requirements verified and approved by architect review**
- ✅ Fresh GitHub Import Setup Completed Successfully
- ✅ All project configurations verified and working properly
- ✅ PostgreSQL database connected and seeded with initial data
- ✅ Frontend and backend both functioning on port 5000
- ✅ Webview configuration set up correctly for Replit preview
- ✅ Deployment settings configured for autoscale production builds
- ✅ Workflow configured with proper webview output type and port 5000
- ✅ **Application fully functional and ready for use**
- ✅ **Latest import verification completed - all systems operational**

## Latest Import Verification Results (September 11, 2025)
- ✅ **FRESH GITHUB IMPORT SETUP COMPLETED SUCCESSFULLY (LATEST)**
- ✅ PostgreSQL database connection established and verified working
- ✅ Database tables verified and seeded with Arabic/English content
- ✅ React frontend loads and renders properly with Vite HMR connected
- ✅ Express backend API responds correctly (tested /api/services and /api/testimonials)
- ✅ Multi-language support working (Arabic RTL and English content)
- ✅ Vite proxy configuration allows host access for Replit environment (allowedHosts: true)
- ✅ Workflow configured with webview output type on port 5000
- ✅ Deployment configuration completed for autoscale production builds
- ✅ **ALL SYSTEMS VERIFIED OPERATIONAL - IMPORT PROCESS COMPLETED**
- ✅ **APPLICATION FULLY FUNCTIONAL AND READY FOR USE**

## Previous Changes (September 8, 2025)
- ✅ CTA section removed from service detail page
- ✅ System optimizations and bug fixes completed

## ERPNext v15 Feature Implementation (Latest - Sept 7, 2025)
- ✅ **Complete ERPNext v15 subsection added to ERP service page**
- ✅ Comprehensive sections: Hero, Overview, Modules, Use Cases, Deployment, Pricing, Lead Form
- ✅ Full bilingual support (Arabic/English) with proper RTL layout for Arabic
- ✅ Lead generation form with anchor link (#erpnext-lead-form) for direct navigation
- ✅ ERPNext v15 quick access button added to ERP service card in services index
- ✅ Enhanced SEO meta tags for ERPNext v15 content when viewing ERP service
- ✅ Modern responsive design with animations and interactive elements
- ✅ **Service integration successfully tested and verified**