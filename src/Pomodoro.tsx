import React, { useEffect, useState } from "react";

export const Pomodoro = ({ timer }: { timer: number }) => {
  const [tick, setTick] = useState(timer * 60 || 0);
  const [number, setNumber] = useState<number>(1);
  const [pomos, setPomos] = useState<string[]>([]);

  useEffect(() => {
    if (tick !== 0) {
      const id = setInterval(() => {
        setTick((t) => t - 1);
      }, 1000);
      return () => clearInterval(id);
    }
    if (tick === 0) {
      setTick(timer * 60);
      setNumber((n) => n + 1);
      setPomos((p) => [...p, number % 4 === 0 ? "⭐️" : "🍅"]);
    }
  }, [tick, timer, number]);

  return (
    <div style={{ fontFamily: "serif", color: "tomato", fontSize: "2rem" }}>
      <b>
        <i>
          Auto Start Pomodoro Timer:{" "}
          {Math.floor(tick / 60)
            .toString()
            .padStart(2, "0")}
          :{(tick % 60).toString().padStart(2, "0")}
        </i>
      </b>
      <div>{pomos && pomos.map((pomo: string) => <span>{pomo}</span>)}</div>
    </div>
  );
};
