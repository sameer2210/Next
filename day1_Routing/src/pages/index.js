import Link from "next/link";
import { useRouter } from "next/router";

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <ul className="bg-gray-200 rounded p-4 space-x-15 mb-8">
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href={{ pathname: `/products/1` }}>product one</Link>
      </ul>

      <button // client-side routing, so there is no full page reload—Next.js handles the route change smoothly using the built-in router.
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/products")}
      >
        Products (SEO problem)
      </button>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-5"
        onClick={() => router.push("/posts")}
      >
        posts (SEO problem solved)
      </button>
    </div>
  );
};

export default Homepage;
