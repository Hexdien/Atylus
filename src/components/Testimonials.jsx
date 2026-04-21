const testimonials = [
  { name: 'Carlos M.', role: 'Dono de hamburgueria', text: 'Em 2 meses meu faturamento triplicou. O cardápio novo ficou incrível e as dicas de iFood foram certeiras.' },
  { name: 'Fernanda R.', role: 'Gestora de clínica', text: 'O site que criaram pra mim trouxe mais leads em um mês do que em 1 ano de indicação.' },
  { name: 'Paulo S.', role: 'Empreendedor digital', text: 'O sistema que desenvolveram eliminou 3 horas de trabalho manual por dia. Valeu cada centavo.' },
  { name: 'Isabela T.', role: 'Restaurante delivery', text: 'Profissionalismo total. Eles entendem o que o cliente precisa antes mesmo de você saber o que pedir.' },
]

const marqueeItems = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-surface)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', marginBottom: '56px' }}>
        <p className="section-label" style={{ marginBottom: '16px' }}>Quem já transformou</p>
        <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--color-ink)' }}>
          O que dizem<br />
          <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>nossos clientes.</em>
        </h2>
      </div>

      {/* Marquee */}
      <div style={{ display: 'flex', gap: '24px', overflow: 'hidden', width: '100%' }}>
        <div
          className="animate-marquee"
          style={{ display: 'flex', gap: '24px', flexShrink: 0, minWidth: 'max-content' }}
        >
          {marqueeItems.map((t, i) => (
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
