/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useEffect, useState } from "react";

const index = () => {
  const [data, setdata] = useState([]);
  const getPorducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?_limit=10");
      const jsonres = await res.json();
      setdata(jsonres);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getPorducts();
  }, []);

  return (
    <div className="py-10 px-[10%] font-thin space-y-5">
      <h1 className="text-5xl">index page inside products folder</h1>
      <p className="text-xl font-bold text-red-500">
        The current implementation may lead to issues with SEO optimization and
        performance due to the lack of server-side rendering and pre-rendering
        of product pages.
        <br />
        (first page load then data is coming) and see the view page source in
        browser
        <br />
        <span className="text-green-500">
          please use getStaticProps or getServerSideProps for better SEO and
          performance.
        </span>
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/products/1" className="text-blue-500 hover:underline">
            Go to Product 1
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Go to Homepage
          </Link>
        </li>
      </ul>

      <div>
        {data.map((d) => (
          <Link
            key={d.id}
            href={`/products/${d.id}`}
            className="block p-5 bg-zinc-200 mb-4 rounded hover:bg-zinc-300"
          >
            {d.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
