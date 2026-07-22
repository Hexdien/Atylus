import { useEffect, useRef, useState } from 'react'
import { ShoppingBag, Code2, Globe, ArrowRight, Cloud } from 'lucide-react'

const services = [
  {
    key: 'delivery',
    icon: ShoppingBag,
    category: 'Delivery',
    title: 'Mais Vendas no Delivery',
    description: 'Aumente o faturamento do seu delivery com estratégias comprovadas de conversão, ranqueamento e precificação inteligente — sem depender de sorte.',
    items: ['Mais pedidos no iFood e 99Food', 'Ticket médio maior', 'Cardápio que vende sozinho'],
  },
  {
    key: 'sistemas',
    icon: Code2,
    category: 'Tecnologia',
    title: 'Mais Eficiência, Menos Retrabalho',
    description: 'Elimine tarefas manuais e ganhe horas de produtividade por semana com sistemas que trabalham por você — feitos sob medida para o seu processo.',
    items: ['Menos tempo em tarefas manuais', 'Decisões mais rápidas com dados em tempo real', 'Sistemas que crescem com o seu negócio'],
  },
  {
    key: 'digital',
    icon: Globe,
    category: 'Digital',
    title: 'Crescimento Digital Real',
    description: 'Construa uma presença digital que gera resultado 24 horas por dia — mais visibilidade, mais confiança e mais clientes encontrando você primeiro.',
    items: ['Mais visibilidade online', 'Mais confiança na primeira impressão', 'Presença digital que trabalha por você'],
  },
]

function DeliveryBackground() {
  return (
    <svg className="svc-bg-svg" viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <path
        d="M20,340 C120,340 100,200 200,200 C300,200 280,60 380,60"
        stroke="#0158AD"
        strokeWidth="2"
        strokeDasharray="8 10"
        className="svc-path"
      />
      <circle cx="20" cy="340" r="5" className="svc-pulse-dot" style={{ animationDelay: '0s' }} fill="#c89b6a" />
      <circle cx="200" cy="200" r="5" className="svc-pulse-dot" style={{ animationDelay: '0.6s' }} fill="#c89b6a" />
      <circle cx="380" cy="60" r="5" className="svc-pulse-dot" style={{ animationDelay: '1.2s' }} fill="#c89b6a" />
    </svg>
  )
}

function SistemasBackground() {
  return (
    <div className="svc-cloud-scene" aria-hidden="true">
      <Cloud className="svc-cloud-icon" size={120} strokeWidth={1} />
      <svg className="svc-cloud-svg" viewBox="0 0 400 400" fill="none">
        <line x1="200" y1="150" x2="120" y2="290" stroke="rgba(95,168,240,0.35)" strokeWidth="1.5" />
        <line x1="200" y1="150" x2="200" y2="310" stroke="rgba(95,168,240,0.35)" strokeWidth="1.5" />
        <line x1="200" y1="150" x2="280" y2="290" stroke="rgba(95,168,240,0.35)" strokeWidth="1.5" />
        <circle cx="120" cy="290" r="5" className="svc-node" style={{ animationDelay: '0.6s' }} />
        <circle cx="200" cy="310" r="5" className="svc-node" style={{ animationDelay: '1.2s' }} />
        <circle cx="280" cy="290" r="5" className="svc-node" style={{ animationDelay: '1.8s' }} />
        <circle cx="200" cy="150" r="4" fill="#5fa8f0" className="svc-packet svc-packet-1" />
        <circle cx="200" cy="150" r="4" fill="#5fa8f0" className="svc-packet svc-packet-2" />
        <circle cx="200" cy="150" r="4" fill="#5fa8f0" className="svc-packet svc-packet-3" />
      </svg>
    </div>
  )
}

function DigitalBackground() {
  return (
    <>
      <div className="svc-ring" style={{ animationDelay: '0s' }} />
      <div className="svc-ring" style={{ animationDelay: '1.3s' }} />
      <div className="svc-ring" style={{ animationDelay: '2.6s' }} />
      <span className="svc-dot" style={{ top: '22%', left: '30%', animationDelay: '0s' }} />
      <span className="svc-dot" style={{ top: '70%', left: '68%', animationDelay: '1s' }} />
      <span className="svc-dot" style={{ top: '58%', left: '20%', animationDelay: '2s' }} />
    </>
  )
}

const backgroundsByKey = {
  delivery: DeliveryBackground,
  sistemas: SistemasBackground,
  digital: DigitalBackground,
}

export default function Services() {
  const [active, setActive] = useState(0)
  const [mobileActive, setMobileActive] = useState(0)
  const headerRef = useRef(null)
  const triggerRefs = useRef([])
  const panelRef = useRef(null)
  const mobileTrackRef = useRef(null)

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    if (headerRef.current) revealObserver.observe(headerRef.current)

    const activeObserver = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActive(Number(entry.target.dataset.index))
      }),
      { threshold: 0.5 }
    )
    triggerRefs.current.forEach(r => r && activeObserver.observe(r))

    return () => {
      revealObserver.disconnect()
      activeObserver.disconnect()
    }
  }, [])

  const handlePanelMouseMove = e => {
    if (!panelRef.current) return
    const rect = panelRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    panelRef.current.style.setProperty('--spot-x', `${x}%`)
    panelRef.current.style.setProperty('--spot-y', `${y}%`)
    const tiltX = ((y - 50) / 50) * -2
    const tiltY = ((x - 50) / 50) * 2
    panelRef.current.style.setProperty('--tilt-x', `${tiltX}deg`)
    panelRef.current.style.setProperty('--tilt-y', `${tiltY}deg`)
  }

  const handlePanelMouseLeave = () => {
    if (!panelRef.current) return
    panelRef.current.style.setProperty('--tilt-x', '0deg')
    panelRef.current.style.setProperty('--tilt-y', '0deg')
  }

  const scrollToIndex = i => {
    triggerRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleMobileScroll = () => {
    const track = mobileTrackRef.current
    if (!track) return
    const idx = Math.round(track.scrollLeft / track.clientWidth)
    if (idx !== mobileActive) setMobileActive(idx)
  }

  const current = services[active]
  const CurrentIcon = current.icon
  const CurrentBg = backgroundsByKey[current.key]

  return (
    <section id="servicos" style={{ background: '#f4ede2' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px 0' }}>
        <div ref={headerRef} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p className="section-label" style={{ marginBottom: '16px', color: '#0158AD' }}>O que fazemos</p>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#0f0e0d' }}>
              Três frentes,<br />
              <em style={{ color: '#0158AD', fontStyle: 'italic' }}>uma visão.</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'x-large', fontWeight: 300, color: '#7a7068', maxWidth: '320px', lineHeight: 1.8 }}>
            Cada frente resolve um gargalo real do seu negócio — com resultado que aparece no caixa.
          </p>
        </div>
      </div>

      {/* Desktop / tablet: sticky scrollytelling track */}
      <div className="svc-track" style={{ position: 'relative', height: `${services.length * 100}vh` }}>
        {services.map((s, i) => (
          <div
            key={s.key}
            ref={el => triggerRefs.current[i] = el}
            data-index={i}
            style={{ position: 'absolute', top: `${i * 100}vh`, left: 0, width: '100%', height: '100vh', pointerEvents: 'none' }}
          />
        ))}

        <div
          ref={panelRef}
          onMouseMove={handlePanelMouseMove}
          onMouseLeave={handlePanelMouseLeave}
          className={`svc-sticky svc-theme-${current.key}`}
          style={{ position: 'sticky', top: 0, height: '100vh' }}
        >
          <div className="svc-bg-layer">
            <CurrentBg />
          </div>
          <div className="svc-spotlight" />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
            <div className="svc-layout">
              <nav className="svc-index" aria-label="Serviços">
                {services.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    className={`svc-index-item ${i === active ? 'is-active' : ''}`}
                  >
                    <span className="svc-index-num">0{i + 1}</span>
                    <span className="svc-index-label">{s.category}</span>
                  </button>
                ))}
              </nav>

              <div key={current.key} className="svc-panel">
                <div className="svc-icon-badge">
                  <CurrentIcon size={28} strokeWidth={1.5} />
                </div>
                <span className="svc-category">{current.category}</span>
                <h3 className="svc-title">{current.title}</h3>
                <p className="svc-desc">{current.description}</p>
                <ul className="svc-items">
                  {current.items.map(item => (
                    <li key={item}>
                      <span className="svc-item-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="svc-cta">
                  Saiba mais <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: adapted interaction — horizontal swipe carousel */}
      <div className="svc-mobile">
        <div className="svc-mobile-track" ref={mobileTrackRef} onScroll={handleMobileScroll}>
          {services.map(s => {
            const Icon = s.icon
            const Bg = backgroundsByKey[s.key]
            return (
              <div key={s.key} className={`svc-mobile-slide svc-theme-${s.key}`}>
                <div className="svc-bg-layer">
                  <Bg />
                </div>
                <div className="svc-panel" style={{ position: 'relative', zIndex: 1 }}>
                  <div className="svc-icon-badge">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="svc-category">{s.category}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.description}</p>
                  <ul className="svc-items">
                    {s.items.map(item => (
                      <li key={item}>
                        <span className="svc-item-dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contato" className="svc-cta">
                    Saiba mais <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="svc-mobile-dots">
          {services.map((s, i) => (
            <span key={s.key} className={`svc-mobile-dot ${i === mobileActive ? 'is-active' : ''}`} />
          ))}
        </div>
      </div>

      <style>{`
        .svc-sticky, .svc-mobile-slide {
          --svc-text: #0f0e0d;
          --svc-text-muted: #7a7068;
          --svc-accent: #0158AD;
          --svc-accent-soft: rgba(1,88,173,0.1);
          overflow: hidden;
          background: #f4ede2;
          transition: background 0.6s ease;
        }
        .svc-theme-sistemas.svc-sticky,
        .svc-mobile-slide.svc-theme-sistemas {
          --svc-text: #faf6f0;
          --svc-text-muted: rgba(250,246,240,0.72);
          --svc-accent: #5fa8f0;
          --svc-accent-soft: rgba(95,168,240,0.15);
          background: radial-gradient(ellipse 140% 100% at 50% 0%, rgba(1,88,173,0.16), transparent 72%), linear-gradient(180deg, #4a2f22 0%, #8a6440 100%);
        }

        .svc-bg-layer { position: absolute; inset: 0; pointer-events: none; }
        .svc-bg-svg { position: absolute; top: 50%; right: 4%; width: min(50vw, 520px); height: auto; transform: translateY(-50%); opacity: 0.9; }

        .svc-path { animation: svcDash 7s linear infinite; }
        @keyframes svcDash { to { stroke-dashoffset: -180; } }
        .svc-pulse-dot { animation: svcPulse 2.4s ease-in-out infinite; transform-origin: center; }
        @keyframes svcPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        .svc-node { fill: #5fa8f0; animation: svcNode 3s ease-in-out infinite; }
        @keyframes svcNode {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }

        .svc-cloud-scene {
          position: absolute;
          top: 50%;
          right: 4%;
          width: min(50vw, 520px);
          height: min(50vw, 520px);
          transform: translateY(-50%);
        }
        .svc-cloud-icon {
          position: absolute;
          top: 16%;
          left: 50%;
          transform: translateX(-50%);
          color: #5fa8f0;
          opacity: 0.9;
        }
        .svc-cloud-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .svc-packet { transform-origin: center; opacity: 0; }
        .svc-packet-1 { animation: svcPacket1 2.6s ease-in-out infinite; }
        .svc-packet-2 { animation: svcPacket2 2.6s ease-in-out infinite; animation-delay: 0.65s; }
        .svc-packet-3 { animation: svcPacket3 2.6s ease-in-out infinite; animation-delay: 1.3s; }
        @keyframes svcPacket1 {
          0% { transform: translate(0, 0); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(-80px, 140px); opacity: 0; }
        }
        @keyframes svcPacket2 {
          0% { transform: translate(0, 0); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(0, 160px); opacity: 0; }
        }
        @keyframes svcPacket3 {
          0% { transform: translate(0, 0); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(80px, 140px); opacity: 0; }
        }

        .svc-ring {
          position: absolute;
          top: 50%;
          right: 16%;
          width: 80px;
          height: 80px;
          margin-top: -40px;
          border-radius: 50%;
          border: 1px solid rgba(1,88,173,0.4);
          animation: svcRing 4s ease-out infinite;
        }
        @keyframes svcRing {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(4.2); opacity: 0; }
        }
        .svc-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0158AD;
          animation: svcDotFade 3s ease-in-out infinite;
        }
        @keyframes svcDotFade {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          50% { opacity: 0.7; transform: scale(1); }
        }

        .svc-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.12), transparent 42%);
        }

        .svc-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 64px;
          align-items: center;
          width: 100%;
          transform: perspective(1200px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
          transition: transform 0.3s ease;
        }

        .svc-index { display: flex; flex-direction: column; gap: 4px; }
        .svc-index-item {
          display: flex;
          align-items: baseline;
          gap: 12px;
          background: none;
          border: none;
          border-left: 2px solid transparent;
          padding: 12px 0 12px 16px;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.3s ease, opacity 0.3s ease;
          opacity: 0.5;
        }
        .svc-index-item.is-active { border-left-color: var(--svc-accent); opacity: 1; }
        .svc-index-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1rem;
          color: var(--svc-accent);
        }
        .svc-index-label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--svc-text);
          transition: color 0.6s ease;
        }

        .svc-panel { max-width: 640px; animation: svcPanelIn 0.6s cubic-bezier(.16,1,.3,1) both; }
        @keyframes svcPanelIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .svc-icon-badge {
          width: 64px; height: 64px;
          border-radius: 50px;
          background: var(--svc-accent-soft);
          color: var(--svc-accent);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          transition: background 0.6s ease, color 0.6s ease;
        }
        .svc-category {
          display: block;
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--svc-accent);
          font-weight: 600;
          margin-bottom: 16px;
          transition: color 0.6s ease;
        }
        .svc-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2.2rem, 4.2vw, 3.6rem);
          color: var(--svc-text);
          margin-bottom: 20px;
          line-height: 1.15;
          transition: color 0.6s ease;
        }
        .svc-desc {
          font-family: var(--font-body);
          font-size: clamp(1.05rem, 1.3vw, 1.25rem);
          font-weight: 300;
          color: var(--svc-text-muted);
          line-height: 1.8;
          margin-bottom: 28px;
          transition: color 0.6s ease;
        }
        .svc-items { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
        .svc-items li { display: flex; align-items: center; gap: 12px; font-family: var(--font-body); font-size: 1rem; color: var(--svc-text); transition: color 0.6s ease; }
        .svc-item-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--svc-accent); flex-shrink: 0; }

        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--svc-accent);
          text-decoration: none;
          border-bottom: 1px solid var(--svc-accent);
          padding-bottom: 4px;
          transition: gap 0.25s ease, color 0.6s ease, border-color 0.6s ease;
        }
        .svc-cta:hover { gap: 14px; }

        .svc-mobile { display: none; }

        @media (max-width: 960px) {
          .svc-track { display: none; }
          .svc-mobile { display: block; padding: 40px 0 80px; }
          .svc-mobile-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .svc-mobile-slide {
            position: relative;
            flex: 0 0 100%;
            scroll-snap-align: start;
            padding: 48px 32px;
            min-height: 460px;
            display: flex;
            align-items: center;
          }
          .svc-mobile-dots { display: flex; justify-content: center; gap: 8px; margin-top: 24px; }
          .svc-mobile-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(1,88,173,0.25); transition: background 0.3s ease, transform 0.3s ease; }
          .svc-mobile-dot.is-active { background: #0158AD; transform: scale(1.4); }
        }

        @media (prefers-reduced-motion: reduce) {
          .svc-path, .svc-pulse-dot, .svc-node, .svc-ring, .svc-dot, .svc-panel,
          .svc-packet-1, .svc-packet-2, .svc-packet-3 { animation: none; }
          .svc-layout { transform: none; }
        }
      `}</style>
    </section>
  )
}
