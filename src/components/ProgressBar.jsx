import React, { useEffect, useState } from "react";

const ProgressBar = ({ timer }) => {
  const [rtime, setRTime] = useState(timer);

  useEffect(() => {
    const clr = setInterval(() => {
      console.log("interval");
      setRTime((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(clr);
    };
  }, []);

  return <progress value={rtime} max={timer} />;
};

export default ProgressBar;
