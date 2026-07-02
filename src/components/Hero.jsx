import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const stats = [
    { num: '+53', label: 'negócios atendidos' },
    { num: '2.2×', label: 'crescimento médio' },
    { num: '100%', label: 'personalizado' },
    { num: '4.9 / 5', label: 'Notas em avaliações' },
  ]

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--hero-bg-top)',
        backgroundImage: 'radial-gradient(ellipse 1300px 900px at 50% 0%, rgba(1,88,173,0.16), transparent 72%), linear-gradient(180deg, var(--hero-bg-top) 0%, var(--hero-bg-bottom) 100%)',
      }}
    >
      {/* Background aurora blobs */}
      <div
        className="hero-float"
        style={{
          position: 'absolute',
          top: '4%',
          right: '-14%',
          width: '760px',
          height: '760px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--hero-blue) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
      <div
        className="hero-float"
        style={{
          position: 'absolute',
          bottom: '-16%',
          left: '-12%',
          width: '640px',
          height: '640px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--hero-blue) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.45,
          pointerEvents: 'none',
          animationDelay: '-6.5s',
        }}
      />

      {/* Warm glow behind headline */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '760px',
          height: '320px',
          background: 'radial-gradient(ellipse, var(--hero-glow) 0%, transparent 72%)',
          filter: 'blur(90px)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* Rotating badge */}
      <div
        className="hero-spin"
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          width: '120px',
          height: '120px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="circle"
            d="M 60 60 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0"
            fill="none"
          />
          <text style={{ fontSize: '13px', fill: 'var(--hero-blue-light)', letterSpacing: '3px', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            <textPath href="#circle">
              DELIVERY · SISTEMAS · DIGITAL · CONSULTORIA ·&nbsp;
            </textPath>
          </text>
        </svg>
      </div>

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
        <h1 className="display-title animate-fade-up delay-100" style={{ fontSize: 'clamp(3.4rem, 8vw, 7.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--hero-text)', marginBottom: '10px' }}>
          Seu negócio
        </h1>
        <h1 className="display-title animate-fade-up delay-200" style={{ fontSize: 'clamp(3.4rem, 8vw, 7.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '10px' }}>
          <em
            style={{
              fontStyle: 'italic',
              position: 'relative',
              display: 'inline-block',
              color: 'var(--hero-blue)',
            }}
          >
            mais inteligente
            <span
              style={{
                position: 'absolute',
                left: 0,
                bottom: '-8px',
                width: '100%',
                height: '4px',
                borderRadius: '3px',
                background: 'var(--hero-gold)',
                opacity: 0.9,
              }}
            />
          </em>
        </h1>
        <h1 className="display-title animate-fade-up delay-300" style={{ fontSize: 'clamp(3.4rem, 8vw, 7.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--hero-text)', marginBottom: '44px' }}>
          e lucrativo.
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
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.2rem', color: 'var(--hero-blue)', lineHeight: 1 }}>
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
          --hero-bg-bottom: #b3855b;
          --hero-blue: #0158AD;
          --hero-blue-light: #5fa8f0;
          --hero-gold: #c89b6a;
          --hero-glow: #8a5a3a;
          --hero-text: #faf6f0;
          --hero-text-muted: rgba(250,246,240,0.72);
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .hero-float { animation: heroFloat 13s ease-in-out infinite; }
        .hero-spin  { animation: heroSpin 50s linear infinite; }

        #hero .hero-btn-primary {
          background: var(--hero-blue);
          color: var(--hero-text);
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
          box-shadow: 0 10px 30px rgba(1,88,173,0.55);
        }

        #hero .hero-btn-outline {
          background: transparent;
          color: var(--hero-text);
          border: 1px solid rgba(250,246,240,0.3);
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

        @media (prefers-reduced-motion: reduce) {
          .hero-float, .hero-spin { animation: none; }
        }
      `}</style>
    </section>
  )
}
