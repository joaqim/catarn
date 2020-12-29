import { useState, useEffect, useRef } from "react";

export function applyAnimation(a, axis = { x: 0, y: 0, z: 0 }, scale = 65) {
  const locScale = 20;
  return {
    transformOrigin: "center",
    WebkitTransform: `
          translate3d(
            ${a[4][0] * -locScale}px,
            ${a[4][1] * -locScale}px,
            ${a[4][2] * locScale}px
          )
                    scale(${scale / 100})
          matrix3d(
            ${a[0][0]},${a[0][1]},${a[0][2]},${a[0][3]},
            ${a[1][0]},${a[1][1]},${a[1][2]},${a[1][3]},
            ${a[2][0]},${a[2][1]},${a[2][2]},${a[2][3]},
            ${a[3][0]},${a[3][1]},${a[3][2]},${a[3][3]})
    rotateX(${90 * axis.x}deg)
          rotateY(${90 * axis.y}deg)
          rotateZ(${90 * axis.z}deg)
`,
  };
}

// Hook
export function useAnimation(easingName = "linear", duration = 500, delay = 0) {
  // The useAnimationTimer hook calls useState every animation frame ...
  // ... giving us elapsed time and causing a rerender as frequently ...
  // ... as possible for a smooth animation.
  const elapsed = useAnimationTimer(duration, delay);
  // Amount of specified duration elapsed on a scale from 0 - 1
  const n = Math.min(1, elapsed / duration);
  // Return altered value based on our specified easing function
  return easing[easingName](n);
}

// Some easing functions copied from:
// https://github.com/streamich/ts-easing/blob/master/src/index.ts
// Hardcode here or pull in a dependency
const easing = {
  linear: (n) => n,
  elastic: (n) =>
    n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15),
  inExpo: (n) => Math.pow(2, 10 * (n - 1)),
};

function useAnimationTimer(duration = 1000, delay = 0) {
  const [elapsed, setTime] = useState(0);

  useEffect(
    () => {
      let animationFrame, timerStop, start;

      // Function to be executed on each animation frame
      function onFrame() {
        setTime(Date.now() - start);
        loop();
      }

      // Call onFrame() on next animation frame
      function loop() {
        animationFrame = requestAnimationFrame(onFrame);
      }

      function onStart() {
        // Set a timeout to stop things when duration time elapses
        timerStop = setTimeout(() => {
          cancelAnimationFrame(animationFrame);
          setTime(Date.now() - start);
        }, duration);

        // Start the loop
        start = Date.now();
        loop();
      }

      // Start after specified delay (defaults to 0)
      const timerDelay = setTimeout(onStart, delay);

      // Clean things up
      return () => {
        clearTimeout(timerStop);
        clearTimeout(timerDelay);
        cancelAnimationFrame(animationFrame);
      };
    },
    [duration, delay] // Only re-run effect if duration or delay changes
  );

  return elapsed;
}
