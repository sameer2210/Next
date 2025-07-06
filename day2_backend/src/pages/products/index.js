import Link from "next/link";

// Asynchronously fetches product data from Fake Store API
const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/productApi");
    // const res = await fetch("https://fakestoreapi.com/products/");

    const jsonres = await res.json();

    return jsonres.data || [];
    // return jsonres;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // fallback- Prevents app crash if API fails
  }
};

// Runs at build time, returns products as props
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products: products || []
    },
    revalidate: 10
  };
}

const Products = ({ products }) => {
  return (
    <div className="px-[10%] py-10">
      {products.map((item) => (
        <p className="p-2 bg-zinc-200 mb-3 rounded" key={item.id}>
          <Link href={`/products/${item.id}`}>{item.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default Products;
