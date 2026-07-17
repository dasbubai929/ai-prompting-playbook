import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const posts = [
  { date: 'Jul 18, 2026', slug: 'prompt-engineering-basics', title: 'Prompt Engineering Basics', excerpt: 'Uncover the foundational mechanics of context windows, tokenization structures, and standard delimiters. Learn how to format instructions to reduce hallucination rates by up to 40%.', tags: ['Foundational', 'Tokenization', '5 min read'] },
  { date: 'Jul 10, 2026', slug: 'role-priming', title: 'Role Priming Explained', excerpt: 'Weighing LLM attention mechanics using identity priming. This guide explores how specifying role personas shifts the model\'s internal reference weights to yield vastly superior output domains.', tags: ['Cognitive Architecture', 'Persona', '8 min read'] },
  { date: 'Jun 28, 2026', slug: 'constraint-guards', title: 'Constraint Guards in Prompts', excerpt: 'Establishing deterministic outputs inside probabilistic systems. Explore how to enforce rigid JSON/XML schemas, inject validation loops, and build fallback error loops inside your prompt structures.', tags: ['Structured Outputs', 'JSON API', '12 min read'] },
  { date: 'Jun 15, 2026', slug: 'seo-prompts', title: 'SEO Prompts for Content Creators', excerpt: 'A systematic blueprint for ranking content. We detail how to write prompts that audit keyword clusters, perform semantic intent comparisons, and structure clear heading topologies.', tags: ['SEO Strategy', 'Content Grid', '7 min read'] },
]

const categories = [
  { label: 'HR & Recruiting', count: 6, link: '/category/hr' },
  { label: 'Digital Marketing', count: 3, link: '/category/marketing' },
  { label: 'Course Creators', count: 2, link: '/category/creators' },
  { label: 'SEO & Content', count: 2, link: '/category/seo' },
  { label: 'SaaS & Dev', count: 2, link: '/category/dev' },
]

export default function Blog() {
  return (
    <>
      <Nav />
      <main id="content">
        <section className="blog-header" style={{ paddingBlock: 'var(--gap-xl) var(--gap-md)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <p className="eyebrow">Insights & Analysis</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              margin: '0 0 var(--gap-sm)', fontWeight: 600,
            }}>The Prompting Playbook Blog</h1>
            <p style={{ fontSize: 16, color: 'var(--fg-2)', maxWidth: '70ch', margin: 0 }}>
              Deep dives into token physics, persona weighting, and advanced programmatic constraint logic for large language model operations.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="blog-layout" style={{
            display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--gap-xl)', paddingBlock: 'var(--gap-xl)',
          }}>
            <div className="posts-list" style={{ display: 'flex', flexDirection: 'column' }}>
              {posts.map(p => (
                <article key={p.slug} className="blog-row" style={{
                  display: 'grid', gridTemplateColumns: '100px 1fr', gap: 'var(--gap-lg)',
                  paddingBlock: 28, borderBottom: '1px solid var(--border-soft)', alignItems: 'baseline',
                }}>
                  <span className="blog-date" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)' }}>{p.date}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xs)' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600,
                      margin: 0, letterSpacing: '-0.01em',
                    }}>
                      <Link to={`/blog/${p.slug}`} style={{ color: 'inherit' }}>{p.title}</Link>
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--fg-2)', margin: 0, lineHeight: 1.6 }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside>
              <div className="sidebar-block" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)', marginBottom: 'var(--gap-lg)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 'var(--gap-md)', display: 'block',
                }}>Playbook Niches</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
                  {categories.map(c => (
                    <Link key={c.label} to={c.link} style={{
                      fontSize: 14, color: 'var(--fg-2)', display: 'flex',
                      justifyContent: 'space-between', alignItems: 'center',
                    }}>
                      <span>{c.label}</span>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 11,
                        background: 'var(--fg-soft)', padding: '2px 6px',
                        borderRadius: 'var(--radius-pill)', color: 'var(--muted)',
                      }}>{c.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-block" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)', marginBottom: 'var(--gap-lg)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 'var(--gap-md)', display: 'block',
                }}>Trending Prompt</span>
                <h4 style={{
                  fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600,
                  margin: '0 0 6px', letterSpacing: '-0.01em',
                }}>Legally Compliant Job Description Builder</h4>
                <p style={{ fontSize: 12, color: 'var(--fg-2)', margin: '0 0 var(--gap-sm)', lineHeight: 1.5 }}>
                  Our most popular enterprise-ready compliance prompt for human resources teams.
                </p>
                <Link to="/prompt/job-desc" className="btn btn-primary" style={{ fontSize: 11, padding: '6px 12px', width: '100%', justifyContent: 'center' }}>
                  Inspect Blueprint
                </Link>
              </div>

              <div className="sidebar-block" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 'var(--gap-md)', display: 'block',
                }}>Newsletter</span>
                <p style={{ fontSize: 12, color: 'var(--fg-2)', margin: '0 0 var(--gap-sm)', lineHeight: 1.5 }}>
                  Join 14,000+ engineers receiving weekly prompting patterns.
                </p>
                <form onSubmit={e => { e.preventDefault(); alert('Subscribed successfully!') }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
                  <input type="email" placeholder="name@company.com" required style={{
                    width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                    color: 'var(--fg)', padding: '10px 12px', borderRadius: 'var(--radius)',
                    fontSize: 13, outline: 'none',
                  }} />
                  <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', fontSize: 12, padding: 8 }}>Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
