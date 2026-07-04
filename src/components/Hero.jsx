import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const stats = [
    { num: '+53', label: 'negócios atendidos' },
    { num: '2.2×', label: 'crescimento médio' },
    { num: '100%', label: 'personalizado' },
    { num: '4.9 / 5', label: 'Notas em avaliações' },
  ]

  const heroBg = `${import.meta.env.BASE_URL}hero-bg.jpg`

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '140px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--hero-bg-top)',
        backgroundImage: `linear-gradient(180deg, rgba(6,43,92,0.75) 0%, rgba(74,47,34,0.65) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Eyebrow */}
        <p
          className="animate-fade-up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 18px',
            borderRadius: '999px',
            border: '1px solid rgba(95,168,240,0.5)',
            background: 'rgba(95,168,240,0.1)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--hero-blue-light)',
            marginBottom: '32px',
          }}
        >
          Consultoria · Sistemas · Digital
        </p>

        {/* Headline */}
        <h1 className="display-title animate-fade-up delay-100" style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6.8rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--hero-text)', marginBottom: '6px' }}>
          Seu negócio travado?
        </h1>
        <h1 className="display-title animate-fade-up delay-200" style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6.8rem)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '44px' }}>
          <em style={{ fontStyle: 'italic', color: 'var(--hero-blue-light)' }}>
            A gente destrava o crescimento.
          </em>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-up delay-400"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 300,
            color: 'var(--hero-text-muted)',
            lineHeight: 1.85,
            maxWidth: '540px',
            marginBottom: '48px',
          }}
        >
          Consultoria especializada para delivery, desenvolvimento de sistemas sob medida e soluções digitais que realmente funcionam.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-500" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#contato" className="hero-btn-primary">
            Começar agora <ArrowRight size={16} />
          </a>
          <a href="#servicos" className="hero-btn-outline">
            Ver serviços
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up delay-700"
          style={{
            display: 'flex',
            gap: '56px',
            marginTop: '64px',
            paddingTop: '40px',
            borderTop: '1px solid transparent',
            borderImage: 'linear-gradient(90deg, transparent, rgba(1,88,173,0.55), rgba(200,155,106,0.45), transparent) 1',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {stats.map(s => (
            <div key={s.label}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.2rem', color: 'var(--hero-blue-light)', lineHeight: 1 }}>
                {s.num}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--hero-text-muted)', marginTop: '4px', letterSpacing: '0.05em' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        #hero {
          --hero-bg-top: #4a2f22;
          --hero-blue: #0158AD;
          --hero-blue-light: #5fa8f0;
          --hero-gold: #c89b6a;
          --hero-text: #faf6f0;
          --hero-text-muted: rgba(250,246,240,0.78);
        }

        #hero .hero-btn-primary {
          background: var(--hero-blue-light);
          color: #062b5c;
          padding: 15px 38px;
          border-radius: 999px;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 1px 0 rgba(255,255,255,0.2) inset;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        #hero .hero-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 30px rgba(95,168,240,0.5);
        }

        #hero .hero-btn-outline {
          background: rgba(15,14,13,0.15);
          color: var(--hero-text);
          border: 1px solid rgba(250,246,240,0.4);
          padding: 14px 36px;
          border-radius: 999px;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        #hero .hero-btn-outline:hover {
          background: var(--hero-text);
          color: var(--hero-bg-top);
          transform: translateY(-1px);
        }

      `}</style>
    </section>
  )
}
