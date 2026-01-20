export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  projectOverview: string;
  techStack: string;
  authentication?: string;
  paymentSystem?: string;
  folderStructure?: string;
  coreFeatures?: string;
  designUI?: string;
  pageBreakdowns?: string;
  performanceHosting?: string;
  languages: string[];
  github: string;
  demo: string;
}