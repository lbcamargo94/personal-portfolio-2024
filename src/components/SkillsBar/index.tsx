import { IDataSkill } from "@/interfaces/DataSkills/ISkills";
import "./index.scss";

export default function SkillsBar(dataSkill: IDataSkill) {
  return (
    <div className=" p-2 rounded max-w-2xl w-full cursor-default">
      <div className="flex gap-4 w-full rounded h-full justify-center align-middle items-center">
        <div className="min-h-12 min-w-12">
          <img
            src={dataSkill.image.src}
            alt={dataSkill.image.alt}
            className="w-full h-full object-contain p-1"
          />
        </div>
        <p className="text-primary w-1/5">{dataSkill.skill}</p>
        <div className="flex justify-between align-middle items-center text-center gap-3 p-3 bg-sky-500 w-full h-3 rounded">
          <span
            className={`bg-sky-200 p-[0.25px] w-[${dataSkill.rate}] h-1 animate-pulse rounded shadow-primary`}
          ></span>
          <p className="font-medium">{dataSkill.rate}</p>
        </div>
      </div>
    </div>
  );
}
