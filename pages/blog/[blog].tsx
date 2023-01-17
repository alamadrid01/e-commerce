import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

function Blog(props: any) {
  const { detail } = props;
  const router = useRouter();
  const { blog = [] } = router.query;
  // How to get the params passed from the url
  
  console.log(blog);

  // if (blog.length === 1) {
  return (
    <>
    <Link href='' replace>
      <h1>{detail.title}</h1>
      <p>{detail.body}</p>
      </Link>
    </>
  );
  // }
  // return <div>this is the path</div>;
}

export default Blog;

export async function getStaticPaths() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const result = response.data;
  const paths = result.map((blog: any) => {
    return {
      params: { blog: `${blog.id}` },
    };
  });

  return {
    // paths: [
    //   {
    //     params: { blog: "1" },
    //   },

    // ],
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.blog}`
    );
    console.log(response);
    return {
      props: {
        detail: response.data,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
