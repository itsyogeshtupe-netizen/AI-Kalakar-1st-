/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: 'Production' | 'Corporate' | 'Social' | 'Creative' | 'Documentary';
  features: string[];
  icon: string; // Dynamic Lucide Icon name
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'AI Advertisements' | 'Corporate Videos' | 'Historical Projects' | 'Tourism Films' | 'Social Campaigns';
  imageUrl: string;
  client: string;
  year: string;
  duration: string;
  aspectRatio: string;
  techStack: string[];
  aiPromptSnippet?: string;
  projectStory?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  logoText: string;
  rating: number;
  feedback: string;
  avatarUrl: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  icon: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface StatItem {
  value: string;
  label: string;
  subText: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}
