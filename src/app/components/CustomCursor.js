'use client';
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const over = () => setVisible(true);
    const out = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', over);
    document.addEventListener('mouseleave', out);

    const interval = setInterval(() => {
      setRingPos(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
    }, 16);

    const handleHover = () => {
      const els = document.querySelectorAll('a, button, .glass-card, .btn-neon, .btn-solid, .social-icon, .skill-tag');
      els.forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };
    setTimeout(handleHover, 500);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', over);
      document.removeEventListener('mouseleave', out);
      clearInterval(interval);
    };
  }, [pos.x, pos.y]);

  if (!visible) return null;

  return (
    <div 
      style={{ 
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hovered ? 1.5 : 1})`,
        pointerEvents: 'none',
        zIndex: 9999,
        fontSize: '24px',
        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        filter: 'drop-shadow(0 0 10px rgba(0, 245, 255, 0.3))',
        display: visible ? 'block' : 'none'
      }}
    >
      {hovered ? '🔥' : '✨'}
    </div>
  );
}
