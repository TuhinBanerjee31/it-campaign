import { RefObject } from "react";
import Counter from "./Counter";

type incomingData = {
    data: {
        value: number,
        symbol: string,
        title: string,
        summary: string,
    },
    reference: RefObject<null> | RefObject<HTMLDivElement>;
}

const StatCard = (props: incomingData) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      <span className="text-3xl text-primary-600 flex items-center">
        <Counter size="text-6xl md:text-8xl" reference={props.reference} value={props.data.value} /> {props.data.symbol}
      </span>

      <h5 className="text-xl md:text-2xl font-medium text-primary-700">{props.data.title}</h5>
      <p className="text-xs md:text-base tracking-wider max-w-xs text-center md:text-left">{props.data.summary}</p>
    </div>
  );
};

export default StatCard;
