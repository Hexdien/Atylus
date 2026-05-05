import { useEffect, useRef, useState } from 'react'

const caseImageUrl = `${import.meta.env.BASE_URL}testemunho01.png`

const cases = [
  {
    tag: 'Delivery · Consultoria',
    title: 'Fevereiro para Março: O Início da Escala',
    description: 'Em apenas 30 dias de aplicação do método, o faturamento saltou de R$ 1.331,20 para R$ 4.773,46. Um crescimento explosivo de 258% no repasse líquido, provando que o ajuste estratégico inicial é a chave para sair da estagnação.',
    bg: 'var(--color-surface)',
    image: caseImageUrl,
  },
  {
    tag: 'Sistemas · Automação',
    title: 'Sistema de pedidos custom elimina retrabalho diário',
    description: 'Desenvolvimento de plataforma integrada que automatizou o controle de estoque, pedidos e relatórios — economizando 3h por dia da equipe.',
    bg: 'var(--color-ink)',
    dark: true,
    image: caseImageUrl,
  },
  {
    tag: 'Digital · Site',
    title: 'Clínica odontológica conquista 40+ leads/mês via site',
    description: 'Criação de site profissional com SEO local, formulário de agendamento integrado e estratégia de Google Meu Negócio.',
    bg: 'var(--color-surface)',
    image: caseImageUrl,
  },
]

export default function Portfolio() {
  const refs = useRef([])
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!activeImage) return undefined

    const onKeyDown = event => {
      if (event.key === 'Escape') setActiveImage(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImage])

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
              className="reveal service-card portfolio-card"
              style={{
                background: c.bg,
                padding: '52px 48px',
                borderRadius: '25px',
                display: 'grid',
                gridTemplateColumns: '1fr minmax(260px, 340px)',
                gap: '40px',
                alignItems: 'start',
                textAlign: 'center',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="portfolio-card-content">
                <span style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
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

              <div className="portfolio-card-media" style={{ flexShrink: 0 }}>
                <button
                  type="button"
                  onClick={() => setActiveImage(c.image)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: 0,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'zoom-in',
                  }}
                  aria-label={`Ampliar imagem do case ${c.title}`}
                >
                  <img
                    src={c.image}
                    alt={`Imagem do case ${c.title}`}
                    style={{
                      width: '100%',
                      height: '280px',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '24px',
                      boxShadow: c.dark
                        ? '0 24px 48px rgba(0,0,0,0.28)'
                        : '0 24px 48px rgba(15,14,13,0.08)',
                    }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <button
          type="button"
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 500,
            border: 'none',
            background: 'rgba(15,14,13,0.8)',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
          aria-label="Fechar visualização da imagem"
        >
          <img
            src={activeImage}
            alt="Imagem ampliada do case"
            onClick={event => event.stopPropagation()}
            style={{
              maxWidth: 'min(92vw, 960px)',
              maxHeight: '88vh',
              width: 'auto',
              height: 'auto',
              display: 'block',
              borderRadius: '24px',
              boxShadow: '0 28px 80px rgba(0,0,0,0.35)',
              cursor: 'default',
            }}
          />
        </button>
      )}

      <style>{`
        @media (max-width: 900px) {
          #portfolio {
            padding: 96px 24px !important;
          }

          #portfolio .portfolio-card {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 32px 24px !important;
            border-radius: 28px !important;
          }

          #portfolio .portfolio-card-content h3,
          #portfolio .portfolio-card-content p {
            max-width: none !important;
          }

          #portfolio .portfolio-card-media {
            width: 100%;
          }

          #portfolio .portfolio-card-media img {
            height: auto !important;
            max-height: 320px;
          }
        }

        @media (max-width: 560px) {
          #portfolio {
            padding: 80px 16px !important;
          }

          #portfolio .portfolio-card {
            padding: 24px 18px !important;
            gap: 22px !important;
            border-radius: 22px !important;
          }

          #portfolio .portfolio-card-content h3 {
            font-size: clamp(1.5rem, 7vw, 1.9rem) !important;
          }

          #portfolio .portfolio-card-content p {
            font-size: 0.92rem !important;
            line-height: 1.7 !important;
          }

          #portfolio .portfolio-card-media img {
            border-radius: 18px !important;
            max-height: 260px;
          }
        }
      `}</style>
    </section>
  )
}
