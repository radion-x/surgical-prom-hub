# Medical Assessment Hub

A centralized Next.js web application showcasing digital versions of recognized medical assessments that doctors and surgeons require patients to complete. This platform provides easy access to validated assessment tools used in clinical practice.

## 🏥 Available Assessment Tools

The platform includes 8 comprehensive medical assessment tools:

1. **Oswestry Disability Index (ODI)** - Measures functional disability in patients with low back pain
2. **Oxford Knee Score (OKS)** - Evaluates knee function and pain levels post-surgery  
3. **Oxford Hip Score (OHS)** - Measures hip function and pain following hip replacement
4. **Knee Injury and Osteoarthritis Outcome Score (KOOS)** - Comprehensive knee injury and osteoarthritis assessment
5. **Harris Hip Score (HHS)** - Clinical evaluation of hip function and surgical outcomes
6. **VAS-SSRAA** - Visual Analog Scale for Spine Surgery Recovery and Activity Assessment
7. **Forgotten Joint Score (FJS-12)** - Measures joint awareness and treatment success
8. **EQ-5D-5L** - General health status and quality of life assessment

## 🚀 Features

- **Professional Medical Interface** - Clean, clinical design suitable for healthcare environments
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Advanced Filtering** - Filter by assessment category, body part, or search by keywords
- **Direct Access Links** - One-click access to each assessment tool
- **Comprehensive Information** - Detailed descriptions, purposes, and clinical applications

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel deployment

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd odi-showcase
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main homepage
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── AssessmentCard.tsx    # Individual assessment display
│   ├── FilterBar.tsx         # Search and category filtering
│   ├── Header.tsx           # Site header with branding
│   └── Footer.tsx           # Site footer with information
└── data/              # Static data and types
    └── assessments.ts  # Assessment data and TypeScript interfaces
```

## 🎯 Usage

### For Healthcare Professionals

1. **Browse Assessments**: View all available assessment tools on the main page
2. **Filter Tools**: Use the category filters or search functionality to find specific assessments
3. **Access Tools**: Click "Access Tool" on any assessment card to open the digital version
4. **Mobile Access**: Use the responsive design to access tools on any device

### For Developers

The codebase is structured for easy maintenance and extension:

- Add new assessments by updating `src/data/assessments.ts`
- Modify the UI by editing components in `src/components/`
- Customize styling through Tailwind CSS classes
- Extend functionality by adding new pages to `src/app/`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers (clinical workstations)
- Tablets (portable clinical use)
- Mobile devices (patient self-assessment)

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway
- Heroku

## 🔧 Customization

### Adding New Assessments

To add a new assessment tool:

1. Add the assessment data to `src/data/assessments.ts`:
```typescript
{
  id: "new-assessment",
  name: "New Assessment Tool",
  abbreviation: "NAT",
  description: "Description of the assessment...",
  url: "https://your-assessment-url.com",
  category: "Assessment Category",
  bodyPart: ["Relevant Body Part"],
  purpose: "Clinical purpose of the assessment"
}
```

2. If needed, add new categories to the `categories` array
3. The new assessment will automatically appear in the interface

### Styling Customization

The application uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify the color scheme in component files
- **Layout**: Adjust grid layouts and spacing in `page.tsx`
- **Typography**: Update font sizes and weights throughout components
- **Branding**: Customize the header and footer in their respective components

## 📄 License

This project is designed for educational and clinical use. Please ensure proper validation and approval for clinical implementation.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions about the assessment tools or technical support, please refer to the individual assessment websites or contact the development team.

---

Built with ❤️ for the healthcare community
