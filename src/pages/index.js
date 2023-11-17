import Image from 'next/image';
import { Inter } from 'next/font/google';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { useState } from 'react';
import Btn from '@/components/btn';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  const handleExit = (e) => {
    setShowAbout(false);
  };

  return (
    <div className='w-full'>
      <main className='relative flex flex-col-reverse pt-20 pb-6 md:pb-0 md:pt-0 md:flex-row px-8 items-center justify-around md:h-[80vh] w-full xl:w-3/4 m-auto'>
        <div className='flex-flex-col'></div>
        <div className='flex flex-col md:pt-0 pt-8 h-full md:justify-center justify-start py-4 gap-7 md:items-start items-center px-8 md:p-0 md:w-[70%]'>
          <p className='text-xl md:block hidden'>Linnéa Svensson</p>
          <p className='text-3xl md:text-6xl font-semibold'>
            Frontend developer
            <br /> who loves problem solving
          </p>
          <p className='md:block hidden '>
            Stydying at ChasAcademy in Stockholm <br />
          </p>
          <div className='flex md:gap-6 gap-12'>
            <Link
              href='/contact'
              className='p-4 bg-indigo-500 text-indigo-50 hover:bg-indigo-700 rounded-lg'
            >
              Contact me
            </Link>
            <Btn style='secondary' handleClick={() => setShowAbout(true)}>
              Read more
            </Btn>
          </div>
        </div>
        <Image
          src='/linnea.jpg'
          alt='picture of the author'
          priority={true}
          width={700}
          height={700}
          className='rounded-xl md:h-2/4 md:w-auto w-80'
        />
      </main>
      <Skills />
      <Projects />
      <div
        className={`fixed flex-col items-center gap-6 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:p-10 w-fit p-4 dark:bg-black bg-indigo-200 rounded-xl ${
          showAbout ? 'flex' : 'hidden'
        }`}
      >
        <button
          className='absolute top-2 right-2 bg-indigo-300 dark:bg-indigo-950  px-4 py-2 rounded-lg'
          onClick={handleExit}
        >
          X
        </button>
        <h2 className='text-3xl'>About me</h2>
        <p>
          I have mostly worked in retail jobs over the years which allowed me to
          solve problems in different ways, but I felt like something was
          missing and decided to look for something new. I discovered
          programming and fell in love with the way logic and problemsolving
          went hand in hand.
        </p>
        <p>
          I went to Komvux where I got to dip my toes in this new experience
          with Java and computer theory. Later i started my 2 year education in
          Front-end development, mobile & web, where I am currently studying. I
          work mainly in front-end but i have experience in working with
          full-stack projects and I'm not afraid to learn both.
        </p>
        <a
          download='Linnea-Svensson-cv'
          href='/linnea-svensson-cv.pdf'
          className='p-4 bg-indigo-500 text-indigo-50 hover:bg-indigo-700 rounded-lg'
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
