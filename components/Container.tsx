type ContainerProps = {
  children: React.ReactNode;
  heading: string;
  text?: string | null;
};

function Container({ children, heading, text }: ContainerProps) {
  return (
    <section className="h-full px-8 lg:px-80 md:px-36 pt-28 dark:bg-black">
      <h1 className="text-black font-outfit text-2xl lg:text-3xl font-extrabold dark:text-gray-200">
        {heading}
      </h1>
      {text ? (
        <p className="font-recursive text-md dark:text-gray-200">{text}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default Container;
