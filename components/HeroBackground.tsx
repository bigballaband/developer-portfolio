"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function HeroBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0f172a] to-[#1a1f3a]" />
      
      {/* Soft pastel radial blobs */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />
      
      {/* Particles layer */}
      <Particles
        id="hero-particles"
        className="absolute inset-0"
        {...({ init: particlesInit } as any)}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
            },
            color: {
              value: "#3b82f6",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.15,
              animation: {
                enable: true,
                speed: 0.5,
              },
            },
            size: {
              value: 2,
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "connect",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              connect: {
                distance: 120,
                links: {
                  opacity: 0.2,
                },
                radius: 120,
              },
            },
          },
          detectRetina: true,
        } as any}
      />
    </div>
  );
}

