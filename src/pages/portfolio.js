import ProjectItem from '@/components/projectItem';
import SectionContainer from '@/components/sectionContainer';

export default function Portfolio() {
  return (
    <SectionContainer>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-6 p-10'>
        <ProjectItem
          img='/pokemon-tcg.png'
          alt='Pokemon TCG Collection'
          title='Pokemon TCG Collection'
          madeIn='Next/Trpc/Prisma'
          description='Final course assignment for t3-stack. A card collecting webgame where you play mini-games to earn pokécoins and then buy packs to collect more cards. Trade the once you are missing with other players'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Pokemon-tcg'
          url2='pokemon-tcg-theta.vercel.app'
          cardBg='secondary'
        />
        <ProjectItem
          img='/rebel-runway.png'
          alt='Rebel Runway Webshop'
          title='Rebel-Runway'
          madeIn='Next/Trpc/Prisma'
          description='A webshop made as a group-project in school'
          url='https://github.com/ChasAcademy-Linnea-Svensson/RebelRunway'
          url2='rebel-runway-webshop-git-dev-236030-chasacademy-linnea-svensson.vercel.app'
          cardBg='secondary'
        />
        <ProjectItem
          img='/legacyloot.jpg'
          alt='tradera, blocket inspired app'
          title='LegacyLoot'
          madeIn='ReactNative/Firebase'
          description='A tradera/blocket inspired app where users register and then puts up items to sell. The selling user then generates a swish qr code that handles the transaction'
          url='https://github.com/ChasAcademy-Linnea-Svensson/LegacyLoot'
          url2=''
          cardBg='secondary'
        />
        <ProjectItem
          img='/green-circle.png'
          alt='social networking site with recycling in mind'
          title='GreenCircle'
          madeIn='Next/Prisma/Planetscale/Javascript'
          description='A social networking site with focus on donations and recycling. A group project made in 8 weeks'
          url='https://github.com/nabilelbajdi/greentech-project-frontend'
          url2=''
          cardBg='secondary'
        />
        <ProjectItem
          img='/meowmory.png'
          alt='memory game with cats'
          title='Meowmory'
          madeIn='Vanilla Javascript'
          description='Classic memory game with cat pictures, one of the first games I made for a workshop in school.'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Meowmory'
          url2='https://meowmory.vercel.app/'
          cardBg='secondary'
        />
        <ProjectItem
          img='/hangedmeow.png'
          alt='hangedman game with cats'
          title='Hangedman'
          madeIn='Vanilla Javascript'
          description='The hanged man game, help the cat get the fish before someone else eats it! A game I made in my spare time.'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Hanged-Fish'
          url2='https://hanged-fish.vercel.app/'
          cardBg='secondary'
        />
        <ProjectItem
          img='/blackjack.png'
          alt='blackjack game'
          title='Blackjack'
          madeIn='Vanilla Javascript'
          description='A blackjack game made for my final assignment in vanilla javascript. Game works better locally for now due to too long picture render time. Please download from github and try it out'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Blackjack-Vanilla-Javascript'
          url2='https://blackjack-vanilla-javascript.vercel.app/'
          cardBg='secondary'
        />
        <ProjectItem
          img='/quiz.png'
          alt='quiz game'
          title='Quiz game'
          madeIn='React'
          description='Final school-assignment in React. A quiz game where you add questions yourself in the admin tab and compete with your friends to set the highest score'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Quiz-with-Redux'
          url2='https://quiz-with-redux.vercel.app/'
          cardBg='secondary'
        />
      </div>
    </SectionContainer>
  );
}
