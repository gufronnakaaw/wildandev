import Container from '@/components/Container';
import Footer from '@/components/Footer';
import ProjectsCard from '@/components/ProjectsCard';
import type { ProjectsCardType } from '@/types';
import chunk from '@/utils/chunk';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Gufronnaka Arif Wildan',
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
  const results = chunk<ProjectsCardType>(data, 2);
  let current: number = 0;

  return (
    <>
      <Container heading="Projects" text="I've some fun personal projects.">
        {results.map((result, index) => {
          return (
            <div key={index} className="flex flex-col 2xl:flex-row">
              {result.map((element, key) => {
                current += 1;
                return (
                  <ProjectsCard key={key} data={element} index={current} />
                );
              })}
            </div>
          );
        })}

        <Link href="https://github.com/gufronnakaaw" target="_blank">
          <div className="mx-1 max-md:mx-0">
            <div className="w-full border-2 border-gray-100 hover:border-gray-200 my-3 rounded-2xl font-outfit py-4 font-bold hover:bg-gray-100 dark:border-gray-500 dark:hover:border-gray-400 dark:hover:bg-gray-500 transition dark:text-gray-200 text-lg text-center">
              Other Projects
            </div>
          </div>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default Projects;
