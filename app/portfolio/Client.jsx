'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero';
import {IconArrowRight,IconUsers,IconStar,IconAward} from '../../components/Icons';
gsap.registerPlugin(ScrollTrigger);

const L='#B8FF00',D='#060F09',D2='#0c1a10',GD='#0A2E1A',GM='#0F4A28',CR='#F5F2EC',GR='#8A9990',GL='#b5c4bc';

const PAD='clamp(72px,9vw,140px) 0';
const CONT={maxWidth:'1320px',margin:'0 auto',padding:'0 clamp(20px,5vw,80px)',width:'100%'};

const evts=[
  {id:'rt',cat:'Conference',t:'RespecTech Conference',sub:"Africa's Premier Tech-Talent Event",yr:'2022–2024',
   stats:[{n:'2,000+',l:'Attendees'},{n:'100+',l:'Job Opps'},{n:'250+',l:'Scholarships'},{n:'10+',l:'Booths'}],
   d:'The RespecTech Conference spanned two impactful days with government officials, private sector executives, and youth stakeholders from the University of Abuja.',
   hi:['Panel discussions on tech & innovation','On-the-spot job interviews','Scholarship distribution ceremony','Innovation Garden with 10 booths','Government & private sector collaboration']},
  {id:'bl',cat:'Summit',t:'Domineum Blockchain Developers Summit',sub:"Africa's Largest Blockchain Event",yr:'2022',
   stats:[{n:'1,500+',l:'Participants'},{n:'15+',l:'Sessions'},{n:'15',l:'Networking'},{n:'1',l:'AI Lab'}],
   d:"Held at Baze University, Abuja — Africa's largest blockchain-focused event, drawing 1,500+ participants. Organized with NITDA and BSV Blockchain.",
   hi:['Launch of Blockchain-AI Lab','NITDA institutional support','Cross-continental blockchain education','Real-world use case demonstrations','Youth talent development focus']},
  {id:'lp',cat:'Training',t:'Livestock Capacity Building Training',sub:'World Bank L-PRES Partnership',yr:'2025',
   stats:[{n:'300+',l:'Farmers'},{n:'3',l:'Locations'},{n:'3-Day',l:'Program'},{n:'84',l:'In Okene'}],
   d:'Three-day capacity building training on livestock waste management across Lokoja, Anyigba, and Okene in Kogi State, implemented by LAICOS Farms.',
   hi:['Sustainable waste management','Environmental protection','Public health compliance','Waste-to-wealth opportunities','Biogas generation techniques']},
  {id:'fr',cat:'Program Launch',t:'Bilingual & Competitive Project Launch',sub:'French Embassy Partnership',yr:'2024',
   stats:[{n:'80+',l:'Professionals'},{n:'1',l:'Launch'},{n:'26',l:'Partners'},{n:'∞',l:'Impact'}],
   d:'Fully organized for the French Embassy — empowering young people for a truly global future through language development and global competencies.',
   hi:['Official French Embassy partnership','Language development initiative','Youth global competency building','Long-term collaboration framework','Community engagement at scale']},
  {id:'yw',cat:'Training',t:"Young Women's Business & Leadership Training",sub:'Empowering Female Entrepreneurs',yr:'2025',
   stats:[{n:'20',l:'NMSME Owners'},{n:'5',l:'Modules'},{n:'2-Day',l:'Intensive'},{n:'100%',l:'Applied Skills'}],
   d:'Intensive capacity-building for 20 young female NMSME owners on Business Development, Digital Marketing, Financial Management, and Leadership.',
   hi:['Digital marketing & social media','Financial management','Business development strategies','Civic participation & advocacy','Peer learning & mentorship']},
  {id:'mw',cat:'Conference',t:'Mandela Washington Fellowship Alumni Conference',sub:'Pan-African Leadership',yr:'2024',
   stats:[{n:'650+',l:'Attendees'},{n:'15',l:'Sessions'},{n:'26',l:'Countries'},{n:'1',l:'App Launched'}],
   d:"Conference underscoring youth leadership for Africa's growth, culminating in the launch of Ubuntu Trades — enabling AfCFTA intra-continental trade.",
   hi:['Launch of Ubuntu Trades App','AfCFTA integration discussions','26 countries represented','Youth-led policy engagement','Cross-border collaboration']},
  {id:'iv',cat:'Social Impact',t:'iVolunteer Conferences',sub:'Servelead Humanitarian Initiative',yr:'2021–2024',
   stats:[{n:'1,500+',l:'Participants'},{n:'500+',l:'Youth Trained'},{n:'2',l:'Flagship Events'},{n:'17',l:'SDGs Addressed'}],
   d:'The ServeLead Humanitarian Initiative empowering volunteers through structured programs. Over 500 young people trained globally with SDG knowledge.',
   hi:['i-Volunteer 2.0 Camp','TSIC Conference','SDG knowledge building','Global volunteering culture','Youth leadership development']},
];

const ALL_FILTERS=['All','Conference','Summit','Training','Program Launch','Social Impact'];

export default function PortfolioClient(){
  const [active,setActive]=useState('All');
  const ref=useRef(null);
  const filtered=active==='All'?evts:evts.filter(e=>e.cat===active);

  useEffect(()=>{
    const bd={toggleActions:'play reverse play reverse'};
    const ctx=gsap.context(()=>{
      gsap.fromTo('.ev-card',{y:52,opacity:0},{y:0,opacity:1,stagger:.09,duration:.75,ease:'power3.out',
        scrollTrigger:{trigger:'.evts-grid',start:'top 82%',...bd}});
      gsap.fromTo('.gall-hdr',{y:36,opacity:0},{y:0,opacity:1,duration:.7,ease:'power3.out',
        scrollTrigger:{trigger:'.gall-sec',start:'top 82%',...bd}});
      gsap.fromTo('.agg-item',{y:32,opacity:0,scale:.9},{y:0,opacity:1,scale:1,stagger:.07,duration:.6,ease:'back.out(1.4)',
        scrollTrigger:{trigger:'.agg-grid',start:'top 84%',...bd}});
    },ref);
    return()=>ctx.revert();
  },[active]);

  return(
    <>
      <PageHero pageKey="portfolio" tag="Our Work" title="Events That" titleEm="Create Impact"
        subtitle="From blockchain summits to women's leadership programs — every event we manage leaves a measurable legacy."/>

      <div ref={ref}>
        {/* ── FILTER BAR ── */}
        <div style={{background:D2,padding:'28px 0',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
          <div style={CONT}>
            <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
              {ALL_FILTERS.map(f=>(
                <button key={f} onClick={()=>setActive(f)}
                  style={{padding:'9px 22px',fontSize:'0.78rem',fontWeight:600,letterSpacing:'0.08em',
                    textTransform:'uppercase',border:'1px solid',fontFamily:'var(--font-b)',
                    cursor:'pointer',transition:'all .3s',
                    borderColor:active===f?L:'rgba(255,255,255,0.1)',
                    background:active===f?L:'transparent',
                    color:active===f?D:GR}}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── EVENT CARDS ── */}
        <div style={{background:D,padding:PAD}}>
          <div style={CONT}>
            <div className="evts-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(20px,3vw,36px)'}}>
              {filtered.map(({id,cat,t,sub,yr,stats,d,hi})=>(
                <div key={id} className="ev-card"
                  style={{background:D2,border:'1px solid rgba(255,255,255,0.05)',overflow:'hidden',transition:'border-color .4s'}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(184,255,0,0.4)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'}>

                  {/* Card header */}
                  <div style={{background:'rgba(184,255,0,0.05)',borderBottom:'2px solid rgba(184,255,0,0.2)',padding:'clamp(20px,3vw,32px)'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'12px'}}>
                      <span style={{fontSize:'0.68rem',letterSpacing:'0.12em',textTransform:'uppercase',
                        color:L,border:'1px solid rgba(184,255,0,0.3)',padding:'4px 12px',fontWeight:600}}>
                        {cat}
                      </span>
                      <span style={{fontSize:'0.78rem',color:GR}}>{yr}</span>
                    </div>
                    <h3 style={{marginBottom:'8px',fontSize:'clamp(1.1rem,1.8vw,1.7rem)',color:CR,
                      fontFamily:'var(--font-d)',fontWeight:700,lineHeight:1.1,letterSpacing:'-0.02em'}}>
                      {t}
                    </h3>
                    <p style={{fontSize:'0.84rem',color:L,fontWeight:600}}>{sub}</p>
                  </div>

                  {/* Card body */}
                  <div style={{padding:'clamp(20px,3vw,32px)'}}>
                    {/* Stats row */}
                    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',
                      background:'rgba(255,255,255,0.04)',marginBottom:'22px'}}>
                      {stats.map(({n,l})=>(
                        <div key={l} style={{background:D,padding:'clamp(10px,1.5vw,16px) 6px',textAlign:'center'}}>
                          <div style={{fontFamily:'var(--font-d)',fontWeight:800,lineHeight:1,color:L,
                            fontSize:'clamp(1rem,1.8vw,1.5rem)'}}>{n}</div>
                          <p style={{fontSize:'0.64rem',marginTop:'4px',lineHeight:1.3,color:GL}}>{l}</p>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p style={{fontSize:'0.88rem',marginBottom:'18px',lineHeight:'1.75',color:GL}}>{d}</p>

                    {/* Highlights */}
                    <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'7px'}}>
                      {hi.map(h=>(
                        <li key={h} style={{display:'flex',gap:'10px',fontSize:'0.83rem',alignItems:'flex-start'}}>
                          <span style={{color:L,flexShrink:0,marginTop:'3px'}}><IconArrowRight size={11}/></span>
                          <span style={{color:GL}}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.evts-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>

        {/* ── CONFERENCE GALLERY ── */}
        <div className="gall-sec" style={{background:D2,padding:PAD}}>
          <div style={CONT}>
            <div className="gall-hdr" style={{marginBottom:'clamp(28px,4vw,48px)'}}>
              <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 16px',
                fontSize:'0.72rem',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',
                border:'1px solid rgba(184,255,0,0.3)',color:L,marginBottom:'20px'}}>
                <span style={{width:'5px',height:'5px',background:L,borderRadius:'50%',flexShrink:0,animation:'blink 2s infinite'}}/>
                In Pictures
              </div>
              <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'flex-end',gap:'16px'}}>
                <h2 style={{color:CR,fontFamily:'var(--font-d)',fontWeight:700,letterSpacing:'-0.02em',
                  fontSize:'clamp(2.2rem,4.5vw,5rem)',lineHeight:1.05}}>
                  RespecTech <em style={{color:L,fontStyle:'italic'}}>Gallery</em>
                </h2>
                <div style={{display:'flex',gap:'28px',flexWrap:'wrap'}}>
                  {[{Icon:IconUsers,v:'2,000+',l:'Attendees'},{Icon:IconStar,v:'250+',l:'Scholarships'},{Icon:IconAward,v:'100+',l:'Jobs'}].map(({Icon,v,l})=>(
                    <div key={l} style={{textAlign:'center'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'6px',justifyContent:'center',color:L,marginBottom:'5px'}}>
                        <Icon size={16}/>
                        <span style={{fontFamily:'var(--font-d)',fontWeight:800,fontSize:'1.2rem'}}>{v}</span>
                      </div>
                      <p style={{fontSize:'0.72rem',color:GL}}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conference photo grid */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'6px'}} className="conf-grid">
              {Array.from({length:14},(_,i)=>`conf${i+1}.jpg`).map((img,i)=>(
                <div key={img}
                  style={{aspectRatio:i===0||i===7?'16/9':'1/1',gridColumn:i===0||i===7?'1/-1':'auto',
                    background:GM,overflow:'hidden',position:'relative'}}>
                  <img src={`/${img}`} alt={`RespecTech Conference ${i+1}`}
                    style={{width:'100%',height:'100%',objectFit:'cover',display:'block',
                      transition:'transform .7s cubic-bezier(0.76,0,0.24,1)'}}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                    onError={e=>{e.target.style.display='none';e.target.parentNode.style.background='rgba(184,255,0,0.04)';}}/>
                </div>
              ))}
            </div>
            <style>{`@media(max-width:640px){.conf-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>

            {/* Oby Ezekwesili feature */}
            <div style={{marginTop:'clamp(40px,5vw,64px)',background:D,border:'1px solid rgba(184,255,0,0.15)',
              padding:'clamp(28px,4vw,52px)',position:'relative',overflow:'hidden'}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'clamp(24px,4vw,56px)',alignItems:'center'}} className="oby-grid">
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}}>
                  {['doc1.jpg','doc2.jpg','doc3.jpg'].map((img,i)=>(
                    <div key={img}
                      style={{aspectRatio:'4/3',gridColumn:i===0?'1/-1':'auto',background:GM,
                        overflow:'hidden',border:'1px solid rgba(184,255,0,0.12)'}}>
                      <img src={`/${img}`} alt={`Oby Ezekwesili ${i+1}`}
                        style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                        onError={e=>{e.target.style.display='none';e.target.parentNode.style.minHeight='120px';}}/>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 16px',
                    fontSize:'0.72rem',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',
                    border:'1px solid rgba(184,255,0,0.3)',color:L,marginBottom:'20px'}}>
                    <span style={{width:'5px',height:'5px',background:L,borderRadius:'50%',flexShrink:0}}/>
                    Featured Speaker
                  </div>
                  <h3 style={{color:CR,fontFamily:'var(--font-d)',fontWeight:700,marginBottom:'12px',
                    fontSize:'clamp(1.6rem,2.8vw,2.8rem)',letterSpacing:'-0.02em',lineHeight:1.05}}>
                    Oby Ezekwesili
                  </h3>
                  <p style={{fontSize:'0.88rem',fontWeight:600,fontStyle:'italic',marginBottom:'18px',color:L}}>
                    Economic Policy Expert & Former Minister of Education, Federal Republic of Nigeria
                  </p>
                  <p style={{marginBottom:'16px',fontSize:'0.92rem',color:GL,lineHeight:'1.75'}}>
                    A landmark moment as Dr. Oby Ezekwesili — globally recognized economist, co-founder of Transparency International, and former World Bank VP — graced our stage as keynote speaker.
                  </p>
                  <p style={{fontSize:'0.92rem',color:GL,lineHeight:'1.75'}}>
                    Her presence elevated the RespecTech platform to continental significance, bringing world-class economic insights to Africa's next generation of tech leaders.
                  </p>
                </div>
              </div>
              <div style={{position:'absolute',top:0,left:0,width:'100%',height:'2px',
                background:'linear-gradient(90deg,#B8FF00,transparent)'}}/>
            </div>
            <style>{`@media(max-width:640px){.oby-grid{grid-template-columns:1fr!important;}}`}</style>

            {/* RespecTech Center */}
            <div style={{marginTop:'clamp(40px,5vw,64px)'}}>
              <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 16px',
                fontSize:'0.72rem',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',
                border:'1px solid rgba(184,255,0,0.3)',color:L,marginBottom:'18px'}}>
                <span style={{width:'5px',height:'5px',background:L,borderRadius:'50%',flexShrink:0}}/>
                Our Facility
              </div>
              <h3 style={{color:CR,fontFamily:'var(--font-d)',fontWeight:700,marginBottom:'10px',
                fontSize:'clamp(1.6rem,2.8vw,2.8rem)',letterSpacing:'-0.02em',lineHeight:1.05}}>
                The RespecTech <em style={{color:L,fontStyle:'italic'}}>Center</em>
              </h3>
              <p style={{maxWidth:'560px',marginBottom:'22px',fontSize:'0.92rem',color:GL,lineHeight:'1.75'}}>
                A state-of-the-art innovation space housing training facilities, co-working spaces, and an innovation lab designed to nurture Africa's next generation of tech leaders.
              </p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px'}} className="center-grid">
                {['res1.jpg','res2.jpg','res3.jpg'].map((img,i)=>(
                  <div key={img} style={{aspectRatio:'4/3',background:GM,overflow:'hidden',border:'1px solid rgba(184,255,0,0.12)'}}>
                    <img src={`/${img}`} alt={`RespecTech Center ${i+1}`}
                      style={{width:'100%',height:'100%',objectFit:'cover',display:'block',
                        transition:'transform .7s cubic-bezier(0.76,0,0.24,1)'}}
                      onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
                      onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                      onError={e=>{e.target.style.display='none';e.target.parentNode.style.minHeight='100px';}}/>
                  </div>
                ))}
              </div>
              <style>{`@media(max-width:480px){.center-grid{grid-template-columns:1fr!important;}}`}</style>
            </div>
          </div>
        </div>

        {/* ── AGGREGATE STATS ── */}
        <div style={{background:GD,padding:PAD}}>
          <div style={CONT}>
            <div style={{textAlign:'center',marginBottom:'clamp(36px,5vw,56px)'}}>
              <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 16px',
                fontSize:'0.72rem',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',
                border:'1px solid rgba(184,255,0,0.3)',color:L,marginBottom:'18px'}}>
                <span style={{width:'5px',height:'5px',background:L,borderRadius:'50%',flexShrink:0,animation:'blink 2s infinite'}}/>
                Total Impact
              </div>
              <h2 style={{color:CR,fontFamily:'var(--font-d)',fontWeight:700,letterSpacing:'-0.02em',
                fontSize:'clamp(2.2rem,4.5vw,5rem)',lineHeight:1.05}}>
                By The <em style={{color:L,fontStyle:'italic'}}>Numbers</em>
              </h2>
            </div>
            <div className="agg-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',background:'rgba(255,255,255,0.06)'}}>
              {[{n:'7+',l:'Flagship Events'},{n:'6,000+',l:'Total Participants'},{n:'26',l:'Countries Reached'},{n:'40+',l:'Partner Organizations'}].map(({n,l})=>(
                <div key={l} className="agg-item" style={{background:'rgba(6,15,9,0.5)',padding:'clamp(24px,4vw,48px)',textAlign:'center'}}>
                  <div style={{fontFamily:'var(--font-d)',fontWeight:800,color:L,lineHeight:1,
                    letterSpacing:'-0.04em',fontSize:'clamp(2.2rem,4vw,3.8rem)'}}>{n}</div>
                  <p style={{marginTop:'10px',fontSize:'0.88rem',color:GL}}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.agg-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
        </div>

        {/* ── FINAL CTA ── */}
        <div style={{background:D,padding:PAD}}>
          <div style={{...CONT,textAlign:'center'}}>
            <h2 style={{color:CR,fontFamily:'var(--font-d)',fontWeight:700,letterSpacing:'-0.02em',
              fontSize:'clamp(2.2rem,4.5vw,5rem)',lineHeight:1.05,marginBottom:'20px'}}>
              Plan Your Next<br/><em style={{color:L,fontStyle:'italic'}}>Landmark Event</em>
            </h2>
            <p style={{maxWidth:'420px',margin:'0 auto 36px',fontSize:'clamp(0.95rem,1.2vw,1.1rem)',color:GL,lineHeight:'1.75'}}>
              Let's co-create an experience that builds real connections and leaves your audience inspired.
            </p>
            <Link href="/contact"
              style={{display:'inline-flex',alignItems:'center',gap:'10px',padding:'16px 36px',
                background:L,color:D,fontFamily:'var(--font-b)',fontSize:'0.88rem',fontWeight:600,
                letterSpacing:'0.06em',textTransform:'uppercase',textDecoration:'none',
                clipPath:'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))',
                transition:'all .35s'}}>
              Discuss Your Event <IconArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
