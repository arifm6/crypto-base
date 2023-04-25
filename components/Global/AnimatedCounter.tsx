import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  from: number;
  to: number;
  duration?: number;
  round?: number;
};

export default function AnimatedCounter({
  from,
  to,
  duration = 1,
  round = 0,
}: Props) {
  const [counter, setCounter] = useState<number>(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setCounter(parseInt(value.toFixed(round)));
      },
    });
  }, [isInView]);
  return <span ref={ref}>{counter}</span>;
}
