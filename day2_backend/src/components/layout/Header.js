import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Try</h1>
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
      </nav>
    </header>
  );
}
