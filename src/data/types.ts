export type Status = 'LIVE' | 'IN DEVELOPMENT' | 'PLANNED';

export interface Evidence {
  title: string;
  /** What the visitor is looking at, or what asset is expected here. */
  note: string;
  /** Path under public/images/. Empty = labelled placeholder. */
  src?: string;
  alt?: string;
  /** Where the asset comes from (public URL) and when it was captured. */
  source?: string;
  wide?: boolean;
}

export interface Reference {
  title: string;
  url: string;
  year: string;
  type: string;
  /** confirm = published by the brand, my contribution not yet confirmed; later = after my project period, not my work. */
  status: 'confirm' | 'later' | 'own';
  /** Preview image under public/images/, when the publication has one. */
  img?: string;
}

export interface Group { title: string; items: string[] }

export interface Project {
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  client: string;
  period: string;
  category: string[];
  summary: string;
  accent: 'burgundy' | 'bordeaux' | 'sand' | 'ink';
  /** Card image under public/images/. Without it the card is typographic. */
  cover?: string;
  /** One line shown on the project card. */
  cardRole: string;
  /** Short words shown large on a card that has no image. */
  cardWords?: string[];
  overview: string[];
  challenge: string;
  role: string[];
  strategy: Group[];
  /** Optional ordered journey shown as a diagram. */
  journey?: { title: string; steps: string[] };
  execution: string[];
  /** `confirm: true` items are only shown in draft mode. */
  tools: { name: string; confirm?: boolean }[];
  evidence: Evidence[];
  results: string[];
  attribution: { mine: string[]; brand: string[]; today: string[] };
  /** Optional full-width feature inside the case study (for example a creative production). */
  feature?: {
    title: string;
    category: string[];
    blocks: { label: string; text: string; confirm?: boolean }[];
    /** Image under public/images/. Empty = labelled placeholder. */
    image?: string;
    /** Video file under public/ (mp4). Shown with player controls. */
    video?: string;
    /** Additional images of the final execution. */
    gallery?: string[];
    placeholder: string;
    credit?: string;
  };
  /** Kinassay Lab only: feature status table. */
  status?: { feature: string; status: Status; detail: string }[];
  links?: { label: string; href: string }[];
}
