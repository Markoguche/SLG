'use client';
import {useEffect,useRef} from 'react';
import Link from 'next/link';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero';
import {IconBolt,IconHandshake,IconShield,IconCrown,IconTarget,IconCpu,IconLeaf,IconDiamond,IconArrowRight} from '../../components/Icons';
gsap.registerPlugin(ScrollTrigger);

const C={L:'#B8FF00',D:'#060F09',D2:'#0c1a10',GD:'#0A2E1A',CR:'#F5F2EC',GR:'#8A9990',GL:'#b5c4bc'};
const lead=[
  {name:'Ijeoma Aladesaye',role:'GCEO, Servelead Global',dept:'Executive',photo:'staff1.jpg',ini:'IA',bio:"Visionary founder and GCEO driving Servelead Global's mission to empower African businesses through world-class AI-powered development solutions."},
  {name:'Pamela Williams',role:'Head of Media & Marketing',dept:'CEO, Aidos Creations',photo:'staff2.jpg',ini:'PW',bio:'Creative and strategic leader overseeing all media, marketing, and brand storytelling initiatives across the Servelead Global group.'},
  {name:'Princess Alugwe',role:'Director of Operations, SHI',dept:'Community Engagement Expert',photo:'staff3.jpg',ini:'PA',bio:'Operations director leading Servelead Humanitarian Initiative programs and community engagement across key development projects.'},
  {name:'Daniel Bowman',role:'Chief Operations Officer',dept:'COO — RescueTap',photo:'staff4.jpg',ini:'DB',bio:"COO of RescueTap driving operational strategy, platform growth, and partnership development for Nigeria's leading emergency response tool."},
  {name:'Nesochi Mogbolu',role:'Chief Operations Officer',dept:'Operations — Servelead Global',photo:'staff5.jpg',ini:'NM',bio:'COO driving operational excellence, systems development, and cross-functional coordination across the Servelead Global group.'},
  {name:'Joshua Onoja',role:'Director, RespecTech',dept:'Technology Leadership',photo:'staff6.jpg',ini:'JO',bio:'Director of RespecTech overseeing tech product development, talent programs, startup acceleration, and the RespecTech Center operations.'},
];
const core=[
  {name:'Patrick Aklo',role:'Legal Head',dept:'Legal',photo:'staff7.jpg',ini:'PA',bio:'Legal strategist ensuring all operations, partnerships, and business structures meet regulatory requirements across jurisdictions.'},
  {name:'Victor Pius',role:'Entrepreneur-in-Residence',dept:'Ventures',photo:'staff8.jpg',ini:'VP',bio:'Startup mentor supporting early-stage ventures through the Servelead Venture Studio with hands-on operational guidance.'},
  {name:'Samson Rotimi',role:'Workforce & Career Placement Lead',dept:'Human Capital',photo:'staff9.jpg',ini:'SR',bio:'Connecting trained tech talents to employment opportunities, managing career development programs and employer partnerships.'},
  {name:'Allan Agalanga',role:'Artificial Intelligence Lead',dept:'AI & Innovation',photo:'staff10.jpg',ini:'AA',bio:'AI specialist leading the integration of artificial intelligence into business development services and product offerings.'},
];
const cult=[
  {I:IconLeaf,t:'Pan-African Focus',d:'Everything we do is grounded in real African business context and challenges.'},
  {I:IconHandshake,t:'Collaboration First',d:'We believe the best solutions emerge from diverse teams working in harmony.'},
  {I:IconDiamond,t:'Growth Mindset',d:"We invest in every team member's professional and personal development."},
  {I:IconBolt,t:'Move Fast',d:'We prototype, test, iterate, and ship solutions at startup speed.'},
  {I:IconTarget,t:'Results Over Activity',d:'We measure our work by impact, not hours. Outcomes drive everything.'},
  {I:IconCpu,t:'AI-Native Thinking',d:'Every team member is equipped with AI tools and trained to leverage them.'},
  {I:IconShield,t:'Sustainable Impact',d:'We build for longevity — ensuring our work creates lasting positive change.'},
  {I:IconCrown,t:'Excellence Always',d:'We take immense pride in the quality of everything that leaves our hands.'},
];

function Card({m,lg}){
  const r=useRef(null);const b=useRef(null);
  const sz=lg?76:60;
  return(
    <div ref={r} style={{background:C.D2,border:'1px solid rgba(255,255,255,0.06)',padding:lg?'clamp(22px,3vw,36px)':'clamp(18px,2.5vw,28px)',position:'relative',overflow:'hidden',transition:'border-color .3s'}}
      onMouseEnter={()=>{gsap.to(b.current,{maxHeight:200,opacity:1,duration:.4,ease:'power3.out'});if(r.current)r.current.style.borderColor='rgba(184,255,0,0.35)';}}
      onMouseLeave={()=>{gsap.to(b.current,{maxHeight:0,opacity:0,duration:.35,ease:'power3.in'});if(r.current)r.current.style.borderColor='rgba(255,255,255,0.06)';}}>
      <div style={{width:sz,height:sz,borderRadius:'50%',overflow:'hidden',background:'rgba(184,255,0,0.1)',border:'2px solid rgba(184,255,0,0.4)',marginBottom:'14px',flexShrink:0}}>
        <img src={`/${m.photo}`} alt={m.name} style={{width:'100%',height:'100%',objectFit:'cover'}} onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
        <div style={{display:'none',width:'100%',height:'100%',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-d)',fontWeight:900,fontSize:lg?'1.3rem':'1rem',color:C.L}}>{m.ini}</div>
      </div>
      <h4 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:lg?'1.05rem':'0.95rem',marginBottom:'5px',color:C.CR}}>{m.name}</h4>
      <div style={{fontSize:'0.8rem',fontWeight:600,color:C.L,marginBottom:'3px'}}>{m.role}</div>
      <div style={{fontSize:'0.68rem',color:C.GR,letterSpacing:'0.06em',textTransform:'uppercase',fontWeight:500}}>{m.dept}</div>
      <div ref={b} style={{maxHeight:0,opacity:0,overflow:'hidden'}}>
        <div style={{marginTop:'14px',paddingTop:'14px',borderTop:'1px solid rgba(184,255,0,0.15)'}}>
          <p style={{fontSize:'0.82rem',lineHeight:'1.68',color:C.GL}}>{m.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function TeamClient(){
  const ref=useRef(null);
  useEffect(()=>{
    const bd={toggleActions:'play reverse play reverse'};
    const ctx=gsap.context(()=>{
      gsap.fromTo('.lc',{y:44,opacity:0},{y:0,opacity:1,stagger:.07,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'.lg',start:'top 82%',...bd}});
      gsap.fromTo('.cc',{y:40,opacity:0},{y:0,opacity:1,stagger:.08,duration:.65,ease:'power3.out',scrollTrigger:{trigger:'.cg',start:'top 83%',...bd}});
      gsap.fromTo('.ci',{scale:.88,opacity:0},{scale:1,opacity:1,stagger:.06,duration:.55,ease:'back.out(1.4)',scrollTrigger:{trigger:'.cug',start:'top 83%',...bd}});
    },ref);
    return()=>ctx.revert();
  },[]);
  return(<>
    <PageHero pageKey="team" tag="The People" title="Meet Our" titleEm="Dream Team" subtitle="Diverse experts united by a shared mission — to build, scale, and transform African businesses through world-class service."/>
    <div ref={ref}>
      <section className="section-pad" style={{background:C.D,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'10%',right:'5%',width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle,rgba(184,255,0,0.04) 0%,transparent 70%)',pointerEvents:'none'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{marginBottom:'clamp(36px,5vw,56px)'}}>
            <div className="tag" style={{marginBottom:'18px'}}>Senior Leadership</div>
            <h2>Executive <em style={{color:C.L,fontStyle:'italic'}}>Team</em></h2>
          </div>
          <div className="lg" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'clamp(14px,2vw,22px)'}}>
            {lead.map(m=><div key={m.name} className="lc"><Card m={m} lg={true}/></div>)}
          </div>
        </div>
        <style>{`@media(max-width:900px){.lg{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:480px){.lg{grid-template-columns:1fr!important;}}`}</style>
      </section>

      <section className="section-pad" style={{background:C.D2}}>
        <div className="container">
          <div style={{marginBottom:'clamp(36px,5vw,56px)'}}>
            <div className="tag" style={{marginBottom:'18px'}}>Specialists & Leads</div>
            <h2>Core <em style={{color:C.L,fontStyle:'italic'}}>Team</em></h2>
          </div>
          <div className="cg" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'clamp(14px,2vw,22px)'}}>
            {core.map(m=><div key={m.name} className="cc"><Card m={m}/></div>)}
          </div>
        </div>
        <style>{`@media(max-width:900px){.cg{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:480px){.cg{grid-template-columns:1fr!important;}}`}</style>
      </section>

      <section className="section-pad" style={{background:C.D}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(36px,5vw,56px)'}}>
            <div className="tag" style={{margin:'0 auto 18px',justifyContent:'center'}}>Life at Servelead</div>
            <h2>Our <em style={{color:C.L,fontStyle:'italic'}}>Culture</em></h2>
          </div>
          <div className="cug" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'clamp(14px,2vw,22px)'}}>
            {cult.map(({I,t,d})=>(
              <div key={t} className="card ci" style={{textAlign:'center',padding:'clamp(20px,3vw,32px)'}}>
                <div style={{width:'48px',height:'48px',background:'rgba(184,255,0,0.06)',border:'1px solid rgba(184,255,0,0.18)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px'}}>
                  <I size={22} color={C.L}/>
                </div>
                <h5 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:'0.92rem',color:C.CR,marginBottom:'8px'}}>{t}</h5>
                <p style={{fontSize:'0.8rem',color:C.GL}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.cug{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      <section className="section-pad" style={{background:C.GD}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(32px,5vw,72px)',alignItems:'center'}} className="jg">
            <div>
              <div className="tag" style={{marginBottom:'22px'}}>Join the Team</div>
              <h2 style={{marginBottom:'20px'}}>Shape Africa's<br/><em style={{color:C.L,fontStyle:'italic'}}>Business Future</em></h2>
              <p style={{marginBottom:'36px',color:C.GL}}>We're always looking for passionate individuals who believe in Africa's potential. Whether you're a technologist, strategist, designer, or business developer — there's a place for you here.</p>
              <Link href="/contact" className="btn btn-primary">Explore Opportunities <IconArrowRight size={16}/></Link>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(10px,1.5vw,18px)'}}>
              {['Technology','Business Dev','Marketing','Operations'].map((d,i)=>(
                <div key={d} style={{background:'rgba(6,15,9,0.5)',border:'1px solid rgba(184,255,0,0.2)',padding:'clamp(16px,2vw,28px)',textAlign:'center'}}>
                  <div style={{fontWeight:700,color:C.CR,marginBottom:'6px',fontSize:'0.92rem'}}>{d}</div>
                  <div style={{fontSize:'0.78rem',color:C.L,fontWeight:600}}>{[3,2,1,2][i]} Opening{[3,2,1,2][i]>1?'s':''}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:640px){.jg{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </div>
  </>);
}
