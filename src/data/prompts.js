export const prompts = [
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
    text: 'You are an expert HR compliance attorney and senior technical recruiter. Write a comprehensive, bias-free, and legally compliant job description for a [ROLE] based in [LOCATION]. Ensure it complies strictly with equal opportunity employment guidelines, avoids gendered or ageist language, explicitly calls out salary range transparency as required by local laws, and formats requirements into Must-Haves and Nice-to-Haves. Keep the tone professional, inclusive, and exciting.',
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
    text: 'Act as a Meta-Prompt Engineer. Your task is to take a raw user goal: [GOAL] and transform it into a highly detailed system instruction for an autonomous LLM agent. Break your output into five blocks: 1. Core Mandates, 2. Interactive Role, 3. Input Validation Rules, 4. Step-by-Step Chain of Thought, 5. Output Constraints. Use markdown blocks, preserve variable brackets like {{user_input}}, and optimize for strict instruction adherence.',
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
    text: 'You are an expert SEO strategist. Analyze the target keyword [KEYWORD] and the target audience [AUDIENCE]. First, identify the dominant search intent. Second, map out a comprehensive H2-H3 article outline. Third, specify 5 key semantic secondary entities that must be woven into each section to satisfy ranking engines.',
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
    text: 'Design a comprehensive course curriculum for teaching [TOPIC] to [AUDIENCE LEVEL]. Structure into 4 progressive modules: 1. Foundational Theory, 2. Guided Practice, 3. Real-World Case Analysis, 4. Capstone Project. For each module, define explicit learning objectives and specify one major interactive challenge.',
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
    text: 'Apply the Problem-Agitate-Solve (PAS) copywriting framework to pitch the product [PRODUCT] to the specific persona [TARGET_PERSONA]. Block 1: Clearly articulate the daily frustration. Block 2: Build emotional intensity by highlighting compounding costs. Block 3: Present the product as the optimal, friction-free relief.',
  },
]

export const categories = [
  { id: 'all', label: 'All Niches' },
  { id: 'hr', label: 'HR & Recruiting' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'creators', label: 'Course Creators' },
  { id: 'seo', label: 'SEO & Content' },
  { id: 'dev', label: 'SaaS & Dev' },
]

export const promptsByCategory = {}
prompts.forEach(p => {
  if (!promptsByCategory[p.cat]) promptsByCategory[p.cat] = []
  promptsByCategory[p.cat].push(p)
})
