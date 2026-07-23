import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos M.',
    role: 'Original Burguer',
    text: 'Nunca gostei de trabalhar com delivery, mas a solução que me trouxeram ficou excelente e sem dor de cabeça.',
    result: '+180% em pedidos via iFood',
  },
  {
    name: 'Isabel C.',
    role: 'Lanches da Bel',
    text: 'Eu já estava desanimada com plataformas de delivery, mas o cardápio novo ficou incrível e as dicas sobre iFood e 99 foram certeiras.',
    result: '+90% no ticket médio',
  },
  {
    name: 'Fernanda R.',
    role: 'Gestora de clínica',
    text: 'Meu site ficou maravilhoso! Adorei o resultado e as explicações da equipe. Sucesso total!',
    result: '+65% em agendamentos pelo site',
  },
  {
    name: 'Paulo S.',
    role: 'Empreendedor digital',
    text: 'O sistema que desenvolveram resolveu perfeitamente a minha necessidade de centralizar informações e acessá-las de qualquer lugar. Valeu cada centavo.',
    result: '-40% de tempo perdido com planilhas',
  },
  {
    name: 'Isabela T.',
    role: 'Restaurante delivery',
    text: 'Profissionalismo total. Eles entendem o que o cliente precisa antes mesmo de você saber o que pedir.',
    result: '+120% em avaliações positivas',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  const goTo = i => setActive((i + testimonials.length) % testimonials.length)

  return (
    <section id="depoimentos" style={{ background: '#f8f9fb', padding: '72px 40px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label" style={{ marginBottom: '14px' }}>Quem já transformou</p>
        <h2 className="display-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', color: 'var(--color-ink)', marginBottom: '36px' }}>
          O que dizem<br />
          <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>nossos clientes.</em>
        </h2>

        <div key={current.name} className="test-panel">
          <p className="test-mark">"</p>
          <p className="test-quote">{current.text}</p>
          <p className="test-name">{current.name}</p>
          <p className="test-role">{current.role}</p>
          <span className="test-result">{current.result}</span>
        </div>

        <div className="test-progress">
          <button type="button" aria-label="Depoimento anterior" className="test-arrow" onClick={() => goTo(active - 1)}>
            <ChevronLeft size={16} />
          </button>

          <div className="test-dots">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Ver depoimento de ${t.name}`}
                className={`test-dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <button type="button" aria-label="Próximo depoimento" className="test-arrow" onClick={() => goTo(active + 1)}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .test-panel {
          max-width: 620px;
          margin: 0 auto;
          animation: testFadeIn 0.5s cubic-bezier(.16,1,.3,1) both;
        }
        @keyframes testFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .test-mark {
          font-family: var(--font-display);
          font-size: 2.4rem;
          color: var(--color-accent);
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 4px;
        }
        .test-quote {
          font-family: var(--font-body);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          color: var(--color-ink);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .test-name {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--color-ink);
          margin-bottom: 2px;
        }
        .test-role {
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: var(--color-muted);
          margin-bottom: 14px;
        }
        .test-result {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(1,88,173,0.08);
          color: var(--color-accent);
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .test-progress {
          margin-top: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .test-dots { display: flex; gap: 10px; }
        .test-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(1,88,173,0.25);
          cursor: pointer;
          padding: 0;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .test-dot:hover { background: rgba(1,88,173,0.5); }
        .test-dot.is-active { background: var(--color-accent); transform: scale(1.5); }

        .test-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(1,88,173,0.2);
          background: transparent;
          color: var(--color-accent);
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }
        .test-arrow:hover {
          background: rgba(1,88,173,0.08);
          border-color: rgba(1,88,173,0.4);
          transform: scale(1.06);
        }

        @media (prefers-reduced-motion: reduce) {
          .test-panel { animation: none; }
        }
      `}</style>
    </section>
  )
}
