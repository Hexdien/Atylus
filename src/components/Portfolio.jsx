import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const resultadoImg = `${import.meta.env.BASE_URL}resultado.png`
const automacaoImg = `${import.meta.env.BASE_URL}automação.png`
const autoridadeImg = `${import.meta.env.BASE_URL}autoridade.png`

const cases = [
  {
    key: 'delivery',
    client: 'Delivery regional — Zona Sul do Rio de Janeiro',
    metric: { value: 573, suffix: '%', label: 'de crescimento em 60 dias' },
    image: resultadoImg,
    imageAlt: 'Comparativo real de faturamento entre fevereiro e abril',
    problem: 'Vendas estagnadas, cardápio mal posicionado nos apps de delivery e preços que não cobriam o esforço do dia a dia.',
    strategy: 'Reorganizamos cardápio, ranqueamento no iFood e 99Food, e a precificação — sem depender de anúncio pago.',
    result: 'Faturamento saltou de R$ 1,3 mil para quase R$ 9 mil em dois meses.',
  },
  {
    key: 'sistemas',
    client: 'Operação de médio porte com processos manuais',
    metric: { value: 68, suffix: '%', label: 'menos retrabalho manual' },
    image: automacaoImg,
    imageAlt: 'Painel de automação e servidores organizados',
    problem: 'Processos manuais geravam erro constante, retrabalho e decisões tomadas sem dado confiável.',
    strategy: 'Automatizamos os fluxos críticos e centralizamos os números num só lugar, sem depender de planilhas soltas.',
    result: 'Menos retrabalho manual, decisões mais rápidas e uma operação que roda sem supervisão constante.',
  },
  {
    key: 'digital',
    client: 'Prestador de serviços sem presença digital',
    metric: { value: 240, suffix: '%', label: 'mais visibilidade online' },
    image: autoridadeImg,
    imageAlt: 'Site institucional com foco em credibilidade',
    problem: 'Presença digital amadora ou inexistente, perdendo clientes pra concorrentes com melhor primeira impressão.',
    strategy: 'Construímos um site institucional com foco em credibilidade e um caminho direto pro contato via WhatsApp.',
    result: 'Muito mais visibilidade online, com visitantes convertendo em contato real.',
  },
]

function animateCounter(el, value, duration = 1200, isStale) {
  const start = performance.now()
  const tick = now => {
    if (isStale && isStale()) return
    const progress = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - progress, 3)
    if (el) el.textContent = Math.round(eased * value)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export default function Portfolio() {
  const triggerRefs = useRef([])
  const counterRefsDesktop = useRef([])
  const imageRef = useRef(null)
  const panelRef = useRef(null)
  const [active, setActive] = useState(0)

  const mobileRefs = useRef([])
  const counterRefsMobile = useRef([])
  const countedMobileRef = useRef([])
  const animTokenRef = useRef(0)

  // Desktop: which case is active, driven by scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(Number(entry.target.dataset.index))
        }
      }),
      { threshold: 0.5 }
    )
    triggerRefs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  // Runs every time the active case changes, so the count-up replays on every view
  useEffect(() => {
    const token = ++animTokenRef.current
    animateCounter(
      counterRefsDesktop.current[active],
      cases[active].metric.value,
      1200,
      () => animTokenRef.current !== token
    )
  }, [active])

  // Mobile: independent reveal + counter per stacked case
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          const idx = Number(entry.target.dataset.index)
          if (!countedMobileRef.current[idx]) {
            countedMobileRef.current[idx] = true
            animateCounter(counterRefsMobile.current[idx], cases[idx].metric.value)
          }
        }
      }),
      { threshold: 0.2 }
    )
    mobileRefs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  // Subtle scroll-linked parallax on the active desktop showcase image
  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const trigger = triggerRefs.current[active]
      if (!trigger || !imageRef.current) return

      const rect = trigger.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)))
      const shift = (progress - 0.5) * 32
      imageRef.current.style.transform = `translateY(${shift}px)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [active])

  const handleImageMouseMove = e => {
    if (!panelRef.current) return
    const rect = panelRef.current.getBoundingClientRect()
    const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -4
    const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 4
    panelRef.current.style.setProperty('--img-tilt-x', `${tiltX}deg`)
    panelRef.current.style.setProperty('--img-tilt-y', `${tiltY}deg`)
  }

  const handleImageMouseLeave = () => {
    if (!panelRef.current) return
    panelRef.current.style.setProperty('--img-tilt-x', '0deg')
    panelRef.current.style.setProperty('--img-tilt-y', '0deg')
  }

  const current = cases[active]

  return (
    <section id="portfolio" style={{ position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 40px 0', textAlign: 'center' }}>
        <p className="section-label" style={{ marginBottom: '16px' }}>Resultados reais</p>
        <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-ink)' }}>
          Cases que<br />
          <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>provam o método.</em>
        </h2>
      </div>

      {/* Desktop / tablet — cinematic scroll track, one case fills the screen at a time */}
      <div className="port-track" style={{ position: 'relative', height: `${cases.length * 100}vh`, marginTop: '40px' }}>
        {cases.map((c, i) => (
          <div
            key={c.key}
            ref={el => triggerRefs.current[i] = el}
            data-index={i}
            style={{ position: 'absolute', top: `${i * 100}vh`, left: 0, width: '100%', height: '100vh', pointerEvents: 'none' }}
          />
        ))}

        <div
          ref={panelRef}
          className={`port-sticky port-theme-${current.key}`}
          style={{ position: 'sticky', top: 0, height: '100vh' }}
        >
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <div key={current.key} className="port-fade">
              <p className="port-client">{current.client}</p>
              <div className="port-number">
                <span ref={el => counterRefsDesktop.current[active] = el}>0</span>{current.metric.suffix}
              </div>
              <p className="port-number-label">{current.metric.label}</p>

              <div className="port-body">
                <div
                  className="port-visual"
                  onMouseMove={handleImageMouseMove}
                  onMouseLeave={handleImageMouseLeave}
                >
                  <img
                    ref={imageRef}
                    src={current.image}
                    alt={current.imageAlt}
                    className="port-image"
                  />
                </div>

                <div className="port-story">
                  <div className="port-story-block">
                    <span className="port-story-label">Problema</span>
                    <p>{current.problem}</p>
                  </div>
                  <div className="port-story-block">
                    <span className="port-story-label">Estratégia</span>
                    <p>{current.strategy}</p>
                  </div>
                  <div className="port-story-block">
                    <span className="port-story-label">Resultado</span>
                    <p>{current.result}</p>
                  </div>

                  <a href="#contato" className="port-cta">
                    Quero resultado assim <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {active < cases.length - 1 && (
              <p className="port-scroll-hint">role para continuar ↓</p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile — stacked cases, no sticky/parallax, adapted interaction */}
      <div className="port-mobile">
        {cases.map((c, i) => (
          <div
            key={c.key}
            ref={el => mobileRefs.current[i] = el}
            data-index={i}
            className={`port-mobile-case reveal port-theme-${c.key}`}
          >
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px' }}>
              <p className="port-client">{c.client}</p>
              <div className="port-number">
                <span ref={el => counterRefsMobile.current[i] = el}>0</span>{c.metric.suffix}
              </div>
              <p className="port-number-label">{c.metric.label}</p>

              <div className="port-visual" style={{ marginBottom: '28px' }}>
                <img src={c.image} alt={c.imageAlt} className="port-image" style={{ height: '240px' }} />
              </div>

              <div className="port-story">
                <div className="port-story-block">
                  <span className="port-story-label">Problema</span>
                  <p>{c.problem}</p>
                </div>
                <div className="port-story-block">
                  <span className="port-story-label">Estratégia</span>
                  <p>{c.strategy}</p>
                </div>
                <div className="port-story-block">
                  <span className="port-story-label">Resultado</span>
                  <p>{c.result}</p>
                </div>

                <a href="#contato" className="port-cta">
                  Quero resultado assim <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .port-sticky, .port-mobile-case {
          background: #fafaf8;
          transition: background 0.6s ease;
        }
        .port-sticky { overflow: hidden; }
        .port-theme-sistemas { background: #f8f8fa; }
        .port-theme-digital { background: #faf9f6; }

        .port-fade { animation: portFadeIn 0.7s cubic-bezier(.16,1,.3,1) both; }
        @keyframes portFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .port-client {
          font-family: var(--font-body);
          font-size: 0.92rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-muted);
          margin-bottom: 12px;
        }
        .port-number {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(3.8rem, 8.5vw, 7rem);
          color: #0158AD;
          line-height: 1;
        }
        .port-number-label {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-muted);
          margin-top: 8px;
          margin-bottom: 40px;
        }
        .port-sticky .port-client,
        .port-sticky .port-number,
        .port-sticky .port-number-label {
          animation: portFadeIn 0.6s cubic-bezier(.16,1,.3,1) both;
        }
        .port-sticky .port-number { animation-delay: 0.08s; }
        .port-sticky .port-number-label { animation-delay: 0.16s; }

        .port-body {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: start;
        }

        .port-visual {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 32px 64px rgba(15,14,13,0.14);
          perspective: 1000px;
        }
        .port-sticky .port-visual { animation: portFadeIn 0.8s cubic-bezier(.16,1,.3,1) 0.1s both; }
        .port-image {
          display: block;
          width: 100%;
          height: 460px;
          object-fit: cover;
          transform: rotateX(var(--img-tilt-x, 0deg)) rotateY(var(--img-tilt-y, 0deg)) scale(1);
          transition: transform 0.4s ease;
          will-change: transform;
        }
        .port-visual:hover .port-image { transform: rotateX(var(--img-tilt-x, 0deg)) rotateY(var(--img-tilt-y, 0deg)) scale(1.035); }

        .port-story-block { margin-bottom: 22px; }
        .port-sticky .port-story-block { animation: portFadeIn 0.6s cubic-bezier(.16,1,.3,1) both; }
        .port-sticky .port-story-block:nth-of-type(1) { animation-delay: 0.2s; }
        .port-sticky .port-story-block:nth-of-type(2) { animation-delay: 0.32s; }
        .port-sticky .port-story-block:nth-of-type(3) { animation-delay: 0.44s; }
        .port-story-label {
          display: block;
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0158AD;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .port-story-block p {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 300;
          color: var(--color-ink);
          line-height: 1.7;
          margin: 0;
        }

        .port-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0158AD;
          text-decoration: none;
          border-bottom: 1px solid rgba(1,88,173,0.35);
          padding-bottom: 4px;
          transition: gap 0.25s ease;
        }
        .port-sticky .port-cta { animation: portFadeIn 0.6s cubic-bezier(.16,1,.3,1) 0.56s both; }
        .port-cta:hover { gap: 14px; }

        .port-scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-muted);
          opacity: 0.6;
          animation: portScrollHint 2.4s ease-in-out infinite;
        }
        @keyframes portScrollHint {
          0%, 100% { opacity: 0.35; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.7; transform: translateX(-50%) translateY(6px); }
        }

        .port-mobile { display: none; }

        @media (max-width: 900px) {
          .port-track { display: none; }
          .port-mobile { display: block; padding: 40px 0 80px; }
          .port-mobile-case { padding: 56px 0; border-top: 1px solid rgba(15,14,13,0.06); }
          .port-mobile-case:first-child { border-top: none; }
          .port-body { grid-template-columns: 1fr; gap: 32px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .port-fade, .port-sticky .port-client, .port-sticky .port-number, .port-sticky .port-number-label,
          .port-sticky .port-visual, .port-sticky .port-story-block, .port-sticky .port-cta, .port-scroll-hint { animation: none; }
          .port-image { transition: none; }
        }
      `}</style>
    </section>
  )
}
