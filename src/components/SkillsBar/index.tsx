import { IDataSkill } from "@/interfaces/DataSkills/ISkills";
import "./index.scss";

export default function SkillsBar(dataSkill: IDataSkill) {
  return (
    <div className=" p-2 rounded max-w-2xl w-full cursor-default">
      <div className="grid grid-cols-skills grid-rows-subgrid gap-2 w-full rounded h-full">
        <div className="max-h-12 max-w-12 p-1 h-full m-auto">
          <img
            src={dataSkill.image.src}
            alt={dataSkill.image.alt}
            className="w-full min-h-full object-cover"
          />
        </div>
        <p className="text-primary m-auto">{dataSkill.skill}</p>
        <div className="flex justify-between align-middle items-center text-center gap-3 p-3 bg-sky-500 w-full max-w-md h-3 rounded m-auto">
          <span
            className={
              "bg-sky-200 p-1 h-1 animate-pulse rounded shadow-primary"
            }
            style={{ width: `${dataSkill.rate}%` }}
          ></span>
          <p className="font-medium">{dataSkill.rate}</p>
        </div>
      </div>
    </div>
  );
}
