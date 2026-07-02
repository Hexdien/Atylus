import { useEffect, useRef } from 'react'
import { ShoppingBag, Code2, Globe, ArrowRight } from 'lucide-react'

const phoneGlobeImg = `${import.meta.env.BASE_URL}visibilidade.png`
const growthChartImg = `${import.meta.env.BASE_URL}métricas.png`

const cases = [
  {
    icon: ShoppingBag,
    tag: 'Delivery',
    chip: '+573% em 60 dias',
    title: 'Direto Pro Caixa, Sem Depender de Sorte',
    description: 'Ajustamos cardápio, ranqueamento no iFood/99Food e a precificação certa — faturamento saltou de R$ 1,3 mil pra quase R$ 9 mil em dois meses.',
    items: ['Mais pedidos sem gastar mais em anúncio', 'Ticket médio maior a cada venda', 'Resultado visível já no 2º mês'],
  },
  {
    icon: Code2,
    tag: 'Sistemas',
    chip: 'Menos retrabalho, mais controle',
    title: 'Uma Operação Que Para de Depender de Você',
    description: 'Automatizamos os processos manuais que causavam erro e atraso — a equipe passou a confiar nos números que vê todos os dias.',
    items: ['Menos erro e inconsistência', 'Decisão mais rápida com dado confiável', 'Roda sem sua supervisão constante'],
  },
  {
    icon: Globe,
    tag: 'Digital',
    chip: 'Presença que gera confiança',
    title: 'Primeira Impressão Que Já Converte',
    description: 'Construímos presença digital que passa credibilidade no primeiro olhar e transforma visita em contato real.',
    items: ['Confiança instantânea', 'Contato direto pro WhatsApp', 'Mais visibilidade nas buscas locais'],
  },
]

export default function Portfolio() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" style={{ padding: '140px 40px', background: '#ede1d3', position: 'relative', overflow: 'hidden' }}>

      {/* Corner visual — top-left: phone + spinning globe */}
      <div className="portfolio-corner portfolio-corner-tl">
        <div className="globe-frame">
          <img src={phoneGlobeImg} alt="Conexão global via celular" className="globe-base" />
          <img src={phoneGlobeImg} alt="" aria-hidden="true" className="globe-spin" />
        </div>
      </div>

      {/* Corner visual — bottom-right: growth chart */}
      <div className="portfolio-corner portfolio-corner-br">
        <img src={growthChartImg} alt="Métricas e crescimento real" className="chart-float" />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: '16px', fontSize: '1rem' }}>Resultados reais</p>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-ink)' }}>
            Cases que<br />
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>provam o método.</em>
          </h2>
        </div>

        {/* Case cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                ref={el => refs.current[i] = el}
                className="reveal portfolio-case-card"
                style={{
                  background: '#faf6f0',
                  borderRadius: '28px',
                  padding: '40px 36px',
                  transitionDelay: `${i * 0.1}s`,
                  position: 'relative',
                }}
              >
                {i === 0 && (
                  <div className="result-chip-card">
                    <div className="result-chip-row">
                      <span className="result-chip-label">Fevereiro</span>
                      <span className="result-chip-value">R$ 1.331,20</span>
                    </div>
                    <div className="result-chip-arrow">↓</div>
                    <div className="result-chip-row">
                      <span className="result-chip-label">Abril</span>
                      <span className="result-chip-value result-chip-value-highlight">R$ 8.969,75</span>
                    </div>
                    <p className="result-chip-tag">+573% em 60 dias</p>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{
                    width: 44, height: 44,
                    background: 'rgba(1,88,173,0.1)',
                    borderRadius: '50px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="#0158AD" strokeWidth={1.5} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    fontWeight: 500,
                  }}>
                    {c.tag}
                  </span>
                </div>

                <span style={{
                  display: 'inline-block',
                  padding: '5px 14px',
                  borderRadius: '999px',
                  background: 'rgba(1,88,173,0.08)',
                  color: '#0158AD',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  marginBottom: '16px',
                }}>
                  {c.chip}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.4rem',
                  color: '#0f0e0d',
                  marginBottom: '14px',
                  lineHeight: 1.25,
                }}>
                  {c.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: 'var(--color-muted)',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                }}>
                  {c.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {c.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#0158AD', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem', color: 'rgba(15,14,13,0.78)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#0158AD',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(1,88,173,0.35)',
                    paddingBottom: '4px',
                    transition: 'gap 0.25s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                >
                  Quero resultado assim <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        #portfolio .portfolio-case-card {
          transition: transform 0.35s cubic-bezier(.16,1,.3,1), box-shadow 0.35s ease;
          box-shadow: 0 16px 32px rgba(15,14,13,0.06);
        }
        #portfolio .portfolio-case-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 56px rgba(1,88,173,0.16);
        }

        .portfolio-corner {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }
        .portfolio-corner-tl {
          top: 6%;
          left: -3%;
          width: 260px;
        }
        .portfolio-corner-br {
          bottom: 6%;
          right: -2%;
          width: 260px;
        }

        .globe-frame {
          position: relative;
          width: 100%;
        }
        .globe-frame img {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 40px rgba(15,14,13,0.14));
        }
        .globe-base { position: relative; }
        .globe-spin {
          position: absolute;
          inset: 0;
          clip-path: circle(27% at 49% 37%);
          transform-origin: 49% 37%;
          animation: globeSpin 16s linear infinite;
        }
        @keyframes globeSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .chart-float {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 40px rgba(15,14,13,0.14));
          animation: chartFloat 6s ease-in-out infinite;
        }
        @keyframes chartFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .result-chip-card {
          position: absolute;
          top: -22px;
          right: -22px;
          z-index: 2;
          background: #faf6f0;
          border: 1px solid rgba(1,88,173,0.15);
          border-radius: 20px;
          padding: 18px 20px;
          width: 200px;
          box-shadow: 0 20px 40px rgba(15,14,13,0.14);
          animation: chartFloat 7s ease-in-out infinite;
          animation-delay: -3s;
        }

        @media (max-width: 700px) {
          .result-chip-card {
            position: static;
            width: auto;
            margin-bottom: 20px;
          }
        }
        .result-chip-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .result-chip-label {
          font-family: var(--font-body);
          font-size: 0.72rem;
          color: var(--color-muted);
          letter-spacing: 0.04em;
        }
        .result-chip-value {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1rem;
          color: #0f0e0d;
        }
        .result-chip-value-highlight {
          color: #0158AD;
          font-size: 1.15rem;
        }
        .result-chip-arrow {
          text-align: center;
          color: #0158AD;
          opacity: 0.5;
          font-size: 0.9rem;
          margin: 4px 0;
        }
        .result-chip-tag {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(1,88,173,0.12);
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 600;
          color: #0158AD;
          text-align: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .globe-spin, .chart-float, .result-chip-card { animation: none; }
        }

        @media (max-width: 1100px) {
          .portfolio-corner { display: none; }
        }

        @media (max-width: 560px) {
          #portfolio { padding: 100px 16px !important; }
        }
      `}</style>
    </section>
  )
}
