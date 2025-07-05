/* eslint-disable @next/next/no-img-element */
export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const strres = await res.json();
  const paths = strres.map((post) => ({
    params: {
      id: post.id.toString()
    }
  }));
  return {
    paths: paths,
    fallback: true
    // fallback: 'blocking'             //server wait until the product data is fetched before rendering, so no need for a loading state.
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const strres = await res.json();
  // console.log(strres);
  return {
    props: {
      post: strres
    }
  };
}

const PostDetails = (props) => {
  // console.log(props);
  if (!props) return <div>Loading...</div>;
  return (
    <div>
      <div className="min-h-screen p-10">
        <h1 className="text-4xl">Post Details</h1>
        <h1 className="text-3xl font-bold mb-4">{props.post.title}</h1>
        <img
          src={props.post.image}
          alt={props.post.title}
          className="w-60 h-60 mb-4"
        />
        <p className="text-lg mb-2">Price: ${props.post.price}</p>
        <p className="text-md text-gray-600">{props.post.description}</p>
      </div>
    </div>
  );
};

export default PostDetails;

// This file is used to display the details of a specific post based on the ID from the URL.
// It fetches the post data from an API and displays it.
// The getStaticPaths function generates paths for all posts, and getStaticProps fetches the data for a specific post.
// The PostDetails component is where the post data will be rendered.
// The component currently logs the post data to the console and displays a placeholder text "PostDetails".
