import Link from "next/link";

export default function NormalMenuListItem({ children, to }) {
  return (
    <li>
      <Link href={to} className="hover:text-indigo-400">
        {children}
      </Link>
    </li>
  );
}
