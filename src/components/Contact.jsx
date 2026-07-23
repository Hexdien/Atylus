import { useRef, useEffect, useState } from 'react'
import { Send, CheckCircle, Clock, Users, Target } from 'lucide-react'

const benefits = [
  { icon: Users, text: 'Atendimento direto com quem executa, sem intermediários.' },
  { icon: Target, text: 'Primeira análise do seu negócio sem compromisso.' },
  { icon: Clock, text: 'Plano de ação claro já na primeira conversa.' },
]

export default function Contact() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ nome: '', negocio: '', whatsapp: '', interesse: '', mensagem: '' })
  const contactPhone = '5521964699116'

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
    <section id="contato" style={{ padding: '100px 40px', background: 'var(--color-paper)' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>

        {/* Left — consulting introduction */}
        <div ref={ref} className="reveal">
          <p className="section-label" style={{ marginBottom: '20px' }}>Vamos conversar</p>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-ink)', marginBottom: '28px' }}>
            Não perca tempo,<br />
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>transforme seu negócio agora.</em>
          </h2>

          <blockquote className="contact-trust">
            "Você não vai falar com um robô nem abrir um chamado. Vai conversar com alguém da nossa equipe para entender o seu negócio e encontrar a melhor solução."
          </blockquote>

          <div className="contact-benefits">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={b.text} className="contact-benefit">
                  <span className="contact-benefit-num">0{i + 1}</span>
                  <Icon size={16} className="contact-benefit-icon" />
                  <span className="contact-benefit-text">{b.text}</span>
                </div>
              )
            })}
          </div>

          <div className="contact-response">
            <Clock size={15} />
            <span>Resposta em até <strong>2h</strong> em dias úteis</span>
          </div>

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

        {/* Right — form */}
        <div style={{ padding: '48px', background: '#f4ede2', borderRadius: '28px', boxShadow: '0 24px 48px rgba(15,14,13,0.08)' }}>
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

              <p className="contact-form-eyebrow">Sua primeira conversa começa aqui</p>

              <div className="form-field">
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '4px' }}>
                  Seu nome *
                </label>
                <input className="input-field" name="nome" value={form.nome} onChange={handleChange} placeholder="João Silva" required />
              </div>

              <div className="form-field">
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '4px' }}>
                  Nome do negócio
                </label>
                <input className="input-field" name="negocio" value={form.negocio} onChange={handleChange} placeholder="Ex: Burger do João" />
              </div>

              <div className="form-field">
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '4px' }}>
                  WhatsApp *
                </label>
                <input className="input-field" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(xx) 9xxxx-xxxx" required />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '12px' }}>
                  Interesse principal
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Consultoria Delivery', 'Sistemas', 'Site / Digital', 'Tudo!'].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, interesse: opt })}
                      className={`contact-chip ${form.interesse === opt ? 'is-active' : ''}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-field">
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
                {loading ? 'Enviando...' : <><span>Quero uma análise gratuita</span><Send size={15} /></>}
              </button>

            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-trust {
          margin: 0 0 32px;
          padding-left: 20px;
          border-left: 2px solid var(--color-accent);
          font-family: var(--font-body);
          font-style: italic;
          font-weight: 300;
          font-size: 1.02rem;
          line-height: 1.75;
          color: var(--color-ink);
        }

        .contact-benefits { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
        .contact-benefit { display: flex; align-items: center; gap: 12px; }
        .contact-benefit-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.85rem;
          color: rgba(1,88,173,0.4);
          width: 20px;
        }
        .contact-benefit-icon { color: var(--color-accent); flex-shrink: 0; }
        .contact-benefit-text { font-family: var(--font-body); font-size: 0.92rem; color: var(--color-ink); }

        .contact-response {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(1,88,173,0.08);
          color: var(--color-accent);
          font-family: var(--font-body);
          font-size: 0.85rem;
          margin-bottom: 36px;
        }
        .contact-response strong { font-weight: 700; }

        .contact-form-eyebrow {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 600;
          margin: -12px 0 -4px;
        }

        .form-field label { transition: color 0.25s ease; }
        .form-field:focus-within label { color: var(--color-accent); }
        .form-field .input-field { transition: transform 0.25s ease; }
        .form-field:focus-within .input-field { transform: translateY(-1px); }

        .contact-chip {
          padding: 9px 20px;
          border-radius: 999px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.03em;
          border: 1.5px solid rgba(1,88,173,0.22);
          background: transparent;
          color: var(--color-muted);
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .contact-chip:hover { border-color: var(--color-accent); color: var(--color-accent); }
        .contact-chip.is-active {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: #fff;
          transform: scale(1.03);
        }

        @media (max-width: 768px) {
          #contato > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
