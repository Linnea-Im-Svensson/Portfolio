import Image from 'next/image';

export default function ProjectItem() {
  return (
    <div className='flex flex-col w-full h-[500px] border-2'>
      <Image
        src='/linnea.jpg'
        alt='picture of the author'
        priority={true}
        width={600}
        height={600}
        className='rounded-xl md:h-auto md:w-fill'
      />
      <div>
        <p>Title</p>
        <p>
          Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, libero?
        </p>
      </div>
    </div>
  );
}
