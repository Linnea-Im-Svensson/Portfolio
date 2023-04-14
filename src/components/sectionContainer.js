export default function SectionContainer({ children }) {
  return (
    <section className='flex flex-col md:gap-8 gap-4 items-center justify-start pt-6 md:pt-12 bg-gradient-to-b dark:from-black dark:via-indigo-950  dark:to-indigo-800 w-screen h-fit pb-10'>
      {children}
    </section>
  );
}
