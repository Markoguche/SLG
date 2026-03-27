'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Props { pageKey?: string; tag?: string; title: string; titleEm?: string; subtitle?: string; }

const L = '#B8FF00';
const bgs: Record<string, string> = { about:'#0c1a10', services:'#0c1a10', portfolio:'#060F09', organizations:'#0A2E1A', team:'#0c1a10', contact:'#0c1a10' };
const shapes: Record<string, React.ReactNode> = {
  about: <svg viewBox="0 0 400 400" style={{position:'absolute',right:'-5%',top:'-10%',width:'clamp(280px,40vw,500px)',opacity:.08,pointerEvents:'none'}}><circle cx="200" cy="200" r="180" fill="none" stroke={L} strokeWidth="1" strokeDasharray="8 12"/><circle cx="200" cy="200" r="130" fill="none" stroke={L} strokeWidth=".5"/><circle cx="200" cy="200" r="80" fill="none" stroke={L} strokeWidth="1.5"/><line x1="200" y1="20" x2="200" y2="380" stroke={L} strokeWidth=".4"/><line x1="20" y1="200" x2="380" y2="200" stroke={L} strokeWidth=".4"/></svg>,
  services: <div style={{position:'absolute',right:'clamp(20px,5vw,60px)',top:'50%',transform:'translateY(-50%)',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'8px',opacity:.1,pointerEvents:'none',width:'clamp(120px,20vw,220px)'}}>{Array.from({length:16}).map((_,i)=><div key={i} style={{width:'100%',paddingBottom:'100%',background:L,animation:`floatY ${2+(i%3)*.7}s ease-in-out ${i*.1}s infinite`}}/>)}</div>,
  portfolio: <svg viewBox="0 0 500 300" style={{position:'absolute',right:0,top:'50%',transform:'translateY(-50%)',width:'clamp(180px,30vw,380px)',opacity:.1,pointerEvents:'none'}}>{[0,1,2,3,4].map(i=><rect key={i} x={i*90+10} y={180-i*30} width="70" height={60+i*30} fill="none" stroke={L} strokeWidth="1.5"/>)}<polyline points="45,150 135,120 225,80 315,100 405,60" fill="none" stroke={L} strokeWidth="2"/></svg>,
  organizations: <svg viewBox="0 0 400 400" style={{position:'absolute',right:'-5%',top:'-5%',width:'clamp(200px,30vw,360px)',opacity:.12,pointerEvents:'none'}}><polygon points="200,20 380,110 380,290 200,380 20,290 20,110" fill="none" stroke={L} strokeWidth="1.5"/><polygon points="200,60 340,130 340,270 200,340 60,270 60,130" fill="none" stroke={L} strokeWidth="1"/><polygon points="200,100 300,150 300,250 200,300 100,250 100,150" fill="none" stroke={L} strokeWidth=".5"/></svg>,
  team: <div style={{position:'absolute',right:'clamp(20px,5vw,60px)',top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',gap:'12px',opacity:.15,pointerEvents:'none'}}>{[80,60,100,70,50].map((w,i)=><div key={i} style={{display:'flex',gap:'8px',alignItems:'center'}}><div style={{width:`${w}px`,height:'2px',background:L}}/><div style={{width:'26px',height:'26px',borderRadius:'50%',border:`1px solid ${L}`}}/></div>)}</div>,
  contact: <svg viewBox="0 0 300 300" style={{position:'absolute',right:'clamp(20px,5vw,60px)',top:'50%',transform:'translateY(-50%)',width:'clamp(140px,22vw,260px)',opacity:.1,pointerEvents:'none'}}><path d="M150,30 L270,90 L270,210 L150,270 L30,210 L30,90 Z" fill="none" stroke={L} strokeWidth="2"/><path d="M150,70 L230,110 L230,190 L150,230 L70,190 L70,110 Z" fill="none" stroke={L} strokeWidth="1"/><circle cx="150" cy="150" r="30" fill="none" stroke={L} strokeWidth="2"/></svg>,
};

import type { ReactNode } from 'react';
// tell TS the shapes values are ReactNode
declare const _shapes: Record<string, ReactNode>;

export default function PageHero({ pageKey = 'about', tag, title, titleEm, subtitle }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo('.ph-tag', { y:28, opacity:0 }, { y:0, opacity:1, duration:.6 }, .2)
        .fromTo('.ph-l1',  { y:'105%' },         { y:'0%', duration:.9 }, .35)
        .fromTo('.ph-l2',  { y:'105%' },         { y:'0%', duration:.9 }, .48)
        .fromTo('.ph-sub', { y:28, opacity:0 },  { y:0, opacity:1, duration:.7 }, .8)
        .fromTo('.ph-rule',{ scaleX:0 },         { scaleX:1, duration:.9, transformOrigin:'left' }, .6)
        .fromTo('.ph-shape',{ opacity:0, scale:.85 }, { opacity:1, scale:1, duration:1 }, .3);
    }, ref);
    return () => ctx.revert();
  }, [pageKey]);

  return (
    <section ref={ref} style={{ background: bgs[pageKey] || '#0c1a10', paddingTop: 'clamp(130px,15vw,190px)', paddingBottom: 'clamp(56px,7vw,90px)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(184,255,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(184,255,0,.025) 1px,transparent 1px)', backgroundSize:'72px 72px', pointerEvents:'none' }}/>
      <div className="ph-shape" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>{shapes[pageKey]}</div>
      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {tag && <div className="tag ph-tag" style={{ marginBottom:'28px' }}>{tag}</div>}
        <h1 style={{ maxWidth:'860px' }}>
          <span className="split-line"><span className="ph-l1" style={{ display:'block' }}>{title}</span></span>
          {titleEm && <span className="split-line"><em className="ph-l2" style={{ display:'block', color:L, fontStyle:'italic' }}>{titleEm}</em></span>}
        </h1>
        {subtitle && <p className="ph-sub" style={{ marginTop:'24px', maxWidth:'540px', fontSize:'clamp(.98rem,1.25vw,1.15rem)', color:'#b5c4bc' }}>{subtitle}</p>}
        <div className="ph-rule" style={{ marginTop:'44px', height:'1.5px', background:'linear-gradient(90deg,#B8FF00,transparent)', width:'clamp(120px,20vw,220px)' }}/>
      </div>
    </section>
  );
}
