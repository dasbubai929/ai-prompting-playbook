import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function makeRef() {
  return 'PP-' + Math.random().toString(36).slice(2, 8).toUpperCase()
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('form') // form | loading | success | error
  const [retryCount, setRetryCount] = useState(0)
  const [forceFail, setForceFail] = useState(false)
  const [refId, setRefId] = useState('')
  const [banner, setBanner] = useState('')

  const validate = useCallback(() => {
    const e = {}
    if (form.name.trim().length < 2) e.name = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = true
    if (!form.topic) e.topic = true
    if (form.message.trim().length < 20) e.message = true
    setErrors(e)
    return Object.keys(e).length === 0
  }, [form])

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    if (!validate()) {
      setBanner('Fix the highlighted fields, then send again.')
      return
    }
    setBanner('')
    setStatus('loading')

    await new Promise(r => setTimeout(r, 900))

    if (forceFail) {
      setForceFail(false)
      const newCount = retryCount + 1
      setRetryCount(newCount)
      if (newCount >= 3) {
        setRefId(makeRef())
        setStatus('error')
        return
      }
      setBanner(`Network unreachable — check your connection. Attempt ${newCount} of 3. Your message was not cleared.`)
      setStatus('form')
      return
    }

    setRetryCount(0)
    setRefId(makeRef())
    setStatus('success')
  }, [form, validate, forceFail, retryCount])

  const resetForm = () => {
    setForm({ name: '', email: '', topic: '', company: '', message: '' })
    setErrors({})
    setBanner('')
    setStatus('form')
    setRetryCount(0)
  }

  if (status === 'success') {
    return (
      <>
        <Nav />
        <main>
          <section className="section">
            <div className="container">
              <div className="state-panel" style={{
                background: 'var(--surface)', boxShadow: 'var(--elev-raised)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-xl)', textAlign: 'center',
                maxWidth: 560, margin: '0 auto',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', display: 'grid',
                  placeItems: 'center', margin: '0 auto var(--gap-md)',
                  fontSize: 20, background: 'rgba(22, 163, 74, 0.15)',
                  color: '#4ade80', boxShadow: '0 0 0 1px rgba(22, 163, 74, 0.3)',
                }} aria-hidden="true">✓</div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600,
                  letterSpacing: '-0.02em', margin: '0 0 8px',
                }}>Message received</h2>
                <p style={{ color: 'var(--fg-2)', margin: '0 auto var(--gap-lg)', maxWidth: '42ch', lineHeight: 1.6 }}>
                  Thanks, {form.name} — we will reply to {form.email} within one business day.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--gap-sm)' }}>
                  <button onClick={resetForm} className="btn btn-primary">Send another</button>
                  <Link to="/" className="btn btn-secondary">Back to home</Link>
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', marginTop: 'var(--gap-md)' }}>
                  Reference: {refId}
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  if (status === 'error') {
    return (
      <>
        <Nav />
        <main>
          <section className="section">
            <div className="container">
              <div className="state-panel" style={{
                background: 'var(--surface)', boxShadow: 'var(--elev-raised)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-xl)', textAlign: 'center',
                maxWidth: 560, margin: '0 auto',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', display: 'grid',
                  placeItems: 'center', margin: '0 auto var(--gap-md)',
                  fontSize: 20, background: 'rgba(220, 38, 38, 0.12)',
                  color: '#f87171', boxShadow: '0 0 0 1px rgba(220, 38, 38, 0.3)',
                }} aria-hidden="true">!</div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600,
                  letterSpacing: '-0.02em', margin: '0 0 8px',
                }}>Could not send your message</h2>
                <p style={{ color: 'var(--fg-2)', margin: '0 auto var(--gap-lg)', maxWidth: '42ch', lineHeight: 1.6 }}>
                  The request failed after several attempts. Your draft is preserved — edit and try again, or contact support with the reference id.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--gap-sm)' }}>
                  <button className="btn btn-primary" onClick={() => { setStatus('form'); setRetryCount(0) }}>Try again</button>
                  <button className="btn btn-secondary" onClick={() => setStatus('form')}>Edit message</button>
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', marginTop: 'var(--gap-md)' }}>
                  Error ID: {refId}
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main id="content">
        <section className="section">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              margin: '0 0 var(--gap-sm)', fontWeight: 600,
            }}>Request a prompt or get support</h1>
            <p className="lead" style={{ fontSize: 16, color: 'var(--fg-2)', maxWidth: '48ch', margin: '0 0 var(--gap-xl)', lineHeight: 1.65 }}>
              Tell us the niche, the workflow, and what "done" looks like. We reply within one business day for enterprise requests.
            </p>

            <div className="contact-layout" style={{
              display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--gap-xl)', alignItems: 'start',
            }}>
              <div>
                <div className="form-panel" style={{
                  background: 'var(--surface)', boxShadow: 'var(--elev-raised)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                }}>
                  {banner && (
                    <div style={{
                      borderRadius: 'var(--radius)', padding: '12px 14px', fontSize: 13,
                      marginBottom: 'var(--gap-md)', lineHeight: 1.5,
                      background: 'rgba(220, 38, 38, 0.12)',
                      border: '1px solid rgba(220, 38, 38, 0.35)', color: '#fca5a5',
                    }}>{banner}</div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-md)',
                    }}>
                      <div className="field" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>Name <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 12 }}>required</span></label>
                        <input value={form.name} onChange={e => handleChange('name', e.target.value)} style={{
                          width: '100%', background: 'var(--bg)', border: errors.name ? '1px solid var(--danger)' : '1px solid var(--border)',
                          color: 'var(--fg)', padding: '10px 12px', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none',
                        }} />
                        {errors.name && <p style={{ fontSize: 12, color: '#f87171', margin: 0 }}>Enter your name.</p>}
                      </div>
                      <div className="field" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>Work email <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 12 }}>required</span></label>
                        <input type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} placeholder="name@company.com" style={{
                          width: '100%', background: 'var(--bg)', border: errors.email ? '1px solid var(--danger)' : '1px solid var(--border)',
                          color: 'var(--fg)', padding: '10px 12px', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none',
                        }} />
                        {errors.email && <p style={{ fontSize: 12, color: '#f87171', margin: 0 }}>Enter a valid work email.</p>}
                      </div>
                      <div className="field" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>Topic <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 12 }}>required</span></label>
                        <select value={form.topic} onChange={e => handleChange('topic', e.target.value)} style={{
                          width: '100%', background: 'var(--bg)', border: errors.topic ? '1px solid var(--danger)' : '1px solid var(--border)',
                          color: 'var(--fg)', padding: '10px 12px', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none',
                        }}>
                          <option value="">Select a topic</option>
                          <option value="prompt-request">Request a new prompt</option>
                          <option value="enterprise">Enterprise / team license</option>
                          <option value="bug">Report a library issue</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.topic && <p style={{ fontSize: 12, color: '#f87171', margin: 0 }}>Choose a topic.</p>}
                      </div>
                      <div className="field" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>Company <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 12 }}>optional</span></label>
                        <input value={form.company} onChange={e => handleChange('company', e.target.value)} style={{
                          width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                          color: 'var(--fg)', padding: '10px 12px', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none',
                        }} />
                      </div>
                      <div className="field" style={{ display: 'flex', flexDirection: 'column', gap: 6, gridColumn: '1 / -1' }}>
                        <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>Message <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 12 }}>required</span></label>
                        <textarea value={form.message} onChange={e => handleChange('message', e.target.value)} placeholder="Describe the workflow, niche, and constraints you need covered…" rows={5} style={{
                          width: '100%', background: 'var(--bg)', border: errors.message ? '1px solid var(--danger)' : '1px solid var(--border)',
                          color: 'var(--fg)', padding: '10px 12px', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none',
                          minHeight: 140, resize: 'vertical', lineHeight: 1.5, fontFamily: 'inherit',
                        }} />
                        <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0 }}>{form.message.length} / 2000 characters</p>
                        {errors.message && <p style={{ fontSize: 12, color: '#f87171', margin: 0 }}>Write at least 20 characters so we can act on it.</p>}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-sm)', alignItems: 'center', marginTop: 'var(--gap-md)' }}>
                      <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ minHeight: 44 }}>
                        {status === 'loading' ? (
                          <><span className="spinner" style={{
                            width: 14, height: 14, border: '2px solid rgba(0,0,0,0.2)',
                            borderTopColor: 'var(--bg)', borderRadius: '50%',
                            animation: 'spin 0.6s linear infinite', display: 'inline-block',
                          }} /><span>Sending…</span></>
                        ) : 'Send message'}
                      </button>
                      <button type="button" className="btn btn-secondary" onClick={() => setForceFail(true)} title="Simulates a server error for state coverage">Simulate fail</button>
                      <p className="form-hint" style={{ fontSize: 12, color: 'var(--muted)', margin: 0 }}>No spam. One reply, then done.</p>
                    </div>
                  </form>
                </div>
              </div>

              <aside className="side-stack" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
                <div className="side-card" style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: 'var(--muted)', display: 'block', marginBottom: 'var(--gap-sm)',
                  }}>Direct</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 8px' }}>hello@promptplaybook.dev</h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55 }}>
                    For security or legal inquiries, put "Security" or "Legal" in the subject line of your email.
                  </p>
                </div>
                <div className="side-card" style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: 'var(--muted)', display: 'block', marginBottom: 'var(--gap-sm)',
                  }}>Response time</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 8px' }}>One business day</h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55 }}>
                    Enterprise license and prompt-request tickets are prioritized over general feedback.
                  </p>
                </div>
                <div className="side-card" style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: 'var(--muted)', display: 'block', marginBottom: 'var(--gap-sm)',
                  }}>Prefer self-serve?</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 8px' }}>Browse the library</h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55 }}>
                    Most teams start with HR & Recruiting or Digital Marketing blueprints.
                  </p>
                  <Link to="/category/hr" className="side-link" style={{ display: 'inline-flex', marginTop: 'var(--gap-sm)', fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>
                    Open HR niche &rarr;
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
