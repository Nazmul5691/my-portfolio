import type { Project } from "../types/project";


export const projectData: Project[] = [
  {
    id: 1,
    name: "Dream Tour — Tour Booking Platform",
    image: "https://res.cloudinary.com/dh3ej57qw/image/upload/v1768909282/tour-booking-website2_xcvnx4.jpg",
    description: "A modern, role-based tour booking web application built with Next.js App Router, designed for exploring Bangladesh.",
    projectOverview: "Dream Tour is a full-featured booking platform where users can browse, book, and review various tour packages of Bangladesh. It has been built following a scalable architecture.",
    techStack: `Frontend: Next.js 16 (App Router), TypeScript.
      Styling: Tailwind CSS v4, Framer Motion (Animations), Radix UI.
      Backend & DB: Mongoose, MongoDB.
      Validation: Zod & React Hook Form.`,
    authentication: `JWT & Cookies: Secure authentication system with access & refresh tokens.
      Role Protection: Separate access levels for User, Guide, Admin, and Super Admin.
      Security: Secure cookie-based auth and centralized route protection.`,
    paymentSystem: `Gateway: SSLCommerz (Bangladesh's top payment gateway).
      Features: Secure checkout, automatic payment verification, and refund/cancel handling.`,
    folderStructure: `src/app: File-based routing (App Router).
      src/services: API calling and logic isolation.
      src/zod: Centralized schema validation.`,
    languages: ["Next.js", "TypeScript", "Tailwind v4", "Mongoose", "SSLCommerz"],
    github: "https://github.com/Nazmul5691/tour-booking-frontend",
    demo: "https://tour-booking-frontend-indol.vercel.app"
  },
  {
    id: 2,
    name: "Digital Wallet System",
    image: "https://res.cloudinary.com/dh3ej57qw/image/upload/v1768911426/exy-pay_auabkh.jpg",
    description: "A secure, role-based fintech frontend similar to bKash, facilitating seamless money transfers.",
    projectOverview: "This is a Digital Wallet system (Exy-Pay) where Users, Agents, and Admins can manage their financial activities. It supports dynamic transactions and real-time balance updates.",
    techStack: `Core: React.js, TypeScript.
      State Management: Redux Toolkit & RTK Query.
      Backend (API): Node.js, Express, MongoDB.
      UI: Tailwind CSS, Lucide Icons, Sonner (Toasts).`,
    authentication: `Secure Login: Role-based login (User/Agent).
      Persistence: User session is maintained using Redux-persist.
      Authorization: Private routes for dashboard protection.`,
    coreFeatures: `Money Flow: Send Money, Cash-out, and Cash-in facility through Agent.
      Analytics: Transaction history and statistical data visualization on dashboard.
      Interactive Tour: Interactive walkthrough guide for new users.`,
    folderStructure: `src/redux: RTK Query slice and store configuration.
      src/pages: Dedicated views for Admin, Agent, and User.
      src/utils: Helper functions for balance calculation and formatting.`,
    languages: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Node.js", "MongoDB"],
    github: "https://github.com/Nazmul5691/digital-wallet-system-frontend",
    demo: "https://digital-wallet-system-frontend-six.vercel.app"
  },
  {
    id: 3,
    name: "Growify - SEO & Digital Agency",
    image: "https://res.cloudinary.com/dh3ej57qw/image/upload/v1768911617/growify_tah6xu.jpg",
    description: "A high-performance agency portfolio featuring glass-morphism and engaging animations.",
    projectOverview: "Growify is a portfolio website for an SEO agency. It is basically built for business service display, client case studies, and lead generation.",
    techStack: `Frontend: React.js.
      Styling: Tailwind CSS v4 (Modern styling).
      Icons & Animation: Lucide Icons & Framer Motion.`,
    designUI: `Glass-morphism: Modern blurred-glass effects and sleek UI components.
      Responsiveness: Pixel perfect layout on all devices from desktop to mobile.
      Custom CSS: Unique hover effects and keyframe animations beyond Tailwind.`,
    pageBreakdowns: `Blog Page: Platform for sharing articles on digital marketing trends.
      Portfolio Page: Industry-wise successful project details showcase.
      Consultation Page: Optimized contact form for collecting leads.`,
    performanceHosting: `Vercel: Fast deployment and optimized static asset delivery.
      SEO Optimized: Meta tags and semantic HTML structure ensured.`,
    languages: ["React", "Tailwind v4", "Framer Motion", "Lucide Icons"],
    github: "https://github.com/Nazmul5691/Growify-Portfolio",
    demo: "https://growify-rho.vercel.app"
  }
];