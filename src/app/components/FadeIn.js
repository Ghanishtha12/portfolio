'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, delay = 0, y = 24 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hidden = visible === false;

  return (
    <div
      ref={ref}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translateY(${y}px)` : 'translateY(0)',
        transition: visible === null ? 'none' : `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}