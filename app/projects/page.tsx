import Container from '@/components/Container';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import type { CardType } from '@/types';
import chunk from '@/utils/chunk';

export const metadata: Metadata = {
  title: 'Projects - Gufronnaka Arif Wildan',
};

const data: CardType[] = [
  {
    heading: 'Muslimify',
    text: 'Web based Quran App.',
    tech: ['nextjs', 'tailwind', 'express'],
    image: 'muslimify.png',
    link: 'https://muslimify.vercel.app',
  },
  {
    heading: 'Muslimify API',
    text: 'REST API for Quran.',
    tech: ['nodejs', 'express'],
    image: 'muslimify-api.png',
    link: 'https://github.com/gufronnakaaw/muslimify-api',
  },
  {
    heading: 'WeFo',
    text: 'Weather App.',
    tech: ['reactjs', 'css'],
    image: 'wefo.jpg',
    link: 'https://wefo.wildandev.com',
  },
  {
    heading: 'SHORT!',
    text: 'Simple URL shortener.',
    tech: ['nextjs', 'css', 'supabase'],
    image: 'short.jpg',
    link: 'https://short.wildandev.com',
  },
  {
    heading: 'Permoment',
    text: 'Personal Money Management.',
    tech: ['reactjs', 'chakraui'],
    image: 'permoment.png',
    link: 'https://permoment.wildandev.com',
  },
];

function Projects() {
  const results = chunk<CardType>(data, 2);

  return (
    <>
      <Container heading="Projects" text={null}>
        {results.map((result, index) => {
          return (
            <div key={index} className="flex flex-col 2xl:flex-row">
              {result.map((element, index) => {
                return <Card key={index} data={element} />;
              })}
            </div>
          );
        })}

        <Link href="https://github.com/gufronnakaaw" target="_blank">
          <button className="w-full border-2 border-gray-100 hover:border-gray-200 my-3 rounded-2xl font-outfit py-4 font-bold hover:bg-gray-100 dark:border-gray-500 dark:hover:border-gray-400 dark:hover:bg-gray-600 transition dark:text-gray-200 text-lg">
            Other Projects
          </button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default Projects;
