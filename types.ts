
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Admin Types
export type MediaCategory = 'video' | 'series' | 'song';

export interface AdminMedia {
  id: string;
  title: string;
  category: MediaCategory;
  uploadDate: string;
  size: string;
  status: 'published' | 'draft' | 'processing';
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  subscription: 'Free' | 'Pro' | 'Enterprise';
  joinDate: string;
  status: 'active' | 'inactive';
}

export interface AppStats {
  totalUsers: number;
  activeSubs: number;
  monthlyRevenue: number;
  storageUsed: string;
}
