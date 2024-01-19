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
        <div className="border-2 border-gray-100 cursor-pointer hover:border-gray-200 hover:bg-gray-100 mt-4 h-48 mx-1 max-md:mx-0 rounded-3xl px-8 py-6 dark:border-gray-500 dark:hover:border-gray-400 dark:hover:bg-gray-500 transition">
          <div className="flex justify-between h-full">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="font-outfit font-bold text-xl flex items-center dark:text-gray-200 max-md:text-md">
                  {heading}
                </h1>
                <p className="font-recursive dark:text-gray-200 text-[11px]">
                  {text}
                </p>
              </div>

              <div className="flex items-center">
                {tech.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-md p-2 mr-2 h-9 w-9 flex items-center justify-center"
                    >
                      <Image
                        src={`/${element}.svg`}
                        alt={`${element} image`}
                        width="35"
                        height="35"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src={`/${image}`}
                alt={`${image} image`}
                width="100"
                height="100"
                className="rounded-2xl md:w-[5rem] md:h-[5rem]"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Card;
