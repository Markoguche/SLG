'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { IconMenu, IconX } from './Icons';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/organizations', label: 'Organizations' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    document.body.style.position = '';
  }, []);

  useEffect(() => { closeMenu(); }, [pathname, closeMenu]);
  useEffect(() => { return () => { document.body.style.overflow = ''; }; }, []);

  useEffect(() => {
    if (!mobileRef.current || !menuOpen) return;
    document.body.style.overflow = 'hidden';
    gsap.fromTo(mobileRef.current,
      { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
      { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 0.5, ease: 'power4.out' }
    );
    gsap.fromTo('.m-link',
      { y: 48, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.055, duration: 0.45, delay: 0.12, ease: 'power3.out' }
    );
  }, [menuOpen]);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '10px 0' : '18px 0',
        background: scrolled ? 'rgba(6,15,9,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'padding 0.4s, background 0.4s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

          {/* Logo — fixed height, no overflow */}
          <Link href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="Servelead Global"
              style={{ height: '36px', width: 'auto', display: 'block', maxWidth: '160px', objectFit: 'contain' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback hex */}
            <div style={{
              display: 'none', width: '36px', height: '36px', flexShrink: 0,
              background: '#B8FF00',
              clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#060F09', fontWeight: 900, fontFamily: 'var(--font-display)', fontSize: '1rem' }}>S</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#F5F2EC',
              letterSpacing: '-0.02em', whiteSpace: 'nowrap',
            }}>
              Serve<span style={{ color: '#B8FF00' }}>lead</span>
            </span>
          </Link>

          {/* Desktop links — hidden on mobile via inline media */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.5vw,32px)', flexWrap: 'nowrap' }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} href={to} className={`nav-link${isActive(to) ? ' active' : ''}`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <Link href="/contact" className="btn btn-primary nav-cta" style={{ padding: '10px 24px', fontSize: '0.78rem' }}>
              Get Started
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none', padding: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#F5F2EC', cursor: 'pointer',
                transition: 'border-color 0.3s', borderRadius: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B8FF00')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
            >
              {menuOpen ? <IconX size={20} /> : <IconMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div ref={mobileRef} style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: '#060F09',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          gap: '4px', padding: '40px 24px',
          overflowY: 'hidden', touchAction: 'none',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184,255,0,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          {navLinks.map(({ to, label }) => (
            <Link key={to} href={to} onClick={closeMenu} className="m-link" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 700,
              color: isActive(to) ? '#B8FF00' : '#F5F2EC',
              textAlign: 'center', padding: '6px 0',
              display: 'block', transition: 'color 0.2s',
              cursor: 'pointer', position: 'relative', zIndex: 1,
              WebkitTapHighlightColor: 'transparent',
            }}>
              {label}
            </Link>
          ))}
          <div style={{ marginTop: '40px', position: 'relative', zIndex: 1 }}>
            <a href="https://www.serveleadglobal.net" target="_blank" rel="noopener noreferrer"
              style={{ color: '#8A9990', fontSize: '0.8rem', cursor: 'pointer' }}>
              www.serveleadglobal.net
            </a>
          </div>
        </div>
      )}

      {/* Responsive CSS — hamburger hidden on desktop */}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-cta { display: inline-flex; }
        .nav-hamburger { display: none; }

        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
