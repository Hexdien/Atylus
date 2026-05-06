import { useRef, useEffect, useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ nome: '', negocio: '', whatsapp: '', interesse: '', mensagem: '' })
  const contactPhone = '5521999999999'

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const lines = [
        'Olá! Vim pela landing page e gostaria de saber mais.',
        `Nome: ${form.nome}`,
        form.negocio ? `Negócio: ${form.negocio}` : null,
        `WhatsApp: ${form.whatsapp}`,
        form.interesse ? `Interesse: ${form.interesse}` : null,
        form.mensagem ? `Mensagem: ${form.mensagem}` : null,
      ].filter(Boolean)

      const message = encodeURIComponent(lines.join('\n'))
      window.open(`https://wa.me/${contactPhone}?text=${message}`, '_blank', 'noopener,noreferrer')
      setSent(true)
    } catch (err) {
      setError(err.message || 'Não foi possível abrir o WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" style={{ padding: '80px 40px', background: 'var(--color-paper)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* Left info */}
        <div ref={ref} className="reveal">
          <p className="section-label" style={{ marginBottom: '20px' }}>Vamos conversar</p>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-ink)', marginBottom: '28px' }}>
            Pronto para<br />
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>crescer?</em>
          </h2>

          {[
            { label: 'WhatsApp', value: '(21) 96469-9116' },
            { label: 'Email', value: 'contato@atylus.com.br' },
            { label: 'Atendimento', value: 'Seg–Sex, 9h às 18h' },
          ].map(item => (
            <div key={item.label} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(15,14,13,0.08)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '4px' }}>
                {item.label}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-ink)' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Form box */}
        <div style={{ padding: '48px', background: 'var(--color-surface)' }}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center', gap: 20 }}>
              <CheckCircle size={48} color="var(--color-accent)" strokeWidth={1.5} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ink)' }}>
                Mensagem enviada!
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                Sua mensagem foi preparada. Conclua o envio na janela do WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '4px' }}>
                  Seu nome *
                </label>
                <input className="input-field" name="nome" value={form.nome} onChange={handleChange} placeholder="João Silva" required />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '4px' }}>
                  Nome do negócio
                </label>
                <input className="input-field" name="negocio" value={form.negocio} onChange={handleChange} placeholder="Ex: Burger do João" />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '4px' }}>
                  WhatsApp *
                </label>
                <input className="input-field" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(xx) 9xxxx-xxxx" required />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '12px' }}>
                  Interesse principal
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Consultoria Delivery', 'Sistemas', 'Site / Digital', 'Tudo!'].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, interesse: opt })}
                      style={{
                        padding: '8px 18px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        letterSpacing: '0.05em',
                        border: '1.5px solid',
                        borderColor: form.interesse === opt ? 'var(--color-ink)' : 'rgba(15,14,13,0.2)',
                        background: form.interesse === opt ? 'var(--color-ink)' : 'transparent',
                        color: form.interesse === opt ? 'var(--color-paper)' : 'var(--color-muted)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '4px' }}>
                  Conta mais (opcional)
                </label>
                <textarea
                  className="input-field"
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Qual o maior desafio do seu negócio hoje?"
                  rows={3}
                  style={{ resize: 'none' }}
                />
              </div>

              {error && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#c0392b' }}>{error}</p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
                style={{ alignSelf: 'flex-start', marginTop: '8px', opacity: loading ? 0.65 : 1 }}
              >
                {loading ? 'Enviando...' : <><span>Enviar mensagem</span><Send size={15} /></>}
              </button>

            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contato > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
