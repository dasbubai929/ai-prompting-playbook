import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Nav />
      <main id="content">
        <section className="section hero" style={{ paddingBlock: 'clamp(48px, 8vw, var(--gap-xl))' }}>
          <div className="container">
            <p className="eyebrow">About the Playbook</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              margin: '0 0 var(--gap-md)', fontWeight: 600, maxWidth: '16ch',
            }}>Audited prompts for teams that ship.</h1>
            <p className="lead" style={{
              fontSize: 'var(--fs-lead)', color: 'var(--fg-2)',
              maxWidth: '52ch', margin: '0 0 var(--gap-lg)', lineHeight: 1.65,
            }}>
              AI Prompting Playbook is a searchable library of enterprise-ready prompts — structured for HR, marketing, content, and product teams who need reproducible model behavior, not one-off demos.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-sm)' }}>
              <Link to="/category/hr" className="btn btn-primary">Explore niches</Link>
              <Link to="/contact" className="btn btn-secondary">Talk to us</Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBlock: 'clamp(48px, 8vw, var(--gap-xl))' }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: 'var(--gap-lg)' }}>How we build</p>
            <div className="principles" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap-md)',
            }}>
              {[
                { num: '01 · Audit', title: 'Every prompt is reviewed', desc: 'Role, constraints, variables, and failure paths are checked before a prompt appears in the library. Drafts stay private until they pass.' },
                { num: '02 · Niche', title: 'Domain over generic', desc: 'We organize by job to be done — job descriptions, SEO briefs, course outlines — so teams find production patterns, not generic chat starters.' },
                { num: '03 · Ship', title: 'Copy, adapt, deploy', desc: 'Each blueprint is copy-ready with clear variables. Swap context, keep structure, and move from research to ops without rewriting from scratch.' },
              ].map(p => (
                <article key={p.num} className="principle-card" style={{
                  background: 'var(--surface)', boxShadow: 'var(--elev-raised)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                  display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>{p.num}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 18,
                    fontWeight: 600, letterSpacing: '-0.02em', margin: 0,
                  }}>{p.title}</h3>
                  <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBlock: 'clamp(48px, 8vw, var(--gap-xl))' }}>
          <div className="container">
            <div className="split" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-xl)', alignItems: 'start',
            }}>
              <div>
                <p className="eyebrow">Editorial pipeline</p>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
                  fontWeight: 600, letterSpacing: 'var(--tracking-display)',
                  margin: '0 0 var(--gap-md)', lineHeight: 1.15,
                }}>From research note to library entry.</h2>
                <p style={{ color: 'var(--fg-2)', fontSize: 16, lineHeight: 1.7, margin: '0 0 var(--gap-md)' }}>
                  Prompts enter the playbook through a fixed path. That discipline is why teams can trust what they copy into production systems.
                </p>
                <p style={{ color: 'var(--fg-2)', fontSize: 16, lineHeight: 1.7, margin: '0 0 var(--gap-md)' }}>
                  We publish method essays on the blog so you can see the same standards applied to your own internal libraries.
                </p>
              </div>
              <div className="pipeline" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { step: '01', title: 'Brief', desc: 'Define niche, audience, success criteria, and banned failure modes.' },
                  { step: '02', title: 'Author', desc: 'Write role, constraints, fenced context, and terminal task schema.' },
                  { step: '03', title: 'Stress-test', desc: 'Run edge cases: empty fields, long titles, missing compliance notes.' },
                  { step: '04', title: 'Publish', desc: 'Tag niche, model targets, and version. Ship to the searchable library.' },
                ].map(s => (
                  <div key={s.step} className="pipeline-step" style={{
                    display: 'grid', gridTemplateColumns: '40px 1fr', gap: 'var(--gap-md)',
                    paddingBlock: 'var(--gap-md)', borderBottom: '1px solid var(--border-soft)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', paddingTop: 2,
                    }}>{s.step}</span>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 600, margin: '0 0 4px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                      <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBlock: 'clamp(48px, 8vw, var(--gap-xl))' }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: 'var(--gap-lg)' }}>Coverage snapshot</p>
            <div className="stats-row" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap-md)',
            }}>
              {[
                { label: 'Library shape', value: '5 niches', note: 'HR, marketing, creators, SEO, SaaS — each with task-level blueprints.' },
                { label: 'Format standard', value: 'Role → guard → task', note: 'Shared skeleton so every prompt is scannable in under a minute.' },
                { label: 'Delivery', value: 'Static / Astro', note: 'Fast, cacheable pages built for product evaluators and internal ops teams.' },
              ].map(s => (
                <div key={s.label} className="stat-card" style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: 'var(--muted)', display: 'block', marginBottom: 'var(--gap-sm)',
                  }}>{s.label}</span>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600,
                    letterSpacing: '-0.03em', margin: '0 0 6px',
                  }}>{s.value}</p>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBlock: 'clamp(48px, 8vw, var(--gap-xl))' }}>
          <div className="container">
            <div className="cta-band" style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 'var(--gap-xl)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 'var(--gap-lg)', flexWrap: 'wrap',
            }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600,
                  letterSpacing: '-0.03em', margin: '0 0 8px',
                }}>Need a niche we do not cover yet?</h2>
                <p style={{ margin: 0, color: 'var(--fg-2)', maxWidth: '42ch' }}>
                  Tell us the workflow. We prioritize enterprise request patterns for the next editorial cycle.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary">Request a prompt</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
