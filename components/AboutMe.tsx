'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
            I&apos;m Wildan, backend web developer with three years work experience
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
        <Link href="/links">
          <button className="bg-white/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-400 rounded-xl px-6 py-3 font-outfit font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md mt-5">
            Connect with me
          </button>
        </Link>
      </motion.div>
    </>
  );
}

export default AboutMe;
