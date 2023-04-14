import Image from 'next/image';
import { Inter } from 'next/font/google';
import Button from '@/components/button';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='w-full'>
      <main className='relative flex flex-col-reverse pt-20 pb-6 md:pb-0 md:pt-0 md:flex-row items-center justify-around md:h-[80vh] w-full xl:w-3/4 m-auto'>
        <div className='flex-flex-col'></div>
        <div className='flex flex-col md:pt-0 pt-8 h-full md:justify-center justify-start py-4 gap-7 md:items-start items-center px-8 md:p-0 md:w-[70%]'>
          <p className='text-xl md:block hidden'>Linnéa Svensson</p>
          <p className='text-3xl md:text-6xl font-semibold'>
            Frontend developer
            <br /> who loves problem solving
          </p>
          <p className='md:block hidden '>
            Stydying at ChasAcademy in Stockholm <br />
            Currently looking for a LIA: week 47 2023 - week 24 2024
          </p>
          <div className='flex md:gap-6 gap-12'>
            <Button>Contact me</Button>
            <Button style='secondary'>Read more</Button>
          </div>
        </div>
        <Image
          src='/linnea.jpg'
          alt='picture of the author'
          priority={true}
          width={300}
          height={300}
          className='rounded-xl md:h-2/4 md:w-auto'
        />
      </main>
      <Skills />
      <Projects />
    </div>
  );
}
