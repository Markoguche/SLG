'use client';
import {useEffect,useRef} from 'react';
import Link from 'next/link';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero';
import {IconCpu,IconRocket,IconAward,IconBook,IconHeart,IconBriefcase,IconArrowRight} from '../../components/Icons';
gsap.registerPlugin(ScrollTrigger);

const C={L:'#B8FF00',D:'#060F09',D2:'#0c1a10',GD:'#0A2E1A',CR:'#F5F2EC',GR:'#8A9990',GL:'#b5c4bc'};
const svcs=[
  {id:'ai',n:'01',t:'AI-Driven Business Development as a Service',s:'AI-BaaS',I:IconCpu,d:'We help companies integrate artificial intelligence into their operations, marketing, finance, and strategic decision-making to drive revenue growth and operational efficiency.',f:['AI strategy development & roadmap','Operations automation & optimization','AI-powered marketing & sales intelligence','Financial modeling & forecasting','Decision-making dashboards','Team AI capability building'],o:'Companies typically see 30–60% cost reduction and 2x revenue growth within 12 months.'},
  {id:'ven',n:'02',t:'Venture Studio Led General Partnership',s:'Venture Studio',I:IconRocket,d:'Our venture studio model provides hands-on support for startups — from ideation through market entry, funding, and scale.',f:['Idea validation & market research','Business model development','MVP design & product development','Go-to-market strategy execution','Investor readiness & fundraising support','Long-term growth partnerships'],o:'6+ businesses built and operating successfully across multiple sectors.'},
  {id:'evt',n:'03',t:'Event & Program Management',s:'Events',I:IconAward,d:'From intimate executive workshops to massive conferences with 2,000+ attendees, we design and execute events that create measurable impact.',f:['Conference design & production','Workshop facilitation','Partnership & stakeholder management','Speaker & agenda curation','On-site logistics & operations','Post-event impact measurement'],o:'30+ conferences executed with 40+ government, NGO, and private sector partners.'},
];

export default function ServicesClient(){
  const ref=useRef(null);
  useEffect(()=>{
    const bd={toggleActions:'play reverse play reverse'};
    const ctx=gsap.context(()=>{
      svcs.forEach(s=>gsap.fromTo(`#s-${s.id}`,{y:56,opacity:0},{y:0,opacity:1,duration:.8,ease:'power3.out',scrollTrigger:{trigger:`#s-${s.id}`,start:'top 84%',...bd}}));
      gsap.fromTo('.ps',{y:40,opacity:0,scale:.95},{y:0,opacity:1,scale:1,stagger:.09,duration:.7,ease:'back.out(1.3)',scrollTrigger:{trigger:'.pw',start:'top 82%',...bd}});
      gsap.fromTo('.pl',{scaleX:0},{scaleX:1,duration:1.2,ease:'power2.out',transformOrigin:'left',scrollTrigger:{trigger:'.pw',start:'top 80%'}});
    },ref);
    return()=>ctx.revert();
  },[]);
  return(<>
    <PageHero pageKey="services" tag="What We Offer" title="End-to-End" titleEm="Growth Solutions" subtitle="Six specialized service pillars designed to take any business from where it is to where it needs to be."/>
    <div ref={ref}>
      <section className="section-pad" style={{background:C.D}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(20px,2.5vw,36px)'}} className="sbg">
            {svcs.map(({id,n,t,s,I,d,f,o})=>(
              <div key={id} id={`s-${id}`} style={{background:C.D2,border:'1px solid rgba(255,255,255,0.05)',padding:'clamp(28px,3.5vw,52px)',position:'relative',transition:'border-color .4s',overflow:'hidden'}}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(184,255,0,0.35)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'}>
                <div style={{position:'absolute',top:'-12px',right:'-4px',fontFamily:'var(--font-d)',fontSize:'clamp(5rem,8vw,8rem)',fontWeight:900,color:C.L,opacity:.04,lineHeight:1,userSelect:'none',pointerEvents:'none'}}>{n}</div>
                <div style={{display:'flex',alignItems:'flex-start',gap:'14px',marginBottom:'18px'}}>
                  <div style={{width:'48px',height:'48px',background:'rgba(184,255,0,0.08)',border:'1px solid rgba(184,255,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><I size={22} color={C.L}/></div>
                  <div>
                    <span style={{fontSize:'0.68rem',letterSpacing:'0.13em',textTransform:'uppercase',color:C.L,fontWeight:700,display:'block',marginBottom:'6px'}}>{s}</span>
                    <h3 style={{fontSize:'clamp(1.1rem,1.7vw,1.55rem)'}}>{t}</h3>
                  </div>
                </div>
                <p style={{marginBottom:'22px',fontSize:'0.9rem',color:C.GL}}>{d}</p>
                <h6 style={{fontFamily:'var(--font-b)',fontWeight:600,fontSize:'0.68rem',letterSpacing:'0.12em',textTransform:'uppercase',color:C.GR,marginBottom:'10px'}}>What's Included</h6>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'7px',marginBottom:'20px'}}>
                  {f.map(i=>(
                    <li key={i} style={{display:'flex',gap:'10px',alignItems:'flex-start',fontSize:'0.84rem'}}>
                      <span style={{color:C.L,flexShrink:0,marginTop:'2px'}}><IconArrowRight size={11}/></span>
                      <span style={{color:C.GL}}>{i}</span>
                    </li>
                  ))}
                </ul>
                <div style={{background:'rgba(184,255,0,0.05)',border:'1px solid rgba(184,255,0,0.15)',padding:'12px 16px',fontSize:'0.82rem',color:C.GL,fontStyle:'italic'}}>
                  <span style={{color:C.L,fontStyle:'normal',fontWeight:700}}>Outcome: </span>{o}
                </div>
                <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:'2px',background:`linear-gradient(90deg,${C.L},transparent)`,opacity:.35}}/>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.sbg{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* PROCESS */}
      <section className="section-pad" style={{background:C.D2}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(36px,5vw,64px)'}}>
            <div className="tag" style={{margin:'0 auto 18px',justifyContent:'center'}}>How We Work</div>
            <h2>Our <em style={{color:C.L,fontStyle:'italic'}}>Process</em></h2>
          </div>
          <div className="pw" style={{position:'relative'}}>
            <div style={{position:'absolute',top:'28px',left:'10%',right:'10%',height:'1px',zIndex:0}}>
              <div className="pl" style={{height:'100%',background:`linear-gradient(90deg,${C.L},rgba(184,255,0,0.3),${C.L})`}}/>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'clamp(12px,2vw,24px)',position:'relative',zIndex:1}} className="pg">
              {[{st:'01',t:'Discovery',d:'Deep-dive into your business, goals, challenges, and market context.'},{st:'02',t:'Strategy',d:'Custom AI-powered roadmap tailored to your specific growth objectives.'},{st:'03',t:'Execution',d:'Hands-on implementation with our expert team across all workstreams.'},{st:'04',t:'Optimization',d:'Continuous monitoring, iteration, and data-driven improvement.'},{st:'05',t:'Scale',d:'Connecting you to funding, partnerships, and markets for sustained growth.'}].map(({st,t,d})=>(
                <div key={st} className="ps" style={{background:C.D,padding:'clamp(18px,2.5vw,30px) clamp(12px,1.5vw,20px)',textAlign:'center',border:'1px solid rgba(255,255,255,0.05)',transition:'border-color .3s'}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(184,255,0,0.25)'} onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'}>
                  <div style={{width:'44px',height:'44px',background:C.L,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontFamily:'var(--font-d)',fontWeight:800,fontSize:'1rem',color:C.D}}>{st}</div>
                  <h4 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:'1rem',marginBottom:'10px',color:C.CR}}>{t}</h4>
                  <p style={{fontSize:'0.82rem',color:C.GL}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.pg{grid-template-columns:1fr 1fr!important;}.pl{display:none!important;}}@media(max-width:480px){.pg{grid-template-columns:1fr!important;}}`}</style>
      </section>

      <section className="section-pad" style={{background:C.GD}}>
        <div className="container" style={{textAlign:'center'}}>
          <div className="tag" style={{margin:'0 auto 26px',justifyContent:'center'}}>Let's Begin</div>
          <h2 style={{maxWidth:'540px',margin:'0 auto 20px'}}>Ready to Transform<br/><em style={{color:C.L,fontStyle:'italic'}}>Your Business?</em></h2>
          <p style={{maxWidth:'420px',margin:'0 auto 36px',color:C.GL}}>Schedule a free discovery call and let's map out the fastest path to sustainable growth.</p>
          <Link href="/contact" className="btn btn-primary">Book a Discovery Call <IconArrowRight size={16}/></Link>
        </div>
      </section>
    </div>
  </>);
}
