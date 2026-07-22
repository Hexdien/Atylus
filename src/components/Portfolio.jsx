import { useEffect, useRef } from 'react'
import { ShoppingBag, Code2, Globe, ArrowRight } from 'lucide-react'

const phoneGlobeImg = `${import.meta.env.BASE_URL}visibilidade.png`

const cases = [
  {
    icon: ShoppingBag,
    tag: 'Delivery',
    theme: 'light',
    chip: '+573% em 60 dias',
    title: 'Direto Pro Caixa, Sem Depender de Sorte',
    description: 'Ajustamos cardápio, ranqueamento no iFood/99Food e a precificação certa — faturamento saltou de R$ 1,3 mil pra quase R$ 9 mil em dois meses.',
    metric: { value: 573, suffix: '%', label: 'de crescimento em 60 dias' },
    items: ['Mais pedidos sem gastar mais em anúncio', 'Ticket médio maior a cada venda', 'Resultado visível já no 2º mês'],
  },
  {
    icon: Code2,
    tag: 'Sistemas',
    theme: 'tan',
    chip: 'Menos retrabalho, mais controle',
    title: 'Uma Operação Que Para de Depender de Você',
    description: 'Automatizamos os processos manuais que causavam erro e atraso — a equipe passou a confiar nos números que vê todos os dias.',
    metric: { value: 68, suffix: '%', label: 'menos retrabalho manual' },
    items: ['Menos erro e inconsistência', 'Decisão mais rápida com dado confiável', 'Roda sem sua supervisão constante'],
  },
  {
    icon: Globe,
    tag: 'Digital',
    theme: 'dark',
    chip: 'Presença que gera confiança',
    title: 'Primeira Impressão Que Já Converte',
    description: 'Construímos presença digital que passa credibilidade no primeiro olhar e transforma visita em contato real.',
    metric: { value: 240, suffix: '%', label: 'mais visibilidade online' },
    items: ['Confiança instantânea', 'Contato direto pro WhatsApp', 'Mais visibilidade nas buscas locais'],
  },
]

export default function Portfolio() {
  const refs = useRef([])
  const counterRefs = useRef([])
  const countedRef = useRef([])

  useEffect(() => {
    const animateCount = i => {
      if (countedRef.current[i]) return
      countedRef.current[i] = true

      const { value } = cases[i].metric
      const el = counterRefs.current[i]
      const duration = 1400
      const start = performance.now()

      const tick = now => {
        const progress = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - progress, 3)
        if (el) el.textContent = Math.round(eased * value)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          animateCount(refs.current.indexOf(e.target))
        }
      }),
      { threshold: 0.12 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" style={{ padding: '140px 40px', background: '#ede1d3', position: 'relative', overflow: 'hidden' }}>

      {/* Side visual — right: phone + spinning globe */}
      <div className="portfolio-corner portfolio-corner-right">
        <div className="globe-frame">
          <img src={phoneGlobeImg} alt="Conexão global via celular" className="globe-base" />
          <img src={phoneGlobeImg} alt="" aria-hidden="true" className="globe-spin" />
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: '16px', fontSize: '1rem' }}>Resultados reais</p>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-ink)' }}>
            Cases que<br />
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>provam o método.</em>
          </h2>
        </div>

        {/* Case cards — staggered row, alternating tone per card */}
        <div className="portfolio-cascade">
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                ref={el => refs.current[i] = el}
                className={`reveal portfolio-case-card theme-${c.theme}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div className="portfolio-icon-badge">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="portfolio-tag">{c.tag}</span>
                </div>

                <div className="portfolio-metric">
                  <div className="portfolio-metric-number">
                    <span ref={el => counterRefs.current[i] = el}>0</span>{c.metric.suffix}
                  </div>
                  <svg className="portfolio-sparkline" viewBox="0 0 120 40" fill="none">
                    <path
                      d="M2,34 C20,30 28,10 46,14 C64,18 70,4 88,8 C100,11 108,2 118,4"
                      className="spark-path"
                      strokeWidth="2"
                    />
                  </svg>
                  <p className="portfolio-metric-label">{c.metric.label}</p>
                </div>

                <span className="portfolio-chip">{c.chip}</span>

                <h3 className="portfolio-title">{c.title}</h3>
                <p className="portfolio-desc">{c.description}</p>

                <ul className="portfolio-items">
                  {c.items.map(item => (
                    <li key={item}>
                      <span className="portfolio-item-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contato" className="portfolio-cta">
                  Quero resultado assim <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .portfolio-cascade {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          border-radius: 28px;
          padding: 20px;
          background: linear-gradient(90deg, #faf6f0 0%, #ede1d3 35%, #cbb08a 68%, #8a6440 100%);
        }
        .portfolio-case-card {
          flex: 1 1 360px;
          padding: 40px 36px;
          border-radius: 24px;
          transition: transform 0.35s cubic-bezier(.16,1,.3,1), box-shadow 0.35s ease;
          position: relative;
        }
        .portfolio-case-card:nth-child(1) { margin-top: 0; }
        .portfolio-case-card:nth-child(2) { margin-top: 40px; }
        .portfolio-case-card:nth-child(3) { margin-top: 80px; }

        .portfolio-case-card:hover {
          transform: translateY(-10px) scale(1.015);
          z-index: 10 !important;
          box-shadow: 0 32px 64px rgba(15,14,13,0.2);
        }

        .theme-light, .theme-tan, .theme-dark {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .theme-light {
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 16px 32px rgba(15,14,13,0.08);
        }
        .theme-tan, .theme-dark {
          background: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 20px 40px rgba(15,14,13,0.1);
        }

        .theme-light, .theme-tan, .theme-dark {
          --pf-text: #0f0e0d;
          --pf-muted: var(--color-muted);
          --pf-accent: #0158AD;
          --pf-accent-soft: rgba(1,88,173,0.1);
          --pf-item-text: rgba(15,14,13,0.78);
        }

        .portfolio-icon-badge {
          width: 44px; height: 44px;
          background: var(--pf-accent-soft);
          color: var(--pf-accent);
          border-radius: 50px;
          display: flex; align-items: center; justify-content: center;
        }
        .portfolio-tag {
          font-family: var(--font-body);
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pf-muted);
          font-weight: 500;
        }

        .portfolio-metric { margin-bottom: 20px; }
        .portfolio-metric-number {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2.4rem, 3.2vw, 3.2rem);
          color: var(--pf-accent);
          line-height: 1;
        }
        .portfolio-sparkline { display: block; width: 100%; height: 32px; margin: 10px 0 6px; }
        .spark-path {
          fill: none;
          stroke: var(--pf-accent);
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          transition: stroke-dashoffset 1.4s ease 0.3s;
        }
        .portfolio-case-card.visible .spark-path { stroke-dashoffset: 0; }
        .portfolio-metric-label {
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: var(--pf-muted);
        }

        .portfolio-chip {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 999px;
          background: var(--pf-accent-soft);
          color: var(--pf-accent);
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }
        .portfolio-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.4rem;
          color: var(--pf-text);
          margin-bottom: 14px;
          line-height: 1.25;
        }
        .portfolio-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--pf-muted);
          line-height: 1.75;
          margin-bottom: 24px;
        }
        .portfolio-items { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        .portfolio-items li { display: flex; align-items: center; gap: 12px; font-family: var(--font-body); font-size: 0.86rem; color: var(--pf-item-text); }
        .portfolio-item-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--pf-accent); flex-shrink: 0; }

        .portfolio-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--pf-accent);
          text-decoration: none;
          border-bottom: 1px solid var(--pf-accent);
          padding-bottom: 4px;
          transition: gap 0.25s ease;
        }
        .portfolio-cta:hover { gap: 14px; }

        @media (max-width: 900px) {
          .portfolio-cascade { flex-direction: column; }
          .portfolio-case-card:nth-child(1),
          .portfolio-case-card:nth-child(2),
          .portfolio-case-card:nth-child(3) { margin-top: 0; padding: 40px 32px; }
        }

        .portfolio-corner {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }
        .portfolio-corner-right {
          top: 40%;
          right: 2%;
          width: 240px;
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

        @media (prefers-reduced-motion: reduce) {
          .globe-spin { animation: none; }
          .spark-path { transition: none; stroke-dashoffset: 0; }
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
