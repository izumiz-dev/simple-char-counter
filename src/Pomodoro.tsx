import React, { useEffect, useState } from "react";

export const Pomodoro = ({ timer }: { timer: number }) => {
  const [tick, setTick] = useState(timer * 60 || 0);

  useEffect(() => {
    if (tick !== 0) {
      const id = setInterval(() => {
        setTick((t) => t - 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <div style={{ fontFamily: "serif", color: "tomato", fontSize: "2rem" }}>
      <b>
        <i>
          Auto Start Pomodoro Timer: {Math.floor(tick / 60)} : {tick % 60}
        </i>
      </b>
    </div>
  );
};
