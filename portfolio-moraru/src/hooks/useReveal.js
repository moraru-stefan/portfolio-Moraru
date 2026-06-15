import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Observes a list of items individually and reveals each one as it
 * scrolls into view (used for staggered, per-card entrance effects).
 */
export function useRevealItems(options = { threshold: 0.15 }) {
  const [visible, setVisible] = useState(() => new Set());
  const observers = useRef(new Map());

  const setItemRef = useCallback(
    (index) => (el) => {
      const existing = observers.current.get(index);
      if (existing) {
        existing.disconnect();
        observers.current.delete(index);
      }

      if (!el) return;

      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible((prev) => {
            if (prev.has(index)) return prev;
            const next = new Set(prev);
            next.add(index);
            return next;
          });
          obs.unobserve(el);
        }
      }, options);

      obs.observe(el);
      observers.current.set(index, obs);
    },
    [options]
  );

  useEffect(() => {
    return () => {
      observers.current.forEach((obs) => obs.disconnect());
      observers.current.clear();
    };
  }, []);

  return [setItemRef, visible];
}

export default function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.unobserve(el);
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, isVisible];
}
