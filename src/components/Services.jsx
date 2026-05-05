import { useEffect, useRef } from 'react'
import { ShoppingBag, Code2, Globe, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: ShoppingBag,
    category: 'Delivery',
    title: 'Consultoria para Delivery',
    description: 'Transformamos a operação do seu restaurante ou loja delivery. Cardápios digitais que vendem, estratégias para o iFood e 99Food, e táticas de conversão que aumentam seu ticket médio.',
    items: ['Cardápios digitais otimizados', 'Ranqueamento no iFood / 99Food', 'Estratégias de vendas e precificação'],
    accent: '#c8a96e',
  },
  {
    icon: Code2,
    category: 'Tecnologia',
    title: 'Desenvolvimento de Sistemas',
    description: 'Sistemas feitos sob medida para o seu negócio, não o contrário. Automação de processos repetitivos, integrações entre plataformas e dashboards que mostram o que realmente importa.',
    items: ['Sistemas personalizados', 'Automação de processos', 'Integrações e APIs'],
    accent: '#0f0e0d',
  },
  {
    icon: Globe,
    category: 'Digital',
    title: 'Soluções Digitais',
    description: 'Organizamos a presença digital do seu negócio do zero ao avançado — sites profissionais, integração de ferramentas e uma estrutura digital que trabalha enquanto você dorme.',
    items: ['Criação de sites profissionais', 'Integração de ferramentas', 'Organização e estrutura digital'],
    accent: '#8b6914',
  },
]

export default function Services() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" style={{ padding: '120px 40px', background: 'var(--color-paper)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p className="section-label" style={{ marginBottom: '16px' }}>O que fazemos</p>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-ink)' }}>
              Três frentes,<br />
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>uma visão.</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-muted)', maxWidth: '320px', lineHeight: 1.8 }}>
            Cada serviço desenhado para atacar um ponto crítico do seu negócio digital.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                ref={el => refs.current[i] = el}
                className="reveal service-card"
                style={{
                  background: i === 1 ? 'var(--color-ink-card-service)' : 'var(--color-surface)',
                  borderRadius: '50px',
                  padding: '44px 40px',
                  transitionDelay: `${i * 0.1}s`,
                  cursor: 'default',
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                  <div style={{
                    width: 48, height: 48,
                    background: i === 1 ? 'rgba(200,200,200,0.5)' : 'rgba(15,14,13,0.07)',
                    borderRadius: '50px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={i === 1 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,1)'} strokeWidth={1.5} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: i === 1 ? 'rgba(245,242,238,0.4)' : 'var(--color-muted)',
                    fontWeight: 500,
                  }}>
                    {s.category}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.55rem',
                  color: i === 1 ? 'var(--color-paper)' : 'var(--color-ink)',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: i === 1 ? 'rgba(245,242,238,0.6)' : 'var(--color-muted)',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                }}>
                  {s.description}
                </p>

                {/* List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                  {s.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: i === 1 ? 'var(--color-accent)' : 'var(--color-accent)',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        color: i === 1 ? 'rgba(245,242,238,0.75)' : 'var(--color-ink)',
                      }}>
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
                    color: i === 1 ? 'var(--color-accent)' : 'var(--color-ink)',
                    textDecoration: 'none',
                    borderBottom: `1px solid ${i === 1 ? 'rgba(200,169,110,0.4)' : 'rgba(15,14,13,0.2)'}`,
                    paddingBottom: '4px',
                    transition: 'gap 0.25s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                >
                  Saiba mais <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
