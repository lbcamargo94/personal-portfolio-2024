import SkillsBar from "@/components/SkillsBar";

export default function Skills({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="flex py-10 min-h-screen max-w-4xl w-full flex-col items-center justify-start font-sans bg-primary text-primary"
    >
      <div className=" flex w-full flex-col justify-start items-center align-middle">
        <div className="py-24">
          {TimelineData.map((event) => (
            <TesteTimeLine {...event} key={uuidv4()} />
          )).reverse()}
        </div>
        <SkillsBar />
      </div>
    </div>
  );
}
