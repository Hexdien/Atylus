import { useEffect, useRef } from 'react'

const steps = [
  { num: '01', title: 'Diagnóstico', description: 'Entendemos profundamente o seu negócio, os gargalos atuais e onde está o maior potencial de crescimento.' },
  { num: '02', title: 'Estratégia', description: 'Montamos um plano personalizado com as ações de maior impacto, priorizadas por retorno e viabilidade.' },
  { num: '03', title: 'Execução', description: 'Implementamos junto com você, seja configurando plataformas, desenvolvendo sistemas ou treinando sua equipe.' },
  { num: '04', title: 'Resultados', description: 'Monitoramos métricas, ajustamos o que for necessário e garantimos que você veja resultado real.' },
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
    <section id="processo" style={{ padding: '80px 40px', background: 'var(--color-ink)', borderRadius: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '16px' }}>
              Como funciona
            </p>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-paper)' }}>
              Do problema<br />
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>ao resultado.</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'rgba(245,242,238,0.5)', maxWidth: '320px', lineHeight: 1.8 }}>
            Um processo claro e direto. Sem enrolação, sem jargão — só o que importa para o seu negócio crescer.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={el => itemRefs.current[i] = el}
              className="reveal"
              style={{
                padding: '48px 36px',
                background: 'rgba(245,242,238,0.03)',
                borderTop: '1px solid rgba(245,242,238,0.08)',
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '3.5rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1, marginBottom: '24px' }}>
                {step.num}
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--color-paper)', marginBottom: '14px' }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', fontWeight: 300, color: 'rgba(245,242,238,0.55)', lineHeight: 1.8 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
