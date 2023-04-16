import ProjectItem from './projectItem';
import SectionContainer from './sectionContainer';

export default function Projects() {
  return (
    <SectionContainer
      header='Some projects I have done'
      style='reverse'
      line='reverse'
      title='left'
    >
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-6 p-10'>
        <ProjectItem
          img='/meowmory.png'
          alt='memory game with cats'
          title='Meowmory'
          madeIn='Vanilla Javascript'
          description='Classic memory game with cat pictures, one of the first games I made for a workshop in school.'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Meowmory'
          url2='https://meowmory.vercel.app/'
        />
        <ProjectItem
          img='/hangedmeow.png'
          alt='hangedman game with cats'
          title='Hangedman'
          madeIn='Vanilla Javascript'
          description='The hanged man game, help the cat get the fish before someone else eats it! A game I made in my spare time.'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Hanged-Fish'
          url2='https://hanged-fish.vercel.app/'
        />
        <ProjectItem
          img='/blackjack.png'
          alt='blackjack game'
          title='Blackjack'
          madeIn='Vanilla Javascript'
          description='A blackjack game made for my final assignment in vanilla javascript. Game works better locally for now due to too long picture render time. Please download from github and try it out'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Blackjack-Vanilla-Javascript'
          url2='https://blackjack-vanilla-javascript.vercel.app/'
        />
      </div>
    </SectionContainer>
  );
}
