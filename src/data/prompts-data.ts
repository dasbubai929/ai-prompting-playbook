export interface Prompt {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  promptText: string;
  tags: string[];
  trending: boolean;
  date: string;
}

export const prompts: Prompt[] = [
  {
    id: 'job-description',
    title: 'Legally Compliant Job Description Prompt',
    slug: 'legally-compliant-job-description',
    description: 'Generate inclusive, legally compliant job descriptions that attract diverse talent while avoiding bias.',
    category: 'hr-recruiting',
    tags: ['job-descriptions', 'compliance', 'diversity', 'hiring'],
    trending: true,
    date: '2026-01-15',
    promptText: `You are an expert HR copywriter with deep knowledge of employment law and inclusive hiring practices.

Write a comprehensive job description for the following role:

**Role:** {{ROLE_TITLE}}
**Department:** {{DEPARTMENT}}
**Location:** {{LOCATION}}
**Experience Level:** {{LEVEL}}

Structure your response with these sections:
1. **About Us** – 2-3 sentences about the company mission and culture
2. **The Opportunity** – What makes this role exciting and impactful
3. **Responsibilities** – 5-8 bullet points of key duties
4. **Requirements** – Distinguish between "Required" and "Nice to Have"
5. **Benefits** – Highlight 4-5 key perks
6. **Equal Opportunity Statement** – Include a standard EOE clause

Guidelines:
- Use gender-neutral language throughout (avoid "he/she", use "you" or "they")
- Focus on skills and competencies rather than years of experience where possible
- Remove any overt or subtle bias indicators (age, gender, ethnicity cues)
- Avoid using "rockstar", "ninja", "guru" or similar loaded terms
- List only bona fide occupational qualifications
- Ensure all requirements are directly job-relevant
- Use active voice and inclusive terminology`,
  },
  {
    id: 'interview-questions',
    title: 'Behavioral Interview Question Generator',
    slug: 'behavioral-interview-questions',
    description: 'Create structured behavioral interview questions aligned with your company values and role competencies.',
    category: 'hr-recruiting',
    tags: ['interviewing', 'behavioral', 'assessment', 'hiring'],
    trending: true,
    date: '2026-01-20',
    promptText: `You are an experienced talent assessment specialist. Generate a set of behavioral interview questions for a candidate interview.

**Role:** {{ROLE_TITLE}}
**Core Competencies:** {{COMPETENCIES}}
**Company Values:** {{VALUES}}

Generate 8 questions using the STAR method framework:

1. For each question, include:
   - The core competency being assessed
   - The question prompt
   - What to listen for in the response (ideal indicators)
   - Potential red flags

2. Cover these competency areas:
   - Problem-solving & analytical thinking
   - Collaboration & teamwork
   - Communication skills
   - Adaptability & resilience
   - Leadership potential (if applicable)
   - Technical competence (role-specific)
   - Cultural contribution (not "fit")
   - Growth mindset

3. Provide a scoring rubric for each question:
   - **Strong:** Candidate demonstrates clear ownership, specific actions, and measurable results
   - **Adequate:** Candidate shows reasonable involvement with some specifics
   - **Weak:** Vague responses, lack of personal contribution, or hypothetical answers`,
  },
  {
    id: 'linkedin-profile',
    title: 'LinkedIn Profile Optimization Prompt',
    slug: 'linkedin-profile-optimization',
    description: 'Transform any LinkedIn profile into a personal brand magnet that attracts recruiters and opportunities.',
    category: 'hr-recruiting',
    tags: ['linkedin', 'personal-branding', 'career', 'recruiting'],
    trending: false,
    date: '2026-02-01',
    promptText: `You are a LinkedIn profile optimization expert. Help me rewrite my LinkedIn profile to attract recruiters and showcase my professional brand.

**Current Headline:** {{HEADLINE}}
**Current About Section:** {{ABOUT}}
**Current Experience:** {{EXPERIENCE}}

Please optimize:

1. **Headline** – Create 5 headline options that go beyond just a job title. Include keywords recruiters search for in my field.

2. **About Section** – Write a compelling narrative that:
   - Opens with a hook that captures attention in the first 2 lines
   - States my unique value proposition
   - Provides proof through specific results and metrics
   - Ends with a clear call-to-action
   - Is optimized for SEO (naturally include industry keywords)
   - Keeps paragraphs under 3 sentences for skimmability

3. **Experience Descriptions** – For each role, rewrite bullet points to follow this formula:
   - Action verb + specific task + measurable result using this format:
   - "Spearheaded X initiative that resulted in Y% improvement in Z metric"
   - Include tools, methodologies, and technologies where relevant
   - Quantify outcomes whenever possible (%, $, time saved, scale)

4. **Skills Section** – Suggest a reordered top 10 skills that match recruiter search patterns

5. **Featured Section** – Recommend 3 types of content to showcase`,
  },
  {
    id: 'social-media-content',
    title: 'Multi-Platform Social Media Content Calendar',
    slug: 'social-media-content-calendar',
    description: 'Generate a month of platform-specific social media content aligned to your brand voice and marketing goals.',
    category: 'digital-marketing',
    tags: ['social-media', 'content-calendar', 'scheduling', 'branding'],
    trending: true,
    date: '2026-01-18',
    promptText: `You are a senior social media strategist with proven track record of growing brand engagement.

Create a 30-day social media content calendar for:

**Brand/Industry:** {{BRAND}}
**Target Audience:** {{AUDIENCE}}
**Primary Goal:** {{GOAL}}
**Platforms:** {{PLATFORMS}}
**Brand Voice:** {{VOICE}}

Structure your response:

1. **Content Mix Framework** (percentages):
   - Educational content: __%
   - Entertaining content: __%
   - Promotional content: __%
   - Community-building content: __%
   - User-generated content: __%

2. **Weekly Content Plan** (per platform):
   For each week, provide:
   - Day-by-day post ideas
   - Platform-specific format (Reels, Carousel, Single Image, Text, Story)
   - Suggested visual direction
   - Hashtag strategy (primary + niche tags)
   - Best posting time

3. **Weekly Theme Schedule**:
   - Week 1: {{THEME_1}}
   - Week 2: {{THEME_2}}
   - Week 3: {{THEME_3}}
   - Week 4: {{THEME_4}}

4. **Engagement Strategy**:
   - daily engagement actions
   - Community management guidelines
   - Response templates for common comments/questions

5. **Measurement KPIs**:
   - Key metrics per platform
   - Benchmark targets`,
  },
  {
    id: 'ad-copy',
    title: 'High-Converting Ad Copy Suite',
    slug: 'high-converting-ad-copy',
    description: 'Generate multiple ad variations for different platforms and funnel stages.',
    category: 'digital-marketing',
    tags: ['advertising', 'copywriting', 'conversion', 'ppc'],
    trending: true,
    date: '2026-01-25',
    promptText: `You are a direct-response copywriter who has generated millions in revenue through high-converting ad campaigns.

Create a complete ad copy suite for:

**Offer:** {{OFFER}}
**Target Audience:** {{AUDIENCE}}
**Unique Value Proposition:** {{UVP}}
**Objections:** {{OBJECTIONS}}
**Platforms:** {{PLATFORMS}}

Generate the following:

1. **Headline Options** (10 variants):
   - 3 curiosity-gap headlines
   - 3 benefit-driven headlines
   - 2 problem-agitation headlines
   - 2 social-proof headlines

2. **Primary Ad Copy** (3 versions):
   - Version A: Problem → Solution → Proof → CTA
   - Version B: Story → Bridge → Offer → CTA
   - Version C: Social Proof → Features → Scarcity → CTA

3. **CTA Variations** (8 options):
   - 2 soft CTAs (awareness stage)
   - 3 medium CTAs (consideration stage)
   - 3 hard CTAs (conversion stage)

4. **Platform-Specific Adaptations**:
   - Instagram: Hook + body + CTA (max 150 chars)
   - LinkedIn: Professional tone + industry stats + CTA
   - Google Ads: Keyword-rich headline + description (max 90 chars)
   - TikTok: Script format with hook pattern

5. **A/B Testing Framework**:
   - What to test first (headline, offer angle, CTA)
   - Minimum sample size per variant
   - Success criteria`,
  },
  {
    id: 'email-campaign',
    title: 'Drip Email Campaign Architect',
    slug: 'drip-email-campaign-architect',
    description: 'Design a complete automated email nurture sequence that converts subscribers into customers.',
    category: 'digital-marketing',
    tags: ['email-marketing', 'automation', 'nurture', 'conversion'],
    trending: false,
    date: '2026-02-05',
    promptText: `You are an email marketing specialist who builds automated sequences that consistently generate 30%+ open rates and 5%+ click-through rates.

Design a complete drip email campaign for:

**Product/Service:** {{PRODUCT}}
**Target Audience:** {{AUDIENCE}}
**Lead Magnet / Trigger:** {{TRIGGER}}
**Sales Cycle Length:** {{CYCLE_DAYS}} days

Sequence Structure:

1. **Welcome Series** (Days 1-5):
   - Email 1: Immediate delivery + set expectations
   - Email 2: Story/Origin → Build connection
   - Email 3: Value-first content (educational)
   - Email 4: Social proof (testimonials, case studies)
   - Email 5: Soft transition → first low-friction offer

2. **Nurture Series** (Days 6-20):
   - 2 educational value emails per week
   - 1 use case / application email per week
   - 1 social proof / case study email per week
   - Spacing every 48-72 hours

3. **Conversion Series** (Days 21-{{CYCLE_DAYS}}):
   - Scarcity/urgency email
   - Feature deep-dive email
   - Objection-killer email
   - Final offer / "Breakup" email

For each email provide:
- Subject line (3 options)
- Preview text
- Body copy
- CTA button text and link type
- Personalization tokens`,
  },
  {
    id: 'course-outline',
    title: 'Complete Course Curriculum Designer',
    slug: 'course-curriculum-designer',
    description: 'Design a comprehensive, scaffolded course curriculum from learning objectives to assessment.',
    category: 'course-creators',
    tags: ['curriculum', 'course-design', 'instructional-design', 'elearning'],
    trending: true,
    date: '2026-01-22',
    promptText: `You are an instructional designer with expertise in adult learning theory and curriculum architecture.

Design a complete course curriculum for:

**Course Topic:** {{TOPIC}}
**Target Audience:** {{AUDIENCE}}
**Prerequisites:** {{PREREQUISITES}}
**Desired Outcome:** {{OUTCOME}}
**Course Length:** {{LENGTH}} weeks

Curriculum Architecture:

1. **Course Overview**:
   - High-level description (2-3 sentences)
   - Learning objectives (use Bloom's Taxonomy)
   - Expected time commitment per module

2. **Module Structure** (per week/module):
   For each module, include:
   - Module title and learning objective
   - 3-5 lesson breakdown with:
     - Lesson title
     - Key concepts covered
     - Learning activity type (video, reading, exercise, quiz)
     - Estimated time per lesson
   - Practical exercise or assignment
   - Knowledge check (3-5 self-assessment questions)
   - Resources/references for deeper learning

3. **Capstone Project**:
   - Project description tied to real-world application
   - Milestone breakdown (chunked deliverables)
   - Rubric for assessment

4. **Assessment Strategy**:
   - Formative assessments (quizzes, exercises)
   - Summative assessments (final project)
   - Peer review framework (if applicable)
   - Completion criteria`,
  },
  {
    id: 'video-script',
    title: 'Educational Video Script Template',
    slug: 'educational-video-script',
    description: 'Create engaging, structured video scripts optimized for learning retention and audience engagement.',
    category: 'course-creators',
    tags: ['video-production', 'script-writing', 'engagement', 'teaching'],
    trending: false,
    date: '2026-02-10',
    promptText: `You are a video content strategist specializing in educational content that maximizes viewer retention.

Create a complete video script for:

**Lesson Topic:** {{TOPIC}}
**Target Audience:** {{AUDIENCE}}
**Video Length:** {{LENGTH}} minutes
**Learning Objective:** {{OBJECTIVE}}
**Format:** {{FORMAT}} (talking head, screencast, interview, hybrid)

Script Structure:

1. **Hook** (0:00-0:30):
   - Attention grabber (question, statistic, or problem statement)
   - Why this matters now
   - Preview of what they will learn

2. **Context Setup** (0:30-1:30):
   - Prerequisite knowledge recap (if any)
   - Real-world scenario or problem
   - What success looks like after this video

3. **Core Content** (1:30 to LENGTH-1:00):
   Break into segments:
   - Segment 1: Key concept explained (with visual aid suggestion)
   - Segment 2: Demonstration or example (screen share or case study)
   - Segment 3: Common mistakes or edge cases
   - Segment 4: Pro tip or advanced technique

4. **Recap & CTA** (last 60 seconds):
   - Summary of 3 key takeaways
   - "Your turn" action prompt
   - What to watch next
   - Like/subscribe/comment prompt

For each scene specify:
- Visual description
- On-screen text/graphics
- Audio notes (tone, pace, emphasis points)
- B-roll suggestions`,
  },
  {
    id: 'seo-strategy',
    title: 'Comprehensive SEO Strategy Blueprint',
    slug: 'seo-strategy-blueprint',
    description: 'Build a data-driven SEO strategy with keyword clusters, content pillars, and technical audits.',
    category: 'seo-content',
    tags: ['seo', 'strategy', 'keyword-research', 'content-planning'],
    trending: true,
    date: '2026-01-28',
    promptText: `You are an SEO strategist with deep expertise in search algorithms, content optimization, and technical SEO.

Create a comprehensive SEO strategy for:

**Website:** {{WEBSITE}}
**Primary Niche:** {{NICHE}}
**Competitors:** {{COMPETITORS}}
**Current Traffic:** {{CURRENT_TRAFFIC}}
**Goal:** {{GOAL}}

Strategy Components:

1. **Keyword Research & Clustering**:
   - Identify 5 pillar topics with supporting cluster keywords
   - For each cluster:
     - 1 head term (high volume, high competition)
     - 3-5 body terms (medium volume/competition)
     - 5-10 long-tail terms (low competition, high intent)
   - Search intent categorization (informational, navigational, transactional, commercial)

2. **Content Pillar Architecture**:
   - Pillar page structure and internal linking strategy
   - Cluster content topics and publication cadence
   - Content gap analysis vs. competitors

3. **Technical SEO Audit Priorities**:
   - Core Web Vitals optimization path
   - Site structure and URL hierarchy
   - Schema markup opportunities
   - Mobile usability issues

4. **On-Page Optimization Framework**:
   - Title tag formula (primary keyword + value prop + brand)
   - Meta description structure
   - H1-H4 hierarchy rules
   - Image optimization standards
   - Internal linking density guidelines

5. **Link Building Strategy**:
   - Digital PR opportunities
   - Guest posting targets
   - Broken link building approach
   - Resource page outreach

6. **Measurement & KPIs**:
   - Monthly tracking framework
   - Rank tracking setup
   - Conversion tracking from organic traffic`,
  },
  {
    id: 'blog-post-seo',
    title: 'SEO-Optimized Blog Post Generator',
    slug: 'seo-optimized-blog-post',
    description: 'Write a fully optimized blog post that ranks while delivering genuine value to readers.',
    category: 'seo-content',
    tags: ['blogging', 'seo', 'content-writing', 'optimization'],
    trending: false,
    date: '2026-02-08',
    promptText: `You are a senior content writer who creates blog posts that consistently rank on page 1 of Google.

Write a complete SEO-optimized blog post for:

**Target Keyword:** {{KEYWORD}}
**Secondary Keywords:** {{SECONDARY_KEYWORDS}}
**Target Audience:** {{AUDIENCE}}
**Search Intent:** {{INTENT}}
**Word Count:** {{WORDS}} words

Post Structure:

1. **Meta Data**:
   - SEO Title (60 chars max, includes primary keyword)
   - Meta Description (155 chars max, includes CTA)
   - URL Slug
   - Focus keyphrase

2. **Introduction**:
   - Hook that addresses the search intent
   - Problem statement
   - What the reader will learn
   - Quick wins preview (bullet list of takeaways)

3. **Body Sections** (using H2 and H3 hierarchy):
   - Section 1: Foundational context (answers "what" and "why")
   - Section 2: Step-by-step guidance (answers "how")
   - Section 3: Advanced strategies or edge cases
   - Section 4: Common mistakes to avoid
   - Section 5: Expert tips or pro framework

4. **SEO Optimization**:
   - Include primary keyword in: H1, first 100 words, at least one H2, conclusion
   - Naturally integrate secondary keywords throughout
   - Include LSI keywords and semantic variations
   - Add internal linking opportunities ({{INTERNAL_LINKS}})
   - Suggest external authoritative sources to reference

5. **Formatting for Readability**:
   - Short paragraphs (2-3 sentences max)
   - Bullet points and numbered lists
   - Bold key phrases for skimmers
   - Table for comparison data (if applicable)

6. **Conclusion**:
   - Summarize 3 main takeaways
   - Include explicit CTA
   - Open-ended question for comments`,
  },
  {
    id: 'api-design',
    title: 'RESTful API Design Specification',
    slug: 'restful-api-design-spec',
    description: 'Design a production-grade RESTful API with best practices for security, scalability, and developer experience.',
    category: 'saas-dev',
    tags: ['api', 'rest', 'backend', 'architecture'],
    trending: true,
    date: '2026-01-30',
    promptText: `You are a senior API architect with experience designing APIs that serve millions of requests.

Design a complete RESTful API specification for:

**Service:** {{SERVICE_NAME}}
**Domain:** {{DOMAIN}}
**Core Entities:** {{ENTITIES}}
**Auth Requirements:** {{AUTH}}
**Expected Scale:** {{SCALE}}

Specification Components:

1. **API Design Principles**:
   - Naming conventions (noun-based, pluralized resources)
   - Versioning strategy (URL vs. header)
   - Pagination approach (cursor vs. offset)
   - Error format standard (RFC 7807 Problem Details)

2. **Endpoint Definitions**:
   For each endpoint provide:
   - HTTP method and URL pattern
   - Request/response schemas (JSON)
   - Required and optional parameters
   - Success and error response examples
   - Rate limiting per endpoint
   - Idempotency guarantees

3. **Authentication & Authorization**:
   - Auth flow diagram (text-based)
   - Token structure and expiration policy
   - Permission scopes and RBAC model
   - API key management

4. **Error Handling**:
   - Complete error code catalog
   - Consistent error response structure
   - Retry logic recommendations
   - Debugging headers (request IDs, timestamps)

5. **Performance & Caching**:
   - Cache headers strategy
   - ETag and conditional requests
   - Database indexing recommendations
   - Connection pooling guidelines

6. **Documentation & SDK**:
   - OpenAPI/Swagger annotation guidelines
   - Postman collection structure
   - Code example format (curl, Python, Node.js)`,
  },
  {
    id: 'code-review',
    title: 'Automated Code Review Prompt',
    slug: 'automated-code-review',
    description: 'Get comprehensive code reviews focused on security, performance, maintainability, and best practices.',
    category: 'saas-dev',
    tags: ['code-review', 'best-practices', 'quality', 'devops'],
    trending: false,
    date: '2026-02-12',
    promptText: `You are a senior software engineer conducting a thorough code review.

Review the following code:

**Language:** {{LANGUAGE}}
**Framework/Library:** {{FRAMEWORK}}
**Purpose:** {{PURPOSE}}
**File:** {{FILENAME}}

\`\`\`{{LANGUAGE}}
{{CODE}}
\`\`\`

Review the code across these dimensions:

1. **Security**:
   - SQL injection prevention
   - XSS protection
   - Authentication/authorization checks
   - Secrets management
   - Input validation and sanitization
   - CSRF protection

2. **Performance**:
   - Algorithm complexity (Big O analysis)
   - N+1 query detection
   - Caching opportunities
   - Memory management
   - Async/blocking issues
   - Lazy loading potential

3. **Maintainability**:
   - Naming conventions and clarity
   - Function length and responsibility
   - DRY violations
   - Comment quality (what vs. why)
   - Test coverage gaps
   - Error handling completeness

4. **Best Practices**:
   - Framework idiomatic usage
   - SOLID principles adherence
   - Design pattern appropriateness
   - Type safety (if applicable)
   - Dependency management

5. **Specific Recommendations**:
   For each issue found, provide:
   - Line reference
   - Priority (Critical/Major/Minor)
   - Explanation of the issue
   - Code example of the fix
   - Reason for the recommendation`,
  },
  {
    id: 'performance-audit',
    title: 'SaaS Performance Optimization Plan',
    slug: 'saas-performance-optimization',
    description: 'Systematic performance audit and optimization strategy for SaaS applications.',
    category: 'saas-dev',
    tags: ['performance', 'optimization', 'infrastructure', 'scaling'],
    trending: false,
    date: '2026-02-15',
    promptText: `You are a site reliability engineer specializing in SaaS application performance optimization.

Create a performance optimization plan for:

**Application Type:** {{APP_TYPE}}
**Tech Stack:** {{STACK}}
**Current Issues:** {{ISSUES}}
**Traffic Patterns:** {{TRAFFIC}}
**Infrastructure:** {{INFRASTRUCTURE}}

Optimization Plan:

1. **Frontend Performance**:
   - Core Web Vitals assessment and targets
   - Bundle splitting strategy
   - Image optimization pipeline
   - Font loading optimization
   - Critical CSS extraction
   - Lazy loading implementation plan
   - CDN configuration recommendations

2. **Backend Performance**:
   - Database query profiling
   - Caching layer design (Redis/Memcached)
   - Connection pooling optimization
   - Queue system for async tasks
   - API response compression
   - Horizontal scaling triggers

3. **Database Optimization**:
   - Index analysis and recommendations
   - Query optimization patterns
   - Read replica strategy
   - Connection management
   - Migration performance guidelines

4. **Infrastructure Scaling**:
   - Auto-scaling rules
   - Load balancer configuration
   - Container resource limits
   - Cold start mitigation (if serverless)
   - Regional deployment strategy

5. **Monitoring & Alerting**:
   - Key performance metrics to track
   - Alert thresholds and severity levels
   - Dashboard setup recommendations
   - Synthetic monitoring for critical paths

6. **Optimization Implementation Roadmap**:
   - Quick wins (week 1)
   - Medium-term improvements (month 1)
   - Long-term architecture changes (quarter 1+)`,
  },
];
