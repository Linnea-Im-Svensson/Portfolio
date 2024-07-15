import Link from "next/link";

export default function MenuListItem({ children, closeMenu, to }) {
  return (
    <li className="border-b-2 pb-2">
      <Link href={to} onClick={closeMenu} className="pr-80">
        {children}
      </Link>
    </li>
  );
}
