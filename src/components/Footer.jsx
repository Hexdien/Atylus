export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-ink)', padding: '60px 40px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--color-paper)', marginBottom: '8px' }}>
              <span style={{ color: 'var(--color-accent)' }}>Atylus</span>
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 300, color: 'rgba(245,242,238,0.4)', maxWidth: '280px', lineHeight: 1.8 }}>
              Consultoria, sistemas e soluções digitais para negócios que querem crescer de verdade.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
            {[
              { title: 'Serviços', links: ['Consultoria Delivery', 'Desenvolvimento', 'Soluções Digitais'] },
              { title: 'Empresa', links: ['Sobre', 'Cases', 'Contato'] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '20px', fontWeight: 500 }}>
                  {col.title}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {col.links.map(l => (
                    <a key={l} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(245,242,238,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--color-paper)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(245,242,238,0.45)'}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(245,242,238,0.08)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(245,242,238,0.25)' }}>
            © {new Date().getFullYear()} Atylus. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(245,242,238,0.25)' }}>
            Desenvolvido com propósito.
          </p>
        </div>
      </div>
    </footer>
  )
}
