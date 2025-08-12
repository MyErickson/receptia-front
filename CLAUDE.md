# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Router v7 application with server-side rendering (SSR) enabled, using TypeScript, TailwindCSS, and Biome for code formatting and linting. The project includes Three.js/React Three Fiber for 3D graphics, GSAP and Framer Motion for animations, and i18next for internationalization.

## Essential Commands

### Development
- `npm run dev` - Start development server with HMR on http://localhost:5173
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run typecheck` - Generate types and run TypeScript type checking

### Code Quality
- `npx biome check .` - Run formatter, linter and import sorting
- `npx biome lint .` - Run linter only
- `npx biome format --write .` - Format code
- `npx biome ci .` - Run all checks (for CI environments)

## Architecture

### React Router v7 Structure
- **File-based routing**: Routes are defined in `app/routes.ts` using explicit route configuration
- **Route modules**: Each route exports React components and route-specific functions (meta, links, loader, action)
- **Type safety**: Route types are auto-generated in `.react-router/types/` directory
- **SSR by default**: Server-side rendering is enabled in `react-router.config.ts`

### Key Directories
- `app/` - Application source code
  - `routes/` - Route components
  - `+types/` - Auto-generated route types
  - `root.tsx` - Root layout component with error boundary
  - `routes.ts` - Route configuration
- `public/` - Static assets served directly
- `build/` - Production build output (client and server bundles)

### Path Aliases
- `~/` maps to `./app/` directory (configured in tsconfig.json)

### Styling Configuration
- TailwindCSS v4 with Vite plugin integration
- CSS imports through `app.css`
- Inter font family loaded via Google Fonts

### Code Style
- Biome for formatting and linting
- Tab indentation
- Double quotes for strings
- Automatic import organization enabled

### Important Dependencies
- **3D Graphics**: `@react-three/fiber`, `three`
- **Animation**: `framer-motion`, `gsap`
- **Internationalization**: `i18next`, `react-i18next`
- **Utilities**: `clsx` for className management

### Docker Support
The project includes a Dockerfile for containerized deployment, suitable for platforms like AWS ECS, Google Cloud Run, or any Docker-compatible hosting service.