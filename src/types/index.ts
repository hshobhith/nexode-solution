export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  category: "Digital" | "AV Solutions";
  description: string;
  features: string[];
  accentColor?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  message: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Technology {
  name: string;
  category: string;
}
