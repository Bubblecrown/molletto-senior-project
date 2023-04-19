import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface UseParallaxOptions {
  speed: number;
}

const useParallax = ({ speed }: UseParallaxOptions) => {
  const ref = useRef<any>(null);
  const animation = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const yPos = -((window.scrollY - rect.top) * speed);
        animation.start({ y: yPos });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animation, speed]);

  return { ref, animation };
};

export default useParallax;
