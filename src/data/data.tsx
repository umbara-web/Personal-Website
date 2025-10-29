import React from 'react';
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { GiMaterialsScience, GiSandsOfTime } from 'react-icons/gi';
import { DiJava, DiPython, DiVisualstudio } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { IoIosStarOutline } from 'react-icons/io';

interface SkillItem {
  name: string;
  icon: React.ReactElement;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

interface NavItem {
  id: string;
  label: string;
}

interface Testimonial {
  name: string;
  position: string;
  content: string;
  image: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

interface Experience {
  id: number;
  company: string;
  logo: React.ReactElement;
  title: string;
  period: string;
  description: string;
  skills: string[];
}

// Skills Data
const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
      { name: 'CSS', icon: <FaCss3Alt className='text-blue-500' /> },
      { name: 'SASS', icon: <FaSass className='text-pink-400' /> },
      { name: 'JavaScript', icon: <FaJs className='text-yellow-400' /> },
      { name: 'React JS', icon: <FaReact className='text-cyan-400' /> },
      { name: 'Angular', icon: <FaAngular className='text-red-500' /> },
      { name: 'Redux', icon: <SiRedux className='text-purple-500' /> },
      { name: 'Next JS', icon: <RiNextjsFill className='text-white' /> },
      {
        name: 'Tailwind CSS',
        icon: <RiTailwindCssFill className='text-teal-400' />,
      },
      {
        name: 'GSAP',
        icon: <MdOutlineSettingsApplications className='text-green-500' />,
      },
      {
        name: 'Material UI',
        icon: <GiMaterialsScience className='text-blue-400' />,
      },
      { name: 'Bootstrap', icon: <FaBootstrap className='text-purple-600' /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: <SiSpring className='text-green-600' /> },
      { name: 'Node JS', icon: <FaNodeJs className='text-green-400' /> },
      { name: 'Express JS', icon: <SiExpress className='text-gray-300' /> },
      { name: 'MySQL', icon: <SiMysql className='text-blue-400' /> },
      { name: 'MongoDB', icon: <SiMongodb className='text-green-500' /> },
      { name: 'Firebase', icon: <SiFirebase className='text-yellow-500' /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className='text-sky-500' /> },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: <SiC className='text-blue-400' /> },
      { name: 'C++', icon: <SiCplusplus className='text-blue-500' /> },
      { name: 'Java', icon: <DiJava className='text-red-600' /> },
      { name: 'Python', icon: <DiPython className='text-yellow-400' /> },
      { name: 'C#', icon: <TbBrandCSharp className='text-purple-400' /> },
      {
        name: 'JavaScript',
        icon: <SiJavascript className='text-yellow-400' />,
      },
      { name: 'TypeScript', icon: <SiTypescript className='text-blue-400' /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit className='text-orange-500' /> },
      { name: 'GitHub', icon: <SiGithub className='text-white' /> },
      { name: 'VS Code', icon: <DiVisualstudio className='text-blue-500' /> },
      { name: 'Postman', icon: <SiPostman className='text-orange-400' /> },
      { name: 'Vercel', icon: <SiVercel className='text-white' /> },
      { name: 'Netlify', icon: <SiNetlify className='text-teal-400' /> },
      { name: 'Figma', icon: <SiFigma className='text-pink-500' /> },
    ],
  },
];

// Navigation data
const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart',
    content:
      '"Imam delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Michael Chen',
    position: 'Product Manager, InnovateCo',
    content:
      '"Working with Imam was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'David Wilson',
    position: 'Founder, StartupHub',
    content:
      '"Imam\'s technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Emily Chen',
    position: 'Marketing Head at Tech Solutions',
    content:
      '"The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product."',
    image: '../src/assets/emily-chen.svg',
  },
  {
    name: 'Sarah Tan',
    position: 'Product Manager, Finovate',
    content:
      '"The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch."',
    image: '../src/assets/sarah-tan.svg',
  },
  {
    name: 'John Lee',
    position: 'Creative Director at Innovate Corp',
    content:
      '"Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively."',
    image: '../src/assets/john-lee.svg',
  },
];

// Portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    title: 'Landing Page',
    category: 'Frontend Development',
    image: '../src/assets/portfolio1.svg',
  },
  {
    title: 'Todo App',
    category: 'Frontend Development',
    image: '../src/assets/portfolio3.svg',
  },
  {
    title: 'Landing Page',
    category: 'Frontend Development',
    image: '../src/assets/portfolio2.svg',
  },
  {
    title: 'E-commerce Website',
    category: 'Frontend Development',
    image: '../src/assets/portfolio5.svg',
  },
  {
    title: 'Movie Website',
    category: 'Frontend Development',
    image: '../src/assets/portfolio4.svg',
  },
];

// Experience data
const experiences: Experience[] = [
  {
    id: 1,
    company: 'Webverse Digital',
    logo: <GiSandsOfTime />, // replace with actual logo
    title: 'Fullstack Developer',
    period: 'April 2024 - Present',
    description:
      'Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'TypeScript',
      'Node JS',
      'Tailwind CSS',
      'MongoDB',
      'Redux',
      'Next JS',
    ],
  },
  {
    id: 2,
    company: 'Agumentik Group of Companies',
    logo: <IoIosStarOutline />, // replace with actual logo
    title: 'Fullstack Engineer',
    period: 'July 2023 - March 2024',
    description:
      'Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using modern technologies.',
    skills: ['React JS', 'Node JS', 'Express', 'MongoDB'],
  },
];

export { skillsData, navItems, testimonials, portfolioItems, experiences };
