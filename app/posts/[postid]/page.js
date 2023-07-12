import { resolve } from "styled-jsx/css";

export default async function PostDetails({ params }) {
  const postId = params.postid;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 120 },
    }
  );
  const post = await response.json();
  return (
    <div>
      <h1 className="text-2xl font-semibold m-5">Post {postId} Details</h1>

      <div className="flex flex-col gap-3 items-center bg-white w-fit mx-auto p-4 rounded-md text-black selection:bg-slate-800">
        <h1 className="font-semibold capitalize text-5xl">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
