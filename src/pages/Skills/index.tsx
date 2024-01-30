import SkillsBar from "@/components/SkillsBar";
import DataSkills from "@/data/skills/skills";
import { v4 as uuidv4 } from "uuid";

export default function Skills({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="flex py-10 min-h-screen max-w-4xl w-full flex-col items-center justify-start font-sans bg-primary text-primary"
    >
      <div className="felx h-full max-w-2xl">
        <h1 className="text-primary text-4xl w-full text-balance text-center">
          Habilidades
        </h1>
      </div>

      <div className=" flex w-full flex-col justify-start items-center align-middle">
        <div className="flex flex-col justify-center items-center py-24 w-full">
          {DataSkills.map((event) => (
            <SkillsBar {...event} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
}
