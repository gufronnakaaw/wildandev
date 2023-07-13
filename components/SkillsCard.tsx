'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type SkillsCardProps = {
  name: string;
  index: number;
};

function SkillsCard({ name, index }: SkillsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div
        className="hover:bg-gray-100 hover:border-gray-200 cursor-pointer transition h-20 w-20 md:h-28 md:w-28 xl:h-36 lg:w-36 flex items-center justify-center border-gray-100 border-2 rounded-xl dark:bg-gray-50 dark:border-gray-400 dark:hover:bg-gray-200 dark:hover:border-gray-50"
        key={index}
      >
        <Image
          src={`/${name}.svg`}
          width="75"
          height="75"
          alt={`${name} image`}
          className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20"
        />
      </div>
    </motion.div>
  );
}

export default SkillsCard;
