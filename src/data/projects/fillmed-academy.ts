import type { Project } from '../types';

export const fillmedAcademy: Project = {
  slug: 'fillmed-academy',
  order: 3,
  title: 'FILLMED E-Academy',
  subtitle: 'Building a Connected Medical Learning Experience',
  client: 'FILLMED Laboratories',
  period: 'FILLMED',
  category: ['Digital Learning', 'CRM', 'Email Automation', 'HCP Engagement'],
  summary: 'Restructuring a digital learning platform for healthcare professionals and connecting it to CRM and email communication.',
  accent: 'sand',
  cover: 'fillmed/page-eacademy.jpg',
  cardRole: 'Platform restructuring · CRM · Email automation',
  overview: [
    'Training is how a medical aesthetics company earns the trust of practitioners. The E-Academy is FILLMED’s digital learning space for healthcare professionals.',
    'I worked on how the platform is organised and on what surrounds it: who is in the database, what they receive, and how learning and communication reinforce each other.',
  ],
  challenge: 'How can a medical aesthetics company create an accessible, engaging and scalable digital learning ecosystem for healthcare professionals?',
  role: ['Digital learning platform restructuring', 'User journeys', 'CRM strategy', 'Email marketing', 'Marketing automation'],
  strategy: [
    { title: 'Platform restructuring', items: ['E-learning information architecture', 'Course organisation', 'User experience', 'Training content structure', 'Physician onboarding'] },
    { title: 'CRM', items: ['HCP database segmentation', 'Contact management', 'Training-related communication', 'User lifecycle strategy'] },
    { title: 'Email marketing', items: ['Newsletters', 'Educational email campaigns', 'Training invitations', 'Webinar invitations', 'Follow-up communication', 'A/B testing'] },
    { title: 'Automation', items: ['Welcome journeys', 'Training reminders', 'Course follow-ups', 'Segmented communication', 'Re-engagement journeys'] },
  ],
  journey: { title: 'Illustrative user journey', steps: ['Doctor registration', 'CRM segmentation', 'Personalised onboarding email', 'Training or webinar', 'Follow-up and engagement'] },
  execution: [
    'The platform work was about making training easy to find and easy to follow: a clearer course structure, a simpler path for a physician who registers for the first time.',
    'The CRM work gave that platform an audience: a segmented professional database, so that an invitation to a training or a webinar reaches the practitioners it is relevant to.',
    'Email connected the two. Newsletters, educational campaigns, invitations and follow-ups carried the learning content out to physicians and brought them back to the platform.',
  ],
  tools: [
    { name: 'E-learning platform', confirm: true },
    { name: 'CRM platform', confirm: true },
    { name: 'Email marketing and automation platform', confirm: true },
  ],
  evidence: [
    { title: 'CRM and learning journey', note: 'Diagram of the journey from registration to follow-up. Rebuilt for this portfolio.', wide: true },
    { title: 'E-Academy sign-in page', note: 'Screenshot of the public sign-in page as it appears today. The interface has been updated since.', src: 'fillmed/page-eacademy.jpg', alt: 'FILLMED E-Academy sign-in page', source: 'https://fillmed.com/login-register/ · FILLMED' },
    { title: 'E-Academy interface', note: 'Asset needed: capture of the platform as it was when I worked on it (course catalogue, a course page).' },
    { title: 'Email templates', note: 'Asset needed: a newsletter, a training invitation and a follow-up from my time at FILLMED.' },
    { title: 'Automation workflow', note: 'Asset needed: workflow screenshots. Each automation is listed as implemented only once confirmed from my project files.' },
    { title: 'Segmentation model', note: 'Asset needed: the segmentation logic, anonymised.' },
  ],
  results: [
    'No engagement or completion figures are published here: they belong to FILLMED.',
    'What the work was built to achieve: a learning experience that scales beyond in-person training, and communication that reaches the right professionals at the right moment in their relationship with the brand.',
    'What I took from it: a learning platform without CRM is a library nobody is invited to. The value comes from connecting content, segmentation and timing.',
  ],
  attribution: {
    mine: ['Restructuring of the learning platform’s architecture and user journeys', 'CRM strategy and segmentation of the professional database', 'Email marketing and automation around training'],
    brand: ['The medical and scientific training content itself', 'Trainers, KOLs and the medical education programme', 'The E-Academy as a FILLMED product, before and after my involvement'],
    today: ['The E-Academy is accessible from fillmed.com. Its structure and content may have evolved since my departure.'],
  },
  links: [{ label: 'fillmed.com', href: 'https://fillmed.com' }],
};
