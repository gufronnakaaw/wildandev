import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About - Gufronnaka Arif Wildan',
};

function Me() {
  return (
    <>
      <Container heading="" text={null}>
        <h1 className="font-outfit text-2xl font-bold dark:text-gray-200">
          👋 Hi, how&apos;s it going?
        </h1>
        <div className="w-[90%] mt-5">
          <p className="font-recursive text-md mt-5 dark:text-gray-200">
            I&apos;m Wildan, backend web developer with one year work experience
            and loves helping people learn how to code. Sometimes, I work with{' '}
            <b>PHP</b> or <b>JavaScript</b> and a bit of <b>TypeScript</b>.
          </p>
          <p className="font-recursive text-md mt-5 dark:text-gray-200">
            Currently learning about other <b>backend development</b> concepts
            such as <b>virtualization</b>, <b>containerization</b>,{' '}
            <b>web servers</b>, etc to improve my skills.
          </p>
          <p className="font-recursive text-md mt-5 dark:text-gray-200">
            Outside working, I like to <b>travel</b> and <b>capture moments.</b>
          </p>
        </div>

        <Link href="https://links.wildandev.com" target="_blank">
          <button className="border-gray-100 hover:border-gray-200 transition border-2 rounded-lg font-bold hover:bg-gray-100 flex items-center p-4 font-outfit mt-5 dark:text-gray-200 dark:border-gray-500 dark:hover:border-gray-400 dark:hover:bg-gray-600">
            Connect with me <FiArrowRight size="20"></FiArrowRight>
          </button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default Me;
