import Link from "next/link";
import ProjectItem from "./projectItem";
import SectionContainer from "./sectionContainer";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionContainer
      header="Some projects I have done"
      style="reverse"
      line="reverse"
      title="left"
    >
      <motion.div
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-14 gap-6 p-10 ">
          <ProjectItem
            img="/legacyloot.jpg"
            alt="tradera, blocket inspired app"
            title="LegacyLoot"
            madeIn="ReactNative/Firebase"
            description="A tradera/blocket inspired app where users register and then puts up items to sell. The selling user then generates a swish qr code that handles the transaction"
            url="https://github.com/ChasAcademy-Linnea-Svensson/LegacyLoot"
            url2=""
          />
          <ProjectItem
            img="/wordfiver.jpg"
            alt="guess the word mobile game"
            title="WordFiver"
            madeIn="React Native/Typescript"
            description="A mobile game where the goal is to guess the correct word. Choose between 4, 5, or 6 letter words. A work in progress."
            url="https://github.com/ChasAcademy-Linnea-Svensson/WordFiver"
            url2=""
          />
          <ProjectItem
            img="/blackjack.png"
            alt="blackjack game"
            title="Blackjack"
            madeIn="Vanilla Javascript"
            description="A blackjack game made for my final assignment in vanilla javascript."
            url="https://github.com/ChasAcademy-Linnea-Svensson/Blackjack-Vanilla-Javascript"
            url2="https://blackjack-vanilla-javascript.vercel.app/"
          />
        </div>
        <Link
          href="/portfolio"
          className="py-4 px-20 m-auto bg-indigo-500 text-indigo-50 hover:bg-indigo-700 rounded-lg"
        >
          See more
        </Link>
      </motion.div>
    </SectionContainer>
  );
}
