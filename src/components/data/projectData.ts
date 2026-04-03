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
    name: "Doctorate — Healthcare Consultation Platform",
    image: "https://res.cloudinary.com/dh3ej57qw/image/upload/q_auto/f_auto/v1775234169/33000ee0-1c47-4d18-aa31-ccbcac29e01b.png", 
    description: "A comprehensive, role-based telemedicine platform connecting patients with verified doctors for digital consultations.",
    projectOverview: "Doctorate is a production-grade healthcare solution featuring AI-powered doctor matching, secure appointment scheduling, and automated billing. It supports complex workflows for Patients, Doctors, and Admins with a modular architecture.",
    techStack: `Frontend: Next.js 16 (App Router), React 19, TypeScript.
      Styling: Tailwind CSS v4, Radix UI, Framer Motion.
      Backend: Node.js (Express v5), PostgreSQL, Prisma ORM.
      Infrastructure: Stripe (Payments), Cloudinary (Media), Nodemailer.`,
    authentication: `Advanced RBAC: Multi-layered access control for Patient, Doctor, Admin, and Super Admin.
      Token Lifecycle: Secure JWT implementation with Access/Refresh tokens and cookie-based persistence.
      Middleware: Centralized route protection and automated token rotation logic.`,
    aiFeatures: `Symptom-Based Search: AI-powered system that analyzes user symptoms (e.g., "chest pain") to suggest relevant specialists (e.g., Cardiologist).
      Smart Discovery: Eliminates manual filtering, improving patient conversion and UX.`,
    paymentSystem: `Stripe Integration: Seamless payment processing for consultations and subscriptions.
      Features: Secure checkout, subscription management, and automated billing.`,
    folderStructure: `src/app: Next.js App Router for file-based routing.
      src/services: API calls and business logic isolation.
      src/utils: Helper functions for authentication, payments, and AI features.`,
    languages: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Express", "Stripe"],
    github: "https://github.com/Nazmul5691/health-care-frontend",
    demo: "https://health-care-frontend-tshw.vercel.app/"
  },
  {
    id: 3,
    name: "Digital Wallet System",
    image: "https://res.cloudinary.com/dh3ej57qw/image/upload/q_auto/f_auto/v1774993586/4b0f1a1b-7425-4a8a-b830-c292b13dbfdd.png",
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
];