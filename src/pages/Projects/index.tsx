import TesteTimeLine from "@/components/TimeLine";

export default function Projects({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="flex py-10 min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary"
    >
      <h2>Projects</h2>
      <div className="bg-red-500 w-20 h-20">red</div>
      <div className="bg-green-500 w-20 h-20">green</div>
      <div className="bg-blue-500 w-20 h-20">blue</div>
      <div className="bg-yellow-500 w-20 h-20">yellow</div>

      <div>
        <TesteTimeLine />
      </div>
    </div>
  );
}
