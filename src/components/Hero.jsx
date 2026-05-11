import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative circle */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-8%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          border: '1px solid rgba(200,169,110,0.18)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '18%',
          right: '-2%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1px solid rgba(200,169,110,0.12)',
          pointerEvents: 'none',
        }}
      />

      {/* Rotating badge */}
      <div
        className="animate-spin-slow"
        style={{
          position: 'absolute',
          top: '12%',
          right: '6%',
          width: '120px',
          height: '120px',
          opacity: 0.35,
        }}
      >
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="circle"
            d="M 60 60 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0"
            fill="none"
          />
          <text style={{ fontSize: '13px', fill: 'var(--color-accent-dark)', letterSpacing: '3px', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            <textPath href="#circle">
              DELIVERY · SISTEMAS · DIGITAL · CONSULTORIA ·&nbsp;
            </textPath>
          </text>
        </svg>
      </div>

      <div style={{ maxWidth: '900px' }}>
        {/* Label */}
        <p className="section-label animate-fade-up" style={{  }}>
        </p>

        {/* Headline */}
        <h1 className="display-title animate-fade-up delay-100" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--color-ink)', marginBottom: '12px', marginTop: '50px' }}>
          Seu negócio
        </h1>
        <h1 className="display-title animate-fade-up delay-200" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '12px' }}>
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>mais inteligente</em>
        </h1>
        <h1 className="display-title animate-fade-up delay-300" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--color-ink)', marginBottom: '40px' }}>
          e lucrativo.
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-up delay-400"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 300,
            color: 'var(--color-muted)',
            lineHeight: 1.8,
            maxWidth: '520px',
            marginBottom: '52px',
          }}
        >
          Consultoria especializada para delivery, desenvolvimento de sistemas sob medida e soluções digitais que realmente funcionam.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-500" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#contato" className="btn-primary">
            Começar agora <ArrowRight size={16} />
          </a>
          <a href="#servicos" className="btn-outline">
            Ver serviços
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up delay-700"
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(15,14,13,0.1)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '+50', label: 'negócios atendidos' },
            { num: '3×', label: 'crescimento médio' },
            { num: '100%', label: 'personalizado' },
            { num: '4.8 / 5', label: 'Notas em avaliações' },
          ].map(s => (
            <div key={s.label}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.2rem', color: 'var(--color-ink)', lineHeight: 1 }}>
                {s.num}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '4px', letterSpacing: '0.05em' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  )
}
