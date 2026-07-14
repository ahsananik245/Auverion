import React, { useEffect, useRef } from 'react';

const HeroAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let nodes = [];
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const NODE_COUNT = 60;

    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.01,
        // Some nodes are "highlighted" engineering nodes
        isSpecial: Math.random() < 0.15,
      }));
    };

    const CONNECT_DIST = 160;
    const MOUSE_ATTRACT_DIST = 120;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      nodes.forEach((n) => {
        n.pulse += n.pulseSpeed;
        n.x += n.vx;
        n.y += n.vy;

        // Bounce off walls
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        // Mouse attraction
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_ATTRACT_DIST) {
          const force = (MOUSE_ATTRACT_DIST - dist) / MOUSE_ATTRACT_DIST;
          n.vx += (dx / dist) * force * 0.04;
          n.vy += (dy / dist) * force * 0.04;
        }

        // Speed cap
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed > 1.2) {
          n.vx = (n.vx / speed) * 1.2;
          n.vy = (n.vy / speed) * 1.2;
        }
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.25;
            const isSpecialLink = a.isSpecial || b.isSpecial;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isSpecialLink
              ? `rgba(59, 130, 246, ${alpha * 1.8})`
              : `rgba(49, 71, 101, ${alpha * 3})`;
            ctx.lineWidth = isSpecialLink ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulseFactor = Math.sin(n.pulse) * 0.5 + 0.5;

        if (n.isSpecial) {
          // Glowing blue engineering node
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
          glow.addColorStop(0, `rgba(59, 130, 246, ${0.5 + pulseFactor * 0.4})`);
          glow.addColorStop(1, 'rgba(59, 130, 246, 0)');
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + pulseFactor, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 197, 253, ${0.8 + pulseFactor * 0.2})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(49, 71, 101, ${0.5 + pulseFactor * 0.3})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', () => {
      resize();
      initNodes();
    });

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    resize();
    initNodes();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'auto',
      }}
    />
  );
};

export default HeroAnimation;
