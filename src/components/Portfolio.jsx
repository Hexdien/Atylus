import { useEffect, useRef, useState } from 'react'
const portfolioFotos = [
  `${import.meta.env.BASE_URL}fevereiro-marco.png`,
  `${import.meta.env.BASE_URL}marco-abril.png`,
  `${import.meta.env.BASE_URL}resultado.png`,
  `${import.meta.env.BASE_URL}erro_de_digitação.png`,
  `${import.meta.env.BASE_URL}procura_de_informações.png`,
  `${import.meta.env.BASE_URL}menos_falhas.png`,
  `${import.meta.env.BASE_URL}métricas.png`,
  `${import.meta.env.BASE_URL}consultoria.png`,
  `${import.meta.env.BASE_URL}automação.png`,
  `${import.meta.env.BASE_URL}presença_digital.png`,
  `${import.meta.env.BASE_URL}captação de leads.png`,
  `${import.meta.env.BASE_URL}autoridade.png`,
  `${import.meta.env.BASE_URL}Formulario.png`,
  `${import.meta.env.BASE_URL}visibilidade.png`,
  `${import.meta.env.BASE_URL}placeholder.png`,
  
]


const portfolios = [
  {
    tag: 'Delivery · Consultoria',
    title: 'Consultoria para Delivery',
    description: 'Exemplos de frentes estratégicas aplicadas para organizar operação, melhorar margem e acelerar crescimento no delivery.',
    bg: 'var(--color-surface)',
    image: portfolioFotos[7],
    items: [
      {
        title: 'Fevereiro para Março: O Início da Escala',
        description: 'Em apenas 30 dias de aplicação do método, o faturamento saltou de R$ 1.331,20 para R$ 4.773,46. Um crescimento de 258% no repasse líquido, mostrando o impacto do ajuste estratégico inicial.',
        image: portfolioFotos[0],
      },
      {
        title: 'Março para Abril: Consolidando o Sucesso',
        description: 'A escalada não parou. No segundo mês, quase dobramos o resultado anterior, atingindo R$ 8.969,75. Um aumento de R$ 4.196,29 (+87%) em relação ao mês de março, mostrando que o método é sustentável e escalável.',
        image: portfolioFotos[1],
      },
      {
        title: 'O Resultado Final (Comparativo Geral)',
        description: 'Fevereiro vs. Abril: A Transformação Completa \n Destaque: "De R$ 1,3 mil para quase R$ 9 mil em apenas 60 dias. \n O comparativo entre o primeiro e o terceiro mês revela o verdadeiro poder da metodologia: um salto de 573% no faturamento. Saímos de um resultado tímido em fevereiro para um negócio de alta performance em abril, com um aumento real de R$ 7.638,55 no bolso do cliente.',
        image: portfolioFotos[2],
      },
    ],
  },
  {
    tag: 'Sistemas · Automação',
    title: 'Maior eficiência para seu fluxo',
    description: 'Sistemas escaláveis, arquitetura limpa, compacto, personalizado. Tudo que você precisa para seu fluxo de trabalho.',
    bg: 'var(--color-ink)',
    dark: true,
    image: portfolioFotos[8],
    items: [
      {
        title: 'Erros manuais',
        description: 'Quando o preenchimento de dados depende de processos manuais, pequenos erros de digitação e falhas operacionais podem gerar inconsistências, retrabalho e até perda de informações importantes. Com uma estrutura mais automatizada, você reduz esses riscos e ganha mais segurança, precisão e confiabilidade na operação.',
        image: portfolioFotos[3],
      },
      {
        title: 'Problema de inconsistências',
        description: 'Falhas na comunicação entre setores geravam atrasos e retrabalho na operação. Com processos automatizados, você reduz inconsistências, ganha agilidade e evita correções desnecessárias no dia a dia.',
        image: portfolioFotos[4],
      },
      {
        title: 'Menos falhas operacionais',
        description: 'Com processos mais claros e bem estruturados, sua equipe ganha mais organização no dia a dia, reduzindo erros operacionais e trazendo mais consistência, controle e eficiência para a rotina da operação.',
        image: portfolioFotos[5],
      },
      {
        title: 'Previsibilidade com métricas',
        description: 'Você acompanha indicadores claros e relevantes para entender o que realmente está funcionando no seu negócio, transformando dados em insights estratégicos que trazem mais segurança, previsibilidade e confiança para cada decisão.',
        image: portfolioFotos[6],
      },
    ],
  },
  {
    tag: 'Digital · Site',
    title: 'Sites e Presença Digital',
    description: 'Serviços voltados para construir presença digital profissional, capturar leads e converter visitas em contato.',
    bg: 'var(--color-surface)',
    image: portfolioFotos[9],
    items: [
      {
        title: 'Landing pages para captação',

        description: 'Desenvolvimento de páginas estratégicas com foco em conversão, estruturadas para apresentar ofertas de forma clara, fortalecer a percepção de valor da marca e transformar visitantes em oportunidades reais de negócio.',
        image: portfolioFotos[10],
      },
      {
        title: 'Sites institucionais com foco comercial',
        description: 'Estruturas digitais desenvolvidas para transmitir credibilidade, fortalecer o posicionamento da marca e apresentar serviços de forma estratégica, alinhando comunicação, autoridade e geração de oportunidades comerciais.',
        image: portfolioFotos[11],
      },
      {
        title: 'Contato simplificado com integrações',
        description: 'Integração estratégica de formulários, WhatsApp e canais de atendimento para tornar o contato mais ágil, organizado e eficiente, reduzindo barreiras na comunicação e facilitando a conversão de oportunidades em clientes.',
        image: portfolioFotos[12],
      },
      {
        title: 'Base de SEO local',
        description: 'Estruturação técnica e otimização de conteúdo voltadas para ampliar a presença digital da empresa nas buscas regionais, fortalecendo a visibilidade da marca e aumentando o potencial de geração de oportunidades locais.',
        image: portfolioFotos[13],

      },
    ],
  },
]

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState(null)
  const refs = useRef([])
  const [activeImage, setActiveImage] = useState(null)
  const [zoomed, setZoomed] = useState(false)

  const toggle = index => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setZoomed(false)
    if (!activeImage) return undefined

    window.history.pushState({ portfolioModal: true }, '')

    const onKeyDown = event => {
      if (event.key === 'Escape') setActiveImage(null)
    }

    const onPopState = () => {
      setActiveImage(null)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('popstate', onPopState)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('popstate', onPopState)
      if (window.history.state?.portfolioModal) {
        window.history.back()
      }
    }
  }, [activeImage])

  return (
    <section id="portfolio" style={{ padding: '120px 40px', background: 'var(--color-paper)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <p className="section-label" style={{ marginBottom: '16px', fontSize: '1rem' }}>Resultados reais</p>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-ink)' }}>
            Cases que<br />
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>provam o método.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', whiteSpace: 'pre-line' }}>
          {portfolios.map((c, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={c.title}
                ref={el => refs.current[i] = el}
                className="reveal service-card portfolio-card"
                style={{
                  background: c.bg,
                  padding: '52px 48px',
                  borderRadius: '25px',
                  display: 'flex',
                  flexDirection: 'column',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* TOPO */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '40px',
                  }}
                >
                  {/* ESQUERDA */}
                  <div className="portfolio-card-content">
                    <span style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.90rem',
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
                      fontSize: 'clamp(1.50rem, 2.5vw, 1.8rem)',
                      color: c.dark ? 'var(--color-paper)' : 'var(--color-accent)',
                      marginBottom: '16px',
                      lineHeight: 1.25,
                    }}>
                      {c.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: c.dark ? 'rgba(245,242,238,0.55)' : 'var(--color-muted)',
                      lineHeight: 1.8,
                      marginBottom: '22px',
                    }}>
                      {c.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`portfolio-dropdown-${i}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        width: '100%',
                        padding: '16px 18px',
                        borderRadius: '18px',
                        border: c.dark ? '1px solid rgba(245,242,238,0.14)' : '1px solid rgba(15,14,13,0.08)',
                        background: c.dark ? 'rgba(245,242,238,0.06)' : 'rgba(255,255,255,0.72)',
                        color: c.dark ? 'var(--color-paper)' : 'var(--color-ink)',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        fontWeight: 500,
                      }}>
                        {isOpen ? 'Ocultar exemplos' : 'Ver exemplos'}
                      </span>
                      <span
                        aria-hidden="true"
                        style={{
                          fontSize: '1.2rem',
                          lineHeight: 1,
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        +
                      </span>
                    </button>
                  </div>

                  {/* DIREITA */}
                  {c.image && (
                    <button
                      type="button"
                      onClick={() => setActiveImage(c.image)}
                      style={{
                        display: 'block',
                        width: '420px',
                        flexShrink: 0,
                        padding: 0,
                        border: 'none',
                        background: 'transparent',
                        cursor: 'zoom-in',
                      }}
                      aria-label={`Ampliar imagem de ${c.title}`}
                    >
                      <img
                        src={c.image}
                        alt={`Exemplo de ${c.title}`}
                        style={{
                          width: '100%',
                          height: '220px',
                          minHeight: '220px',
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: '18px',
                          boxShadow: c.dark
                            ? '0 18px 36px rgba(0,0,0,0.24)'
                            : '0 18px 36px rgba(15,14,13,0.08)',
                        }}
                      />
                    </button>
                  )}
                </div>

                {/* DROPDOWN — largura total do card */}
                {isOpen && (
                  <div
                    id={`portfolio-dropdown-${i}`}
                    style={{
                      width: '100%',
                      marginTop: '14px',
                      padding: '18px 0 0',
                      display: 'grid',
                      gap: '16px',
                    }}
                  >
                    {c.items.map(item => (
                      <div
                        key={item.title}
                        className="portfolio-item-card"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'minmax(0, 1fr) minmax(220px, 300px)',
                          gap: '20px',
                          alignItems: 'center',
                          padding: '18px',
                          borderRadius: '20px',
                          background: c.dark ? 'rgba(245,242,238,0.04)' : 'rgba(255,255,255,0.92)',
                          border: c.dark ? '1px solid rgba(245,242,238,0.08)' : '1px solid rgba(15,14,13,0.06)',
                        }}
                      >
                        <div style={{ textAlign: 'left' }}>
                          <h4
                            style={{
                              margin: '0 0 10px',
                              fontFamily: 'var(--font-display)',
                              fontSize: '1.05rem',
                              lineHeight: 1.35,
                              color: c.dark ? 'var(--color-paper)' : 'var(--color-ink)',
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              margin: 0,
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.92rem',
                              lineHeight: 1.7,
                              color: c.dark ? 'rgba(245,242,238,0.82)' : 'var(--color-muted)',
                            }}
                          >
                            {item.description}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveImage(item.image)}
                          style={{
                            display: 'block',
                            width: '100%',
                            padding: 0,
                            border: 'none',
                            background: 'transparent',
                            cursor: 'zoom-in',
                          }}
                          aria-label={`Ampliar imagem do item ${item.title}`}
                        >
                          <img
                            src={item.image}
                            alt={`Imagem do item ${item.title}`}
                            className="portfolio-item-image"
                            style={{
                              width: '100%',
                              height: '180px',
                              objectFit: 'cover',
                              display: 'block',
                              borderRadius: '18px',
                              boxShadow: c.dark
                                ? '0 18px 36px rgba(0,0,0,0.24)'
                                : '0 18px 36px rgba(15,14,13,0.08)',
                            }}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>


      {activeImage && (
        <button
          type="button"
          onClick={() => { setActiveImage(null); setZoomed(false) }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 500,
            border: 'none',
            background: 'rgba(15,14,13,0.8)',
            padding: '32px',
            display: 'flex',
            alignItems: zoomed ? 'flex-start' : 'center',
            justifyContent: 'center',
            cursor: zoomed ? 'default' : 'zoom-out',
            overflow: zoomed ? 'auto' : 'hidden',
          }}
          aria-label="Fechar visualização da imagem"
        >
          <img
            src={activeImage}
            alt="Imagem ampliada do case"
            onClick={event => { event.stopPropagation(); setZoomed(z => !z) }}
            style={{
              display: 'block',
              boxShadow: '0 28px 80px rgba(0,0,0,0.35)',
              transition: 'width 0.3s ease, border-radius 0.2s ease',
              ...(zoomed
                ? {
                    width: 'clamp(600px, 160vw, 2400px)',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    height: 'auto',
                    borderRadius: '12px',
                    cursor: 'zoom-out',
                  }
                : {
                    maxWidth: 'min(92vw, 960px)',
                    maxHeight: '88vh',
                    width: 'auto',
                    height: 'auto',
                    borderRadius: '24px',
                    cursor: 'zoom-in',
                  }
              ),
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
            padding: 32px 24px !important;
            border-radius: 28px !important;
          }

          #portfolio .portfolio-card-content h3,
          #portfolio .portfolio-card-content p {
            max-width: none !important;
          }

          #portfolio .portfolio-item-card {
            grid-template-columns: 1fr !important;
          }

          #portfolio .portfolio-item-image {
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

          #portfolio .portfolio-item-image {
            border-radius: 18px !important;
            max-height: 260px;
          }
        }
      `}</style>
    </section>
  )
}
