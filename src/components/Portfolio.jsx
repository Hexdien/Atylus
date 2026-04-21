import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const cases = [
  {
    tag: 'Delivery · Consultoria',
    title: 'Hamburgueria aumenta faturamento em 3× em 60 dias',
    description: 'Reestruturação completa do cardápio digital, otimização de fotos e títulos no iFood, e implementação de promoções estratégicas que triplicaram as vendas.',
    metric: '+187%',
    metricLabel: 'em pedidos/mês',
    bg: 'var(--color-surface)',
  },
  {
    tag: 'Sistemas · Automação',
    title: 'Sistema de pedidos custom elimina retrabalho diário',
    description: 'Desenvolvimento de plataforma integrada que automatizou o controle de estoque, pedidos e relatórios — economizando 3h por dia da equipe.',
    metric: '3h/dia',
    metricLabel: 'economizadas',
    bg: 'var(--color-ink)',
    dark: true,
  },
  {
    tag: 'Digital · Site',
    title: 'Clínica odontológica conquista 40+ leads/mês via site',
    description: 'Criação de site profissional com SEO local, formulário de agendamento integrado e estratégia de Google Meu Negócio.',
    metric: '40+',
    metricLabel: 'leads/mês',
    bg: 'var(--color-surface)',
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
    <section id="portfolio" style={{ padding: '120px 40px', background: 'var(--color-paper)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '80px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>Resultados reais</p>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-ink)' }}>
            Cases que<br />
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>provam o método.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {cases.map((c, i) => (
            <div
              key={c.title}
              ref={el => refs.current[i] = el}
              className="reveal service-card"
              style={{
                background: c.bg,
                padding: '52px 48px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '40px',
                alignItems: 'start',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: c.dark ? 'var(--color-accent)' : 'var(--color-muted)',
                  marginBottom: '20px',
                  fontWeight: 500,
                }}>
                  {c.tag}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                  color: c.dark ? 'var(--color-paper)' : 'var(--color-ink)',
                  marginBottom: '16px',
                  lineHeight: 1.25,
                  maxWidth: '560px',
                }}>
                  {c.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: c.dark ? 'rgba(245,242,238,0.55)' : 'var(--color-muted)',
                  lineHeight: 1.8,
                  maxWidth: '500px',
                }}>
                  {c.description}
                </p>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                }}>
                  {c.metric}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: c.dark ? 'rgba(245,242,238,0.4)' : 'var(--color-muted)',
                  marginTop: '4px',
                }}>
                  {c.metricLabel}
                </p>
                <a
                  href="#contato"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '24px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: c.dark ? 'var(--color-accent)' : 'var(--color-ink)',
                    textDecoration: 'none',
                    opacity: 0.7,
                  }}
                >
                  Quero isso <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
