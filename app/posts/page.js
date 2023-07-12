import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <div className="bg-slate-800 p-5 m-6 rounded-lg w-2/3 mx-auto">
          <h1 className="font-bold text-3xl">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="flex flex-col h-screen gap-4">
      <h1 className="text-8xl text-center m-6">Posts Page</h1>
      {postsJSX}
    </div>
  );
}
