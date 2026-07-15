import { useState } from 'react';

const testimonials = [
  { name: 'Carlos M.', role: 'Original Burguer', text: 'Nunca gostei de trabalhar com delivery, mas a solução que me trouxeram ficou excelente e sem dor de cabeça.' },
  { name: 'Isabel C.', role: 'Lanches da Bel', text: 'Eu já estava desanimada com plataformas de delivery, mas o cardápio novo ficou incrível e as dicas sobre iFood e 99 foram certeiras.' },
  { name: 'Fernanda R.', role: 'Gestora de clínica', text: 'Meu site ficou maravilhoso! Adorei o resultado e as explicações da equipe. Sucesso total!' },
  { name: 'Paulo S.', role: 'Empreendedor digital', text: 'O sistema que desenvolveram resolveu perfeitamente a minha necessidade de centralizar informações e acessá-las de qualquer lugar. Valeu cada centavo.' },
  { name: 'Isabela T.', role: 'Restaurante delivery', text: 'Profissionalismo total. Eles entendem o que o cliente precisa antes mesmo de você saber o que pedir.' },
]


const marqueeItems = [...testimonials, ...testimonials]

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  return (
    <section style={{ padding: '50px 0', background: '#3a2015', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', marginBottom: '56px' }}>
        <p className="section-label" style={{ marginBottom: '16px', color: '#5fa8f0' }}>Quem já transformou</p>
        <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#faf6f0' }}>
          O que dizem<br />
          <em style={{ color: '#5fa8f0', fontStyle: 'italic' }}>nossos clientes.</em>
        </h2>
      </div>

      {/* Marquee */}
      <div
        style={{ display: 'flex', gap: '24px', overflow: 'hidden', width: '100%', cursor: 'pointer' }}
        onClick={() => setPaused(p => !p)}
      >
        <div
          className="animate-marquee"
          style={{
            display: 'flex',
            gap: '24px',
            flexShrink: 0,
            minWidth: 'max-content',
            animationPlayState: paused ? 'paused' : 'running', 
          }}
        >
          {/* Duplicar os itens para loop infinito */}
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-paper)',
                padding: '36px 40px',
                width: '360px',
                flexShrink: 0,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.5rem',
                color: 'var(--color-accent)',
                opacity: 0.25,
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                "
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'var(--color-ink)',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}>
                {t.text}
              </p>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.88rem', color: 'var(--color-ink)' }}>
                  {t.name}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '2px' }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
