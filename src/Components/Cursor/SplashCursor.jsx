"use client";
import { useEffect, useRef } from "react";

export default function LiquidCursor() {
  const canvasRef = useRef(null);
  const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6FFF"]; // modern palette

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 4;
        this.color = color;
        this.life = 20 + Math.random() * 10;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      particles = particles.filter((p) => p.life > 0);
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", (e) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 6; i++) {
        particles.push(new Particle(e.clientX, e.clientY, color));
      }
    });

    animate();

    return () => window.removeEventListener("mousemove", () => {});
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        background: "transparent",
      }}
    />
  );
}
