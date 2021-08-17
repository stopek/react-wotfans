import { CircularProgressProps } from "@material-ui/core";
import ProgressCircular from "components/ui/progress/ProgressCircular";
import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';

interface CountDownProgressCircularInterface extends CircularProgressProps {
  start: number,
  size: number,
  steps: number
}

const CountDownProgressCircular: React.FC<CountDownProgressCircularInterface> = ({ size, start, steps }) => {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter((prev) => prev - (start / steps) * 2), start / steps);
    return () => clearInterval(timer as NodeJS.Timeout);
  }, [counter]);

  return (
    <ProgressCircular
      variant={`determinate`}
      value={(counter * 100 / start) + (start / steps)}
      size={size}
    />
  );
};

CountDownProgressCircular.propTypes = {
  size: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
}

CountDownProgressCircular.defaultProps = {
  size: 35,
  start: 1000,
  steps: 10
}

export default CountDownProgressCircular;
