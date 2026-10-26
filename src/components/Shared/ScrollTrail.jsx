import { useEffect, useRef, useState } from "react";

const COLORS = ["#76fa93", "#76c1ff", "#fffd7e"];
const MIN_SPAWN_INTERVAL_MS = 40;
const PARTICLE_LIFETIME_MS = 3000;
const MAX_PARTICLES = 300;
const TRACK_INSET_PX = 6;
const DRIFT_DISTANCE_PX = 140;
const MIN_THUMB_HEIGHT_PX = 32;

const ScrollTrail = () => {
  const [particles, setParticles] = useState([]);
  const lastSpawnRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const idRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    lastScrollYRef.current = window.scrollY;
    if (reducedMotionRef.current) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollYRef.current;
      lastScrollYRef.current = scrollY;
      if (delta === 0) return;

      const now = performance.now();
      if (now - lastSpawnRef.current < MIN_SPAWN_INTERVAL_MS) return;
      lastSpawnRef.current = now;

      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const viewportHeight = window.innerHeight;

      // Approximate the native thumb's size/position so the trail can originate from its edge rather than the full track's edge.
      const thumbHeight = Math.max(
        MIN_THUMB_HEIGHT_PX,
        (viewportHeight / documentHeight) * viewportHeight
      );
      const thumbTrackHeight = viewportHeight - thumbHeight;
      const progress = scrollY / scrollableHeight;
      const thumbTop = progress * thumbTrackHeight;
      const originY = thumbTop + thumbHeight / 2;

      const scrollingDown = delta > 0;
      const direction = scrollingDown ? 1 : -1;

      const id = idRef.current++;
      const particle = {
        id,
        y: originY,
        char: Math.random() < 0.5 ? "0" : "1",
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 9 + Math.random() * 6,
        rotate: -15 + Math.random() * 30,
        driftX: -6 + Math.random() * 12,
        driftY: direction * (DRIFT_DISTANCE_PX * (0.6 + Math.random() * 0.6)),
        sparkleDelay: -Math.random() * 1800,
      };

      setParticles((prev) => {
        const next = [...prev, particle];
        return next.length > MAX_PARTICLES
          ? next.slice(next.length - MAX_PARTICLES)
          : next;
      });

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, PARTICLE_LIFETIME_MS);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (reducedMotionRef.current) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="cursor-trail-digit"
          style={{
            left: `calc(100% - ${TRACK_INSET_PX}px)`,
            top: p.y,
            fontSize: `${p.size}px`,
            color: p.color,
            textShadow: `0 0 4px ${p.color}, 0 0 8px ${p.color}, 0 0 120px ${p.color}`,
            animationDuration: `${PARTICLE_LIFETIME_MS}ms, 1800ms`,
            animationDelay: `0ms, ${p.sparkleDelay}ms`,
            "--drift-x": `${p.driftX}px`,
            "--drift-y": `${p.driftY}px`,
            "--rotate": `${p.rotate}deg`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};

export default ScrollTrail;
