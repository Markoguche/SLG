'use client';
import {useEffect,useRef} from 'react';
import Link from 'next/link';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero';
import AnimatedCounter from '../../components/AnimatedCounter';
import {IconBolt,IconHandshake,IconShield,IconCrown,IconTarget,IconCpu,IconArrowRight,IconTrendingUp,IconAward,IconCheck} from '../../components/Icons';
gsap.registerPlugin(ScrollTrigger);

const C={L:'#B8FF00',D:'#060F09',D2:'#0c1a10',GD:'#0A2E1A',GM:'#0F4A28',CR:'#F5F2EC',GR:'#8A9990',GL:'#b5c4bc'};
const vals=[
  {Icon:IconBolt,n:'Excellence',d:'We pursue the highest standards in everything we do, delivering world class results for every client and partner.'},
  {Icon:IconHandshake,n:'Service',d:'Placing the needs of our clients and communities at the heart of every decision we make.'},
  {Icon:IconShield,n:'Integrity',d:'Transparent, honest, and ethical in all our dealings, building trust that lasts a lifetime.'},
  {Icon:IconCrown,n:'Leadership',d:'Cultivating leaders at every level who inspire change and drive meaningful impact across Africa.'},
  {Icon:IconTarget,n:'Discipline',d:'Consistent focus, structured execution, and unwavering commitment to delivering on our promises.'},
  {Icon:IconCpu,n:'Technology',d:'Leveraging AI and cutting-edge tools to unlock efficiency and create scalable solutions for growth.'},
];
const miles=[
  {y:'2018',e:'Servelead Global Founded',d:'Launched with a vision to transform African business development.'},
  {y:'2020',e:'RescueTap Launched',d:"Nigeria's first real-time emergency response and safety platform."},
  {y:'2021',e:'RespecTech Conference',d:"Africa's landmark tech-talent conference with 2,000+ attendees."},
  {y:'2022',e:'Blockchain Developers Summit',d:"Africa's largest blockchain event — 1,500+ participants at Baze University."},
  {y:'2023',e:'World Bank Partnership',d:'LAICOS Farms becomes implementing partner for L-PRES livestock program.'},
  {y:'2024',e:'French Embassy Partnership',d:'Led the Bilingual & Competitive Project Launch as official implementing partners.'},
  {y:'2025',e:'AI-BaaS Launch',d:'Launched AI-Driven Business Development as a Service across the group.'},
];
const partners=['World Bank','UNDP','French Embassy','MacArthur Foundation','NITDA','IREX','AfriLabs','UNESCO','Luminate','JCI Abuja','FCT-DRTS','Convexity','Paxful','Neocloud','DIAL','Kukah Centre','LEAP Africa','Nigeria Jubilee Fellows','CITDA','Hubbon'];

export default function AboutClient(){
  const ref=useRef(null);
  useEffect(()=>{
    const bd={toggleActions:'play reverse play reverse'};
    const ctx=gsap.context(()=>{
      gsap.fromTo('.sl',{x:-60,opacity:0},{x:0,opacity:1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.s-sec',start:'top 80%',...bd}});
      gsap.fromTo('.sr',{x:60,opacity:0},{x:0,opacity:1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.s-sec',start:'top 80%',...bd}});
      gsap.fromTo('.vm-c',{y:50,opacity:0,scale:.96},{y:0,opacity:1,scale:1,stagger:.12,duration:.8,ease:'back.out(1.4)',scrollTrigger:{trigger:'.vm-s',start:'top 82%',...bd}});
      gsap.fromTo('.vl',{y:40,opacity:0},{y:0,opacity:1,stagger:.06,duration:.65,ease:'back.out(1.6)',scrollTrigger:{trigger:'.va',start:'top 82%',...bd}});
      gsap.fromTo('.vc',{y:48,opacity:0},{y:0,opacity:1,stagger:.07,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'.vcs',start:'top 82%',...bd}});
      gsap.fromTo('.tb',{scaleY:0},{scaleY:1,duration:1.6,ease:'power2.out',transformOrigin:'top',scrollTrigger:{trigger:'.ms',start:'top 75%'}});
      gsap.fromTo('.mr',{x:-44,opacity:0},{x:0,opacity:1,stagger:.1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'.ms',start:'top 75%',...bd}});
      gsap.fromTo('.ri',{y:40,opacity:0,scale:.9},{y:0,opacity:1,scale:1,stagger:.04,duration:.55,ease:'back.out(1.3)',scrollTrigger:{trigger:'.rg',start:'top 82%',...bd}});
      gsap.fromTo('.pb',{opacity:0,scale:.85},{opacity:1,scale:1,stagger:.03,duration:.45,ease:'back.out(1.4)',scrollTrigger:{trigger:'.pw',start:'top 83%',...bd}});
      gsap.to('.ro',{rotate:360,duration:40,repeat:-1,ease:'none'});
      gsap.to('.ri2',{rotate:-360,duration:28,repeat:-1,ease:'none'});
    },ref);
    return()=>ctx.revert();
  },[]);
  return(<>
    <PageHero pageKey="about" tag="Our Story" title="Building Africa," titleEm="One Startup at a Time" subtitle="From idea validation to market entry and global scale  Servelead Global is your end to end growth partner."/>
    <div ref={ref}>
      {/* STORY */}
      <section className="s-sec section-pad" style={{background:C.D}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(36px,6vw,90px)',alignItems:'center'}} className="sg">
            <div className="sl">
              <div className="tag" style={{marginBottom:'22px'}}>Our Origin</div>
              <h2 style={{marginBottom:'20px'}}>Born from a<br/><em style={{color:C.L,fontStyle:'italic'}}>Bold Vision</em></h2>
              <p style={{marginBottom:'16px',color:C.GL}}>Servelead Global was founded on a simple but powerful belief: African businesses deserve world class support. We saw talented entrepreneurs held back not by capability, but by access — to AI tools, funding, networks, and knowledge.</p>
              <p style={{marginBottom:'16px',color:C.GL}}>We take startups from idea validation all the way to market entry, fund readiness, and sustainable scale.</p>
              <p style={{marginBottom:'36px',color:C.GL}}>Today, we operate five organizations each solving a specific piece of Africa's business puzzle under one unified vision.</p>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px',marginBottom:'36px'}}>
                {['World class AI powered support','End to end startup development','$350K+ in development funds managed'].map(i=>(
                  <li key={i} style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'0.9rem',color:C.GL}}>
                    <span style={{color:C.L,flexShrink:0}}><IconCheck size={15}/></span>{i}
                  </li>
                ))}
              </ul>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                <Link href="/services" className="btn btn-primary">Our Services <IconArrowRight size={16}/></Link>
                <Link href="/portfolio" className="btn btn-ghost">View Portfolio</Link>
              </div>
            </div>
            <div className="sr" style={{position:'relative'}}>
              <div style={{position:'absolute',inset:'-10%',display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none',zIndex:0}}>
                <svg className="ro" viewBox="0 0 400 400" style={{position:'absolute',width:'90%',opacity:.06}}><circle cx="200" cy="200" r="180" fill="none" stroke={C.L} strokeWidth="1" strokeDasharray="6 10"/></svg>
                <svg className="ri2" viewBox="0 0 400 400" style={{position:'absolute',width:'65%',opacity:.08}}><circle cx="200" cy="200" r="180" fill="none" stroke={C.L} strokeWidth="1.5" strokeDasharray="3 8"/></svg>
              </div>
              <div style={{position:'relative',zIndex:1,background:C.GD,padding:'clamp(28px,4vw,48px)',border:'1px solid rgba(184,255,0,0.1)'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'rgba(184,255,0,0.14)'}}>
                  {[{n:6,s:'+',l:'Businesses Built'},{n:103500,s:'+',l:'Lives Impacted'},{n:350,s:'K+',l:'USD Managed'},{n:40,s:'+',l:'Global Partners'}].map(({n,s,l})=>(
                    <div key={l} style={{textAlign:'center',padding:'clamp(16px,2vw,24px) 10px',background:'rgba(184,255,0,0.05)',borderBottom:'2px solid rgba(184,255,0,0.2)'}}>
                      <div style={{fontFamily:'var(--font-d)',fontWeight:800,color:C.L,lineHeight:1,fontSize:'clamp(1.8rem,3vw,3rem)'}}><AnimatedCounter end={n} suffix={s}/></div>
                      <p style={{fontSize:'0.78rem',marginTop:'6px',color:C.GL}}>{l}</p>
                    </div>
                  ))}
                </div>
                <div style={{position:'absolute',top:0,left:0,width:'100%',height:'2px',background:`linear-gradient(90deg,${C.L},transparent)`}}/>
              </div>
              <div style={{position:'absolute',bottom:'-20px',left:'-20px',background:C.D,border:'1px solid rgba(184,255,0,0.25)',padding:'14px 18px',animation:'floatY 5s ease-in-out infinite',zIndex:2}}>
                <div className="stat-number" style={{fontSize:'1.8rem'}}>6+</div>
                <p style={{fontSize:'0.72rem',marginTop:'2px',color:C.GL}}>Years of Impact</p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.sg{grid-template-columns:1fr!important;}.sr{margin-top:64px!important;}}`}</style>
      </section>

      {/* VISION / MISSION */}
      <section className="vm-s section-pad" style={{background:C.D2}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(20px,3vw,40px)'}} className="vmg">
            {[
              {label:'Vision',Icon:IconTrendingUp,text:'To be a leading catalyst for global business collaboration, recognized for transforming opportunities into impactful partnerships that contribute to economic development and prosperity in diverse markets around the world.'},
              {label:'Mission',Icon:IconAward,text:'To empower business by providing development solutions and strategic partnerships that drive growth, enhance market presence and foster sustainable success for local and international stakeholders.'},
            ].map(({label,Icon,text})=>(
              <div key={label} className="vm-c" style={{background:'rgba(184,255,0,0.03)',border:'1px solid rgba(184,255,0,0.12)',padding:'clamp(28px,4vw,52px)',position:'relative',overflow:'hidden'}}>
                <div style={{width:'48px',height:'48px',background:'rgba(184,255,0,0.08)',border:'1px solid rgba(184,255,0,0.22)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                  <Icon size={24} color={C.L}/>
                </div>
                <h3 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:'0.72rem',letterSpacing:'0.16em',textTransform:'uppercase',color:C.L,marginBottom:'14px'}}>{label}</h3>
                <p style={{fontSize:'1.02rem',lineHeight:'1.78',color:C.GL}}>{text}</p>
                <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:'2px',background:C.L,opacity:.35}}/>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.vmg{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* VALUES */}
      <section className="section-pad" style={{background:C.D,overflow:'hidden'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(32px,4vw,52px)'}}>
            <div className="tag" style={{margin:'0 auto 18px',justifyContent:'center'}}>What Guides Us</div>
            <h2>Our Core <em style={{color:C.L,fontStyle:'italic'}}>Values</em></h2>
          </div>
          <div className="va" style={{display:'flex',justifyContent:'center',gap:'clamp(8px,2vw,24px)',marginBottom:'clamp(28px,4vw,48px)',flexWrap:'wrap'}}>
            {vals.map(({n},i)=>(
              <div key={n} className="vl" style={{fontFamily:'var(--font-d)',fontWeight:800,color:C.L,opacity:.18,lineHeight:1,letterSpacing:'-0.04em',fontSize:'clamp(3.5rem,7vw,7rem)',animation:`floatY ${4+i*.5}s ease-in-out ${i*.2}s infinite`,cursor:'default',transition:'opacity .3s'}}
                onMouseEnter={e=>e.currentTarget.style.opacity='.85'} onMouseLeave={e=>e.currentTarget.style.opacity='.18'}>
                {n[0]}
              </div>
            ))}
          </div>
          <div className="vcs" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'clamp(14px,2vw,22px)'}} >
            {vals.map(({Icon,n,d})=>(
              <div key={n} className="card vc" style={{padding:'clamp(22px,3vw,36px)',borderColor:'rgba(184,255,0,0.1)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'14px'}}>
                  <div style={{width:'44px',height:'44px',background:'rgba(184,255,0,0.07)',border:'1px solid rgba(184,255,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <Icon size={22} color={C.L}/>
                  </div>
                  <h4 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:'1rem',color:C.L,letterSpacing:'0.02em'}}>{n}</h4>
                </div>
                <p style={{fontSize:'0.86rem',color:C.GL}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.vcs{grid-template-columns:1fr 1fr!important;}}@media(max-width:480px){.vcs{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* MILESTONES + REACH */}
      <section className="ms section-pad" style={{background:C.D2}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(40px,6vw,80px)'}} className="mg">
            <div>
              <div className="tag" style={{marginBottom:'22px'}}>Our Journey</div>
              <h2 style={{marginBottom:'36px'}}>Key <em style={{color:C.L,fontStyle:'italic'}}>Milestones</em></h2>
              <div style={{position:'relative',paddingLeft:'28px'}}>
                <div className="tb" style={{position:'absolute',left:0,top:0,width:'1px',height:'100%',background:`linear-gradient(to bottom,${C.L},transparent)`}}/>
                {miles.map(({y,e,d},i)=>(
                  <div key={y} className="mr" style={{paddingBottom:'28px',position:'relative'}}>
                    <div style={{position:'absolute',left:'-34px',top:'4px',width:'10px',height:'10px',borderRadius:'50%',background:i===miles.length-1?C.L:C.GM,border:`2px solid ${i===miles.length-1?C.L:'rgba(184,255,0,0.3)'}`,boxShadow:i===miles.length-1?`0 0 12px rgba(184,255,0,0.5)`:'none'}}/>
                    <span style={{fontSize:'0.68rem',letterSpacing:'0.12em',textTransform:'uppercase',color:C.L,fontWeight:700,display:'block',marginBottom:'4px'}}>{y}</span>
                    <h5 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:'0.98rem',marginBottom:'4px',color:C.CR}}>{e}</h5>
                    <p style={{fontSize:'0.84rem',color:C.GL}}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="tag" style={{marginBottom:'22px'}}>Collective Reach</div>
              <h2 style={{marginBottom:'36px'}}>By the <em style={{color:C.L,fontStyle:'italic'}}>Numbers</em></h2>
              <div className="rg" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(10px,1.5vw,16px)'}}>
                {[{n:103500,s:'+',l:'People Impacted'},{n:6,s:'+',l:'Businesses Built'},{n:6000,s:'',l:'Beneficiaries'},{n:6200,s:'+',l:'Tech Professionals'},{n:500,s:'+',l:'Trained Talents'},{n:350,s:'+',l:'Talents Hired'},{n:300,s:'',l:'Creative Members'},{n:75,s:'+',l:'Training Sessions'},{n:30,s:'+',l:'Conferences'},{n:10,s:'+',l:'Businesses Set Up'},{n:3000,s:'+',l:'RescueTap Users'},{n:150,s:'+',l:'Service Impact'}].map(({n,s,l})=>(
                  <div key={l} className="ri" style={{background:C.D,border:'1px solid rgba(255,255,255,0.05)',padding:'clamp(14px,2vw,20px)',textAlign:'center',transition:'border-color .3s'}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(184,255,0,0.2)'} onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'}>
                    <div style={{fontFamily:'var(--font-d)',fontWeight:800,color:C.L,lineHeight:1,fontSize:'clamp(1.4rem,2.5vw,2.2rem)'}}><AnimatedCounter end={n} suffix={s}/></div>
                    <p style={{fontSize:'0.72rem',marginTop:'4px',color:C.GL}}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.mg{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* PARTNERS */}
      <section className="section-pad" style={{background:C.D}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(36px,5vw,56px)'}}>
            <div className="tag" style={{margin:'0 auto 18px',justifyContent:'center'}}>Trusted By</div>
            <h2>Our <em style={{color:C.L,fontStyle:'italic'}}>Partners</em></h2>
          </div>
          <div className="pw" style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'1px',background:'rgba(255,255,255,0.04)'}}>
            {partners.map(name=>(
              <div key={name} className="pb" style={{background:C.D,padding:'clamp(14px,2.5vw,24px)',textAlign:'center',fontSize:'0.78rem',fontWeight:600,color:C.GR,letterSpacing:'0.05em',transition:'all .3s'}}
                onMouseEnter={e=>{e.currentTarget.style.color=C.L;e.currentTarget.style.background='rgba(184,255,0,0.03)';}}
                onMouseLeave={e=>{e.currentTarget.style.color=C.GR;e.currentTarget.style.background=C.D;}}>
                {name}
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.pw{grid-template-columns:repeat(3,1fr)!important;}}@media(max-width:480px){.pw{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{background:C.GD}}>
        <div className="container" style={{textAlign:'center'}}>
          <div className="tag" style={{margin:'0 auto 26px',justifyContent:'center'}}>Join Our Mission</div>
          <h2 style={{maxWidth:'560px',margin:'0 auto 20px'}}>Be Part of Africa's<br/><em style={{color:C.L,fontStyle:'italic'}}>Growth Story</em></h2>
          <p style={{maxWidth:'440px',margin:'0 auto 36px',color:C.GL}}>Whether you're a startup, an established business, or a development organization — Servelead Global is your partner for sustainable growth.</p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn-primary">Work With Us <IconArrowRight size={16}/></Link>
            <Link href="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
