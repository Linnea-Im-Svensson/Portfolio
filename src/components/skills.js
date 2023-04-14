import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
} from 'react-icons/si';
import Skillbar from './skillbar';
import SectionContainer from './sectionContainer';

export default function Skills() {
  return (
    <SectionContainer>
      <h2 className='md:text-3xl text-xl border-b-2 w-full text-center border-opacity-50 border-indigo-800 pb-2'>
        My skills
      </h2>
      <div className='flex md:gap-8 gap-4 md:text-7xl text-4xl md:mt-4'>
        <SiHtml5 className='text-orange-600' />
        <SiCss3 className='text-indigo-500' />
        <SiJavascript className='text-yellow-500' />
        <SiReact className=' text-blue-400 dark:text-blue-300' />
        <SiTailwindcss className=' text-blue-500' />
        <SiNodedotjs className=' text-green-500' />
        <SiNextdotjs className=' text-black dark:text-white' />
      </div>
      <div className='flex md:flex-row flex-col px-4 md:justify-center md:gap-60 gap-8 mt-8 w-full md:mt-6'>
        <div className='flex items-center justify-around h-full'>
          <p className='md:w-80 w-full p-2'>
            I've already gotten familiar with most of the modern programming
            languages and libraries but since I'm a fast learner I will be able
            to learn anything to keep up with your company's standard.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <Skillbar percent='90'>HTML</Skillbar>
          <Skillbar percent='85'>CSS</Skillbar>
          <Skillbar percent='85'>Javascript</Skillbar>
          <Skillbar percent='75'>React</Skillbar>
          <Skillbar percent='75'>Tailwind</Skillbar>
          <Skillbar percent='35'>Node</Skillbar>
          <Skillbar percent='40'>Next</Skillbar>
        </div>
      </div>
    </SectionContainer>
  );
}
