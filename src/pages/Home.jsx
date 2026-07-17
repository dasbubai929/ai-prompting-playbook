import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CopyBtn from '../components/CopyBtn'

const prompts = [
  {
    id: 'job-desc',
    cat: 'hr',
    niche: 'HR & Recruiting',
    tags: ['Compliance', 'GPT-4o'],
    title: 'Legally Compliant Job Description Builder',
    desc: 'Develops structured, inclusive, and legally protective job postings matching local compliance constraints.',
    keywords: 'hr recruiting job description legally compliant inclusive recruitment',
    updated: 'Updated 2 days ago',
    detailLink: true,
    text: 'You are an expert HR compliance attorney and senior technical recruiter. Write a comprehensive, bias-free, and legally compliant job description for a [ROLE] based in [LOCATION]. Ensure it complies strictly with equal opportunity employment guidelines, avoids gendered or ageist language, explicitly calls out salary range transparency as required by local laws, and formats requirements into \'Must-Haves\' and \'Nice-to-Haves\'. Keep the tone professional, inclusive, and exciting.',
  },
  {
    id: 'meta-prompt',
    cat: 'dev',
    niche: 'SaaS & Dev',
    tags: ['Prompt Chaining', 'Claude 3.5 Sonnet'],
    title: 'Dynamic Meta-Prompt Instruction Builder',
    desc: 'Translates brief product goals into complete, highly descriptive system instructions for autonomous LLM agents.',
    keywords: 'saas dev meta-prompt agent custom instructions system prompt coder developer',
    updated: 'Updated 1 week ago',
    text: 'Act as a Meta-Prompt Engineer. Your task is to take a raw user goal: \'[GOAL]\' and transform it into a highly detailed system instruction for an autonomous LLM agent. Break your output into five blocks: 1. Core Mandates, 2. Interactive Role, 3. Input Validation Rules, 4. Step-by-Step Chain of Thought, 5. Output Constraints. Use markdown blocks, preserve variable brackets like {{user_input}}, and optimize for strict instruction adherence.',
  },
  {
    id: 'seo-outline',
    cat: 'seo',
    niche: 'SEO & Content',
    tags: ['Search Intent', 'GPT-4o'],
    title: 'Structured Article Outline & Intent Matcher',
    desc: 'Extracts target search intents and models comprehensive semantically-rich outlines for ranking optimized content.',
    keywords: 'seo content outline article generator copywriter writing seo-ranking',
    updated: 'Updated 3 days ago',
    text: 'You are an expert SEO strategist. Analyze the target keyword \'[KEYWORD]\' and the target audience \'[AUDIENCE]\'. First, identify the dominant search intent (Informational, Transactional, Navigational, Commercial). Second, map out a comprehensive H2-H3 article outline that answers the most critical user search queries. Third, specify 5 key semantic secondary entities that must be woven into each section to satisfy ranking engines. Do not use generic structures.',
  },
  {
    id: 'syllabus',
    cat: 'creators',
    niche: 'Course Creators',
    tags: ['Pedagogy', 'Claude 3.5 Sonnet'],
    title: 'Interactive Dynamic Syllabus Planner',
    desc: 'Crafts multi-stage curricula with structured learning objectives and practical retention-testing modules.',
    keywords: 'course syllabus curriculum learning outcomes teachers creators lesson',
    updated: 'Updated 5 days ago',
    text: 'Design a highly comprehensive course curriculum for teaching \'[TOPIC]\' to \'[AUDIENCE LEVEL]\'. Structure the program into 4 progressive modules: 1. Foundational Theory, 2. Guided Practice, 3. Real-World Case Analysis, 4. Capstone Project. For each module, define explicit Bloom\'s Taxonomy learning objectives, name 2 concrete assignments, and specify one major interactive challenge that tests practical retention over rote memorization.',
  },
  {
    id: 'pas-copy',
    cat: 'marketing',
    niche: 'Digital Marketing',
    tags: ['Copywriting', 'GPT-4o'],
    title: 'PAS Copywriting Conversion Architect',
    desc: 'Applies structured problem-agitate-solve templates to output highly targeted and high-conversion ad copy.',
    keywords: 'marketing PAS copy copywriting framework conversion digital aida ads email',
    updated: 'Updated Yesterday',
    text: 'Apply the Problem-Agitate-Solve (PAS) copywriting framework to pitch the product: \'[PRODUCT]\' to the specific persona \'[TARGET_PERSONA]\'. Focus your copy on the primary pain point of [PAIN_POINT]. Block 1 (Problem): Clearly articulate the daily frustration in highly relatable, visceral terms. Block 2 (Agitate): Build emotional intensity by highlighting the compounding costs of leaving the problem unsolved. Block 3 (Solve): Present the product as the optimal, friction-free relief. Keep tone [TONE].',
  },
]

const categories = ['all', 'hr', 'marketing', 'creators', 'seo', 'dev']
const categoryLabels = {
  all: 'All Niches',
  hr: 'HR & Recruiting',
  marketing: 'Digital Marketing',
  creators: 'Course Creators',
  seo: 'SEO & Content',
  dev: 'SaaS & Dev',
}

export default function Home() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = prompts.filter(p => {
    const catMatch = activeCat === 'all' || p.cat === activeCat
    const q = search.toLowerCase().trim()
    const searchMatch = !q || p.keywords.includes(q) || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    return catMatch && searchMatch
  })

  return (
    <>
      <Nav />
      <main id="content">
        <section className="section hero" style={{ textAlign: 'center', paddingBlock: 'clamp(80px, 12vw, 120px)' }}>
          <div className="container">
            <p className="eyebrow">Enterprise-Ready Infrastructure</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              margin: '0 0 var(--gap-md)', fontWeight: 600,
            }}>
              AI Prompting Playbook
            </h1>
            <p style={{
              fontSize: 'var(--fs-lead)', color: 'var(--fg-2)',
              maxWidth: '60ch', margin: '0 auto var(--gap-lg)',
            }}>
              Search, copy, and deploy rigorously audited prompts across business domains and specialized niches.
            </p>

            <div style={{
              maxWidth: 600, margin: '0 auto', position: 'relative',
            }}>
              <svg style={{
                position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)',
                color: 'var(--muted)', width: 18, height: 18, pointerEvents: 'none',
              }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search prompts by niche, task, or keyword..."
                style={{
                  width: '100%', padding: '16px 20px 16px 52px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', color: 'var(--fg)',
                  fontSize: 16, outline: 'none', boxShadow: 'var(--elev-ring)',
                }}
              />
            </div>

            <div style={{
              display: 'flex', justifyContent: 'center', gap: 'var(--gap-xs)',
              marginTop: 'var(--gap-xl)', flexWrap: 'wrap',
            }}>
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={activeCat === c ? 'tab-btn active' : 'tab-btn'}
                  style={{
                    background: activeCat === c ? 'var(--fg)' : 'var(--surface)',
                    border: activeCat === c ? '1px solid var(--fg)' : '1px solid var(--border)',
                    color: activeCat === c ? 'var(--bg)' : 'var(--fg-2)',
                    padding: '8px 16px', borderRadius: 'var(--radius-pill)',
                    fontSize: 13, cursor: 'pointer', transition: 'all 150ms cubic-bezier(0.2, 0, 0, 1)',
                  }}
                >
                  {categoryLabels[c]}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section featured-prompts" style={{ paddingBlock: 'var(--gap-xl)' }}>
          <div className="container">
            <div style={{ marginBottom: 'var(--gap-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
                fontWeight: 600, margin: 0, letterSpacing: 'var(--tracking-display)',
              }}>
                Trending Prompts
              </h2>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)' }}>
                {filtered.length} prompt{filtered.length !== 1 ? 's' : ''} filtered
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
              {filtered.map(p => (
                <article key={p.id} className="prompt-card" style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                  display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)',
                  transition: 'all 200ms cubic-bezier(0.2, 0, 0, 1)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--gap-md)' }}>
                    <div>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                        <span className="tag highlight">{p.niche}</span>
                        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                      {p.detailLink ? (
                        <Link to={`/prompt/${p.id}`} style={{ display: 'block' }}>
                          <h3 style={{
                            fontFamily: 'var(--font-display)', fontSize: 20,
                            fontWeight: 600, margin: 0, letterSpacing: '-0.015em',
                          }}>{p.title}</h3>
                        </Link>
                      ) : (
                        <h3 style={{
                          fontFamily: 'var(--font-display)', fontSize: 20,
                          fontWeight: 600, margin: 0, letterSpacing: '-0.015em',
                        }}>{p.title}</h3>
                      )}
                    </div>
                    <CopyBtn text={p.text} />
                  </div>
                  <p style={{ color: 'var(--fg-2)', fontSize: 14, margin: 0, maxWidth: '80ch' }}>{p.desc}</p>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    marginTop: 12, borderTop: '1px solid var(--border-soft)', paddingTop: 12,
                  }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{p.updated}</span>
                    <Link to={p.detailLink ? `/prompt/${p.id}` : `/category/${p.cat}`} className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }}>
                      {p.detailLink ? 'View Details' : `Browse ${categoryLabels[p.cat]}`}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
