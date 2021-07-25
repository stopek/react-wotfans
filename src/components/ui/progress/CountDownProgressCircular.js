import ProgressCircular from "components/ui/progress/ProgressCircular";
import React, { useEffect, useState } from 'react';

export default function CountDownProgressCircular(
  {
    size = 35,
    start = 1000,
    steps = 10
  }
) {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter((prev) => prev - (start / steps) * 2), start / steps);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <ProgressCircular variant={`determinate`} value={(counter * 100 / start) + (start / steps)} size={size} />
  );
};
