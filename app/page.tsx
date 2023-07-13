import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gufronnaka Arif Wildan - Backend Web Developer',
};

function Home() {
  return (
    <section className="h-screen px-8 lg:px-80 md:px-36 flex flex-col justify-center dark:bg-black">
      <Hero />
    </section>
  );
}

export default Home;
