import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="fixed bg-gray-50 bg-opacity-60 backdrop-blur-sm left-0 top-0 w-full px-8 lg:px-80 md:px-36 py-4 flex justify-between dark:bg-black dark:text-gray-200">
      <div className="left">
        <Link
          href="/"
          className="font-outfit text-black text-lg font-semibold dark:text-gray-200"
        >
          wildandev.com
        </Link>
      </div>
      <div className="right font-recursive items-center flex text-sm dark:text-gray-200">
        <div className="hidden md:block">
          <Link href="/projects" className="mx-2">
            Projects
          </Link>
          <Link href="/skills" className="mx-2">
            Skills
          </Link>
          <Link href="/me" className="mx-2">
            Me
          </Link>
        </div>
        <button
          className="mx-2 outline-none border-none"
          onClick={() =>
            theme == 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          {theme == 'light' ? (
            <FiMoon size="24"></FiMoon>
          ) : (
            <FiSun size="24"></FiSun>
          )}
        </button>
      </div>
    </section>
  );
}

export default Navbar;
