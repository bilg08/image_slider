import { useEffect, useState } from "react";

export const Progress = ({ time }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((progress + 1));
      }, 0.5);

      return () => {
        if (progress >= time) {
          setProgress(0);
        }
        clearInterval(interval);
      };
    }, [progress]);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: `100%`,
        height: `60px`,
        background: "red",
      }}>
          <div
              style={{ height:`100%`,width: `${progress + 'px'}`, background:'green'}}
          ></div>
    </div>
  );
};