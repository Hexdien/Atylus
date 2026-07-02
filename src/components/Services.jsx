import { useEffect, useRef } from 'react'
import { ShoppingBag, Code2, Globe, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: ShoppingBag,
    category: 'Delivery',
    title: 'Mais Vendas no Delivery',
    description: 'Aumente o faturamento do seu delivery com estratégias comprovadas de conversão, ranqueamento e precificação inteligente — sem depender de sorte.',
    items: ['Mais pedidos no iFood e 99Food', 'Ticket médio maior', 'Cardápio que vende sozinho'],
  },
  {
    icon: Code2,
    category: 'Tecnologia',
    title: 'Mais Eficiência, Menos Retrabalho',
    description: 'Elimine tarefas manuais e ganhe horas de produtividade por semana com sistemas que trabalham por você — feitos sob medida para o seu processo.',
    items: ['Menos tempo em tarefas manuais', 'Decisões mais rápidas com dados em tempo real', 'Sistemas que crescem com o seu negócio'],
  },
  {
    icon: Globe,
    category: 'Digital',
    title: 'Crescimento Digital Real',
    description: 'Construa uma presença digital que gera resultado 24 horas por dia — mais visibilidade, mais confiança e mais clientes encontrando você primeiro.',
    items: ['Mais visibilidade online', 'Mais confiança na primeira impressão', 'Presença digital que trabalha por você'],
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
    <section id="servicos" style={{ padding: '80px 40px', background: '#f4ede2' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: 24 }}>
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

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                ref={el => refs.current[i] = el}
                className="reveal svc-card"
                style={{
                  background: i === 1 ? '#4a2f22' : '#faf6f0',
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
                    background: i === 1 ? 'rgba(95,168,240,0.15)' : 'rgba(1,88,173,0.1)',
                    borderRadius: '50px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={i === 1 ? '#5fa8f0' : '#0158AD'} strokeWidth={1.5} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: i === 1 ? 'rgba(250,246,240,0.45)' : '#7a7068',
                    fontWeight: 500,
                  }}>
                    {s.category}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.55rem',
                  color: i === 1 ? '#faf6f0' : '#0f0e0d',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: i === 1 ? 'rgba(250,246,240,0.7)' : '#7a7068',
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
                        background: i === 1 ? '#5fa8f0' : '#0158AD',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        color: i === 1 ? 'rgba(250,246,240,0.85)' : 'rgba(15,14,13,0.78)',
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
                    color: i === 1 ? '#5fa8f0' : '#0158AD',
                    textDecoration: 'none',
                    borderBottom: `1px solid ${i === 1 ? 'rgba(95,168,240,0.4)' : 'rgba(1,88,173,0.35)'}`,
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

      <style>{`
        #servicos .svc-card {
          transform: perspective(800px) rotateX(0deg) rotateY(0deg) scale(1);
          box-shadow: 0 20px 40px rgba(15,14,13,0.08);
          border: 1px solid rgba(1,88,173,0.12);
          transition: transform 0.4s cubic-bezier(.16,1,.3,1), box-shadow 0.4s cubic-bezier(.16,1,.3,1), border-color 0.4s ease;
        }
        #servicos .svc-card:hover {
          transform: perspective(800px) rotateX(2deg) rotateY(-2deg) scale(1.03);
          box-shadow: 0 30px 60px rgba(1,88,173,0.22), 0 0 0 1px rgba(1,88,173,0.25);
          border-color: rgba(1,88,173,0.35);
        }
      `}</style>
    </section>
  )
}
