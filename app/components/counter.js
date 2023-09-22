"use client";

import { useCounter } from "@/app/hooks/useCounter";
import { IncrementButton } from "./increment-button";
import { DecrementButton } from "./decrement-button";

export const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-bold">{count}</h1>
        <div className="flex space-x-4">
          <IncrementButton increment={increment} />
          <DecrementButton decrement={decrement} />
        </div>
      </div>
    </div>
  );
};
