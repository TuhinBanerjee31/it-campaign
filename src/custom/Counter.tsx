import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { RefObject, useEffect } from "react";

type incomingData = {
  value: number;
  size: string;
  reference: RefObject<null> | RefObject<HTMLDivElement>;
};

export default function Counter(props: incomingData) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  const isInView = useInView(props.reference, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, props.value, { duration: 4 });
      return () => controls.stop();
    }
  }, [isInView]);

  return <motion.pre className={`${props.size}`}>{rounded}</motion.pre>;
}
