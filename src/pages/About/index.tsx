export default function About({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="flex py-10 min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary"
    >
      <h2>About</h2>
    </div>
  );
}
