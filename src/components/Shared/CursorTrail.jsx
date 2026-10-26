import { useEffect, useRef, useState } from "react";

const COLORS = ["#76fa93", "#76c1ff", "#fffd7e"];
const MIN_SPAWN_INTERVAL_MS = 15;
const PARTICLE_LIFETIME_MS = 3000;
const MAX_PARTICLES = 120;
const CURSOR_TIP_X_OFFSET = 4;
const CURSOR_TIP_Y_OFFSET = 8;
const EXPLOSION_PARTICLE_COUNT = 10;
const EXPLOSION_LIFETIME_MS = 2000;
const EXPLOSION_SPEED_MIN = 40;
const EXPLOSION_SPEED_MAX = 120;

const CursorTrail = () => {
  const [particles, setParticles] = useState([]);
  const lastSpawnRef = useRef(0);
  const idRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotionRef.current) return;

    const spawnParticle = (particle) => {
      const id = idRef.current++;
      const sparkleDelay = -Math.random() * 1800;

      setParticles((prev) => {
        const next = [...prev, { ...particle, id, sparkleDelay }];
        return next.length > MAX_PARTICLES
          ? next.slice(next.length - MAX_PARTICLES)
          : next;
      });

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, particle.duration);
    };

    const handleMouseMove = (event) => {
      const now = performance.now();
      if (now - lastSpawnRef.current < MIN_SPAWN_INTERVAL_MS) return;
      lastSpawnRef.current = now;

      spawnParticle({
        x: event.clientX + CURSOR_TIP_X_OFFSET,
        y: event.clientY + CURSOR_TIP_Y_OFFSET,
        char: Math.random() < 0.5 ? "0" : "1",
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 10 + Math.random() * 8,
        rotate: -20 + Math.random() * 40,
        driftX: -24 + Math.random() * 48,
        driftY: -16 + Math.random() * 24,
        duration: PARTICLE_LIFETIME_MS,
      });
    };

    const handleClick = (event) => {
      for (let i = 0; i < EXPLOSION_PARTICLE_COUNT; i++) {
        const angle =
          (i / EXPLOSION_PARTICLE_COUNT) * Math.PI * 2 +
          (Math.random() - 0.5) * 0.5;
        const speed =
          EXPLOSION_SPEED_MIN +
          Math.random() * (EXPLOSION_SPEED_MAX - EXPLOSION_SPEED_MIN);

        spawnParticle({
          x: event.clientX,
          y: event.clientY,
          char: Math.random() < 0.5 ? "0" : "1",
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 12 + Math.random() * 10,
          rotate: -30 + Math.random() * 60,
          driftX: Math.cos(angle) * speed,
          driftY: Math.sin(angle) * speed,
          duration: EXPLOSION_LIFETIME_MS,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (reducedMotionRef.current) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="cursor-trail-digit"
          style={{
            left: p.x,
            top: p.y,
            fontSize: `${p.size}px`,
            color: p.color,
            textShadow: `0 0 4px ${p.color}, 0 0 8px ${p.color}, 0 0 120px ${p.color}`,
            animationDuration: `${p.duration}ms, 1800ms`,
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

export default CursorTrail;
