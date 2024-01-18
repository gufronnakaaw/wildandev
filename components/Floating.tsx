import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiCode, FiFolder, FiHome, FiUser } from 'react-icons/fi';

function Floating() {
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 w-full md:hidden">
      <div className="w-full flex justify-around bg-gray-100 py-3 dark:bg-gray-700 dark:text-gray-300">
        <Link
          href="/"
          className={`${
            pathname == '/' ? 'text-white' : null
          } flex flex-col items-center`}
        >
          <FiHome size="21"></FiHome>
          <p className="text-xs font-outfit">Home</p>
        </Link>
        <Link
          href="/projects"
          className={`${
            pathname == '/projects' ? 'text-white' : null
          } flex flex-col items-center`}
        >
          <FiFolder size="21"></FiFolder>
          <p className="text-xs font-outfit">Projects</p>
        </Link>
        <Link
          href="/skills"
          className={`${
            pathname == '/skills' ? 'text-white' : null
          } flex flex-col items-center`}
        >
          <FiCode size="21"></FiCode>
          <p className="text-xs font-outfit">Skills</p>
        </Link>
        <Link
          href="/me"
          className={`${
            pathname == '/me' ? 'text-white' : null
          } flex flex-col items-center`}
        >
          <FiUser size="21"></FiUser>
          <p className="text-xs font-outfit">Me</p>
        </Link>
      </div>
    </section>
  );
}

export default Floating;
