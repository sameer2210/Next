import Link from "next/link";
import { useRouter } from "next/router";

const Homepage = () => {
  const router = useRouter();
  return <div className="flex flex-col items-center justify-center min-h-screen ">

    <ul>
    <Link href="/products">Products</Link>
    <Link href="/about">About</Link>
    <Link href={{ pathname: "/about" }}>product one</Link>
    </ul>
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => router.push("/products")}>Go to Products</button>
  </div>;
};

export default Homepage;
