export default function SingleArticle(props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-8xl">
      <h1>Single Article is {props.params.title}</h1>
    </div>
  );
}
