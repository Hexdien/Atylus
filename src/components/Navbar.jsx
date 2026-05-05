import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#processo' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 40px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(245,242,238,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(15,14,13,0.08)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img 
          src="/logo-navbar.png" 
          alt="Atylus Consultoria & Sistemas" 
          style={{ height: '40px' }}
        />
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden-mobile">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'var(--color-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--color-ink)'}
            onMouseLeave={e => e.target.style.color = 'var(--color-muted)'}
          >
            {l.label}
          </a>
        ))}
        <a href="#contato" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.72rem' }}>
          Fale conosco
        </a>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
        className="mobile-only"
        aria-label="Menu"
      >
        <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ height: 1.5, background: 'var(--color-ink)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
          <span style={{ height: 1.5, background: 'var(--color-ink)', display: 'block', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ height: 1.5, background: 'var(--color-ink)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0,
          background: 'var(--color-paper)',
          padding: '24px 40px',
          display: 'flex', flexDirection: 'column', gap: 20,
          borderBottom: '1px solid rgba(15,14,13,0.1)',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-ink)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ alignSelf: 'flex-start' }}>
            Fale conosco
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
