import { HomeIcon, NotebookIcon } from 'lucide-react';
import { Icons } from '@/components/icons';

export const DATA = {
  name: 'Fikri Pratama',
  initials: 'FP',
  url: 'https://fikri.io',
  location: 'Bogor, Jawa Barat',
  locationLink: 'https://www.google.com/maps/place/bogor',
  description: 'I love building and learning new things. Active on Instagram.',
  summary:
    'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
  avatarUrl: '/me.png',
  skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Docker', 'Git'],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'fikri.akbar1p@gmail.com',
    tel: '+6281291523160',
    social: {
      X: {
        name: 'X',
        url: 'https://x.com/fiikriey',
        icon: Icons.x,
        navbar: true,
      },
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/fikripratama73',
        icon: Icons.github,
        navbar: true,
      },
      Linkedin: {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/fikriakbarp/',
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: {},
  education: [
    {
      school: 'SMK WIKRAMA BOGOR',
      href: 'https://smkwikrama.sch.id/',
      degree: 'Vocational High School',
      logoUrl: '/wikrama.png',
      start: '2023',
      end: '2026',
    },
  ],
};
