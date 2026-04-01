import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#060F09', color: '#F5F2EC', textAlign: 'center',
      padding: '40px 24px', fontFamily: 'var(--font-b)',
    }}>
      <div style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(5rem,15vw,10rem)', fontWeight: 800, color: '#B8FF00', lineHeight: 1, letterSpacing: '-0.04em', opacity: 0.15 }}>
        404
      </div>
      <h1 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.8rem,4vw,3rem)', marginTop: '16px', marginBottom: '16px' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#b5c4bc', maxWidth: '420px', marginBottom: '40px', lineHeight: 1.75 }}>
        This page no longer exists. The Servelead Global website has been fully rebuilt — everything you need is on the new site.
      </p>
      <Link href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        padding: '16px 36px', background: '#B8FF00', color: '#060F09',
        fontFamily: 'var(--font-b)', fontWeight: 700, fontSize: '0.88rem',
        letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none',
        clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))',
      }}>
        Go to Homepage
      </Link>
    </div>
  );
}
