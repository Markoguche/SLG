'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Footer from './Footer';
import SplashScreen from './SplashScreen';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);
  const isFirstLoad = useRef(true);

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower || window.innerWidth <= 768) return;

    let mx = 0, my = 0, fx = 0, fy = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };
    const tick = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      raf = requestAnimationFrame(tick);
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    tick();

    const enter = () => { cursor.style.transform = 'translate(-50%,-50%) scale(2.5)'; };
    const leave = () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; };
    const els = document.querySelectorAll<HTMLElement>('a,button,.btn,[role="button"]');
    els.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [pathname, splashDone]);

  // Page transition
  useEffect(() => {
    if (!splashDone) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    const curtain = curtainRef.current;
    if (!curtain) return;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      ScrollTrigger.refresh();
      return;
    }
    const tl = gsap.timeline();
    tl.set(curtain, { scaleY: 1, transformOrigin: 'bottom', display: 'block' })
      .to(curtain, {
        scaleY: 0, duration: 0.7, ease: 'power4.inOut', transformOrigin: 'top',
        onComplete: () => { gsap.set(curtain, { display: 'none' }); ScrollTrigger.refresh(); },
      });
  }, [pathname, splashDone]);

  const handleSplashDone = () => {
    setShowSplash(false);
    setSplashDone(true);
    ScrollTrigger.refresh();
  };

  return (
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <div ref={curtainRef} className="curtain" style={{ display: 'none' }} />
      <div style={{ opacity: splashDone ? 1 : 0, transition: 'opacity 0.3s' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
