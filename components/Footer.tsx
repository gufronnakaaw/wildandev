function Footer() {
  return (
    <section className="h-[16rem] px-8 lg:px-80 md:px-36 flex flex-col justify-around dark:bg-black">
      <hr className="w-full border-gray-200 dark:border-gray-500" />
      <p className="font-outfit text-medium pb-20 text-gray-600 dark:text-gray-200">
        &copy; {new Date().getFullYear()} - Gufronnaka Arif Wildan
      </p>
    </section>
  );
}

export default Footer;
