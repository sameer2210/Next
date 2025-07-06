/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// Fetch all products from local API
const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/productApi");
  const json = await res.json();
  return json.data || [];
};

// getStaticPaths: pre-render known product pages
export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { id: product.id }
  }));

  return {
    paths,
    fallback: true // true → enables fallback loading + supports newly added products
  };
}

// getStaticProps: fetch single product by ID
export async function getStaticProps(context) {
  const { id } = context.params;
  try {
    const products = await getProducts();
    const product = products.find((p) => p.id === id) || null;

    //     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    //     const product = await res.json();

    return {
      props: { product },
      revalidate: 10
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: { product: null } // Fallback props to prevent crash
    };
  }
}

const ProductDetails = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Head>
        <title>Ecommerce | {product.title}</title>
        <meta name="description" content={product.description.slice(0, 155)} />
      </Head>

      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-lg text-gray-700 mb-4">Price: ₹{product.price}</p>

      <h1>Network tab is open and see image section - ( img vs Image )</h1>
      <div className="mt-4 flex space-x-8">
        {/* Next.js Image */}
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={product.title}
          className="rounded shadow-md mb-4"
        />

        {/* Regular img tag */}
        <img
          src={product.image}
          width={300}
          height={300}
          alt={product.title}
          className="rounded shadow-md mb-4"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
