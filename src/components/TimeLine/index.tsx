import { ITimeEvent } from "@/interfaces/TimeLine/ITimeLine";

export default function TimeLine(timeEvent: ITimeEvent[]): JSX.Element {
  return (
    <div>
      <h1>TimeLine</h1>
      <ul>
        {timeEvent.map((event) => (
          <li>
            <div>
              <p>{event.date}</p>
              <p>{event.title}</p>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
