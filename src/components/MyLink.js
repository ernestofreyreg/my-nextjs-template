import Link from "next/link";

export function MyLink({ children, href, onClick }) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="text-sky-500 hover:underline"
      >
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className="text-sky-500 hover:underline">
      {children}
    </Link>
  );
}
