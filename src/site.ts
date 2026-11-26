// Central place for the artist's details. Edit these and the whole site updates.
export const site = {
  name: 'Ayotisegun',
  fullName: 'Obajuluwa Timothy Oluwasegun',
  role: 'Impasto painter',
  location: 'Nigeria',
  tagline:
    'I transform everyday moments into vibrant visual stories that celebrate the beauty and resilience of life.',
  description:
    'Ayotisegun (Obajuluwa Timothy Oluwasegun) is a Nigerian impasto painter whose heavily textured canvases capture the beauty, motion and resilience of everyday life.',
  instagram: 'https://www.instagram.com/ayotisegun/',
  instagramHandle: '@ayotisegun',
  // Fill these in when available. Empty values are hidden on the site.
  email: '',
  whatsapp: '', // international format without "+", e.g. 2348012345678
  youtube: '', // link to the "From Inspiration to Impasto" artist spotlight
};

export const contactLinks = () =>
  [
    site.email && { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    site.whatsapp && { label: 'WhatsApp', value: `+${site.whatsapp}`, href: `https://wa.me/${site.whatsapp}` },
    { label: 'Instagram', value: site.instagramHandle, href: site.instagram },
    site.youtube && { label: 'YouTube', value: 'Artist spotlight', href: site.youtube },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

export const statusLabel: Record<string, string> = {
  available: 'Available',
  sold: 'Sold',
  commission: 'Commission',
  private: 'Private collection',
};
