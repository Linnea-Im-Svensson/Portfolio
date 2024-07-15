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
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-6 p-10">
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
            img="/green-circle.png"
            alt="social networking site with recycling in mind"
            title="GreenCircle"
            madeIn="Next/Prisma/Planetscale/Javascript"
            description="A social networking site with focus on donations and recycling. A group project made in 8 weeks. Backend made with Planetscale and Prisma. The website includes features such as Google Maps and more. "
            url="https://github.com/nabilelbajdi/greentech-project-frontend"
            url2=""
          />
          <ProjectItem
            img="/blackjack.png"
            alt="blackjack game"
            title="Blackjack"
            madeIn="Vanilla Javascript"
            description="A blackjack game made for my final assignment in vanilla javascript. Game works better locally for now due to too long picture render time. Please download from github and try it out"
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
