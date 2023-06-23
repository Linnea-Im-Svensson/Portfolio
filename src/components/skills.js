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
} from 'react-icons/si';
import Skillbar from './skillbar';
import SectionContainer from './sectionContainer';

export default function Skills() {
  return (
    <SectionContainer header='My skills'>
      <div className='flex md:gap-8 gap-4 md:text-7xl text-4xl md:mt-4'>
        <SiHtml5 className='text-orange-600' />
        <SiCss3 className='text-indigo-500' />
        <SiJavascript className='text-yellow-500' />
        <SiReact className=' text-blue-400 dark:text-blue-300' />
        <SiTailwindcss className=' text-blue-500' />
        <SiNextdotjs className=' text-black dark:text-white' />
        <SiNodedotjs className=' text-green-500' />
        <SiPrisma className=' text-black dark:text-white' />
        <SiFirebase className=' text-orange-400' />
      </div>
      <div className='flex md:flex-row flex-col px-4 md:justify-center md:gap-60 gap-8 mt-8 w-full md:mt-6'>
        <div className='flex flex-col gap-8 items-center justify-around md:w-80 w-full h-full p-2'>
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
        <div className='flex flex-col gap-2'>
          <Skillbar percent='90'>HTML</Skillbar>
          <Skillbar percent='85'>CSS</Skillbar>
          <Skillbar percent='85'>Javascript</Skillbar>
          <Skillbar percent='75'>React</Skillbar>
          <Skillbar percent='85'>Tailwind</Skillbar>
          <Skillbar percent='65'>Next</Skillbar>
          <Skillbar percent='35'>Node</Skillbar>
          <Skillbar percent='40'>Prisma</Skillbar>
          <Skillbar percent='30'>React Native</Skillbar>
          <Skillbar percent='30'>Firebase</Skillbar>
        </div>
      </div>
    </SectionContainer>
  );
}
