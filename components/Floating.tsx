import { FiUser, FiCode, FiFolder } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Floating() {
  const pathname = usePathname();

  return (
    <section className="md:hidden py-5 max-md:fixed max-md:bottom-0 max-md:w-full">
      <div className="flex justify-center px-5">
        <div className="w-full flex justify-around bg-gray-100 py-4 rounded-xl dark:bg-gray-300 dark:text-black">
          <Link
            href="/projects"
            className={pathname == '/projects' ? 'text-white' : ''}
          >
            <FiFolder size="25"></FiFolder>
          </Link>
          <Link
            href="/skills"
            className={pathname == '/skills' ? 'text-white' : ''}
          >
            <FiCode size="25"></FiCode>
          </Link>
          <Link href="/me" className={pathname == '/me' ? 'text-white' : ''}>
            <FiUser size="25"></FiUser>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Floating;
