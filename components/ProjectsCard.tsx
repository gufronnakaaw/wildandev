'use client';

import type { ProjectsCardType } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProjectsCardProps = {
  data: ProjectsCardType;
  index: number;
};

function Card({ data, index }: ProjectsCardProps) {
  const { heading, text, tech, image, link } = data;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={link} target="_blank">
        <div className="group bg-white dark:bg-gray-500 border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:border-gray-600 transition-all duration-300 ease-in-out">
          <div className="relative h-48 bg-gray-50 dark:bg-gray-700 overflow-hidden transition-colors duration-300">
            <Image
              src={`/${image}`}
              alt={`${heading} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 transition-colors duration-300">
            <div className="mb-4">
              <h3 className="font-outfit font-bold text-xl text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                {heading}
              </h3>
              <p className="font-recursive text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                {text}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {tech.map((element, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 h-10 w-10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                >
                  <Image
                    src={`/${element}.svg`}
                    alt={`${element} technology`}
                    width={20}
                    height={20}
                    className="object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg transition-colors duration-300">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Card;