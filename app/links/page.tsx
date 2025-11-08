import { IconButton, Tooltip } from '@/components/MTComponent';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaUser
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Links - Gufronnaka Arif Wildan',
};

type ContentType = {
  title: string;
  url: string;
  icon: React.ReactElement;
};

const links: ContentType[] = [
  {
    title: 'website',
    url: `https://${process.env.NEXT_PUBLIC_PROJECT_NAME}${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
    icon: <FaUser className="w-5 h-5 dark:text-gray-200" />,
  },
  {
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/gufronnaka-arif-wildan/',
    icon: <FaLinkedin className="w-5 h-5 dark:text-gray-200" />,
  },
  {
    title: 'github',
    url: 'https://github.com/gufronnakaaw',
    icon: <FaGithub className="w-5 h-5 dark:text-gray-200" />,
  },
  {
    title: 'email',
    url: 'mailto: gufronnakaaw@gmail.com',
    icon: <FaEnvelope className="w-5 h-5 dark:text-gray-200" />,
  },
];

export default function Links() {
  return (
    <div className="max-h-screen flex items-center flex-col">
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/me.jpg"
          alt="author"
          className="rounded-full"
          width={128}
          height={128}
          priority={true}
        />
        <p className="font-outfit text-xl font-bold dark:text-gray-200">
          Gufronnaka Arif Wildan
        </p>
      </div>
      <p className="font-outfit font-light text-sm dark:text-gray-200">
        Backend Web Developer
      </p>

      <p className="font-outfit mt-8 font-light text-sm dark:text-gray-200">
        Connect With Me
      </p>

      <div className="my-2">
        <div className="flex mb-4 gap-1">
          {links.map((link, index) => {
            return (
              <Tooltip
                content={`${link.title}`}
                key={index}
                className="font-outfit"
              >
                <Link href={link.url} target="_blank">
                  <IconButton variant="text" className="dark:hover:bg-gray-500">
                    {link.icon}
                  </IconButton>
                </Link>
              </Tooltip>
            );
          })}
        </div>
      </div>
      <footer className="font-outfit absolute bottom-3 dark:text-gray-200">
        <small>
          Built by <span>{`${process.env.NEXT_PUBLIC_PROJECT_NAME}${process.env.NEXT_PUBLIC_DOMAIN_NAME}`}</span>
        </small>
      </footer>
    </div>
  );
}
