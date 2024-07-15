import Image from "next/image";
import { Inter } from "next/font/google";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useState } from "react";
import Btn from "@/components/btn";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  const handleExit = (e) => {
    setShowAbout(false);
  };

  return (
    <div className="w-full overflow-y-hidden">
      <main className="relative flex flex-col-reverse pt-20 pb-6 md:pb-0 md:pt-0 md:flex-row px-8 items-center justify-around md:h-[80vh] w-full xl:w-3/4 m-auto">
        <motion.div
          initial={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:pt-0 pt-8 h-full md:justify-center justify-start py-4 gap-6 md:items-start items-center px-8 md:p-0 md:w-[70%]"
        >
          <p className="md:text-3xl text-xl">Linnéa Svensson</p>
          <p className=" top-0 text-3xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r dark:from-purple-700 dark:via-indigo-400 dark:to-teal-300 from-teal-400 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frontend
            </span>{" "}
            developer
          </p>
          <div className="flex md:gap-6 gap-12">
            <Link
              href="/contact"
              className="p-4 bg-indigo-500 text-indigo-50 hover:bg-indigo-700 rounded-lg"
            >
              Contact me
            </Link>
            <Btn style="secondary" handleClick={() => setShowAbout(true)}>
              Read more
            </Btn>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image
            src="/linnea.jpg"
            alt="picture of the author"
            priority={true}
            width={700}
            height={700}
            className="rounded-xl md:h-2/4 md:w-auto w-80"
          />
        </motion.div>
      </main>
      <Skills />
      <Projects />

      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed flex flex-col items-center gap-6 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:p-10 w-fit p-4 dark:bg-black bg-indigo-200 rounded-xl `}
          >
            <button
              className="absolute top-2 right-2 bg-indigo-300 dark:bg-indigo-950  px-4 py-2 rounded-lg"
              onClick={handleExit}
            >
              X
            </button>
            <h2 className="text-3xl">About me</h2>
            <p>
              As a passionate frontend developer, I thrive on problem-solving
              and innovating to create and enhance projects. With knowledge in
              modern programming languages and libraries, I have a good
              understanding in working with JavaScript, React, React Native, and
              Next.js. Having successfully tackled fullstack projects, my
              curiosity leads me to be open to future opportunities to learn
              more fullstack as well. I am a fast learner and can adapt to new
              technologies to fit you companies standards.
            </p>
            <p>
              I have a keen eye for the visual aspect of web development, backed
              by my knowledge of Illustrator, Photoshop, and a talent for
              creating custom SVG logos and vector graphics. This blend of
              creative and technical skills ensures that I can deliver visually
              appealing and highly functional digital experiences.
            </p>
            <a
              download="Linnea-Svensson-cv"
              href="/linnea-svensson-cv.pdf"
              className="p-4 bg-indigo-500 text-indigo-50 hover:bg-indigo-700 rounded-lg"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
