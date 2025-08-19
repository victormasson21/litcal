# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Litcal is a Next.js application that displays a literary calendar of quotes organized by dates. Users can browse quotes by year view, month view, or individual day view. The application uses Supabase as its database backend and is deployed on Vercel.

## Common Development Commands

```bash
# Development server (with Turbopack)
pnpm dev
# or
npm run dev

# Build for production
pnpm build
# or  
npm run build

# Start production server
pnpm start
# or
npm start

# Run ESLint
pnpm lint
# or
npm run lint
```

## Architecture Overview

### Next.js App Router Structure
- **Root Layout** (`app/layout.tsx`): Uses Libre Caslon Text font, defines base HTML structure
- **Home Page** (`app/page.tsx`): Year view showing all months with quote availability
- **Month Pages** (`app/[month]/page.tsx`): Month view showing all days with quote indicators
- **Day Pages** (`app/[month]/[day]/page.tsx`): Individual quote display

### Data Layer
- **Database Service** (`app/lib/database.ts`): Centralized Supabase queries with well-documented methods for different use cases (build-time, month pages, day pages)
- **Navigation Service** (`app/lib/navigation.ts`): Handles prev/next navigation logic across months and days
- **Supabase Client** (`app/lib/supabase.ts`): Database connection using environment variables

### Type System
- **Core Types** (`app/types/types.ts`): MonthName union type, Quote interface, page prop interfaces
- Uses TypeScript with strict mode enabled
- Page components receive params as Promise (Next.js 15 pattern)

### Component Architecture
- **Year Component**: Grid layout showing all 12 months with quote availability indicators
- **Month Component**: Calendar-style layout showing days with quote availability
- **Day Component**: Quote display with navigation between adjacent quotes
- **Seasons Component**: Visual seasonal indicators and theming
- **Navigation Component**: Reusable nav bar with prev/center/next pattern

### Database Schema (Supabase)
Table: `quotes_dev`
- `id`: Primary key
- `day`: Day of month (1-31)
- `month`: Month name (lowercase string)
- `quote`: Quote text
- `author`: Author name
- `book`: Book title
- `year`: Year of publication
- `display`: Boolean flag for showing/hiding quotes

### Static Generation
- Uses `generateStaticParams` for all dynamic routes
- Build-time queries populate static paths for months and days with available quotes
- Production config exports static site with optional base path support

### Environment Variables
Required for Supabase connection:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `PAGES_BASE_PATH` (optional, for deployment)

### Key Helper Functions
- `getQuoteDaysByMonth()`: Transforms quote locations into month-grouped data structure
- `getDayPath()`, `getNextMonth()`, `getPreviousMonth()`: Navigation utilities
- `getDays()`: Generates day arrays for calendar layouts

### Styling
- Global CSS with custom properties for theming
- CSS Modules for component-specific styles
- Responsive design with mobile-first approach
- Seasonal color schemes and imagery