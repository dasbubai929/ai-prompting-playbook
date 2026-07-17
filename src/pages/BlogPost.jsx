import { useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const posts = {
  'prompt-engineering-basics': {
    eyebrow: 'Foundational · 5 min read',
    title: 'Prompt Engineering Basics',
    lead: 'Uncover the foundational mechanics of context windows, tokenization structures, and standard delimiters. Format instructions to reduce hallucination rates and make model behavior predictable.',
    date: 'Jul 18, 2026',
    author: 'By Playbook Editorial',
    tags: ['Foundational', 'Tokenization'],
    sections: [
      {
        h2: 'Context windows are finite real estate',
        body: `Every model you call has a hard token budget. What you put first, last, and in the middle changes how attention is allocated. Treat the prompt as a packed brief for a specialist who will only read what you give them — not as a conversation with a colleague who already knows your company.

When the window fills, older or lower-priority tokens get diluted. That is why long unstructured dumps fail: the model spends capacity on noise instead of the decision you need.`,
        callout: { label: 'Operating rule', text: 'Put the role and hard constraints near the top. Put examples in the middle. Put the exact task and output schema at the end — models weigh terminal instructions heavily.' },
      },
      {
        h2: 'Use delimiters so structure is unambiguous',
        body: `Models parse better when sections have hard boundaries. XML-style tags, triple backticks, or labeled blocks all work. Pick one convention and stick to it across your team so prompts stay composable.`,
        code: {
          header: 'prompt · basic skeleton',
          id: 'basic-skeleton',
          content: `You are a senior technical writer for enterprise SaaS.

<constraints>
- Audience: product managers, not engineers
- Length: 180–220 words
- No marketing superlatives
</constraints>

<context>
{{product_changelog}}
</context>

<task>
Write a release note summarizing the three highest-impact changes.
Return markdown with H2 headings only.
</task>`,
        },
      },
      {
        h3: 'Why this skeleton works',
        list: [
          'Role first — primes domain vocabulary and tone before any data arrives.',
          'Constraints as a block — easy to audit and version in a playbook.',
          'Context isolated — paste-in variables never collide with instructions.',
          'Task last — the model finishes with a clear deliverable definition.',
        ],
      },
      {
        h2: 'Reduce hallucination with grounding and refusal paths',
        body: `Hallucinations spike when the model is forced to answer without evidence. Explicitly allow "insufficient information" and require citations to the provided context. If your prompt cannot point at a source, the model will invent one.`,
        code: {
          header: 'prompt · grounding clause',
          id: 'grounding-clause',
          content: `Answer only from <source>…</source>.
If the source does not contain the answer, reply exactly:
"Not in source — need additional documentation."
Do not invent product names, dates, or metrics.`,
        },
      },
      {
        h2: 'A five-line checklist before you ship a prompt',
        list: [
          'Is the role specific enough to constrain tone?',
          'Are hard limits (length, format, exclusions) written as constraints?',
          'Is variable content fenced away from instructions?',
          'Does the task name the output shape (JSON, markdown, table)?',
          'Is there a failure path when data is missing?',
        ],
        body: 'Prompts that pass this checklist are the ones that survive handoff from research to production. Everything else is a demo.',
      },
    ],
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const data = posts[slug]
  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = useCallback(async (id, text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {}
  }, [])

  if (!data) return <><Nav /><main><div className="container" style={{ paddingBlock: 'var(--gap-xl)' }}><p>Post not found.</p></div></main><Footer /></>

  return (
    <>
      <Nav />
      <main id="content">
        <section className="article-header" style={{ paddingBlock: 'var(--gap-xl) var(--gap-lg)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <div className="breadcrumb" style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)',
              marginBottom: 'var(--gap-md)', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap',
            }}>
              <Link to="/blog" style={{ color: 'var(--fg-2)' }}>Blog</Link>
              <span>/</span>
              <span>{data.title}</span>
            </div>
            <p className="eyebrow">{data.eyebrow}</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              margin: '0 0 var(--gap-md)', fontWeight: 600, maxWidth: '22ch',
            }}>{data.title}</h1>
            <p className="article-lead" style={{
              fontSize: 'var(--fs-lead)', color: 'var(--fg-2)',
              maxWidth: '62ch', margin: '0 0 var(--gap-lg)', lineHeight: 1.6,
            }}>{data.lead}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-md)', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>{data.date}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>{data.author}</span>
              {data.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="article-layout" style={{
            display: 'grid', gridTemplateColumns: '1fr 280px', gap: 'var(--gap-xl)', paddingBlock: 'var(--gap-xl)',
          }}>
            <article className="prose" style={{ maxWidth: '68ch' }}>
              {data.sections.map((sec, i) => (
                <div key={i}>
                  {sec.h2 && <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600,
                    letterSpacing: '-0.03em', margin: 'var(--gap-xl) 0 var(--gap-md)', lineHeight: 1.2,
                  }}>{sec.h2}</h2>}
                  {sec.h3 && <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
                    letterSpacing: '-0.02em', margin: 'var(--gap-lg) 0 var(--gap-sm)',
                  }}>{sec.h3}</h3>}
                  {sec.body && sec.body.split('\n\n').map((p, j) => (
                    <p key={j} style={{ color: 'var(--fg-2)', margin: '0 0 var(--gap-md)', lineHeight: 1.7, fontSize: 16 }}>{p}</p>
                  ))}
                  {sec.callout && (
                    <div className="callout" style={{
                      background: 'var(--surface)', boxShadow: 'var(--elev-raised)',
                      borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)', margin: 'var(--gap-lg) 0',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                        letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 'var(--gap-sm)', display: 'block',
                      }}>{sec.callout.label}</span>
                      <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 15 }}>{sec.callout.text}</p>
                    </div>
                  )}
                  {sec.code && (
                    <div className="code-block" style={{
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)', margin: 'var(--gap-lg) 0', overflow: 'hidden',
                    }}>
                      <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '10px 14px', borderBottom: '1px solid var(--border-soft)',
                        background: 'rgba(255,255,255,0.02)',
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)',
                          textTransform: 'uppercase', letterSpacing: '0.08em',
                        }}>{sec.code.header}</span>
                        <button
                          onClick={() => handleCopy(sec.code.id, sec.code.content)}
                          className={copiedId === sec.code.id ? 'copy-btn copied' : 'copy-btn'}
                          style={{
                            padding: '4px 10px', fontSize: 11, borderRadius: 'var(--radius)',
                            background: 'transparent', border: '1px solid var(--border)',
                            color: 'var(--fg-2)', cursor: 'pointer', fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {copiedId === sec.code.id ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                      <pre style={{
                        margin: 0, padding: 'var(--gap-md)', overflowX: 'auto',
                        fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.6, color: '#d4d4d4',
                      }}><code>{sec.code.content}</code></pre>
                    </div>
                  )}
                  {sec.list && (
                    <ul style={{ margin: '0 0 var(--gap-md)', paddingLeft: '1.25rem', color: 'var(--fg-2)', lineHeight: 1.7 }}>
                      {sec.list.map((item, j) => <li key={j} style={{ marginBottom: 8 }}>{item}</li>)}
                    </ul>
                  )}
                </div>
              ))}

              <div className="related" style={{ marginTop: 'var(--gap-xl)', paddingTop: 'var(--gap-xl)', borderTop: '1px solid var(--border)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 var(--gap-md)' }}>Continue reading</h3>
                <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-md)' }}>
                  <Link to="/blog" className="related-card" style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)', padding: 'var(--gap-md)',
                  }}>
                    <h4 style={{ fontSize: 15, fontWeight: 600, margin: '0 0 6px', letterSpacing: '-0.01em' }}>Role Priming Explained</h4>
                    <p style={{ fontSize: 13, color: 'var(--fg-2)', margin: 0, lineHeight: 1.5 }}>How identity priming shifts attention weights toward better domain output.</p>
                  </Link>
                  <Link to="/prompt/job-desc" className="related-card" style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)', padding: 'var(--gap-md)',
                  }}>
                    <h4 style={{ fontSize: 15, fontWeight: 600, margin: '0 0 6px', letterSpacing: '-0.01em' }}>Job Description Builder</h4>
                    <p style={{ fontSize: 13, color: 'var(--fg-2)', margin: 0, lineHeight: 1.5 }}>See a production-ready HR prompt that applies these basics end to end.</p>
                  </Link>
                </div>
              </div>
            </article>

            <aside>
              <div className="toc" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                position: 'sticky', top: 88,
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 'var(--gap-md)', display: 'block',
                }}>On this page</span>
                <ul style={{
                  display: 'flex', flexDirection: 'column', gap: 10,
                  listStyle: 'none', margin: 0, padding: 0,
                }}>
                  {data.sections.filter(s => s.h2).map((s, i) => (
                    <li key={i}>
                      <a href={`#${s.h2.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                        style={{ fontSize: 13, color: 'var(--fg-2)' }}>
                        {s.h2}
                      </a>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'var(--gap-lg)', paddingTop: 'var(--gap-md)', borderTop: '1px solid var(--border-soft)' }}>
                  <Link to="/blog" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: 12 }}>
                    &larr; All posts
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
