'use client';

import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.1, delay: 0.2 }}
      >
        <h1 className="font-outfit text-2xl font-bold dark:text-gray-200">
          👋 Hi, how&apos;s it going?
        </h1>
      </motion.div>

      <div className="w-[90%] mt-5">
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <p className="font-recursive text-md mt-5 dark:text-gray-200">
            I&apos;m Wildan, backend web developer with one year work experience
            and loves helping people learn how to code. Sometimes, I work with{' '}
            <b>PHP</b> or <b>JavaScript</b> and a bit of <b>TypeScript</b>.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="font-recursive text-md mt-5 dark:text-gray-200">
            Currently learning about other <b>backend development</b> concepts
            such as <b>virtualization</b>, <b>containerization</b>,{' '}
            <b>web servers</b>, <b>unit tests</b>, etc to improve my skills.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="font-recursive text-md mt-5 dark:text-gray-200">
            Outside coding, I like to <b>travel</b> and <b>capture moments.</b>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.9, delay: 1 }}
      >
        <Link href="https://links.wildandev.com" target="_blank">
          <button className="border-gray-400 transition border-2 rounded-lg font-bold hover:bg-gray-100 p-4 font-outfit mt-5 dark:text-gray-200 dark:hover:bg-gray-500">
            Connect with me
          </button>
        </Link>
      </motion.div>
    </>
  );
}

export default AboutMe;
