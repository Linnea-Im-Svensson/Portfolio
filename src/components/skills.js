import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiPrisma,
  SiFirebase,
  SiVuedotjs,
  SiTypescript,
} from 'react-icons/si';
import Skillbar from './skillbar';
import SectionContainer from './sectionContainer';

export default function Skills() {
  return (
    <SectionContainer header='My skills'>
      <div className='flex justify-center md:gap-8 gap-4 md:text-7xl text-4xl md:mt-4 flex-wrap px-4'>
        <SiHtml5 className='text-orange-600' />
        <SiCss3 className='text-indigo-500' />
        <SiJavascript className='text-yellow-500' />
        <SiReact className=' text-blue-400 dark:text-blue-300' />
        <SiTailwindcss className=' text-blue-500' />
        <SiNextdotjs className=' text-black dark:text-white' />
        <SiNodedotjs className=' text-green-500' />
        <SiPrisma className=' text-black dark:text-white' />
        <SiFirebase className=' text-orange-400' />
        <SiVuedotjs className=' text-green-600' />
        <SiTypescript className=' text-blue-600' />
      </div>
      <div className='flex md:flex-row flex-col px-4 md:justify-center md:gap-60 gap-8 mt-8 w-full md:mt-6'>
        <div className='flex md:flex-row flex-col md:gap-8 w-full p-8'>
          <div className='flex flex-col gap-2 w-full'>
            <Skillbar width='w-[90%]'>HTML</Skillbar>
            <Skillbar width='w-[85%]'>CSS</Skillbar>
            <Skillbar width='w-[85%]'>Javascript</Skillbar>
            <Skillbar width='w-[75%]'>React</Skillbar>
            <Skillbar width='w-[85%]'>Tailwind</Skillbar>
            <Skillbar width='w-[65%]'>Next</Skillbar>
          </div>
          <div className='flex flex-col gap-2 w-full md:pt-0 pt-2'>
            <Skillbar width='w-[35%]'>Node</Skillbar>
            <Skillbar width='w-[50%]'>Prisma</Skillbar>
            <Skillbar width='w-[30%]'>React Native</Skillbar>
            <Skillbar width='w-[30%]'>Firebase</Skillbar>
            <Skillbar width='w-[15%]'>Vue</Skillbar>
            <Skillbar width='w-[30%]'>Typescript</Skillbar>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-8 items-center justify-around md:w-3/4 w-full h-full p-8'>
        <p>
          I have already gotten familiar with some of the modern programming
          languages/libraries and since I'm a fast learner I will be able to
          learn anything to keep up with your company's standard.
        </p>
        <p>
          At school we currently started working with group projects, and
          because I have always worked with a team in other jobs I am well
          adapted and ready.
        </p>
      </div>
    </SectionContainer>
  );
}
