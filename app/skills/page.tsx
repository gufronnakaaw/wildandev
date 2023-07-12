import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import chunk from '@/utils/chunk';

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
    name: 'codeigniter',
  },
  {
    name: 'laravel',
  },
  {
    name: 'express',
  },
  {
    name: 'reactjs',
  },
  {
    name: 'nginx',
  },
  {
    name: 'git',
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
                return (
                  <div
                    className="hover:bg-gray-100 hover:border-gray-200 cursor-pointer transition h-20 w-20 md:h-28 md:w-28 xl:h-36 lg:w-36 flex items-center justify-center border-gray-100 border-2 rounded-xl dark:bg-gray-50 dark:border-gray-400 dark:hover:bg-gray-200 dark:hover:border-gray-50"
                    key={index}
                  >
                    <Image
                      src={`/${element.name}.svg`}
                      width="75"
                      height="75"
                      alt={`${element.name} image`}
                      className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20"
                    />
                  </div>
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
