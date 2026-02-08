export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  honeypot?: string; // Anti-spam field
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Shield' | 'Hammer' | 'MapPin' | 'School';
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}
