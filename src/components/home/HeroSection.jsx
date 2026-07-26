import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import HeroAnimation from './HeroAnimation';
import './HeroSection.css';

const TYPING_PHRASES = [
  'From Plain Language.',
  'Without Leaving Revit.',
  'Fully Offline.',
  'Built for AEC Teams.',
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
  { icon: '⬡', label: 'Understand Request', status: 'done', color: '#22C55E' },
  { icon: '⬡', label: 'Plan the Steps', status: 'done', color: '#22C55E' },
  { icon: '⬡', label: 'Model in Revit', status: 'active', color: '#3B82F6' },
  { icon: '⬡', label: 'Document & Export', status: 'pending', color: '#314765' },
];

const LiveMockup = () => {
  const [progress, setProgress] = useState(0);
  const [activeBar, setActiveBar] = useState(0);
  const [log, setLog] = useState([
    '> Revin loaded — offline model ready',
    '> "Create floor plans for all levels"',
  ]);
  const logRef = useRef(null);

  const LOG_LINES = [
    '> Reading active Revit model...',
    '> create_floor_plans → 4 views  ✓',
    '> tag_all_in_view → 128 doors  ✓',
    '> create_schedule → Door Schedule  ✓',
    '> export_schedule_csv → schedule.csv  ✓',
    '> estimate_embodied_carbon → report  ✓',
    '> Done. 0 errors — nothing left the machine.',
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
        <span className="lm-title-text">Revin — AI Assistant for Revit</span>
        <span className="lm-status-pill">
          <span className="lm-status-live" />
          OFFLINE
        </span>
      </div>

      {/* Body */}
      <div className="lm-body">
        {/* Left sidebar: task steps */}
        <div className="lm-sidebar">
          <div className="lm-sidebar-label">TASK</div>
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
            The Auverion Suite · Automation for AEC
          </div>

          <h1 className="text-hero hero-title anim-item" style={{ '--delay': '100ms' }}>
            Automate Your BIM <br />
            <span className="hero-highlight hero-typed">
              {typed}
              <span className="hero-caret" aria-hidden="true" />
            </span>
          </h1>

          <p className="hero-desc anim-item" style={{ '--delay': '200ms' }}>
            Auverion builds automation tools that live inside your BIM workflow. Meet <strong>Revin</strong> — an offline AI assistant that models and documents Revit projects from plain-language requests — alongside <strong>RebarX</strong> for structural reinforcement detailing.
          </p>

          <div className="hero-buttons anim-item" style={{ '--delay': '300ms' }}>
            <Button as={Link} to="/products/revin" variant="primary" size="large">
              Meet Revin
            </Button>
            <Button as={Link} to="/products" variant="ghost" size="large">Explore the Suite</Button>
          </div>

          <div className="hero-stats anim-item" style={{ '--delay': '400ms' }}>
            {[
              { num: '100%', label: 'Runs Offline' },
              { num: '100+', label: 'Automation Tools' },
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
            Your data never leaves your machine
          </div>
        </div>

        {/* Right: Live mockup */}
        <div className="hero-right anim-item" style={{ '--delay': '200ms' }}>
          <div className="hero-mockup-container">
            <LiveMockup />

            {/* Floating status cards */}
            <div className="floating-card card-1">
              <div className="status-dot green" />
              Offline Model Ready
            </div>
            <div className="floating-card card-2">
              <div className="status-dot gold" />
              No Cloud Needed
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
