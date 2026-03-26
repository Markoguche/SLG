'use client';
import {useEffect,useRef,useState} from 'react';
import {gsap} from 'gsap';
const C={L:'#B8FF00',D:'#060F09',GR:'#8A9990'};
export default function SplashScreen({onDone}){
  const splashRef=useRef(null);
  const logoRef=useRef(null);
  const progRef=useRef(null);
  const [pct,setPct]=useState(0);
  useEffect(()=>{
    const ctx=gsap.context(()=>{
      const tl=gsap.timeline({onComplete:()=>gsap.to(splashRef.current,{yPercent:-100,duration:1,ease:'power4.inOut',onComplete:onDone})});
      tl.fromTo(logoRef.current,{scale:.4,opacity:0,rotate:-15},{scale:1,opacity:1,rotate:0,duration:.9,ease:'back.out(1.6)'})
        .fromTo('.sp-t span',{y:'110%',opacity:0},{y:'0%',opacity:1,stagger:.06,duration:.7,ease:'power4.out'},'-=.3')
        .to(progRef.current,{scaleX:1,duration:1.8,ease:'power2.inOut',onUpdate:function(){setPct(Math.round(this.progress()*100));}},'-=.1')
        .fromTo('.sp-tag',{opacity:0,y:20},{opacity:1,y:0,duration:.5,ease:'power3.out'},'-=1.2')
        .to({},{duration:.3});
    },splashRef);
    return()=>ctx.revert();
  },[onDone]);
  return(
    <div ref={splashRef} style={{position:'fixed',inset:0,zIndex:99999,background:C.D,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
      {/* Rings */}
      <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
        {[300,500,700,900].map((s,i)=>(
          <div key={s} style={{position:'absolute',width:s,height:s,borderRadius:'50%',border:`1px solid rgba(184,255,0,${.06-i*.01})`,animation:`spinSlow ${20+i*8}s linear infinite ${i%2?'reverse':''}`}}/>
        ))}
      </div>
      {/* Corners */}
      {[{top:0,left:0,borderTop:'2px solid #B8FF00',borderLeft:'2px solid #B8FF00'},{top:0,right:0,borderTop:'2px solid #B8FF00',borderRight:'2px solid #B8FF00'},{bottom:0,left:0,borderBottom:'2px solid #B8FF00',borderLeft:'2px solid #B8FF00'},{bottom:0,right:0,borderBottom:'2px solid #B8FF00',borderRight:'2px solid #B8FF00'}].map((s,i)=>(
        <div key={i} style={{position:'absolute',...s,width:'40px',height:'40px'}}/>
      ))}
      <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:'28px'}}>
        <div ref={logoRef} style={{display:'flex',alignItems:'center',gap:'16px'}}>
          <img src="/logo.png" alt="Servelead Global" style={{height:'72px',width:'auto',filter:'brightness(1.1)',maxWidth:'200px',objectFit:'contain'}}
            onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
          <div style={{display:'none',width:'72px',height:'72px',background:C.L,clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',alignItems:'center',justifyContent:'center'}}>
            <span style={{color:C.D,fontFamily:'var(--font-d)',fontWeight:900,fontSize:'1.8rem'}}>S</span>
          </div>
        </div>
        <div className="sp-t" style={{overflow:'hidden'}}>
          <h1 style={{fontFamily:'var(--font-d)',fontSize:'clamp(1.8rem,5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.03em',textAlign:'center',lineHeight:1,display:'flex',gap:'0.25em',flexWrap:'wrap',justifyContent:'center'}}>
            {'Servelead Global'.split('').map((c,i)=><span key={i} style={{display:'inline-block'}}>{c===' '?'\u00A0':c}</span>)}
          </h1>
        </div>
        <p className="sp-tag" style={{fontSize:'0.78rem',letterSpacing:'0.2em',textTransform:'uppercase',color:C.GR,textAlign:'center'}}>AI-Powered Business Development · Africa</p>
        <div style={{width:'clamp(240px,40vw,360px)',position:'relative'}}>
          <div style={{width:'100%',height:'1px',background:'rgba(255,255,255,0.08)',position:'relative',overflow:'hidden'}}>
            <div ref={progRef} style={{position:'absolute',inset:0,background:C.L,transform:'scaleX(0)',transformOrigin:'left'}}/>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'8px'}}>
            <span style={{fontSize:'0.68rem',color:C.GR,letterSpacing:'0.1em',textTransform:'uppercase'}}>Loading</span>
            <span style={{fontSize:'0.68rem',color:C.L,fontFamily:'var(--font-d)',fontWeight:700}}>{pct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
