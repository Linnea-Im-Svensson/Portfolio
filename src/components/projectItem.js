import Image from 'next/image';
import { SiGithub } from 'react-icons/si';
import { AiFillPlayCircle } from 'react-icons/ai';
import LinkBtn from './linkBtn';

export default function ProjectItem({
  img,
  alt,
  title,
  madeIn,
  description,
  url,
  url2,
  cardBg,
}) {
  const cardsBg = {
    primary: 'bg-indigo-300 dark:bg-indigo-900 dark:bg-opacity-50',
    secondary: 'bg-indigo-300 dark:bg-black dark:bg-opacity-50',
  };
  return (
    <div className='flex flex-col w-full'>
      <Image
        src={img}
        alt={alt}
        priority={true}
        width={700}
        height={600}
        className='rounded-t-xl overflow-hidden md:h-[450px] object-cover'
      />
      <div
        className={`relative flex flex-col justify-between ${cardsBg[cardBg]} rounded-b-xl md:h-60 h-68 gap-6 p-6`}
      >
        <p>{title}</p>
        <p>{description}</p>
        <div className='flex flex-row gap-4 w-full items-center justify-around'>
          <LinkBtn url={url}>
            <SiGithub />
            Go to project
          </LinkBtn>
          {url2 != '' ? (
            <LinkBtn url={url2}>
              <AiFillPlayCircle />
              See live
            </LinkBtn>
          ) : (
            ''
          )}
          <div className='absolute -top-9 right-2 dark:bg-indigo-950 bg-indigo-300 text-sm p-2 rounded-t-xl'>
            {madeIn}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectItem.defaultProps = {
  cardBg: 'primary',
};
