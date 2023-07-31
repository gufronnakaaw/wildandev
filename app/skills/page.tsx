import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import chunk from '@/utils/chunk';
import SkillsCard from '@/components/SkillsCard';

export const metadata: Metadata = {
  title: 'Skills - Gufronnaka Arif Wildan',
};

const data: { name: string }[] = [
  {
    name: 'ts',
  },
  {
    name: 'js',
  },
  {
    name: 'nodejs',
  },
  {
    name: 'php',
  },
  {
    name: 'fastify',
  },
  {
    name: 'reactjs',
  },
  {
    name: 'express',
  },
  {
    name: 'laravel',
  },
  {
    name: 'jest',
  },
  {
    name: 'nginx',
  },
  {
    name: 'sql',
  },
  {
    name: 'postman',
  },
];

const results = chunk<{ name: string }>(data, 4);

function Skills() {
  let current: number = 0;
  return (
    <>
      <Container
        heading="Skills"
        text="These are some tools and softwares that i'm good at."
      >
        {results.map((result, index) => {
          return (
            <div className="flex py-2 justify-between" key={index}>
              {result.map((element, index) => {
                current += 1;
                return (
                  <SkillsCard key={index} name={element.name} index={current} />
                );
              })}
            </div>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}

export default Skills;
