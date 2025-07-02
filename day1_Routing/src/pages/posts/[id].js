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
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const strres = await res.json();
  console.log(strres);
  return {
    props: {
      post: strres
    }
  };
}

const PostDetails = (props) => {
  console.log(props);
  return <div>PostDetails</div>;
};

export default PostDetails;

// This file is used to display the details of a specific post based on the ID from the URL.
// It fetches the post data from an API and displays it.
// The getStaticPaths function generates paths for all posts, and getStaticProps fetches the data for a specific post.
// The PostDetails component is where the post data will be rendered.
// The component currently logs the post data to the console and displays a placeholder text "PostDetails".
