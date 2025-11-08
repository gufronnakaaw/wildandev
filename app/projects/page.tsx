import Container from '@/components/Container';
import Footer from '@/components/Footer';
import ProjectsCard from '@/components/ProjectsCard';
import type { ProjectsCardType } from '@/types';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Wildan Workspace',
};

const data: ProjectsCardType[] = [
  {
    heading: 'Muslimify',
    text: 'Web based Quran App.',
    tech: ['js', 'nextjs', 'tailwind'],
    image: 'muslimify.png',
    link: 'https://muslimify.vercel.app',
  },
  {
    heading: 'Muslimify API',
    text: 'REST API for Quran.',
    tech: ['js', 'nodejs', 'express'],
    image: 'rest-api.png',
    link: 'https://github.com/gufronnakaaw/muslimify-api',
  },
  {
    heading: 'WeFo',
    text: 'Weather App.',
    tech: ['js', 'reactjs', 'css'],
    image: 'wefo.jpg',
    link: 'https://wefo.wildandev.tech',
  },
  {
    heading: 'SHORT!',
    text: 'Simple URL shortener.',
    tech: ['js', 'nextjs', 'supabase'],
    image: 'short.jpg',
    link: 'https://short.wildandev.tech',
  },
  {
    heading: 'Ponic',
    text: 'Web Voting App.',
    tech: ['js', 'nextjs', 'tailwind'],
    image: 'ponic-api.svg',
    link: 'http://ponic.site',
  },
  {
    heading: 'Ponic Backend',
    text: 'Backend Service for Voting App.',
    tech: ['ts', 'nodejs', 'fastify'],
    image: 'ponic-api.svg',
    link: 'https://github.com/gufronnakaaw/ponic-backend',
  },
  {
    heading: 'Permoment',
    text: 'Personal Money Management.',
    tech: ['js', 'reactjs', 'chakraui'],
    image: 'permoment.png',
    link: 'https://permoment.wildandev.tech',
  },
];

function Projects() {
  return (
    <>
      <Container heading="Projects" text="I've some fun personal projects.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data.map((project, index) => (
            <ProjectsCard key={index} data={project} index={index + 1} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="https://github.com/gufronnakaaw" 
            target="_blank"
            className="group"
          >
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-400 rounded-xl px-8 py-4 font-outfit font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="flex items-center gap-2">
                View More Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Projects;