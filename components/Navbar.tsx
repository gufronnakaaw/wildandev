'use client';

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from 'next-themes';
import Link from 'next/link';

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="fixed bg-gray-50 bg-opacity-60 backdrop-blur-sm left-0 top-0 w-full px-8 lg:px-80 md:px-36 py-4 flex justify-between dark:bg-black dark:text-gray-200 dark:bg-opacity-60 dark:backdrop-blur-sm z-50">
      <div className="left">
        <Link
          href="/"
          className="font-outfit text-black text-lg font-semibold dark:text-gray-200"
        >
          {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </Link>
      </div>
      <div className="right font-recursive items-center flex text-sm dark:text-gray-200">
        <div className="hidden md:block">
          <Link href="/projects" className="mx-2">
            Projects
          </Link>
          <Link href="/me" className="mx-2">
            Me
          </Link>
          <Link href="/photos" className="mx-2">
            Photos
          </Link>
        </div>
        <button
          className="mx-2 outline-none border-none"
          onClick={() =>
            theme == 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          {theme == 'light' ? (
            <MoonIcon size="24"></MoonIcon>
          ) : (
            <SunIcon size="24"></SunIcon>
          )}
        </button>
      </div>
    </section>
  );
}

export default Navbar;
