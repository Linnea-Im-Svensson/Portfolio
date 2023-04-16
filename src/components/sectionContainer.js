export default function SectionContainer({
  children,
  header,
  style,
  line,
  title,
}) {
  const custom = {
    styles: {
      primary:
        'bg-gradient-to-b dark:from-black dark:via-indigo-950  dark:to-indigo-800',
      diagonal:
        'bg-gradient-to-bl dark:from-indigo-800 dark:via-indigo-950  dark:to-purple-950',
      reverse:
        'bg-gradient-to-b dark:from-indigo-800 dark:via-black  dark:to-black',
    },
    lines: {
      primary: 'border-indigo-800',
      diagonal: 'border-black',
      reverse: 'border-black',
    },
    titles: {
      center: 'md:text-center',
      left: 'md:text-left',
      right: 'md:text-right',
    },
  };
  return (
    <section
      className={`flex flex-col md:gap-8 gap-4 items-center justify-start pt-6 md:pt-12 w-screen h-fit pb-10 ${custom.styles[style]}`}
    >
      <h2
        className={`md:text-4xl text-xl border-b-2 w-full border-opacity-50 md:pb-2 pb-10 ${custom.lines[line]} ${custom.titles[title]} text-center md:font-normal font-semibold md:px-44`}
      >
        {header}
      </h2>
      {children}
    </section>
  );
}

SectionContainer.defaultProps = {
  style: 'primary',
  line: 'primary',
  title: 'center',
};
