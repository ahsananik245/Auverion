import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import HeroAnimation from './HeroAnimation';
import { DOWNLOAD_URL } from '../../config/download';
import './HeroSection.css';

const TYPING_PHRASES = [
  'Without Manual Rework.',
  'Without Repetitive Tasks.',
  'With Intelligent Automation.',
  'Built for Structural Teams.',
];

const useTypingEffect = (phrases, speed = 55, pause = 2000) => {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
      } else {
        setIsDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIdx, phrases, speed, pause]);

  return displayed;
};

const PIPELINE_STEPS = [
  { icon: '⬡', label: 'Load ETABS Model', status: 'done', color: '#22C55E' },
  { icon: '⬡', label: 'Extract Sections', status: 'done', color: '#22C55E' },
  { icon: '⬡', label: 'Run Rebar Calc', status: 'active', color: '#3B82F6' },
  { icon: '⬡', label: 'Output to Revit', status: 'pending', color: '#314765' },
];

const LiveMockup = () => {
  const [progress, setProgress] = useState(0);
  const [activeBar, setActiveBar] = useState(0);
  const [log, setLog] = useState([
    '> RebarX Revit plugin loaded...',
    '> Reading structural sections...',
  ]);
  const logRef = useRef(null);

  const LOG_LINES = [
    '> [Plugin] Reading Revit model...',
    '> Calculating beam B-12...',
    '> AS_req = 1842 mm²  ✓',
    '> Beam B-13 → 4T20 selected',
    '> Column C-07 check passed',
    '> Exporting to Revit...',
    '> Pipeline complete. 0 errors.',
  ];

  useEffect(() => {
    let pct = 0;
    const interval = setInterval(() => {
      pct = (pct + 1) % 101;
      setProgress(pct);
      setActiveBar(Math.floor(pct / 14) % PIPELINE_STEPS.length);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const addLog = () => {
      setLog((prev) => {
        const next = [...prev, LOG_LINES[prev.length % LOG_LINES.length]];
        return next.slice(-6); // keep last 6
      });
      if (logRef.current) {
        logRef.current.scrollTop = logRef.current.scrollHeight;
      }
    };
    const t = setInterval(addLog, 1800);
    return () => clearInterval(t);
  }, []);

  const bars = [78, 55, 91, 64, 82, 47];

  return (
    <div className="live-mockup">
      {/* Title bar */}
      <div className="lm-titlebar">
        <div className="lm-dots">
          <span className="lm-dot lm-dot--red" />
          <span className="lm-dot lm-dot--yellow" />
          <span className="lm-dot lm-dot--green" />
        </div>
        <span className="lm-title-text">RebarX — Revit Plugin</span>
        <span className="lm-status-pill">
          <span className="lm-status-live" />
          LIVE
        </span>
      </div>

      {/* Body */}
      <div className="lm-body">
        {/* Left sidebar: pipeline steps */}
        <div className="lm-sidebar">
          <div className="lm-sidebar-label">PIPELINE</div>
          {PIPELINE_STEPS.map((step, i) => (
            <div
              key={i}
              className={`lm-step ${i === activeBar ? 'lm-step--active' : ''} ${i < activeBar ? 'lm-step--done' : ''}`}
            >
              <span className="lm-step-icon" style={{ color: i <= activeBar ? step.color : '#314765' }}>
                {i < activeBar ? '✓' : i === activeBar ? '▶' : '○'}
              </span>
              <span className="lm-step-label">{step.label}</span>
            </div>
          ))}

          <div className="lm-progress-wrap">
            <div className="lm-progress-label">
              Progress <span className="lm-progress-pct">{progress}%</span>
            </div>
            <div className="lm-progress-track">
              <div className="lm-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Main area */}
        <div className="lm-main">
          {/* Mini chart */}
          <div className="lm-chart">
            {bars.map((h, i) => (
              <div key={i} className="lm-chart-bar-wrap">
                <div
                  className="lm-chart-bar"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.12}s`,
                    opacity: i === activeBar % bars.length ? 1 : 0.45,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Log terminal */}
          <div className="lm-log" ref={logRef}>
            {log.map((line, i) => (
              <div
                key={i}
                className={`lm-log-line ${i === log.length - 1 ? 'lm-log-line--new' : ''}`}
              >
                {line}
              </div>
            ))}
            <span className="lm-cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const typed = useTypingEffect(TYPING_PHRASES);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-section">
      {/* Canvas particle network */}
      <HeroAnimation />

      {/* Blueprint grid overlay */}
      <div className="hero-bg-blueprint" />

      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb--blue" />
      <div className="hero-orb hero-orb--purple" />
      <div className="hero-orb hero-orb--cyan" />

      <div className={`container hero-content ${visible ? 'hero-content--visible' : ''}`}>
        {/* Left */}
        <div className="hero-left">
          <div className="hero-eyebrow anim-item" style={{ '--delay': '0ms' }}>
            <span className="hero-eyebrow-dot" />
            Structural Engineering Automation
          </div>

          <h1 className="text-hero hero-title anim-item" style={{ '--delay': '100ms' }}>
            Structural Reinforcement <br />
            <span className="hero-highlight hero-typed">
              {typed}
              <span className="hero-caret" aria-hidden="true" />
            </span>
          </h1>

          <p className="hero-desc anim-item" style={{ '--delay': '200ms' }}>
            Automate reinforcement workflows between ETABS and Revit with intelligent engineering automation built for professional structural teams.
          </p>

          <div className="hero-buttons anim-item" style={{ '--delay': '300ms' }}>
            <Button as="a" href={DOWNLOAD_URL} variant="primary" size="large" download>
              ⬇ Install RebarX Plugin
            </Button>
            <Button variant="ghost" size="large">Watch Demo</Button>
          </div>

          <div className="hero-stats anim-item" style={{ '--delay': '400ms' }}>
            {[
              { num: '20x', label: 'Faster Workflow' },
              { num: '98%', label: 'Automation Accuracy' },
              { num: 'Native', label: 'Revit Plugin' },
            ].map(({ num, label }) => (
              <div key={label} className="hero-stat">
                <div className="hero-stat-number">{num}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="hero-trust-badge anim-item" style={{ '--delay': '500ms' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Professional Engineering Software
          </div>
        </div>

        {/* Right: Live mockup */}
        <div className="hero-right anim-item" style={{ '--delay': '200ms' }}>
          <div className="hero-mockup-container">
            <LiveMockup />

            {/* Floating status cards */}
            <div className="floating-card card-1">
              <div className="status-dot green" />
              ETABS Connected
            </div>
            <div className="floating-card card-2">
              <div className="status-dot gold" />
              Auto Pipeline Ready
            </div>
            <div className="floating-card card-3">
              <div className="status-dot blue" />
              Project Loaded
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse-wheel" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
