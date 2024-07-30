import Link from "next/link";

export function MyLink({ children, href }) {
  return (
    <Link href={href} className="text-sky-500 hover:underline">
      {children}
    </Link>
  );
}
