# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilot-instructions.md-file -->

## Project Overview
Medical Assessment Hub - A Next.js 15 application showcasing digital medical assessment tools for healthcare professionals. Built as a centralized portal linking to external assessment applications.

## Architecture & Data Flow

### Core Pattern: Static Data + Client-Side Filtering
- **Data Source**: `src/data/assessments.ts` contains all assessment metadata as TypeScript interfaces
- **State Management**: Client-side React state with `useMemo` for performance (see `src/app/page.tsx`)
- **Component Hierarchy**: Header → FilterBar → AssessmentCard grid → Footer
- **External Links**: Assessment cards link to external tools, not internal pages

### Key Files Structure
```
src/
├── app/page.tsx          # Main page with filtering logic & state
├── components/           # Reusable UI components
│   ├── AssessmentCard.tsx    # Individual assessment display
│   ├── FilterBar.tsx         # Search + category filtering
│   ├── Header.tsx           # Branding with medical icons
│   └── Footer.tsx           # Statistics & contact info
└── data/assessments.ts   # Single source of truth for all data
```

## Development Patterns

### Assessment Data Structure
Follow the `Assessment` interface in `src/data/assessments.ts`:
- `id`: kebab-case unique identifier
- `category`: Must exist in `categories` array for filtering
- `bodyPart`: Array for multi-body-part assessments
- `url`: External link to actual assessment tool

### Component Conventions
- **Icon Mapping**: `AssessmentCard.getIcon()` maps categories to Lucide icons
- **Responsive Design**: All components use Tailwind's `md:` and `lg:` breakpoints
- **Color Scheme**: Blue primary (`blue-600`), clinical grays, green/red accents for categories
- **External Links**: Always `target="_blank" rel="noopener noreferrer"`

### State Management Pattern
Main page uses controlled components pattern:
```tsx
const [selectedCategory, setSelectedCategory] = useState('All');
const [searchTerm, setSearchTerm] = useState('');
const filteredAssessments = useMemo(() => /* filtering logic */, [selectedCategory, searchTerm]);
```

## Deployment & Build Configuration

### Standalone Deployment Ready
- `next.config.ts` configured with `output: 'standalone'` for self-hosted servers
- Static assets require manual copying: `cp -r .next/static .next/standalone/.next/`
- Nginx serves static files, PM2 runs Node.js server on custom port

### Server Deployment Workflow
**One-time setup:**
```bash
git clone https://github.com/radion-x/assessment-hub.git /opt/assessments
# Configure Nginx with static file serving and reverse proxy to custom port
# Enable site and configure SSL with Certbot
```

**Update workflow:**
```bash
cd /opt/assessments
git pull
npm install
npm run build
cp -r .next/static .next/standalone/.next/  # Critical: Copy static assets
cp -r public .next/standalone/
PORT=38471 pm2 restart assessment-hub --update-env
```

### Nginx Configuration Pattern
- Static files (`/_next/static/`) served directly from `.next/static/`
- All other requests proxied to Node.js server on custom port
- SSL termination at Nginx level
- Cache headers for static assets (`expires 1y`)

### Development Commands
- `npm run dev` - Development with Turbopack enabled
- `npm run build` - Production build creates `.next/standalone/` folder
- VS Code task configured for background dev server

## Medical Domain Considerations

### Content Guidelines
- Professional, clinical language in all copy
- Accessibility compliance for healthcare environments  
- Validate medical terminology with healthcare professionals
- Ensure assessment descriptions match clinical literature

### New Assessment Integration
1. Add to `assessments` array in `src/data/assessments.ts`
2. Update `categories` array if introducing new category
3. Verify external URL accessibility and HTTPS
4. Test filtering and search functionality

## Technical Constraints
- No backend/API - purely static data presentation
- External dependencies: Only Lucide React icons
- Tailwind v4 with PostCSS configuration
- TypeScript strict mode enabled
- No database or CMS integration planned
