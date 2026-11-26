import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://aymenzagnouni.dev', lastModified: new Date() },
    { url: 'https://aymenzagnouni.dev/projects/domfix', lastModified: new Date() },
    { url: 'https://aymenzagnouni.dev/projects/powertracker', lastModified: new Date() },
  ];
}
