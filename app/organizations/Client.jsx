'use client';
import {useEffect,useRef} from 'react';
import Link from 'next/link';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero';
import {IconArrowRight,IconCheck} from '../../components/Icons';
gsap.registerPlugin(ScrollTrigger);

const C={D:'#060F09',D2:'#0c1a10',GD:'#0A2E1A',CR:'#F5F2EC',GR:'#8A9990',GL:'#b5c4bc'};
const orgs=[
  {id:'slg',nm:'Servelead Global',tag:'AI-Powered Business Development',cat:'Headquarters',col:'#B8FF00',logo:'comp6.png',ini:'SG',web:'serveleadglobal.net',about:'Servelead Global is the flagship organization — a world-class AI-powered business development entity that empowers startups and helps businesses build, operate, and scale sustainably. We are the hub connecting all group companies.',svcs:['AI-BaaS (AI-Driven Business Development)','Venture Studio General Partnership','Strategic Business Consulting','Fund Readiness & Investor Connections'],stats:[{n:'103,500+',l:'Lives Impacted'},{n:'$350K+',l:'Funds Managed'},{n:'6+',l:'Years Active'},{n:'40+',l:'Partners'}]},
  {id:'lf',nm:'LAICOS Farms',tag:'Agroconsultancy / Agri-Business Firm',cat:'Agriculture',col:'#7EFFD4',logo:'comp1.png',ini:'LF',about:"LAICOS Farms is an agricultural enterprise set up to provide safe and affordable foods, reduce hunger, poverty, support orphans and create new jobs for youths in Nigeria and Africa. A strategic partner of the World Bank's L-PRES project.",svcs:['Agribusiness Consultancy','Farm Setup & Management','Agricultural Training','Farm Surveillance & Security'],stats:[{n:'8,000',l:'Unit Pond Capacity'},{n:'2,000+',l:'Catfish Stocked'},{n:'500+',l:'Farmers Trained'},{n:'1',l:'Hectare of Land'}]},
  {id:'rt',nm:'RespecTech',tag:'Connecting Tech Talent to Global Opportunities',cat:'Technology',col:'#7EB8FF',logo:'comp2.png',ini:'RT',web:'respectechhr.com',about:"RespecTech aims to leverage technology to solve Africa's most troublesome problems by empowering change makers with the knowledge and opportunity to impact change.",svcs:['Tech Product Design & Deployment','Tech Talent Training & Recruitment','Startup Accelerators & Incubation','Physical, Remote & Hybrid Placement'],stats:[{n:'6,000+',l:'Talents in Pool'},{n:'500+',l:'Graduated Talents'},{n:'200+',l:'Training Sessions'},{n:'5+',l:'Startups Built'}],companies:['RespecTech','Morgen','2Zuri','Timerlane','Gathr']},
  {id:'ac',nm:'Aidos Creations',tag:'Digital Storytelling & Creative Media',cat:'Creative',col:'#FF9B7A',logo:'comp3.png',ini:'AC',web:'aidoscreations.com',about:'Aidos Creations is our creative powerhouse — delivering world-class digital storytelling, brand strategy, and creative media services.',svcs:['Branding & Strategy Development','Social Media Marketing & Management','Photography, Videography & Documentary','Website Design & Development','Printing & Creative Space Rentals'],stats:[{n:'20,000+',l:'People Reached'},{n:'300+',l:'Community Members'},{n:'50+',l:'Brand Projects'},{n:'5+',l:'Years Active'}]},
  {id:'rp',nm:'RescueTap',tag:"Nigeria's Leading Emergency Response Tool",cat:'Safety Tech',col:'#FF4D4D',logo:'comp4.png',ini:'RT2',web:'rescuetap.com',about:"RescueTap is a real-time, one-tap safety platform built to transform Nigeria's emergency response landscape with GPS/location sharing, SOS alerts, and vehicle verification.",svcs:['One-Tap Live Location Sharing','Contextual Road Safety Intelligence','Access Control System','Instant SOS Escalation','Voice Recording','Vehicle Pre-Verification Module'],stats:[{n:'1,000+',l:'Active Users'},{n:'50+',l:'Emergency Alerts'},{n:'10+',l:'Partners'},{n:'3,000+',l:'Total Users'}]},
  {id:'shi',nm:'Servelead Humanitarian',tag:'Enhancing Educational Outcomes & Managing Development Funds',cat:'Nonprofit',col:'#B87EFF',logo:'comp5.png',ini:'SHI',web:'serveleadhumanitarian.org',about:'A nonprofit dedicated to improving the socioeconomic status of African communities by enhancing educational outcomes and ensuring development funds deliver measurable impact.',svcs:['The BWB Initiative','NAAS – Nonprofit as a Service','Development Fund Management','Rural Education Programs'],stats:[{n:'$700K+',l:'Projects Executed'},{n:'50,000+',l:'Individuals Reached'},{n:'500+',l:'Youth Trained'},{n:'45%+',l:'Literacy Boost'}]},
];

function Logo({logo,ini,col,sz=60}){
  return(
    <div style={{width:sz,height:sz,background:`${col}18`,border:`2px solid ${col}55`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,overflow:'hidden'}}>
      <img src={`/${logo}`} alt={ini} style={{width:'80%',height:'80%',objectFit:'contain'}} onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
      <span style={{display:'none',width:'100%',height:'100%',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-d)',fontWeight:900,fontSize:sz*.3,color:col}}>{ini}</span>
    </div>
  );
}

export default function OrgsClient(){
  const ref=useRef(null);
  useEffect(()=>{
    const bd={toggleActions:'play reverse play reverse'};
    const ctx=gsap.context(()=>{
      gsap.fromTo('.hi',{scale:.8,opacity:0},{scale:1,opacity:1,stagger:.07,duration:.6,ease:'back.out(1.5)',scrollTrigger:{trigger:'.hw',start:'top 82%',...bd}});
      orgs.forEach(o=>{
        gsap.fromTo(`#ol-${o.id}`,{x:-60,opacity:0},{x:0,opacity:1,duration:.85,ease:'power3.out',scrollTrigger:{trigger:`#org-${o.id}`,start:'top 83%',...bd}});
        gsap.fromTo(`#or-${o.id}`,{x:60,opacity:0},{x:0,opacity:1,duration:.85,ease:'power3.out',scrollTrigger:{trigger:`#org-${o.id}`,start:'top 83%',...bd}});
      });
    },ref);
    return()=>ctx.revert();
  },[]);
  return(<>
    <PageHero pageKey="organizations" tag="Our Group" title="Organizations" titleEm="We've Built" subtitle="Five specialized companies united under one vision — each solving a critical piece of Africa's development puzzle."/>
    <div ref={ref}>
      {/* Hub overview */}
      <section className="section-pad" style={{background:C.D2}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(36px,5vw,56px)'}}>
            <div className="tag" style={{margin:'0 auto 18px',justifyContent:'center'}}>The Group</div>
            <h2>One Vision, <em style={{color:'#B8FF00',fontStyle:'italic'}}>Five Pillars</em></h2>
          </div>
          <div className="hw" style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'1px',background:'rgba(255,255,255,0.04)'}}>
            {orgs.filter(o=>o.id!=='slg').map(({id,nm,cat,col,logo,ini})=>(
              <div key={id} className="hi" style={{background:C.D,padding:'clamp(20px,3vw,36px)',textAlign:'center',cursor:'pointer',transition:'background .3s'}}
                onClick={()=>document.getElementById(`org-${id}`)?.scrollIntoView({behavior:'smooth'})}
                onMouseEnter={e=>e.currentTarget.style.background=C.D2} onMouseLeave={e=>e.currentTarget.style.background=C.D}>
                <div style={{margin:'0 auto 14px',width:56,height:56}}><Logo logo={logo} ini={ini} col={col} sz={56}/></div>
                <div style={{fontWeight:700,fontSize:'0.88rem',marginBottom:'4px',color:C.CR}}>{nm}</div>
                <div style={{fontSize:'0.68rem',color:C.GR,letterSpacing:'0.08em',textTransform:'uppercase'}}>{cat}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.hw{grid-template-columns:repeat(3,1fr)!important;}}@media(max-width:480px){.hw{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* Individual orgs */}
      <section className="section-pad" style={{background:C.D}}>
        <div className="container">
          {orgs.map(({id,nm,tag,cat,col,logo,ini,web,about,svcs,stats,companies},idx)=>(
            <div key={id} id={`org-${id}`} style={{marginBottom:idx<orgs.length-1?'clamp(64px,8vw,120px)':0}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(32px,5vw,72px)',alignItems:'start'}} className="og">
                <div id={`ol-${id}`}>
                  <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
                    <Logo logo={logo} ini={ini} col={col} sz={60}/>
                    <div>
                      <span style={{fontSize:'0.67rem',letterSpacing:'0.13em',textTransform:'uppercase',fontWeight:700,display:'block',marginBottom:'4px',color:col}}>{cat}</span>
                      <h3 style={{fontSize:'clamp(1.3rem,2.2vw,2rem)'}}>{nm}</h3>
                    </div>
                  </div>
                  <p style={{fontFamily:'var(--font-d)',fontStyle:'italic',marginBottom:'16px',fontSize:'clamp(0.95rem,1.2vw,1.1rem)',color:C.GL}}>{tag}</p>
                  <p style={{marginBottom:'28px',fontSize:'0.9rem',color:C.GL}}>{about}</p>
                  <h6 style={{fontFamily:'var(--font-b)',fontWeight:600,fontSize:'0.68rem',letterSpacing:'0.12em',textTransform:'uppercase',color:C.GR,marginBottom:'12px'}}>Services</h6>
                  <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'9px',marginBottom:'24px'}}>
                    {svcs.map(s=>(
                      <li key={s} style={{display:'flex',gap:'10px',alignItems:'flex-start',fontSize:'0.86rem'}}>
                        <span style={{flexShrink:0,marginTop:'2px',color:col}}><IconCheck size={14}/></span>
                        <span style={{color:C.GL}}>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`https://${web}`} target="_blank" rel="noopener noreferrer" style={{fontSize:'0.8rem',letterSpacing:'0.08em',color:col,borderBottom:`1px solid ${col}44`,paddingBottom:'2px',transition:'opacity .2s'}}
                    onMouseEnter={e=>e.currentTarget.style.opacity='.7'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
                    ↗ {web}
                  </a>
                </div>
                <div id={`or-${id}`}>
                  <div style={{background:`${col}06`,border:`1px solid ${col}1a`,padding:'clamp(24px,3.5vw,44px)',position:'relative',overflow:'hidden'}}>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:`${col}18`,marginBottom:companies?'28px':0}}>
                      {stats.map(({n,l})=>(
                        <div key={l} style={{textAlign:'center',padding:'clamp(16px,2.5vw,28px) 10px',background:`${col}06`,borderBottom:`2px solid ${col}2a`}}>
                          <div style={{fontFamily:'var(--font-d)',fontWeight:800,lineHeight:1,letterSpacing:'-0.03em',color:col,fontSize:'clamp(1.5rem,2.8vw,2.5rem)'}}>{n}</div>
                          <p style={{fontSize:'0.75rem',marginTop:'6px',color:C.GL}}>{l}</p>
                        </div>
                      ))}
                    </div>
                    {companies&&(
                      <div>
                        <h6 style={{fontFamily:'var(--font-b)',fontWeight:600,fontSize:'0.68rem',letterSpacing:'0.12em',textTransform:'uppercase',color:C.GR,marginBottom:'14px'}}>Tech Companies Built</h6>
                        <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                          {companies.map(c=><span key={c} style={{padding:'6px 14px',fontSize:'0.76rem',fontWeight:600,border:`1px solid ${col}44`,color:col}}>{c}</span>)}
                        </div>
                      </div>
                    )}
                    <div style={{position:'absolute',top:0,right:0,width:'36px',height:'36px',background:col,opacity:.28,clipPath:'polygon(100% 0,100% 100%,0 0)'}}/>
                  </div>
                </div>
              </div>
              {idx<orgs.length-1&&<div style={{marginTop:'clamp(48px,6vw,80px)',height:'1px',background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)'}}/>}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.og{grid-template-columns:1fr!important;}}`}</style>
      </section>

      <section className="section-pad" style={{background:C.GD}}>
        <div className="container" style={{textAlign:'center'}}>
          <div className="tag" style={{margin:'0 auto 26px',justifyContent:'center'}}>Partner With Us</div>
          <h2 style={{maxWidth:'520px',margin:'0 auto 20px'}}>Join the Servelead<br/><em style={{color:'#B8FF00',fontStyle:'italic'}}>Ecosystem</em></h2>
          <p style={{maxWidth:'420px',margin:'0 auto 36px',color:C.GL}}>Whether you want to invest in, partner with, or be supported by any of our organizations — we're ready to connect.</p>
          <Link href="/contact" className="btn btn-primary">Get Connected <IconArrowRight size={16}/></Link>
        </div>
      </section>
    </div>
  </>);
}
