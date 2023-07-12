export const metadata = {
  title: "Article page",
};

export default function ArticleLayout({ children }) {
  return (
    <div>
      <h2 className="p-5 text-3xl absolute">Arcticles Pages</h2>
      {children}
    </div>
  );
}
