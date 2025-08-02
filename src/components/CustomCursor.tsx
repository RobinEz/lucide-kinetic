import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // Refs pour la position, pour éviter les re-rendus.
  const mousePos = useRef({ x: -100, y: -100 });
  const animatedPos = useRef({ x: -100, y: -100 });

  // Refs pour le throttling de la détection de survol.
  const lastCheckTime = useRef(0);
  const checkInterval = 100; // ms

  useEffect(() => {
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = (timestamp: number) => {
      // Interpolation linéaire pour le mouvement lissé.
      const smoothing = 0.15;
      animatedPos.current.x += (mousePos.current.x - animatedPos.current.x) * smoothing;
      animatedPos.current.y += (mousePos.current.y - animatedPos.current.y) * smoothing;

      if (cursorOuterRef.current && cursorDotRef.current) {
        // Écriture dans le DOM.
        cursorOuterRef.current.style.transform = `translate3d(${animatedPos.current.x}px, ${animatedPos.current.y}px, 0)`;
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Détection de survol "throttled" à l'intérieur de la même frame d'animation.
      if (timestamp - lastCheckTime.current > checkInterval) {
        lastCheckTime.current = timestamp;
        
        // Lecture du DOM.
        const target = document.elementFromPoint(mousePos.current.x, mousePos.current.y) as HTMLElement;
        const interactiveEl = target?.closest('a, button, [role="button"], input, textarea, select, .btn-hero');

        let variant = 'default';
        if (interactiveEl) {
          variant = 'interactive';
        }
        
        // Écriture dans le DOM (attribut).
        if (cursorOuterRef.current && cursorOuterRef.current.dataset.variant !== variant) {
          cursorOuterRef.current.dataset.variant = variant;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => cursorOuterRef.current?.classList.add('clicking');
    const handleMouseUp = () => cursorOuterRef.current?.classList.remove('clicking');

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = 'auto';
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-outer {
          position: fixed;
          top: -20px; 
          left: -20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid hsla(var(--primary), 0.5);
          pointer-events: none;
          z-index: 9999;
          transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s, border-radius 0.3s, border-color 0.3s, background-color 0.3s;
          transition-timing-function: ease-out;
        }
        .cursor-outer[data-variant="interactive"] {
          width: 60px;
          height: 60px;
          top: -30px;
          left: -30px;
          border-color: hsl(var(--primary));
          background-color: hsla(var(--primary), 0.2);
        }
        .cursor-outer.clicking {
          transform: scale(0.8);
        }
        .cursor-dot {
          position: fixed;
          top: -4px;
          left: -4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: hsl(var(--primary));
          pointer-events: none;
          z-index: 9999;
        }
      `}</style>
      <div ref={cursorOuterRef} className="cursor-outer" />
      <div ref={cursorDotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;