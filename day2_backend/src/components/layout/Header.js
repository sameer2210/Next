import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 shadow-sm px-6 py-4 flex justify-center items-center">
      <nav className="space-x-16">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/products/create" className="hover:underline">
          Create Product
        </Link>
        <Link href="/users" className="hover:underline">
          Users SWR
        </Link>
      </nav>
    </header>
  );
}
