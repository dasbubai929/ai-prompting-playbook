import { useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const promptData = {
  'job-desc': {
    eyebrow: 'HR & RECRUITING · COMPLIANCE',
    title: 'Legally Compliant Job Description Builder',
    badges: ['Bias-Guard', 'Inclusive Hiring', 'EEO Audited'],
    model: 'GPT-4o or Claude 3.5 Sonnet',
    tokens: '~650 (Dense)',
    constraint: 'Strict EEO-1 Guidelines',
    useCase: `Drafting public-facing job descriptions introduces significant regulatory and cultural exposure. Biased vocabulary (like ageist terms or masculine-coded adjectives) implicitly selects against premium candidates. Furthermore, salary range transparency laws are rapidly changing across global jurisdictions.

This engineered playbook prompt acts as a strict guard-rail. It mandates structured separation between essential "Must-Haves" and optional "Nice-to-Haves" (directly supporting gender-equal application likelihood) and calibrates wording against standard equal opportunity employment (EEO) legal benchmarks.`,
    defaultRole: 'Senior Technical Lead',
    defaultLoc: 'California, USA',
    codeRaw: (role, loc) => `You are an expert HR compliance attorney and senior technical recruiter. Write a comprehensive, bias-free, and legally compliant job description for a ${role} based in ${loc}. Ensure it complies strictly with equal opportunity employment guidelines, avoids gendered or ageist language, explicitly calls out salary range transparency as required by local laws, and formats requirements into 'Must-Haves' and 'Nice-to-Haves'. Keep the tone professional, inclusive, and exciting.`,
    codeSystem: (role, loc) => `SYSTEM_DIRECTIVES:
- Role: HR Compliance & Executive Recruiter
- Constraints: Strict EEO standard adherence
- Target output profile: ${role}
- Jurisdiction: ${loc}
- Compliance requirements: Avoid gendered terms, enforce local wage disclosure thresholds
- Grading criteria: Structure 'Essential Duties' separated from 'Highly Desired' qualities`,
    codeXml: (role, loc) => `<system_prompt>
  <context>
    You are an expert HR compliance attorney and senior technical recruiter.
  </context>
  <objective>
    Write a comprehensive, bias-free, and legally compliant job description for a ${role} based in ${loc}.
  </objective>
  <constraints>
    <compliance_rules>Strict EEO guidelines, avoid gendered/ageist language, enforce salary transparency rules applicable for ${loc}</compliance_rules>
    <formatting_rules>Differentiate 'Must-Haves' and 'Nice-to-Haves'</formatting_rules>
  </constraints>
</system_prompt>`,
    related: [
      { eyebrow: 'INTERVIEWING', title: 'Structured Interview Rubric Architect', desc: 'Scores functional candidates objectively against measurable STAR metrics.' },
      { eyebrow: 'EVALUATION', title: 'Bias-Free Resume Screening Guard', desc: 'Standardizes qualification vetting while masking candidate demographic identifiers.' },
      { eyebrow: 'RETENTION', title: 'Structured Onboarding Milestone Generator', desc: 'Scaffolds 30-60-90 day performance and onboarding integration checklist grids.' },
    ],
  },
}

export default function PromptDetail() {
  const { promptId } = useParams()
  const data = promptData[promptId]
  const [tab, setTab] = useState('raw')
  const [role, setRole] = useState(data?.defaultRole || '')
  const [loc, setLoc] = useState(data?.defaultLoc || '')
  const [copied, setCopied] = useState(false)

  const getCode = useCallback(() => {
    if (!data) return ''
    const r = role || '[ROLE]'
    const l = loc || '[LOCATION]'
    if (tab === 'raw') return data.codeRaw(r, l)
    if (tab === 'system') return data.codeSystem(r, l)
    return data.codeXml(r, l)
  }, [tab, role, loc, data])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(getCode())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }, [getCode])

  if (!data) return <><Nav /><main><div className="container" style={{ paddingBlock: 'var(--gap-xl)' }}><p>Prompt not found.</p></div></main><Footer /></>

  return (
    <>
      <Nav />
      <main id="content">
        <section className="prompt-detail-header" style={{ paddingBlock: 'var(--gap-xl) var(--gap-md)' }}>
          <div className="container">
            <p className="eyebrow">{data.eyebrow}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--gap-lg)', flexWrap: 'wrap' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
                lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
                margin: 0, fontWeight: 600,
              }}>{data.title}</h1>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {data.badges.map(b => (
                  <span key={b} style={{
                    background: 'var(--accent-soft)', color: 'var(--accent)',
                    padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                    fontSize: 12, fontWeight: 500,
                  }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-lg)', marginTop: 'var(--gap-md)', paddingBottom: 'var(--gap-md)', borderBottom: '1px solid var(--border)' }}>
              {[
                { label: 'Recommended Model', value: data.model },
                { label: 'Tokens Out', value: data.tokens },
                { label: 'Constraint Level', value: data.constraint },
              ].map(m => (
                <div key={m.label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase' }}>{m.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="detail-grid" style={{
            display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--gap-xl)', paddingBlock: 'var(--gap-md)',
          }}>
            <div>
              <div className="usecase-box" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)', marginBottom: 'var(--gap-lg)',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600,
                  margin: '0 0 var(--gap-sm)', letterSpacing: '-0.01em',
                }}>Operational Use Case & Value</h2>
                {data.useCase.split('\n\n').map((p, i) => (
                  <p key={i} style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6 }}>{p}</p>
                ))}
              </div>

              <div className="code-widget" style={{
                border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
                background: '#050505', overflow: 'hidden', marginBottom: 'var(--gap-lg)',
              }}>
                <div style={{ display: 'flex', background: 'var(--surface)', borderBottom: '1px solid var(--border)', paddingInline: 'var(--gap-md)' }}>
                  {[
                    { id: 'raw', label: 'Raw Template' },
                    { id: 'system', label: 'System Directives' },
                    { id: 'xml', label: 'Structured XML Format' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTab(t.id)}
                      style={{
                        background: 'none', border: 'none', borderBottom: tab === t.id ? '2px solid var(--accent)' : '2px solid transparent',
                        color: tab === t.id ? 'var(--fg)' : 'var(--fg-2)',
                        padding: '14px 16px', fontSize: 13, fontFamily: 'var(--font-mono)', cursor: 'pointer',
                      }}
                    >{t.label}</button>
                  ))}
                </div>
                <div style={{ padding: 'var(--gap-lg)', minHeight: 240 }}>
                  <pre style={{
                    fontFamily: 'var(--font-mono)', fontSize: 13, color: '#dfdfdf',
                    margin: 0, lineHeight: 1.6, whiteSpace: 'pre-wrap',
                  }}>{getCode()}</pre>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--gap-md)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>Click to copy the code block shown above</span>
                <button
                  onClick={handleCopy}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '10px 20px', borderRadius: 'var(--radius)',
                    border: copied ? '1px solid var(--accent)' : '1px solid var(--fg)',
                    fontSize: 13, fontWeight: 500,
                    background: copied ? 'var(--accent-soft)' : 'var(--fg)',
                    color: copied ? 'var(--accent)' : 'var(--bg)',
                    cursor: 'pointer', transition: 'all 150ms cubic-bezier(0.2, 0, 0, 1)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copied ? 'Copied Code!' : 'Copy Prompt Template'}</span>
                </button>
              </div>
            </div>

            <div>
              <div className="interactive-panel" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 'var(--gap-md)', display: 'block',
                }}>Variables Compiler</span>
                <p style={{ fontSize: 13, color: 'var(--fg-2)', margin: '0 0 var(--gap-md)' }}>
                  Type variables below to dynamically compile them into the prompt code on the left in real-time.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 'var(--gap-md)' }}>
                  <label style={{ fontSize: 12, color: 'var(--fg-2)', fontWeight: 500 }}>Target Role (e.g. Technical Lead)</label>
                  <input
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    style={{
                      background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--fg)',
                      padding: '10px 12px', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 0 }}>
                  <label style={{ fontSize: 12, color: 'var(--fg-2)', fontWeight: 500 }}>Target Location (e.g. California, USA)</label>
                  <input
                    value={loc}
                    onChange={e => setLoc(e.target.value)}
                    style={{
                      background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--fg)',
                      padding: '10px 12px', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section related-section" style={{ paddingBlock: 'var(--gap-xl)' }}>
          <div className="container">
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600,
              margin: '0 0 var(--gap-lg)', letterSpacing: 'var(--tracking-display)',
            }}>Related HR Prompts</h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--gap-lg)', marginTop: 'var(--gap-lg)',
            }}>
              {data.related.map(r => (
                <div key={r.title} className="related-card" style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-md)',
                  transition: 'all 200ms cubic-bezier(0.2, 0, 0, 1)',
                }}>
                  <p className="eyebrow" style={{ fontSize: 10 }}>{r.eyebrow}</p>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 16,
                    fontWeight: 600, margin: '0 0 var(--gap-xs)',
                  }}>{r.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--fg-2)', margin: 0 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
