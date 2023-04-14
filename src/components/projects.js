import ProjectItem from './projectItem';

export default function Projects() {
  return (
    <section className='flex flex-col items-center justify-start pt-6 md:pt-20 bg-gradient-to-b dark:from-black dark:via-indigo-950  dark:to-indigo-800 w-screen h-[50vh]'>
      <h2 className='md:text-3xl text-xl'>Some projects I've done</h2>
      <div className='grid grid-cols-3 gap-4'>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
}
