import React from "react";
import CountUp from "react-countup";

interface CounterProps {
  number: number;
  title: string;
}

const Counter: React.FC<CounterProps> = ({ number, title }) => {
  return (
    <span className="flex ">
      <CountUp duration={10}  end={number} />
      <span>{title}</span>
    </span>
  );
};

export default Counter;
