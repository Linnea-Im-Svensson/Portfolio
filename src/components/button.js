export default function Button({ children, style }) {
  const styles = {
    primary: 'p-4 bg-indigo-500 text-indigo-50 hover:bg-indigo-700',
    secondary:
      'p-4 border-2 border-indigo-400 dark:border-indigo-200  dark:text-indigo-200 dark:hover:bg-indigo-800 dark:hover:bg-opacity-40 dark:hover:border-indigo-400 dark:hover:text-indigo-400',
  };
  return <button className={`rounded-lg ${styles[style]}`}>{children}</button>;
}

Button.defaultProps = {
  style: 'primary',
};
