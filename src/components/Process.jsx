import { useEffect, useRef } from 'react'
import { Search, Compass, Zap, TrendingUp } from 'lucide-react'

const steps = [
  { num: '01', icon: Search, title: 'Clareza Total, Sem Achismo', description: 'Mapeamos exatamente onde seu negócio está perdendo dinheiro e tempo — pra agir no que realmente importa.' },
  { num: '02', icon: Compass, title: 'Um Plano Feito Pra Gerar Resultado', description: 'Nada de fórmula pronta. Priorizamos as ações com retorno mais rápido e o menor risco pro seu bolso.' },
  { num: '03', icon: Zap, title: 'Mais Agilidade no Seu Dia a Dia', description: 'Colocamos tudo em prática ao seu lado — sem travar sua operação, sem depender de você entender de tecnologia.' },
  { num: '04', icon: TrendingUp, title: 'Segurança de Ver o Retorno Acontecer', description: 'Acompanhamos métricas reais e ajustamos o que for preciso, pra você ter certeza de que o investimento está voltando.' },
]

export default function Process() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    itemRefs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="processo" style={{ padding: '80px 40px', background: 'linear-gradient(180deg, #062b5c 0%, #062b5c 78%, #bfe0fb 100%)', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient blobs */}
      <div
        className="proc-float"
        style={{
          position: 'absolute',
          top: '-12%',
          right: '-8%',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #5fa8f0 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />
      <div
        className="proc-float"
        style={{
          position: 'absolute',
          bottom: '-16%',
          left: '-8%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #5fa8f0 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.22,
          pointerEvents: 'none',
          animationDelay: '-6s',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#5fa8f0', marginBottom: '16px' }}>
              Como funciona
            </p>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-paper)' }}>
              Do problema<br />
              <em style={{ color: '#5fa8f0', fontStyle: 'italic' }}>ao resultado.</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'larger', fontWeight: 300, color: 'rgba(245,242,238,0.5)', maxWidth: '320px', lineHeight: 1.8 }}>
            Um processo claro e direto. Sem enrolação, sem jargão — só o que importa para o seu negócio crescer.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px 20px', marginTop: '20px' }}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                ref={el => itemRefs.current[i] = el}
                className="reveal proc-card"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <span className="proc-pin-badge">{step.num}</span>
                <div className="proc-card-inner">
                  <Icon size={150} strokeWidth={1} className="proc-watermark" />
                  <div className="proc-icon-badge">
                    <Icon size={19} color="#0158AD" strokeWidth={1.5} />
                  </div>
                  <h3 className="proc-title">{step.title}</h3>
                  <p className="proc-desc">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes procFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .proc-float { animation: procFloat 14s ease-in-out infinite; }

        .proc-card {
          position: relative;
          overflow: visible;
          transition: transform 0.35s cubic-bezier(.16,1,.3,1);
        }
        .proc-card:hover { transform: translateY(-8px); }

        .proc-pin-badge {
          position: absolute;
          top: -18px;
          left: 28px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          border-radius: 999px;
          background: #0158AD;
          color: #f4ede2;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.9rem;
          box-shadow: 0 10px 24px rgba(1,88,173,0.4);
        }

        .proc-card-inner {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 40px 32px 32px;
          background: rgba(244,237,226,0.08);
          border: 1px solid rgba(250,246,240,0.14);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .proc-card:hover .proc-card-inner {
          box-shadow: 0 24px 48px rgba(0,0,0,0.28);
          border-color: rgba(95,168,240,0.4);
        }

        .proc-watermark {
          position: absolute;
          bottom: -24px;
          right: -20px;
          color: #faf6f0;
          opacity: 0.05;
          pointer-events: none;
        }

        .proc-icon-badge {
          position: relative;
          width: 40px; height: 40px;
          background: rgba(1,88,173,0.16);
          border-radius: 50px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          transition: background 0.35s ease;
        }
        .proc-card:hover .proc-icon-badge { background: #0158AD; }
        .proc-card:hover .proc-icon-badge svg { stroke: #f4ede2; }
        .proc-icon-badge svg { transition: stroke 0.35s ease; }

        .proc-title {
          position: relative;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.25rem;
          color: #faf6f0;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .proc-desc {
          position: relative;
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 300;
          color: rgba(250,246,240,0.7);
          line-height: 1.75;
        }

        @media (prefers-reduced-motion: reduce) {
          .proc-float { animation: none; }
        }
      `}</style>
    </section>
  )
}
