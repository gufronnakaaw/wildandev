'use client';

import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <>
      <h1 className="text-black font-outfit text-2xl lg:text-3xl font-extrabold dark:text-gray-200">
        Hello! I&apos;m Wildan.
      </h1>
      <p className="text-black font-recursive text-md lg:text-lg dark:text-gray-200">
        Soft
        <TypeAnimation
          sequence={['ware engineer specializing in Backend Development.']}
          speed={65}
        />
      </p>
    </>
  );
}

export default Hero;
