'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from '../components/AnimatedCounter';
import RobotFigure from '../components/RobotFigure';
import { IconArrowRight, IconBolt, IconHandshake, IconShield, IconCrown, IconTarget, IconCpu, IconCheck } from '../components/Icons';

gsap.registerPlugin(ScrollTrigger);

const C = {
  lime: '#B8FF00', gold: '#D4A843', dark: '#060F09', dark2: '#0c1a10',
  greenDeep: '#0A2E1A', greenMid: '#0F4A28', cream: '#F5F2EC',
  gray: '#8A9990', grayLight: '#b5c4bc',
};

const partners = [
  'World Bank','UNDP','French Embassy','MacArthur Foundation','NITDA','IREX','AfriLabs',
  'UNESCO','Luminate','JCI Abuja','FCT-DRTS','Convexity','Paxful','Neocloud','DIAL',
  'World Bank','UNDP','French Embassy','MacArthur Foundation','NITDA','IREX','AfriLabs',
  'UNESCO','Luminate','JCI Abuja','FCT-DRTS','Convexity','Paxful','Neocloud','DIAL',
];

const values = [
  { Icon: IconBolt,      name: 'Excellence', desc: 'We pursue the highest standards in everything we do.' },
  { Icon: IconHandshake, name: 'Service',    desc: 'Placing the needs of our clients and communities at the heart of every decision.' },
  { Icon: IconShield,    name: 'Integrity',  desc: 'Transparent, honest, and ethical in all our dealings, building trust that lasts.' },
  { Icon: IconCrown,     name: 'Leadership', desc: 'Cultivating leaders at every level who inspire change and drive meaningful impact.' },
  { Icon: IconTarget,    name: 'Discipline', desc: 'Consistent focus, structured execution, and unwavering commitment.' },
  { Icon: IconCpu,       name: 'Technology', desc: 'Leveraging AI and cutting-edge tools to unlock efficiency and create scalable solutions.' },
];

export default function Home() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const heroRef    = useRef<HTMLElement>(null);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,     a: Math.random() * 0.4 + 0.08,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;  if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,255,0,${p.a})`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(184,255,0,${0.07 * (1 - d / 110)})`; ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Hero entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.2 });
      tl.fromTo('.hero-tag', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.2)
        .fromTo('.hero-l1',  { y: '110%' }, { y: '0%', duration: 1 }, 0.4)
        .fromTo('.hero-l2',  { y: '110%' }, { y: '0%', duration: 1 }, 0.52)
        .fromTo('.hero-l3',  { y: '110%' }, { y: '0%', duration: 1 }, 0.64)
        .fromTo('.hero-sub', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.9)
        .fromTo('.hero-btn', { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, 1.1)
        .fromTo('.hero-stat',{ y: 36, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.6 }, 1.2)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.8);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* ── Scroll animations ── */
  useEffect(() => {
    const bd = { toggleActions: 'play reverse play reverse' };
    const ctx = gsap.context(() => {
      gsap.fromTo('.abt-text',  { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: '.abt-sec',   start: 'top 80%', ...bd } });
      gsap.fromTo('.abt-visual',{ x:  60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: '.abt-sec',   start: 'top 80%', ...bd } });
      gsap.fromTo('.svc-hdr',   { y:  40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7,  ease: 'power3.out', scrollTrigger: { trigger: '.svc-sec',   start: 'top 80%', ...bd } });
      gsap.fromTo('.svc-card',  { y:  60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.svc-grid',  start: 'top 82%', ...bd } });
      gsap.fromTo('.stat-hdr',  { y:  40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7,  ease: 'power3.out', scrollTrigger: { trigger: '.stats-sec', start: 'top 80%', ...bd } });
      gsap.fromTo('.stat-item', { y: 44, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.05, duration: 0.65, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.stats-grid', start: 'top 83%', ...bd } });
      gsap.fromTo('.val-card',  { y:  48, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.val-sec',   start: 'top 80%', ...bd } });
      gsap.fromTo('.amb-img',   { scale: 0.88, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.06, duration: 0.7, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.amb-sec', start: 'top 80%', ...bd } });
      gsap.fromTo('.amb-text',  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.amb-sec', start: 'top 80%', ...bd } });
      gsap.fromTo('.cta-inner', { y: 56, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.cta-sec', start: 'top 82%', toggleActions: 'play none none none' } });
      gsap.to('.hero-bg-grad',  { yPercent: 30, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: C.dark }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />
        <div className="hero-bg-grad" style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 70% 80% at 30% 50%, rgba(10,46,26,0.7) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: 'clamp(280px,40vw,560px)', height: 'clamp(280px,40vw,560px)', background: 'radial-gradient(circle, rgba(184,255,0,0.07) 0%, transparent 65%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: `linear-gradient(to bottom,transparent,${C.dark})`, zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'center', minHeight: '70vh' }} className="hero-cols">
            <div style={{ paddingRight: 'clamp(0px,3vw,40px)' }}>
              <div className="tag hero-tag" style={{ marginBottom: '28px' }}>Africa&apos;s #1 AI-Powered Business Development</div>
              <h1 style={{ marginBottom: 0 }}>
                <span className="split-line"><span className="hero-l1" style={{ display: 'block' }}>We Build</span></span>
                <span className="split-line"><em className="hero-l2" style={{ display: 'block', color: C.lime, fontStyle: 'italic' }}>Africa&apos;s</em></span>
                <span className="split-line"><span className="hero-l3" style={{ display: 'block' }}>Future</span></span>
              </h1>
              <p className="hero-sub" style={{ marginTop: '24px', maxWidth: '480px', fontSize: 'clamp(0.95rem,1.2vw,1.1rem)', color: C.grayLight }}>
                A world class AI powered business development organization empowering startups and businesses to build, operate, and scale sustainably across Africa and beyond.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '40px', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn btn-primary hero-btn">Explore Services <IconArrowRight size={16} /></Link>
                <Link href="/contact"  className="btn btn-outline hero-btn">Get in Touch</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', marginTop: '48px', background: 'rgba(255,255,255,0.04)', maxWidth: '420px' }}>
                {[
                  { num: 103500, suffix: '+',  label: 'People Impacted' },
                  { num: 6200,   suffix: '+',  label: 'Tech Professionals' },
                  { num: 350,    suffix: 'K+', label: 'USD Managed' },
                  { num: 6,      suffix: '+',  label: 'Businesses Built' },
                ].map(({ num, suffix, label }) => (
                  <div key={label} className="hero-stat"
                    style={{ background: 'rgba(6,15,9,0.9)', padding: 'clamp(14px,2vw,22px)', backdropFilter: 'blur(12px)', borderTop: '2px solid transparent', transition: 'border-color 0.3s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderTopColor = C.lime)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderTopColor = 'transparent')}>
                    <div className="stat-number" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.8rem)' }}><AnimatedCounter end={num} suffix={suffix} /></div>
                    <p style={{ fontSize: '0.72rem', marginTop: '4px', color: C.gray }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: 'clamp(280px,70vh,680px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hero-robot">
              <RobotFigure />
            </div>
          </div>
        </div>

        <div className="hero-scroll" style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 3 }}>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gray }}>Scroll</span>
          <div style={{ width: '1px', height: '48px', background: `linear-gradient(to bottom,${C.lime},transparent)`, animation: 'scrollLine 2.2s ease-in-out infinite' }} />
        </div>
        <style>{`
          @media(max-width:900px){.hero-cols{grid-template-columns:1fr!important;}.hero-robot{height:clamp(240px,55vw,380px)!important;}}
          @media(max-width:640px){.hero-robot{height:clamp(200px,70vw,300px)!important;opacity:0.85;}}
        `}</style>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {partners.map((p, i) => (
            <div key={i} className="marquee-item">
              <span style={{ color: C.lime, fontWeight: 700, fontSize: '0.6rem' }}>✦</span>{p}
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section className="abt-sec section-pad" style={{ background: C.dark }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,6vw,96px)', alignItems: 'center' }} className="about-grid">
            <div className="abt-text">
              <div className="tag" style={{ marginBottom: '22px' }}>Who We Are</div>
              <h2 style={{ marginBottom: '20px' }}>Minimizing Cost,<br /><em style={{ color: C.lime, fontStyle: 'italic' }}>Maximizing Impact</em></h2>
              <p style={{ marginBottom: '16px', color: C.grayLight }}>Servelead Global is a world class AI powered business development organization that empowers startups and helps businesses build, operate, and scale sustainably across Africa.</p>
              <p style={{ marginBottom: '36px', color: C.grayLight }}>We assist African businesses to minimize cost and maximize profit through strategic AI integration  taking startups from idea validation to market entry and fund readiness.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                {['AI powered growth strategies', 'Venture studio partnerships', 'End-to-end business support'].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.92rem', color: C.grayLight }}>
                    <span style={{ color: C.lime, flexShrink: 0 }}><IconCheck size={16} /></span>{item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/about"     className="btn btn-primary">Learn More</Link>
                <Link href="/portfolio" className="btn btn-ghost">View Portfolio</Link>
              </div>
            </div>

            <div className="abt-visual" style={{ position: 'relative' }}>
              <div style={{ background: C.greenDeep, padding: 'clamp(28px,4vw,48px)', border: '1px solid rgba(184,255,0,0.1)', position: 'relative', overflow: 'hidden' }}>
                {[
                  { label: 'Vision',  color: C.lime, text: 'To be a leading catalyst for global business collaboration, recognized for transforming opportunities into impactful partnerships that contribute to economic development worldwide.' },
                  { label: 'Mission', color: C.gold, text: 'To empower business by providing development solutions and strategic partnerships that drive growth, enhance market presence and foster sustainable success.' },
                ].map(({ label, color, text }, i) => (
                  <div key={label} style={{ marginBottom: i === 0 ? '28px' : 0, paddingBottom: i === 0 ? '28px' : 0, borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                    <h6 style={{ fontFamily: 'var(--font-b)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color, marginBottom: '10px', fontWeight: 700 }}>{label}</h6>
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: C.grayLight }}>{text}</p>
                  </div>
                ))}
                <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '48px', height: '48px', background: C.lime, clipPath: 'polygon(100% 0,100% 100%,0 0)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: C.dark, border: '1px solid rgba(184,255,0,0.25)', padding: '16px 20px', animation: 'floatY 5s ease-in-out infinite' }}>
                <div className="stat-number" style={{ fontSize: '2.2rem' }}>6+</div>
                <p style={{ fontSize: '0.75rem', marginTop: '2px', color: C.grayLight }}>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}.abt-visual{margin-top:64px!important;}}`}</style>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="svc-sec section-pad" style={{ background: C.dark2 }}>
        <div className="container">
          <div className="svc-hdr" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: 'clamp(36px,5vw,64px)' }}>
            <div>
              <div className="tag" style={{ marginBottom: '18px' }}>What We Do</div>
              <h2>Our Core <em style={{ color: C.lime, fontStyle: 'italic' }}>Services</em></h2>
            </div>
            <Link href="/services" className="btn btn-outline">All Services</Link>
          </div>
          <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
            {[
              { num: '01', title: 'AI-Driven Business Development', sub: 'AI-BaaS',        desc: 'Integrating AI into operations, marketing, finance and decision-making to drive revenue and efficiency.',         color: C.lime },
              { num: '02', title: 'Venture Studio Partnership',     sub: 'Venture Studio', desc: 'Helping startups build, go to market, and scale — connecting them to the funding and support they need.',          color: C.lime },
              { num: '03', title: 'Event & Program Management',     sub: 'Events',         desc: 'World-class event execution from intimate workshops to 2,000+ person conferences with measurable impact.',          color: C.lime },
              { num: '04', title: 'Training & Capacity Building',   sub: 'Training',       desc: 'Empowering talent through 75+ sessions delivered, 500+ trained tech professionals, and career placement.',         color: C.lime },
            ].map(({ num, title, sub, desc, color }) => (
              <div key={num} className="svc-card"
                style={{ background: C.dark, padding: 'clamp(28px,4vw,52px)', position: 'relative', transition: 'background 0.35s', overflow: 'hidden', cursor: 'default' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(184,255,0,0.025)';
                  const line = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>('.svc-line');
                  if (line) line.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = C.dark;
                  const line = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>('.svc-line');
                  if (line) line.style.width = '0%';
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, color, opacity: 0.12, lineHeight: 1, letterSpacing: '-0.04em' }}>{num}</span>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color, border: `1px solid ${color}33`, padding: '4px 12px', flexShrink: 0 }}>{sub}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem,1.8vw,1.8rem)', marginBottom: '14px' }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: C.grayLight }}>{desc}</p>
                <div className="svc-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: color, transition: 'width 0.4s' }} />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.svc-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ══ STATS ══ */}
      <section className="stats-sec section-pad" style={{ background: C.greenDeep, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 15% 85%,rgba(184,255,0,0.07) 0%,transparent 50%),radial-gradient(circle at 85% 15%,rgba(184,255,0,0.04) 0%,transparent 50%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stat-hdr" style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div className="tag" style={{ margin: '0 auto 18px', justifyContent: 'center' }}>Our Collective Reach</div>
            <h2>Impact That <em style={{ color: C.lime, fontStyle: 'italic' }}>Speaks</em></h2>
          </div>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(16px,2.5vw,36px)' }}>
            {[
              { num: 103500,  suffix: '+', label: 'People Impacted',   detail: 'Trainings, projects & programs' },
              { num: 6200,    suffix: '+', label: 'Tech Professionals', detail: 'In our talent pool' },
              { num: 75,      suffix: '+', label: 'Training Sessions',  detail: 'Delivered across Africa' },
              { num: 350000,  suffix: '+', label: 'USD Managed',        detail: 'In development funds' },
              { num: 500,     suffix: '+', label: 'Trained Talents',    detail: 'Graduated and placed' },
              { num: 350,     suffix: '+', label: 'Talents Hired',      detail: 'By partner organizations' },
              { num: 30,      suffix: '+', label: 'Conferences',        detail: 'And corporate events' },
              { num: 6000,    suffix: '',  label: 'Beneficiaries',      detail: 'Direct program graduates' },
            ].map(({ num, suffix, label, detail }) => (
              <div key={label} className="stat-item" style={{ textAlign: 'center', padding: 'clamp(16px,2.5vw,28px) clamp(8px,1.5vw,16px)', borderBottom: '1px solid rgba(184,255,0,0.1)' }}>
                <div className="stat-number" style={{ fontSize: 'clamp(1.8rem,3.5vw,3.8rem)' }}><AnimatedCounter end={num} suffix={suffix} /></div>
                <div style={{ fontWeight: 600, color: C.cream, marginTop: '8px', fontSize: '0.88rem' }}>{label}</div>
                <p style={{ fontSize: '0.72rem', color: C.gray, marginTop: '3px' }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* ══ AMBASSADOR ══ */}
      <section className="amb-sec section-pad" style={{ background: C.dark }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }} className="amb-grid">
            <div className="amb-text">
              <div className="tag" style={{ marginBottom: '20px', borderColor: 'rgba(184,255,0,0.3)', color: C.lime }}>Recognition</div>
              <h2 style={{ marginBottom: '20px' }}>US Ambassador<br /><em style={{ color: C.lime, fontStyle: 'italic' }}>Visits SLG HQ</em></h2>
              <p style={{ marginBottom: '20px', color: C.grayLight }}>A landmark moment for Servelead Global as the United States Ambassador to Nigeria visited our headquarters — a powerful recognition of our impact and growing influence in Africa&apos;s business development landscape.</p>
              <p style={{ marginBottom: '32px', color: C.grayLight }}>This visit underscored the international credibility of our work and the global partnerships we continue to build in service of Africa&apos;s economic future.</p>
              <Link href="/about" className="btn btn-outline">Our Story <IconArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {['amb1.jpg','amb2.jpg','amb3.jpg','amb4.jpg','amb5.jpg','amb6.jpg','amb7.jpg','amb8.jpg'].map((img, i) => (
                <div key={img} className="amb-img img-zoom"
                  style={{ aspectRatio: i === 0 ? '16/10' : '1/1', gridColumn: i === 0 ? '1/-1' : 'auto', background: C.greenMid, overflow: 'hidden', border: '1px solid rgba(184,255,0,0.15)', animation: `${i % 2 === 0 ? 'floatY' : 'floatY2'} ${5 + i}s ease-in-out infinite` }}>
                  <img src={`/${img}`} alt={`US Ambassador visit ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = 'none';
                      if (t.parentElement) t.parentElement.style.background = 'rgba(184,255,0,0.06)';
                    }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.amb-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ══ VALUES ══ */}
      <section className="val-sec section-pad" style={{ background: C.dark2 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(36px,5vw,60px)' }}>
            <div className="tag" style={{ margin: '0 auto 18px', justifyContent: 'center' }}>Our Foundation</div>
            <h2>Core <em style={{ color: C.lime, fontStyle: 'italic' }}>Values</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(14px,2vw,22px)' }} className="vals-grid">
            {values.map(({ Icon, name, desc }) => (
              <div key={name} className="card val-card" style={{ textAlign: 'center', padding: 'clamp(24px,3vw,40px)' }}>
                <div style={{ width: '52px', height: '52px', background: 'rgba(184,255,0,0.07)', border: '1px solid rgba(184,255,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon size={24} color={C.lime} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-b)', fontWeight: 700, fontSize: '1rem', color: C.lime, marginBottom: '10px', letterSpacing: '0.02em' }}>{name}</h4>
                <p style={{ fontSize: '0.86rem', color: C.grayLight }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.vals-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:480px){.vals-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ══ CTA ══ */}
      <section className="cta-sec section-pad" style={{ background: C.dark, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 70% at 50% 50%,rgba(184,255,0,0.04) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div className="container cta-inner" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="tag" style={{ margin: '0 auto 26px', justifyContent: 'center' }}>Ready to Scale?</div>
          <h2 style={{ maxWidth: '660px', margin: '0 auto 20px' }}>Let&apos;s Build Something<br /><em style={{ color: C.lime, fontStyle: 'italic' }}>Extraordinary</em></h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 44px', fontSize: 'clamp(0.98rem,1.25vw,1.15rem)', color: C.grayLight }}>
            Whether you&apos;re a startup seeking funding, a business looking to integrate AI, or an organization ready to scale — we&apos;re your partner for sustainable growth.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact"   className="btn btn-primary">Start Your Journey <IconArrowRight size={16} /></Link>
            <Link href="/portfolio" className="btn btn-ghost">See Our Work</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(28px,5vw,56px)', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap' }}>
            {[{ label: '40+', sub: 'Global Partners' }, { label: '10+', sub: 'Businesses Set Up' }, { label: '3K+', sub: 'RescueTap Users' }].map(({ label, sub }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: C.lime }}>{label}</div>
                <p style={{ fontSize: '0.8rem', marginTop: '3px', color: C.gray }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
