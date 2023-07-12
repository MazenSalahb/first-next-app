import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h1 className="text-8xl">Articles Page</h1>
      <Link href="/posts">
        <button className="bg-stone-600 p-2 rounded-sm ease-in duration-150 hover:bg-stone-500">
          Go to posts Page
        </button>
      </Link>
    </div>
  );
}
