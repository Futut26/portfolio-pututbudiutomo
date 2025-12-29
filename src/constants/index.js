import { 
  meta, 
  shopify, 
  starbucks, 
  tesla, 
  mp, 
  btn, 
  stellar_thumbnail, 
  stellar_blog, 
  stellar_dhasboard,
  alpen_thubmnail,
  alpen_blog,
  alpen_dashboard, 
  mp_thumbnail, 
  mp_property, 
  mp_dashboard, 
  stellar_ui, 
  alpen_ui,
  ibm,
  dbeaver,
  golang
} from '../assets/images';

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  php,
  mysql,
  uml,
  laravel,
  figma,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: php,
    name: 'PHP',
    type: 'Frontend',
  },
  {
    imageUrl: mysql,
    name: 'MYSQL',
    type: 'Frontend',
  },
  {
    imageUrl: uml,
    name: 'UML',
    type: 'Frontend',
  },
  {
    imageUrl: laravel,
    name: 'LARAVEL',
    type: 'Frontend',
  },
  {
    imageUrl: figma,
    name: 'FIGMA',
    type: 'Frontend',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: ibm,
    name: 'IBM AS400',
    type: 'Backend',
  },
  {
    imageUrl: dbeaver,
    name: 'DBeaver',
    type: 'Database Management',
  },
  {
    imageUrl: golang,
    name: 'Golang',
    type: 'Backend',
  },

];

export const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'MP Project',
    icon: mp,
    iconBg: '#accbe1',
    date: 'Juni 2023 - Feb 2024',
    points: [
      'Developing and maintaining web applications using LARAVEL and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Core Banking Programmer',
    company_name: 'PT Bank Tabungan Negara (Persero) Tbk',
    icon: btn,
    iconBg: '#ffffffff',
    date: 'Oktober 2024 - Present',
    points: [
      'Developing and maintaining core banking systems on the AS400 platform using RPGLE, CLP, and SQL.',
      'Collaborating with cross-functional teams including business analysts, system architects, and other developers to design and implement core banking features.',
      'Conducting system analysis to identify areas for improvement and optimization within the core banking systems.',
      'Ensuring compliance with banking regulations and security standards in all development activities.',

    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Futut26',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://linkedin.com/in/putut-budiutomo46',
  },
];

export const projects = [
  {
    id: 1,
    iconUrl: pricewise,
    theme: 'btn-back-yellow',
    name: 'MP Project Property Sales Website',
    methodology: 'Rapid Application Development',
    thumbnail: mp_thumbnail,
    technologies: ['Laravel', 'React,js', 'MySQL', 'Tailwind CSS'],
    features: ['Property Sales Page', 'Dashboard Page', 'Login and Register by Google', 'Content Management System'],
    description: "Developed a dynamic property sales website for MP Project as part of my undergraduate thesis in Information Systems. The project aimed to enhance the company's online presence and streamline the property sales process",
    link: 'https://github.com/Futut26/mp-sinergi',
    gallery: [
      {
        id: 1,
        imageUrl: mp_property,
        caption: 'Property Sales Page',
      },
      {
        id: 2,
        imageUrl: mp_dashboard,
        caption: 'Dashboard Page',
      },
    ],
  },
  {
    id: 2,
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Stellar Jardin Residence Housing Marketing Website',
    methodology: 'Waterfall',
    thumbnail: stellar_thumbnail,
    technologies: ['Laravel', 'React,js', 'MySQL', 'Tailwind CSS'],
    features: ['Property Sales Page', 'Dashboard Page', 'Blog Page', 'Content Management System'],
    description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/MP-Project-26/stellar_jardin',
    gallery: [
      {
        id: 1,
        imageUrl: stellar_blog,
        caption: 'Blog Page',
      },
      {
        id: 2,
        imageUrl: stellar_dhasboard,
        caption: 'Dashboard Page',
      },
    ],
  },
  {
    id: 3,
    iconUrl: threads,
    theme: 'btn-back-green',
    thumbnail: stellar_ui,
    name: 'UI Design for Stellar Jardin Residence Housing',
    methodology: 'Waterfall',
    technologies: ['Figma'],
    features: [],
    description: 'Build UI Design for Stellar Jardin Residence Housing using Figma.',
    link: 'https://www.figma.com/file/op3orT4PkKRqw1MwX3G9Vh/Jardin?type=design&node-id=0%3A1&mode=design&t=2YaCfvhARrFbwfhX-1',
    gallery: [
      {
        id: 1,
        imageUrl: stellar_ui,
        caption: 'UI Design',
      },
    ],
  },
  {
    id: 4,
    iconUrl: car,
    theme: 'btn-back-blue',
    thumbnail: alpen_thubmnail,
    name: 'Alpen Hills Residence Housing Marketing Website',
    methodology: 'Waterfall',
    technologies: ['Laravel', 'React,js', 'MySQL', 'Tailwind CSS'],
    features: ['Property Sales Page', 'Dashboard Page', 'Blog Page', 'Content Management System'],
    description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/MP-Project-26/alpen_hills',
    gallery: [
      {
        id: 1,
        imageUrl: alpen_blog,
        caption: 'Blog Page',
      },
      {
        id: 2,
        imageUrl: alpen_dashboard,
        caption: 'Dashboard Page',
      },
    ],
  },
  {
    id: 5,
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    thumbnail: alpen_ui,
    name: 'UI Design for Alpen Hills Residence Housing',
    methodology: 'Waterfall',
    technologies: ['Figma'],
    features: [],
    description: 'Build UI Design for Alpen Hills Residence Housing using Figma.',
    link: 'https://www.figma.com/file/3KjzhlKq4S4RZ44KL8AwhL/AlpenDesign?type=design&node-id=0%3A1&mode=design&t=H6dp1zQ1oGbhVmIp-1',
    gallery: [
      {
        id: 1,
        imageUrl: alpen_ui,
        caption: 'UI Design',
      },
    ],
  },
];
