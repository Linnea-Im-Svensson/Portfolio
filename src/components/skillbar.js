export default function Skillbar({ children, percent }) {
  const width = {
    95: 'w-[95%]',
    90: 'w-[90%]',
    85: 'w-[85%]',
    80: 'w-[80%]',
    75: 'w-[75%]',
    40: 'w-[40%]',
    35: 'w-[35%]',
  };

  return (
    <div className='md:w-[800px] w-[400px]'>
      <div className='pl-2'>{children}</div>
      <div className='relative bg-black bg-opacity-50 w-full h-7 rounded-xl'>
        <div
          className={`absolute top-0 bg-gradient-to-r dark:from-purple-700 dark:via-indigo-400 dark:to-teal-300 from-teal-400 via-blue-600 to-purple-600 bg-opacity-50 h-7 rounded-xl ${width[percent]}`}
        ></div>
      </div>
    </div>
  );
}
