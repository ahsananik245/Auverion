import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = { threshold: 0.1, triggerOnce: true }) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        if (options.triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else if (!options.triggerOnce) {
        setIsRevealed(false);
      }
    }, {
      rootMargin: '0px',
      threshold: options.threshold,
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return { ref, isRevealed };
};
