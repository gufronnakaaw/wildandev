import TypingText from '@/components/TypingText';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Wildan Workspace',
};

function Home() {
  return (
    <section className="h-screen px-8 lg:px-80 md:px-36 flex flex-col justify-center dark:bg-black">
      <h1 className="text-black font-outfit text-2xl lg:text-3xl font-extrabold dark:text-gray-200">
        Hello! <div>I&apos;m Wildan.</div>
      </h1>
      <p className="text-black font-recursive text-md lg:text-lg dark:text-gray-200">
        Some
        <TypingText
          text="one who loves building backend systems."
          speed={20}
        />
      </p>
    </section>
  );
}

export default Home;
