const getSingleProduct = async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonres = await res.json();
    return jsonres;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // fallback- Prevents app crash if API fails
  }
};

export async function getStaticProps(context) {
  const id = context.params;
  const product = getSingleProduct(id);
  return {
    props: {
      product: product || []
    },
    revalidate: 10
  };
}

const ProductDetails = () => {
  return <div>ProductDetails</div>;
};

export default ProductDetails;
