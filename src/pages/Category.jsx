import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CopyBtn from '../components/CopyBtn'

const allData = {
  hr: {
    title: 'AI Prompts for HR & Recruiting',
    desc: 'Establish compliant hiring pipelines, remove bias from evaluations, and draft strategic onboarding protocols with standardized instruction frameworks.',
    prompts: [
      { title: 'Legally Compliant Job Description Builder', desc: 'Develops structured, inclusive, and legally protective job postings matching localized labor regulations.', tags: ['Recruiting', 'Compliance'], code: `You are an expert HR compliance attorney and senior technical recruiter. Write a comprehensive, bias-free, and legally compliant job description for a [ROLE] based in [LOCATION]. Ensure it complies strictly with equal opportunity employment guidelines, avoids gendered or ageist language, explicitly calls out salary range transparency as required by local laws, and formats requirements into 'Must-Haves' and 'Nice-to-Haves'. Keep the tone professional, inclusive, and exciting.`, hasDetail: true },
      { title: 'Structured Interview Rubric Architect', desc: 'Models behavioral interviewing grids that objectively score technical skill indicators and core team culture alignment.', tags: ['Interviewing', 'Behavioral'], code: `Act as a Principal Talent Developer. Generate a 4-tiered structured interview rubric for testing [SKILL/COMPETENCY] during behavioral interviews. Outline exactly 5 behavioral questions using the STAR methodology, and define strict evaluation benchmarks for 'Below Expectations', 'Meets Expectations', and 'Exceeds Expectations'. Include direct indicators that suggest red flags or simulated alignment.` },
      { title: 'Bias-Free Resume Screening Guard', desc: 'A strict constraint instruction framework that screens resumes based purely on skills, omitting demographics.', tags: ['Evaluation', 'Bias-Guard'], code: `You are an objective screening compiler. Your task is to extract core professional qualifications from the provided candidate resume while completely masking names, gender indicators, graduation years, universities, and geographic indicators. Output a normalized, markdown-compatible summary focusing entirely on: 1. Years of experience, 2. Technical stack proficiency, 3. Business outcomes generated (with metric ratios if provided), 4. Tool/infrastructure expertise.` },
      { title: 'High-Acceptance Candidate Pitch Builder', desc: 'Drafts highly persuasive offer pitches matching candidate motivation levers, culture notes, and market rates.', tags: ['Negotiation', 'Closing'], code: `Act as a candidate-facing executive recruiter. Build a highly customized, warm, and compelling verbal offer script and email draft pitching a technical candidate to join our company as [ROLE]. The candidate's core drivers are [DRIVERS] (e.g. autonomy, technical challenge), and their potential objections are [OBJECTIONS]. Address these drivers directly and weave in our unique value propositions relative to those objections. Avoid boilerplate statements.` },
      { title: 'Structured Onboarding Checklist Generator', desc: 'Constructs detailed 30-60-90 day onboarding playbooks focusing on quick technical wins and organizational alignment.', tags: ['Retention', 'Onboarding'], code: `You are a Senior People Partner. Construct an onboarding checklist and structured milestone roadmap for a incoming [ROLE] for their first 30, 60, and 90 days. Focus 30 days on 'Discovery and Tool Setup' (with one small sandbox commit goal), 60 days on 'Collaborative Contribution' (with a peer-shadowing target), and 90 days on 'Autonomous Ownership' of a core workflow block. Include specific checkins and measurable feedback loops.` },
      { title: 'Objective Performance Calibration Advisor', desc: 'Establishes objective critique templates for performance check-ins, resolving self-assessment rating gaps.', tags: ['People Ops', 'Performance'], code: `Act as an Executive People Operations calibration coach. Your task is to help a manager write a fair, objective, and action-oriented annual performance feedback summary for a [ROLE]. The employee's strengths are [STRENGTHS] and growth opportunities are [GROWTH_AREAS]. Model constructive framing that minimizes recency bias, emphasizes objective outcome metrics over soft impressions, and lists 3 clear actionable next steps.` },
    ],
  },
  marketing: {
    title: 'AI Prompts for Digital Marketing',
    desc: 'Scale organic growth, build high-conversion landing page copy, and structure micro-ad variations mapped to behavioral cohorts.',
    prompts: [
      { title: 'PAS Copywriting Conversion Architect', desc: 'Applies structured problem-agitate-solve templates to output highly targeted and high-conversion ad copy.', tags: ['Copywriting', 'PAS'], code: `Apply the Problem-Agitate-Solve (PAS) copywriting framework to pitch the product: '[PRODUCT]' to the specific persona '[TARGET_PERSONA]'. Focus your copy on the primary pain point of [PAIN_POINT]. Block 1 (Problem): Clearly articulate the daily frustration in highly relatable, visceral terms. Block 2 (Agitate): Build emotional intensity by highlighting the compounding costs of leaving the problem unsolved. Block 3 (Solve): Present the product as the optimal, friction-free relief. Keep tone [TONE].` },
      { title: 'Multivariate Social Ad Copy Generator', desc: 'Generates 5 distinct ad copy hooks scaled across emotional drivers, visual callouts, and urgency tiers.', tags: ['Social Ads', 'Hooks'], code: `Act as a growth marketer. Generate 5 multivariate copy variations for Instagram Ads promoting [PRODUCT]. Variant A: Storytelling hook, Variant B: Question hook, Variant C: Statistical hook...` },
      { title: 'Newsletter Editorial Blueprint Draft', desc: 'Weaves technical industry summaries and strong product hooks into a standard engagement-focused email newsletter.', tags: ['Email', 'Newsletter'], code: `Create a complete high-value newsletter body summarizing the latest trend in [INDUSTRY]. Structure with an intriguing lead, a detailed summary section, an action-oriented takeaway, and a conversational CTA.` },
    ],
  },
  creators: {
    title: 'AI Prompts for Course Creators',
    desc: 'Model pedagogically sound curricula, write interactive knowledge-checks, and scaffold course outlines based on learner outcome goals.',
    prompts: [
      { title: 'Interactive Dynamic Syllabus Planner', desc: 'Crafts multi-stage curricula with structured learning objectives and practical retention-testing modules.', tags: ['Pedagogy', 'Syllabus'], code: `Design a highly comprehensive course curriculum for teaching '[TOPIC]' to '[AUDIENCE LEVEL]'. Structure the program into 4 progressive modules: 1. Foundational Theory, 2. Guided Practice, 3. Real-World Case Analysis, 4. Capstone Project. For each module, define explicit Bloom's Taxonomy learning objectives, name 2 concrete assignments, and specify one major interactive challenge.` },
      { title: 'Scenario-Based Skill Assessment Builder', desc: 'Formulates scenario-driven situational evaluation questions to prove actual functional competence instead of simple syntax recall.', tags: ["Bloom's Taxonomy", 'Testing'], code: `You are an expert instructional designer. Build a scenario-based exam with 5 multiple-choice questions testing practical competence in [SKILL]. Each question must put the student inside an operational crisis.` },
    ],
  },
  seo: {
    title: 'AI Prompts for SEO & Content Strategy',
    desc: 'Expose hidden keyword search intents, outline robust semantically optimized articles, and structure automated metadata catalogs.',
    prompts: [
      { title: 'Structured Article Outline & Intent Matcher', desc: 'Extracts target search intents and models comprehensive semantically-rich outlines for ranking optimized content.', tags: ['SEO', 'Content Grid'], code: `You are an expert SEO strategist. Analyze the target keyword '[KEYWORD]' and the target audience '[AUDIENCE]'. First, identify the dominant search intent (Informational, Transactional, Navigational, Commercial). Second, map out a comprehensive H2-H3 article outline that answers the most critical user search queries.` },
      { title: 'Entity-First Semantic Gap Optimizer', desc: 'Compares drafts against top competitors to identify key semantic entity coverage gaps to satisfy ranking algorithms.', tags: ['Entity SEO', 'Optimization'], code: `Compare the draft [CONTENT_DRAFT] against the primary target query [KEYWORD]. Identify which essential technical or contextual entities, LSI keywords, or adjacent topics are currently missing.` },
    ],
  },
  dev: {
    title: 'AI Prompts for SaaS & Software Dev',
    desc: 'Design system instructions, configure strict constraint guards, and build prompt chains that feed robust LLM software tools.',
    prompts: [
      { title: 'Dynamic Meta-Prompt Instruction Builder', desc: 'Translates brief product goals into complete, highly descriptive system instructions for autonomous LLM agents.', tags: ['Meta-Prompting', 'Agents'], code: `Act as a Meta-Prompt Engineer. Your task is to take a raw user goal: '[GOAL]' and transform it into a highly detailed system instruction for an autonomous LLM agent. Break your output into five blocks: 1. Core Mandates, 2. Interactive Role, 3. Input Validation Rules, 4. Step-by-Step Chain of Thought, 5. Output Constraints.` },
      { title: 'Few-Shot JSON Parser Constraint Guard', desc: 'Constructs highly predictable system instructions that strictly return formatted, schema-compliant JSON payloads.', tags: ['Structured Output', 'SaaS API'], code: `You are an API processing node. Output raw JSON and absolutely zero markdown wraps. Your response must strictly match the schema [JSON_SCHEMA]. If the input is invalid, return a standard error JSON object.` },
    ],
  },
}

const tabs = [
  { id: 'hr', label: 'HR & Recruiting' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'creators', label: 'Course Creators' },
  { id: 'seo', label: 'SEO & Content' },
  { id: 'dev', label: 'SaaS & Dev' },
]

export default function Category() {
  const { catId } = useParams()
  const [activeCat, setActiveCat] = useState(catId || 'hr')

  useEffect(() => { setActiveCat(catId || 'hr') }, [catId])

  const data = allData[activeCat]
  if (!data) return null

  return (
    <>
      <Nav />
      <main id="content">
        <section className="category-header" style={{ paddingBlock: 'var(--gap-xl)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <p className="eyebrow">Playbook Niches</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              margin: '0 0 var(--gap-sm)', fontWeight: 600,
            }}>{data.title}</h1>
            <p style={{ fontSize: 16, color: 'var(--fg-2)', maxWidth: '70ch', margin: 0 }}>{data.desc}</p>
          </div>
        </section>

        <div className="container">
          <div style={{
            display: 'flex', borderBottom: '1px solid var(--border)',
            gap: 'var(--gap-lg)', paddingBlock: 16, overflowX: 'auto',
          }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveCat(t.id)}
                style={{
                  background: 'none', border: 'none', color: activeCat === t.id ? 'var(--fg)' : 'var(--fg-2)',
                  paddingBlock: 8, fontSize: 14, fontWeight: 500,
                  position: 'relative', cursor: 'pointer', whiteSpace: 'nowrap',
                  borderBottom: activeCat === t.id ? '2px solid var(--fg)' : '2px solid transparent',
                  marginBottom: -17,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="prompts-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--gap-lg)', paddingBlock: 'var(--gap-lg)',
          }}>
            {data.prompts.map(p => (
              <PromptCard key={p.title} prompt={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function PromptCard({ prompt: p }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`prompt-card${expanded ? ' expanded' : ''}`} style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
      display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)',
      transition: 'all 200ms cubic-bezier(0.2, 0, 0, 1)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--gap-md)' }}>
        <div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
            {p.tags.map(t => <span key={t} className="tag highlight">{t}</span>)}
          </div>
          {p.hasDetail ? (
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 var(--gap-xs)' }}>
              <Link to="/prompt/job-desc" style={{ color: 'inherit' }}>{p.title}</Link>
            </h3>
          ) : (
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 var(--gap-xs)' }}>{p.title}</h3>
          )}
        </div>
      </div>
      <p style={{ color: 'var(--fg-2)', fontSize: 14, margin: 0, minHeight: 44 }}>{p.desc}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', background: 'none', border: 'none', color: 'var(--accent)',
          fontSize: 13, fontWeight: 500, padding: '8px 0',
          borderTop: '1px solid var(--border-soft)', cursor: 'pointer',
        }}
      >
        <span>{expanded ? 'Hide Prompt Code' : 'Show Complete Prompt'}</span>
        <svg className="expand-icon" style={{
          width: 16, height: 16, transition: 'transform 200ms cubic-bezier(0.2, 0, 0, 1)',
          transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
        }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {expanded && (
        <div style={{
          background: '#000000', border: '1px solid var(--border)',
          borderRadius: 'var(--radius)', padding: 'var(--gap-md)',
        }}>
          <pre style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, color: '#a2a2a2',
            margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6,
          }}>{p.code}</pre>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--gap-sm)' }}>
            <CopyBtn text={p.code} label="Copy Code" />
          </div>
        </div>
      )}
    </div>
  )
}
