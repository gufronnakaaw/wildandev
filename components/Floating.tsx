'use client';

import { FolderIcon, MonitorIcon, UserIcon } from "@phosphor-icons/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Floating() {
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 w-full md:hidden">
      <div className="w-full flex justify-around bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700 py-3 px-4">
        <Link
          href="/"
          className={`${
            pathname === '/' 
              ? 'text-gray-200 dark:text-gray-200' 
              : 'text-gray-500 dark:text-gray-400'
          } flex flex-col items-center py-2 px-3 transition-all duration-300 hover:text-gray-700`}
        >
          <MonitorIcon size="20" />
          <p className="text-xs font-outfit mt-1">Home</p>
        </Link>
        
        <Link
          href="/projects"
          className={`${
            pathname === '/projects' 
              ? 'text-gray-200 dark:text-gray-200' 
              : 'text-gray-500 dark:text-gray-400'
          } flex flex-col items-center py-2 px-3 transition-all duration-300 hover:text-gray-700`}
        >
          <FolderIcon size="20" />
          <p className="text-xs font-outfit mt-1">Projects</p>
        </Link>
        
        
        <Link
          href="/me"
          className={`${
            pathname === '/me' 
              ? 'text-gray-200 dark:text-gray-200' 
              : 'text-gray-500 dark:text-gray-400'
          } flex flex-col items-center py-2 px-3 transition-all duration-300 hover:text-gray-700`}
        >
          <UserIcon size="20" />
          <p className="text-xs font-outfit mt-1">Me</p>
        </Link>
        
        <Link
          href="/photos"
          className={`${
            pathname === '/photos' 
              ? 'text-gray-200 dark:text-gray-200' 
              : 'text-gray-500 dark:text-gray-400'
          } flex flex-col items-center py-2 px-3 transition-all duration-300 hover:text-gray-700`}
        >
          <UserIcon size="20" />
          <p className="text-xs font-outfit mt-1">Photos</p>
        </Link>
      </div>
    </section>
  );
}