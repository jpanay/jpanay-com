import { useState, useEffect, useRef, useMemo } from "react";

const AuraWrapper = ({ children }) => {
  const [mouseDistance, setMouseDistance] = useState({ x: 0, y: 0 });
  const [dropShadow, setDropShadow] = useState({
    filter: `drop-shadow(-4px -2px 2px #76fa93) drop-shadow(0px 4px 2px #76c1ff) drop-shadow(4px -2px 2px #fffd7e)`,
  });
  const headshotRef = useRef(null);
  const gActiveSet = useMemo(() => new Set([1, 5, 6, 7, 8]), []);
  const yActiveSet = useMemo(() => new Set([1, 2, 3, 4, 8]), []);
  const bActiveSet = useMemo(() => new Set([2, 3, 4, 5, 6, 7]), []);

  // Determine the section the headshot is in based on a graph split into 8 equal sections
  function findSection(x, y) {
    // If the mouse is at the center, return 0
    if (x === 0 && y === 0) {
      return 0;
    }
    // Find angle in degrees based on xy coordinates
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle < 0) {
      angle += 360;
    }
    // Determine the section based on angle
    let section;
    if (angle >= 270 && angle < 315) {
      section = 1;
    } else if (angle >= 315 && angle < 360) {
      section = 2;
    } else if (angle >= 0 && angle < 45) {
      section = 3;
    } else if (angle >= 45 && angle < 90) {
      section = 4;
    } else if (angle >= 90 && angle < 135) {
      section = 5;
    } else if (angle >= 135 && angle < 180) {
      section = 6;
    } else if (angle >= 180 && angle < 225) {
      section = 7;
    } else if (angle >= 225 && angle < 270) {
      section = 8;
    } else {
      section = 0;
    }

    return section;
  }

  // Get mouse distance from headshot center
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (headshotRef.current) {
        const rect = headshotRef.current.getBoundingClientRect();
        const headshotCenterX = rect.left + rect.width / 2;
        const headshotCenterY = rect.top + rect.height / 2;

        const distanceX = event.clientX - headshotCenterX;
        const distanceY = event.clientY - headshotCenterY;

        setMouseDistance({ x: distanceX, y: distanceY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update drop shadow based on mouse distance
  useEffect(() => {
    // Get mouse position and which section the coordinates are in
    const mx = parseInt(mouseDistance.x / 6);
    const my = parseInt(mouseDistance.y / 6);
    const section = findSection(mx, my);

    // Determine active sections
    const gActive = gActiveSet.has(section);
    const yActive = yActiveSet.has(section);
    const bActive = bActiveSet.has(section);
    const totalDistance = Math.abs(mx) + Math.abs(my);
    const blurModifier = Math.max(Math.min(8, totalDistance / 8), 2);
    const maxDistance = totalDistance > 72;

    // Determine the drop shadow based on active sections
    let gShadow = "drop-shadow(-4px -2px 2px #76fa93)";
    if (gActive && !maxDistance) {
      const gx = Math.max(Math.min(-4, mx), -12);
      const gy = Math.max(Math.min(6, my), -4);
      gShadow = `drop-shadow(${gx}px ${gy}px ${blurModifier}px #76fa93)`;
    }
    let yShadow = "drop-shadow(4px -2px 2px #fffd7e)";
    if (yActive && !maxDistance) {
      const yx = Math.max(Math.min(12, mx), 4);
      const yy = Math.max(Math.min(6, my), -12);
      yShadow = `drop-shadow(${yx}px ${yy}px ${blurModifier}px #fffd7e)`;
    }
    let bShadow = "drop-shadow(0px 4px 2px #76c1ff)";
    if (bActive && !maxDistance) {
      const bx = Math.max(Math.min(4, mx), -4);
      const by = Math.max(Math.min(12, my), 4);
      bShadow = `drop-shadow(${bx}px ${by}px ${blurModifier}px #76c1ff)`;
    }

    setDropShadow({
      filter: `${gShadow} ${yShadow} ${bShadow}`,
      transition:
        "100ms cubic-bezier(0.42, 0, 1, 1), 500ms cubic-bezier(0, 0, 0.58, 1)",
    });
  }, [mouseDistance, gActiveSet, yActiveSet, bActiveSet]);

  return (
    <div ref={headshotRef} style={dropShadow}>
      {children}
    </div>
  );
};

export default AuraWrapper;
