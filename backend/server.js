import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Lead capture endpoint
app.post('/api/lead', async (req, res) => {
  const { nome, negocio, whatsapp, interesse, mensagem } = req.body

  if (!nome || !whatsapp) {
    return res.status(400).json({ error: 'Nome e WhatsApp são obrigatórios.' })
  }

  // Log lead (always)
  console.log('📩 Novo lead:', { nome, negocio, whatsapp, interesse, mensagem, timestamp: new Date().toISOString() })

  // Send email if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"NoxDigital Leads" <${process.env.SMTP_USER}>`,
        to: process.env.LEAD_EMAIL || process.env.SMTP_USER,
        subject: `🚀 Novo lead: ${nome} — ${interesse || 'Sem preferência'}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 32px;">
            <h2 style="color: #0f0e0d; margin-bottom: 24px;">Novo lead recebido</h2>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding:10px 0; border-bottom:1px solid #eee; color:#7a7068; width:140px;">Nome</td><td style="padding:10px 0; border-bottom:1px solid #eee;"><strong>${nome}</strong></td></tr>
              <tr><td style="padding:10px 0; border-bottom:1px solid #eee; color:#7a7068;">Negócio</td><td style="padding:10px 0; border-bottom:1px solid #eee;">${negocio || '—'}</td></tr>
              <tr><td style="padding:10px 0; border-bottom:1px solid #eee; color:#7a7068;">WhatsApp</td><td style="padding:10px 0; border-bottom:1px solid #eee;"><strong>${whatsapp}</strong></td></tr>
              <tr><td style="padding:10px 0; border-bottom:1px solid #eee; color:#7a7068;">Interesse</td><td style="padding:10px 0; border-bottom:1px solid #eee;">${interesse || '—'}</td></tr>
              <tr><td style="padding:10px 0; color:#7a7068; vertical-align:top;">Mensagem</td><td style="padding:10px 0;">${mensagem || '—'}</td></tr>
            </table>
            <p style="margin-top:32px; font-size:12px; color:#aaa;">NoxDigital · ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        `,
      })
      console.log('✅ Email enviado com sucesso')
    } catch (err) {
      console.error('❌ Erro ao enviar email:', err.message)
      // Don't fail the request — lead is already logged
    }
  }

  res.json({ success: true, message: 'Lead recebido com sucesso!' })
})

app.listen(PORT, () => {
  console.log(`🚀 NoxDigital API rodando na porta ${PORT}`)
})
