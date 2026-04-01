'use client';
import {useEffect,useRef,useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero';
import {IconGlobe,IconMail,IconMapPin,IconClock,IconSend,IconCheck} from '../../components/Icons';
gsap.registerPlugin(ScrollTrigger);

const C={lime:'#B8FF00',dark:'#060F09',dark2:'#0c1a10',greenDeep:'#0A2E1A',cream:'#F5F2EC',gray:'#8A9990',gl:'#b5c4bc'};

export default function ContactClient(){
  const [form,setForm]=useState({name:'',email:'',org:'',service:'',budget:'',msg:''});
  const [sent,setSent]=useState(false);
  const ref=useRef(null);

  useEffect(()=>{
    const bd={toggleActions:'play reverse play reverse'};
    const ctx=gsap.context(()=>{
      gsap.fromTo('.c-left',{x:-50,opacity:0},{x:0,opacity:1,duration:.85,ease:'power3.out',scrollTrigger:{trigger:'.c-main',start:'top 80%',...bd}});
      gsap.fromTo('.c-right',{x:50,opacity:0},{x:0,opacity:1,duration:.85,ease:'power3.out',scrollTrigger:{trigger:'.c-main',start:'top 80%',...bd}});
      gsap.fromTo('.faq-card',{y:32,opacity:0},{y:0,opacity:1,stagger:.07,duration:.65,ease:'power3.out',scrollTrigger:{trigger:'.faq-wrap',start:'top 83%',...bd}});
    },ref);
    return()=>ctx.revert();
  },[]);

  const set=e=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const submit=e=>{
    e.preventDefault();setSent(true);
    setTimeout(()=>gsap.fromTo('.success-box',{scale:.9,opacity:0},{scale:1,opacity:1,duration:.6,ease:'back.out(1.4)'}),50);
  };

  return(
    <>
      <PageHero pageKey="contact" tag="Get In Touch" title="Let's Build" titleEm="Something Great" subtitle="Whether you're a startup, an enterprise, or a development partner — we'd love to hear from you."/>
      <div ref={ref}>
        <section className="c-main section-pad" style={{background:C.dark,position:'relative',overflow:'hidden'}}>
          <svg style={{position:'absolute',top:'5%',right:'2%',opacity:.04,pointerEvents:'none',width:'clamp(80px,12vw,160px)',animation:'spinSlow 30s linear infinite'}} viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke={C.lime} strokeWidth="2"/>
          </svg>
          <div className="container">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'clamp(40px,6vw,96px)',alignItems:'start'}} className="c-grid">
              {/* Left info */}
              <div className="c-left">
                <div className="tag" style={{marginBottom:'22px'}}>Contact Details</div>
                <h2 style={{marginBottom:'20px'}}>Start A<br/><em style={{color:C.lime,fontStyle:'italic'}}>Conversation</em></h2>
                <p style={{marginBottom:'40px',color:C.gl}}>Our team typically responds within 24 hours. For urgent inquiries, reach us directly via email or visit our Abuja office.</p>
                <div style={{display:'flex',flexDirection:'column',gap:'20px',marginBottom:'44px'}}>
                  {[{Icon:IconGlobe,label:'Website',val:'www.serveleadglobal.net'},{Icon:IconMail,label:'Email',val:'serveleadglobal@gmail.com'},{Icon:IconMapPin,label:'Location',val:'Plot 265/266 Beside KingFem Plaza, Mabushi, Abuja'},{Icon:IconClock,label:'Hours',val:'Mon–Fri: 8AM – 6PM WAT'}].map(({Icon,label,val})=>(
                    <div key={label} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                      <div style={{width:'40px',height:'40px',background:'rgba(184,255,0,0.08)',border:'1px solid rgba(184,255,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <Icon size={18} color={C.lime}/>
                      </div>
                      <div>
                        <div style={{fontSize:'0.68rem',letterSpacing:'0.12em',textTransform:'uppercase',color:C.gray,fontWeight:600,marginBottom:'2px'}}>{label}</div>
                        <div style={{fontSize:'0.9rem',color:C.cream,fontWeight:500}}>{val}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <h6 style={{fontFamily:'var(--font-b)',fontWeight:600,fontSize:'0.68rem',letterSpacing:'0.12em',textTransform:'uppercase',color:C.gray,marginBottom:'14px'}}>We Can Help With</h6>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {['AI Integration','Startup Support','Event Management','Training Programs','Fund Readiness','Market Entry','Tech Development','Business Consulting'].map(t=>(
                    <span key={t} style={{padding:'5px 14px',border:'1px solid rgba(255,255,255,0.09)',fontSize:'0.76rem',color:C.gl}}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Right form */}
              <div className="c-right">
                {sent?(
                  <div className="success-box" style={{background:'rgba(184,255,0,0.05)',border:'1px solid rgba(184,255,0,0.25)',padding:'clamp(36px,5vw,64px)',textAlign:'center'}}>
                    <div style={{width:'64px',height:'64px',background:'rgba(184,255,0,0.1)',border:'1px solid rgba(184,255,0,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px'}}>
                      <IconCheck size={28} color={C.lime}/>
                    </div>
                    <h3 style={{marginBottom:'14px'}}>Message Sent!</h3>
                    <p style={{marginBottom:'28px',color:C.gl}}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button className="btn btn-primary" onClick={()=>{setSent(false);setForm({name:'',email:'',org:'',service:'',budget:'',msg:''});}}>Send Another</button>
                  </div>
                ):(
                  <form onSubmit={submit} style={{background:C.dark2,border:'1px solid rgba(255,255,255,0.05)',padding:'clamp(28px,4vw,52px)'}}>
                    <h4 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:'1.15rem',color:C.cream,marginBottom:'28px'}}>Send Us a Message</h4>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'14px'}} className="form-row">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input required name="name" value={form.name} onChange={set} placeholder="Your name" className="form-input"/>
                      </div>
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input required type="email" name="email" value={form.email} onChange={set} placeholder="your@email.com" className="form-input"/>
                      </div>
                    </div>
                    <div style={{marginBottom:'14px'}}>
                      <label className="form-label">Organization / Company</label>
                      <input name="org" value={form.org} onChange={set} placeholder="Your company or organization" className="form-input"/>
                    </div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'14px'}} className="form-row">
                      <div>
                        <label className="form-label">Service Interested In</label>
                        <select name="service" value={form.service} onChange={set} className="form-input">
                          <option value="">Select a service</option>
                          {['AI-BaaS','Venture Studio','Event Management','Training','Humanitarian','Consulting','Other'].map(o=><option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Budget Range</label>
                        <select name="budget" value={form.budget} onChange={set} className="form-input">
                          <option value="">Select range</option>
                          {[['under5k','Under $5,000'],['5k-20k','$5K – $20K'],['20k-50k','$20K – $50K'],['50k+','$50,000+'],['discuss',"Let's Discuss"]].map(([v,l])=><option key={v} value={v}>{l}</option>)}
                        </select>
                      </div>
                    </div>
                    <div style={{marginBottom:'24px'}}>
                      <label className="form-label">Tell Us About Your Project *</label>
                      <textarea required name="msg" value={form.msg} onChange={set} placeholder="Describe your goals, challenges, and how we can help..." rows={5} className="form-input" style={{resize:'vertical',minHeight:'130px'}}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
                      Send Message <IconSend size={16}/>
                    </button>
                    <p style={{fontSize:'0.74rem',color:C.gray,textAlign:'center',marginTop:'14px'}}>We respond within 24 hours. No spam, ever.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){.c-grid{grid-template-columns:1fr!important;}.form-row{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* FAQ */}
        <section className="section-pad" style={{background:C.dark2}}>
          <div className="container">
            <div style={{textAlign:'center',marginBottom:'clamp(36px,5vw,56px)'}}>
              <div className="tag" style={{margin:'0 auto 18px',justifyContent:'center'}}>FAQ</div>
              <h2>Common <em style={{color:C.lime,fontStyle:'italic'}}>Questions</em></h2>
            </div>
            <div className="faq-wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(14px,2vw,22px)',maxWidth:'1000px',margin:'0 auto'}}>
              {[{q:'What types of businesses do you work with?',a:'We work with startups, SMEs, NGOs, and established enterprises across all sectors — from agriculture and tech to education and healthcare.'},{q:'How long does a typical engagement last?',a:'Engagements range from one-time event management (weeks) to long-term business development partnerships (12–24 months).'},{q:'Do you work outside Nigeria?',a:"Yes — while we're headquartered in Abuja, we have active partnerships and projects across Africa and with international organizations globally."},{q:"What does 'AI-BaaS' mean in practice?",a:'AI-BaaS means we integrate AI tools into your actual business operations — marketing, finance, operations, and decision-making — not just training or advice.'},{q:'Can you help us access funding?',a:'Absolutely. Our Venture Studio service includes investor readiness preparation, pitch deck development, and warm introductions to aligned funders.'},{q:'How do we get started?',a:"Simply fill out the contact form or reach us directly. We'll schedule a free discovery call within 48 hours to explore how we can help."}].map(({q,a})=>(
                <div key={q} className="card faq-card" style={{padding:'clamp(20px,2.5vw,32px)'}}>
                  <h5 style={{fontFamily:'var(--font-b)',fontWeight:700,fontSize:'0.96rem',marginBottom:'10px',color:C.cream}}>{q}</h5>
                  <p style={{fontSize:'0.84rem',lineHeight:'1.72',color:C.gl}}>{a}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.faq-wrap{grid-template-columns:1fr!important;}}`}</style>
        </section>
      </div>
    </>
  );
}
