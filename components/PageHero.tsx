'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { ReactNode } from 'react';

interface Props { pageKey?: string; tag?: string; title: string; titleEm?: string; subtitle?: string; }

const L = '#B8FF00';
const bgs: Record<string, string> = {
  about: '#0c1a10', services: '#0c1a10', portfolio: '#060F09',
  organizations: '#0A2E1A', team: '#0c1a10', contact: '#0c1a10',
};

/* ─── Animated shape components ────────────────────────────── */

function ShapeAbout() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = ref.current; if (!svg) return;
    const ctx = gsap.context(() => {
      // Three rings draw in one by one
      gsap.fromTo('#ab-c1', { strokeDashoffset: 1131 }, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.out', delay: 0.3 });
      gsap.fromTo('#ab-c2', { strokeDashoffset: 817  }, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.out', delay: 0.7 });
      gsap.fromTo('#ab-c3', { strokeDashoffset: 503  }, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.out', delay: 1.0 });
      // Cross-hair lines shoot in
      gsap.fromTo('#ab-lv', { scaleY: 0, transformOrigin: '50% 50%' }, { scaleY: 1, duration: 1.0, ease: 'expo.out', delay: 1.4 });
      gsap.fromTo('#ab-lh', { scaleX: 0, transformOrigin: '50% 50%' }, { scaleX: 1, duration: 1.0, ease: 'expo.out', delay: 1.6 });
      // Outer ring spins forever
      gsap.to('#ab-c1', { rotate: 360, transformOrigin: '200px 200px', duration: 28, repeat: -1, ease: 'none', delay: 2.4 });
      // Pulsing inner ring
      gsap.to('#ab-c3', { scale: 1.08, transformOrigin: '200px 200px', duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, svg);
    return () => ctx.revert();
  }, []);
  return (
    <svg ref={ref} viewBox="0 0 400 400"
      style={{ position:'absolute', right:'-5%', top:'-10%', width:'clamp(240px,38vw,480px)', pointerEvents:'none', overflow:'visible' }}>
      <circle id="ab-c1" cx="200" cy="200" r="180" fill="none" stroke={L} strokeWidth="1"
        strokeDasharray="1131" strokeDashoffset="1131"  opacity={0.18}/>
      <circle id="ab-c2" cx="200" cy="200" r="130" fill="none" stroke={L} strokeWidth="0.7"
        strokeDasharray="817"  strokeDashoffset="817"  opacity={0.12}/>
      <circle id="ab-c3" cx="200" cy="200" r="80"  fill="none" stroke={L} strokeWidth="2"
        strokeDasharray="503"  strokeDashoffset="503"  opacity={0.22}/>
      <line id="ab-lv" x1="200" y1="20"  x2="200" y2="380" stroke={L} strokeWidth="0.5" opacity={0.15}/>
      <line id="ab-lh" x1="20"  y1="200" x2="380" y2="200" stroke={L} strokeWidth="0.5" opacity={0.15}/>
      {/* Tick marks on outer ring */}
      {Array.from({length: 12}, (_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x1 = 200 + 170 * Math.cos(angle), y1 = 200 + 170 * Math.sin(angle);
        const x2 = 200 + 185 * Math.cos(angle), y2 = 200 + 185 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={L} strokeWidth="1.5" opacity={0.3}/>;
      })}
      {/* Center dot */}
      <circle cx="200" cy="200" r="5" fill={L} opacity={0.6}/>
    </svg>
  );
}

function ShapeServices() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ctx = gsap.context(() => {
      const squares = el.querySelectorAll<HTMLDivElement>('.sq');
      // Squares rain in with stagger
      gsap.fromTo(squares,
        { y: -60, opacity: 0, scale: 0 },
        { y: 0, opacity: 1, scale: 1, stagger: { each: 0.06, from: 'random' }, duration: 0.7, ease: 'back.out(2)', delay: 0.3 }
      );
      // Each square pulses independently forever
      squares.forEach((sq, i) => {
        gsap.to(sq, {
          y: i % 3 === 0 ? -12 : i % 3 === 1 ? 8 : -6,
          opacity: 0.12 + (i % 4) * 0.08,
          duration: 1.8 + i * 0.15,
          repeat: -1, yoyo: true, ease: 'sine.inOut',
          delay: i * 0.1,
        });
        gsap.to(sq, { rotate: i % 2 === 0 ? 45 : -45, duration: 2.5 + i * 0.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.07 });
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref}
      style={{ position:'absolute', right:'clamp(16px,4vw,60px)', top:'50%', transform:'translateY(-50%)',
        display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'10px',
        pointerEvents:'none', width:'clamp(130px,18vw,230px)' }}>
      {Array.from({length: 16}, (_, i) => (
        <div key={i} className="sq" style={{ width:'100%', paddingBottom:'100%', background: L, opacity: 0, borderRadius:'2px' }}/>
      ))}
    </div>
  );
}

function ShapePortfolio() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = ref.current; if (!svg) return;
    const ctx = gsap.context(() => {
      // Bars rise up from bottom
      gsap.fromTo('.pb-bar',
        { scaleY: 0, transformOrigin: 'bottom' },
        { scaleY: 1, stagger: 0.12, duration: 0.8, ease: 'expo.out', delay: 0.3 }
      );
      // Trend line draws in
      const poly = svg.querySelector<SVGPolylineElement>('#pb-line');
      if (poly) {
        const len = poly.getTotalLength ? poly.getTotalLength() : 500;
        gsap.fromTo(poly,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1.5, ease: 'power2.out', delay: 1.1 }
        );
      }
      // Bars breathe
      gsap.to('.pb-bar', { scaleY: 0.9, transformOrigin: 'bottom', stagger: 0.1, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.8 });
      // Dot on trend line pulses
      gsap.to('#pb-dot', { scale: 2.2, transformOrigin: '405px 60px', opacity: 0.3, duration: 1, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.8 });
    }, svg);
    return () => ctx.revert();
  }, []);
  return (
    <svg ref={ref} viewBox="0 0 500 300"
      style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)', width:'clamp(200px,32vw,400px)', pointerEvents:'none', overflow:'visible' }}>
      {[{x:10,y:120,h:180},{x:100,y:90,h:210},{x:190,y:50,h:250},{x:280,y:70,h:230},{x:370,y:30,h:270}].map(({x,y,h},i)=>(
        <rect key={i} className="pb-bar" x={x} y={y} width="70" height={h} fill="none" stroke={L} strokeWidth="1.5" opacity={0.18}/>
      ))}
      <polyline id="pb-line" points="45,150 135,120 225,80 315,100 405,60"
        fill="none" stroke={L} strokeWidth="2.5" opacity={0.7} strokeLinecap="round" strokeLinejoin="round"/>
      <circle id="pb-dot" cx="405" cy="60" r="5" fill={L} opacity={0.9}/>
      {[{cx:45,cy:150},{cx:135,cy:120},{cx:225,cy:80},{cx:315,cy:100}].map(({cx,cy},i)=>(
        <circle key={i} cx={cx} cy={cy} r="3.5" fill={L} opacity={0.5}/>
      ))}
    </svg>
  );
}

function ShapeOrganizations() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = ref.current; if (!svg) return;
    const ctx = gsap.context(() => {
      // Hexagons expand from center outward
      gsap.fromTo('#org-h3', { scale: 0, transformOrigin: '200px 200px', opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.8)', delay: 0.3 });
      gsap.fromTo('#org-h2', { scale: 0, transformOrigin: '200px 200px', opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.6 });
      gsap.fromTo('#org-h1', { scale: 0, transformOrigin: '200px 200px', opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.2)', delay: 0.9 });
      // Outer hex rotates
      gsap.to('#org-h1', { rotate: 360, transformOrigin: '200px 200px', duration: 20, repeat: -1, ease: 'none', delay: 1.6 });
      // Middle hex counter-rotates
      gsap.to('#org-h2', { rotate: -360, transformOrigin: '200px 200px', duration: 14, repeat: -1, ease: 'none', delay: 1.6 });
      // Inner hex pulses
      gsap.to('#org-h3', { scale: 1.08, transformOrigin: '200px 200px', duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      // Vertices glow dots
      gsap.fromTo('.org-dot', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.4, ease: 'back.out(2)', delay: 1.5 });
      gsap.to('.org-dot', { opacity: 0.2, duration: 1.4, repeat: -1, yoyo: true, stagger: 0.15, ease: 'sine.inOut', delay: 2 });
    }, svg);
    return () => ctx.revert();
  }, []);
  const hexPts = (r: number) => Array.from({length:6},(_,i)=>{const a=i*60*Math.PI/180; return `${200+r*Math.cos(a)},${200+r*Math.sin(a)}`;}).join(' ');
  return (
    <svg ref={ref} viewBox="0 0 400 400"
      style={{ position:'absolute', right:'-5%', top:'-5%', width:'clamp(200px,28vw,350px)', pointerEvents:'none', overflow:'visible' }}>
      <polygon id="org-h1" points={hexPts(175)} fill="none" stroke={L} strokeWidth="1.5" opacity={0.2}/>
      <polygon id="org-h2" points={hexPts(125)} fill="none" stroke={L} strokeWidth="1"   opacity={0.25}/>
      <polygon id="org-h3" points={hexPts(75)}  fill="none" stroke={L} strokeWidth="2"   opacity={0.35}/>
      {/* Glow dots at hex vertices of outer */}
      {Array.from({length:6},(_,i)=>{const a=i*60*Math.PI/180; return <circle key={i} className="org-dot" cx={200+175*Math.cos(a)} cy={200+175*Math.sin(a)} r="4" fill={L} opacity={0.8}/>;} )}
      {/* Center */}
      <circle cx="200" cy="200" r="8" fill={L} opacity={0.4}/>
      <circle cx="200" cy="200" r="3" fill="#fff" opacity={0.8}/>
    </svg>
  );
}

function ShapeTeam() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ctx = gsap.context(() => {
      // Rows slide in from right
      gsap.fromTo('.tm-row', { x: 80, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out', delay: 0.3 });
      // Lines grow
      gsap.fromTo('.tm-line', { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, stagger: 0.1, duration: 0.6, ease: 'expo.out', delay: 0.5 });
      // Circles pop
      gsap.fromTo('.tm-circle', { scale: 0 }, { scale: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(2)', delay: 0.7 });
      // Continuous pulse on circles
      gsap.to('.tm-circle', { borderColor: `rgba(184,255,0,0.9)`, scale: 1.15, stagger: 0.15, duration: 1.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 });
      // Lines wave
      const rows = el.querySelectorAll<HTMLDivElement>('.tm-row');
      rows.forEach((r, i) => {
        gsap.to(r, { x: i % 2 === 0 ? 8 : -8, duration: 2 + i * 0.3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.2 });
      });
    }, el);
    return () => ctx.revert();
  }, []);
  const rows = [80, 60, 100, 70, 50, 90];
  return (
    <div ref={ref}
      style={{ position:'absolute', right:'clamp(16px,4vw,60px)', top:'50%', transform:'translateY(-50%)',
        display:'flex', flexDirection:'column', gap:'14px', pointerEvents:'none' }}>
      {rows.map((w, i) => (
        <div key={i} className="tm-row" style={{ display:'flex', gap:'10px', alignItems:'center' }}>
          <div className="tm-line" style={{ width:`${w}px`, height:'2px', background:L, opacity:0.5 }}/>
          <div className="tm-circle" style={{ width:'28px', height:'28px', borderRadius:'50%', border:`2px solid rgba(184,255,0,0.4)`, flexShrink:0, position:'relative' }}>
            <div style={{ position:'absolute', inset:'4px', borderRadius:'50%', background:`rgba(184,255,0,${0.1 + (i%3)*0.08})` }}/>
          </div>
          {i % 2 === 0 && <div style={{ width:'20px', height:'2px', background:L, opacity:0.25 }}/>}
        </div>
      ))}
    </div>
  );
}

function ShapeContact() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = ref.current; if (!svg) return;
    const ctx = gsap.context(() => {
      // Outer hex draws in
      const h1 = svg.querySelector<SVGPathElement>('#ct-h1');
      if (h1) {
        const len = h1.getTotalLength ? h1.getTotalLength() : 480;
        gsap.fromTo(h1, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.out', delay: 0.3 });
      }
      const h2 = svg.querySelector<SVGPathElement>('#ct-h2');
      if (h2) {
        const len = h2.getTotalLength ? h2.getTotalLength() : 340;
        gsap.fromTo(h2, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.out', delay: 0.8 });
      }
      // Inner circle expands
      gsap.fromTo('#ct-ci', { scale: 0, transformOrigin: '150px 150px', opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(2)', delay: 1.4 });
      // Crosshairs shoot in
      gsap.fromTo('#ct-cv', { scaleY: 0, transformOrigin: '150px 150px' }, { scaleY: 1, duration: 0.7, ease: 'expo.out', delay: 1.8 });
      gsap.fromTo('#ct-ch', { scaleX: 0, transformOrigin: '150px 150px' }, { scaleX: 1, duration: 0.7, ease: 'expo.out', delay: 2.0 });
      // Center dot pulses
      gsap.to('#ct-dot', { scale: 2.5, transformOrigin: '150px 150px', opacity: 0.2, duration: 1.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.4 });
      // Outer hex rotates slowly
      gsap.to('#ct-h1', { rotate: 360, transformOrigin: '150px 150px', duration: 25, repeat: -1, ease: 'none', delay: 2 });
    }, svg);
    return () => ctx.revert();
  }, []);
  return (
    <svg ref={ref} viewBox="0 0 300 300"
      style={{ position:'absolute', right:'clamp(16px,4vw,60px)', top:'50%', transform:'translateY(-50%)', width:'clamp(150px,22vw,280px)', pointerEvents:'none', overflow:'visible' }}>
      <path id="ct-h1" d="M150,30 L270,90 L270,210 L150,270 L30,210 L30,90 Z"
        fill="none" stroke={L} strokeWidth="2" opacity={0.3}/>
      <path id="ct-h2" d="M150,65 L235,112 L235,188 L150,235 L65,188 L65,112 Z"
        fill="none" stroke={L} strokeWidth="1.2" opacity={0.2}/>
      <circle id="ct-ci" cx="150" cy="150" r="35" fill="none" stroke={L} strokeWidth="2.5" opacity={0.5}/>
      <line id="ct-cv" x1="150" y1="30"  x2="150" y2="270" stroke={L} strokeWidth="0.6" opacity={0.2}/>
      <line id="ct-ch" x1="30"  y1="150" x2="270" y2="150" stroke={L} strokeWidth="0.6" opacity={0.2}/>
      <circle id="ct-dot" cx="150" cy="150" r="7" fill={L} opacity={0.9}/>
      <circle cx="150" cy="150" r="2.5" fill="#fff" opacity={0.95}/>
      {/* Vertex dots */}
      {[[150,30],[270,90],[270,210],[150,270],[30,210],[30,90]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4" fill={L} opacity={0.6}/>
      ))}
    </svg>
  );
}

const SHAPES: Record<string, ReactNode> = {
  about:         <ShapeAbout />,
  services:      <ShapeServices />,
  portfolio:     <ShapePortfolio />,
  organizations: <ShapeOrganizations />,
  team:          <ShapeTeam />,
  contact:       <ShapeContact />,
};

export default function PageHero({ pageKey = 'about', tag, title, titleEm, subtitle }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo('.ph-tag',  { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.2)
        .fromTo('.ph-l1',   { y: '105%' },          { y: '0%', duration: 0.9 }, 0.35)
        .fromTo('.ph-l2',   { y: '105%' },          { y: '0%', duration: 0.9 }, 0.48)
        .fromTo('.ph-sub',  { y: 28, opacity: 0 },  { y: 0, opacity: 1, duration: 0.7 }, 0.8)
        .fromTo('.ph-rule', { scaleX: 0 },          { scaleX: 1, duration: 0.9, transformOrigin: 'left' }, 0.6);
    }, ref);
    return () => ctx.revert();
  }, [pageKey]);

  return (
    <section ref={ref} style={{
      background: bgs[pageKey] || '#0c1a10',
      paddingTop: 'clamp(130px,15vw,190px)',
      paddingBottom: 'clamp(56px,7vw,90px)',
      position: 'relative', overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Grid background */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(184,255,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(184,255,0,.025) 1px,transparent 1px)', backgroundSize:'72px 72px', pointerEvents:'none' }}/>

      {/* Animated shape — positioned absolutely at right */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        {SHAPES[pageKey]}
      </div>

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {tag && <div className="tag ph-tag" style={{ marginBottom:'28px' }}>{tag}</div>}
        <h1 style={{ maxWidth:'680px' }}>
          <span className="split-line"><span className="ph-l1" style={{ display:'block' }}>{title}</span></span>
          {titleEm && (
            <span className="split-line">
              <em className="ph-l2" style={{ display:'block', color: L, fontStyle:'italic' }}>{titleEm}</em>
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="ph-sub" style={{ marginTop:'24px', maxWidth:'520px', fontSize:'clamp(.98rem,1.25vw,1.15rem)', color:'#b5c4bc', lineHeight:1.75 }}>
            {subtitle}
          </p>
        )}
        <div className="ph-rule" style={{ marginTop:'44px', height:'1.5px', background:'linear-gradient(90deg,#B8FF00,transparent)', width:'clamp(120px,20vw,220px)' }}/>
      </div>
    </section>
  );
}
