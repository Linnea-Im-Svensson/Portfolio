export default function Skillbar({ children, width }) {
  return (
    <div className='w-full'>
      <div className='pl-2'>{children}</div>
      <div className='relative bg-black bg-opacity-50 w-full h-7 rounded-xl'>
        <div
          className={`absolute top-0 bg-gradient-to-r dark:from-purple-700 dark:via-indigo-400 dark:to-teal-300 from-teal-400 via-blue-600 to-purple-600 bg-opacity-50 h-7 rounded-xl ${width}`}
        ></div>
      </div>
    </div>
  );
}
