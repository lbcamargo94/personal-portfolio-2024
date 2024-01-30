import { IDataEvent } from "@/interfaces/DataEvents/IEvents";
import "./index.scss";

export default function TesteTimeLine(dataEvent: IDataEvent) {
  const isCurrent: boolean = dataEvent.currentEvent;

  return (
    <div className="box-container">
      <div className="sticky top-0 rounded py-2 z-10 ">
        <h2 className="group-date font-light text-primary">{dataEvent.year}</h2>
      </div>
      <div className="timeline">
        <div className="relative">
          <div className="dot" title="current event">
            {isCurrent && (
              <div
                className="animate-ping absolute -top-0.5 -left-0.5 bg-primary 0 h-5 w-5 rounded-full border-2 border-gray-400"
                title="current event"
              ></div>
            )}
          </div>
          <div className="pl-6">
            <span className="timeline-date">{dataEvent.date}</span>
            <h3 className="timeline-title">{dataEvent.name}</h3>
            <p className="text-gray-500">{dataEvent.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
