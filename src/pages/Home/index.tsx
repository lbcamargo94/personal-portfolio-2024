export default function Home({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="flex py-10 min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary"
    >
      <h2>Home</h2>
    </div>
  );
}
