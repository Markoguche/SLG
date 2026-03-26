'use client';
import Link from 'next/link';
import {IconLinkedIn,IconTwitter,IconInstagram,IconArrowRight} from './Icons';
const C={lime:'#B8FF00',dark:'#060F09',dark2:'#0c1a10',cream:'#F5F2EC',gray:'#8A9990',gl:'#b5c4bc'};
export default function Footer(){
  return(
    <footer style={{background:C.dark,borderTop:'1px solid rgba(255,255,255,0.05)',paddingTop:'clamp(56px,8vw,110px)'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr 1fr',gap:'clamp(28px,4vw,56px)',paddingBottom:'56px',borderBottom:'1px solid rgba(255,255,255,0.05)'}} className="ft-grid">
          <div>
            <Link href="/" style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px',textDecoration:'none'}}>
              <img src="/logo.png" alt="Servelead Global" style={{height:'34px',width:'auto',maxWidth:'120px',objectFit:'contain'}} onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
              <div style={{display:'none',width:'34px',height:'34px',background:C.lime,clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',alignItems:'center',justifyContent:'center',flexShrink:0}}><span style={{color:C.dark,fontWeight:900,fontFamily:'var(--font-d)',fontSize:'0.9rem'}}>S</span></div>
              <span style={{fontFamily:'var(--font-d)',fontWeight:700,fontSize:'1.1rem',color:C.cream}}>Serve<span style={{color:C.lime}}>lead</span></span>
            </Link>
            <p style={{fontSize:'0.9rem',lineHeight:'1.75',marginBottom:'28px',maxWidth:'280px',color:C.gl}}>Africa's premier AI-powered business development organization. Building the future, one startup at a time.</p>
            <div style={{display:'flex',gap:'10px'}}>
              {[{I:IconLinkedIn,l:'LinkedIn'},{I:IconTwitter,l:'Twitter'},{I:IconInstagram,l:'Instagram'}].map(({I,l})=>(
                <a key={l} href="#" aria-label={l} style={{width:'36px',height:'36px',border:'1px solid rgba(255,255,255,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:C.gray,transition:'all .3s'}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=C.lime;e.currentTarget.style.color=C.lime;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.1)';e.currentTarget.style.color=C.gray;}}>
                  <I size={16}/>
                </a>
              ))}
            </div>
          </div>
          {[
            {title:'Company',links:[{l:'About Us',to:'/about'},{l:'Our Team',to:'/team'},{l:'Organizations',to:'/organizations'},{l:'Portfolio',to:'/portfolio'}]},
            {title:'Services',links:[{l:'AI-BaaS',to:'/services'},{l:'Venture Studio',to:'/services'},{l:'Event Management',to:'/services'},{l:'Training',to:'/services'}]},
            {title:'Contact',links:[{l:'hello@serveleadglobal.net',href:'mailto:hello@serveleadglobal.net'},{l:'Abuja, Nigeria',href:'#'},{l:'serveleadglobal.net',href:'https://www.serveleadglobal.net'},{l:'Get Started',to:'/contact'}]},
          ].map(({title,links})=>(
            <div key={title}>
              <h6 style={{fontFamily:'var(--font-b)',fontWeight:600,fontSize:'0.72rem',letterSpacing:'0.14em',textTransform:'uppercase',color:C.lime,marginBottom:'20px'}}>{title}</h6>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'12px'}}>
                {links.map(({l,to,href})=>(
                  <li key={l}>
                    {to?(
                      <Link href={to} style={{color:C.gray,fontSize:'0.88rem',display:'flex',alignItems:'center',gap:'6px',transition:'color .2s',textDecoration:'none'}}
                        onMouseEnter={e=>e.currentTarget.style.color=C.cream} onMouseLeave={e=>e.currentTarget.style.color=C.gray}>
                        <IconArrowRight size={12}/>{l}
                      </Link>
                    ):(
                      <a href={href} style={{color:C.gray,fontSize:'0.88rem',display:'flex',alignItems:'center',gap:'6px',transition:'color .2s'}}
                        onMouseEnter={e=>e.currentTarget.style.color=C.cream} onMouseLeave={e=>e.currentTarget.style.color=C.gray}>{l}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'24px 0',flexWrap:'wrap',gap:'12px'}}>
          <p style={{fontSize:'0.78rem',color:C.gray}}>© {new Date().getFullYear()} Servelead Global. All rights reserved.</p>
          <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
            {['Privacy Policy','Terms of Service'].map(l=>(
              <a key={l} href="#" style={{fontSize:'0.78rem',color:C.gray,transition:'color .2s'}}
                onMouseEnter={e=>e.currentTarget.style.color=C.lime} onMouseLeave={e=>e.currentTarget.style.color=C.gray}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.ft-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:540px){.ft-grid{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
}
