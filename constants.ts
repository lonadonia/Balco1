import { BenefitItem, GalleryImage } from './types';

export const BENEFITS: BenefitItem[] = [
  {
    id: 'safety',
    title: 'Impact Protection',
    description: 'High-density foam cores engineered to absorb shock and prevent injury in high-impact sports environments.',
    iconName: 'Shield',
  },
  {
    id: 'durability',
    title: 'Durable Finish',
    description: 'Tough, tear-resistant vinyl covers that withstand rigorous daily use. Easy to clean and maintain.',
    iconName: 'Hammer',
  },
  {
    id: 'uk-made',
    title: 'UK Quality & Compliance',
    description: 'Proudly designed and manufactured in the UK to meet strict British fire and safety standards.',
    iconName: 'MapPin',
  },
  {
    id: 'versatile',
    title: 'Versatile Application',
    description: 'Ideal for sports halls, schools, sensory rooms, and professional arenas. Custom sizes available.',
    iconName: 'School',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://i.ibb.co/R4VmQpBt/Balco-SAFEWALL-1.jpg', alt: 'Balco Safewall Installation' },
  { id: 2, src: 'https://i.ibb.co/dsKz6942/Balco-SAFEWALL-2.png', alt: 'Safewall Padding Detail' },
  { id: 3, src: 'https://i.ibb.co/4n5xPwj1/Balco-SAFEWALL-3.png', alt: 'Sports Hall Protection' },
  { id: 4, src: 'https://i.ibb.co/DHmTgpg1/Balco-SAFEWALL-4.png', alt: 'Custom Wall Padding' },
  { id: 5, src: 'https://i.ibb.co/BV6fTSLf/Balco-SAFEWALL-5.png', alt: 'Safety Wall Solution' },
];

export const COMPANY_EMAIL = 'sales@balco-sports.co.uk';
export const COMPANY_PHONE = '+44 03300 564554';
export const COMPANY_ADDRESS = 'Unit 8, Bumpers Farm Ind Est, Chippenham, SN14 6RB';
