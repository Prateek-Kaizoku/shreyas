      // ── Deck data ──────────────────────────────────────────────────
      const DECKS = [
        {
          title: "Deck 1 · Dashboard & Competitive Analysis",
          color: "#C8972A",
          slides: [
            {
              type: "cover",
              eyebrow: "Deck 01 of 04 · Projects 1 & 2",
              title: "Dashboard &\n<em>Competitive Intelligence</em>",
              sub: "How they were built, what they demonstrate, and why they matter for pre-sales hiring managers.",
              author:
                "Shreyas Singh · IIM MBA · Pre-Sales & IT Solutions · 2026",
            },
            {
              type: "stats",
              tag: "PROJECT 01 · TERRITORY PERFORMANCE DASHBOARD",
              title: "Tata Motors — Haryana Territory KPIs",
              stats: [
                {
                  n: "#1",
                  l: "National VAS Rank",
                  s: "Tata Motors nationwide",
                },
                {
                  n: "21%",
                  l: "Lead Conversion Lift",
                  s: "Via digital tool adoption",
                },
                { n: "3", l: "Dealerships Tracked", s: "Haryana region" },
                {
                  n: "4",
                  l: "Chart Types Built",
                  s: "Bar, Line, Donut, Funnel",
                },
              ],
            },
            {
              type: "dark",
              tag: "PROJECT 01 · HOW IT WAS BUILT",
              title: "Design Decisions & Architecture",
              cards: [
                {
                  icon: "📊",
                  title: "Data Architecture",
                  body: "All KPI data stored in JS objects — monthly arrays for units, market share, VAS, digital adoption — mirroring how a real territory manager tracks performance.",
                  accent: "gold",
                },
                {
                  icon: "🔄",
                  title: "Interactivity",
                  body: "Quarter filter buttons dynamically update all KPI headlines. Chart.js renders from the same underlying dataset — consistent with real BI tools.",
                  accent: "blue",
                },
                {
                  icon: "🎨",
                  title: "Visual Design",
                  body: "Dark theme mirrors professional analytics tools (Looker, Tableau). Gold accent matches Tata Motors brand tone. Animated progress bars for engagement.",
                  accent: "green",
                },
                {
                  icon: "💡",
                  title: "What It Proves",
                  body: "Ability to design data viz tools — directly relevant to pre-sales engineers who demo dashboards and BDs who build territory reporting for management.",
                  accent: "purple",
                },
              ],
            },
            {
              type: "ach",
              tag: "PROJECT 02 · CPAAS INDIA COMPETITIVE ANALYSIS",
              title: "$1.28B India CPaaS Market — Research-Backed",
              tiles: [
                {
                  n: "$1.28B",
                  label: "India CPaaS\nMarket 2026",
                  sub: "Mordor Intelligence",
                },
                {
                  n: "13%",
                  label: "CAGR\n2026–2031",
                  sub: "Growing to $2.36B",
                },
                {
                  n: "6",
                  label: "Competitors\nAnalysed",
                  sub: "Full profile + score",
                },
                {
                  n: "5",
                  label: "Sales\nBattlecards",
                  sub: "Head-to-head positioning",
                },
              ],
            },
            {
              type: "battle",
              tag: "PROJECT 02 · SALES BATTLECARDS",
              title: "Head-to-Head Competitor Positioning",
              rows: [
                {
                  co: "Tanla Platforms",
                  their: "Market leader, most trusted by banks",
                  ours: "Market share ≠ right fit. CERF's consent management goes deeper than Tanla's SMS volume play.",
                },
                {
                  co: "Gupshup",
                  their: "Best WhatsApp & conversational AI",
                  ours: "Conversational is one layer. Enterprises need consent, compliance, and identity together.",
                },
                {
                  co: "Route Mobile",
                  their: "Global carrier network, highest deliverability",
                  ours: "Deliverability is a commodity. VSPAGY personalized video creates engagement post-send.",
                },
                {
                  co: "Infobip",
                  their: "Most complete omnichannel platform globally",
                  ours: "Global completeness at 3–5x the cost. CERF delivers enterprise-grade at India-right pricing.",
                },
              ],
            },
            {
              type: "cta",
              eyebrow: "WHY THESE PROJECTS MATTER",
              title: "What a Hiring Manager Sees",
              quote:
                "The candidate who builds a #1 national ranked KPI dashboard and a research-backed competitive analysis before being asked — doesn't need training. They're ready.",
              items: [
                {
                  title: "Real Data",
                  body: "#1 VAS ranking, 21% conversion improvement — not invented metrics. Shows you understand real sales KPIs.",
                },
                {
                  title: "Battlecard Competence",
                  body: "Battlecards are used in every enterprise IT pursuit. Having one built for a real market signals Day 1 readiness.",
                },
                {
                  title: "Built It Yourself",
                  body: "Not a template. Every line coded from scratch. Demonstrates initiative — the same mindset that drives territory growth.",
                },
                {
                  title: "Research Discipline",
                  body: "Triangulating Mordor Intelligence, Gartner, and public filings shows intellectual rigour beyond Googling competitors.",
                },
              ],
            },
          ],
        },
        {
          title: "Deck 2 · GTM Strategy & Customer Success",
          color: "#10B981",
          slides: [
            {
              type: "cover",
              eyebrow: "Deck 02 of 04 · Projects 3 & 4",
              title: "GTM Strategy &\n<em>Customer Success</em>",
              sub: "A go-to-market playbook for enterprise CPaaS and a structured customer success framework for SaaS onboarding.",
              author:
                "Shreyas Singh · IIM MBA · Pre-Sales & IT Solutions · 2026",
            },
            {
              type: "stats",
              tag: "PROJECT 03 · GTM PLAYBOOK — BFSI VERTICAL",
              title: "Enterprise CPaaS Go-to-Market Strategy",
              stats: [
                {
                  n: "$410M",
                  l: "BFSI Vertical TAM",
                  s: "32% of India CPaaS market",
                },
                {
                  n: "4",
                  l: "ICP Segments",
                  s: "Banks, NBFCs, Insurance, Fintech",
                },
                {
                  n: "90",
                  l: "Day Outreach Cycle",
                  s: "8-step enterprise sales motion",
                },
                {
                  n: "₹12Cr",
                  l: "Pipeline Target",
                  s: "90-day qualified pipeline",
                },
              ],
            },
            {
              type: "steps",
              tag: "PROJECT 03 · 90-DAY OUTREACH SEQUENCE",
              title: "8-Step Enterprise Sales Motion — Discovery to Close",
              steps: [
                {
                  num: "Day 1 · Step 1",
                  title: "LinkedIn Connection",
                  body: "Connect with CTO/VP-Digital. Frame as a peer conversation about RBI compliance, not a pitch.",
                },
                {
                  num: "Day 4 · Step 2",
                  title: "Value-First Email",
                  body: "Share RBI consent management insight PDF. No product. Position as a knowledgeable peer.",
                },
                {
                  num: "Day 10 · Step 3",
                  title: "Case Study",
                  body: "NBFC compliance case study — 60% risk reduction. Ask for 20-min discovery call.",
                },
                {
                  num: "Day 18 · Step 4",
                  title: "Discovery Call",
                  body: "5 questions. Listen 80%. Capture pain, budget cycle, decision criteria.",
                },
                {
                  num: "Day 25 · Step 5",
                  title: "Tailored Demo",
                  body: "Problem-first. Show consent flow first (compliance driver). Then VSPAGY video.",
                },
                {
                  num: "Day 35 · Step 6",
                  title: "Proposal + ROI",
                  body: "Custom ROI model — compliance risk cost, automation savings, video engagement uplift.",
                },
                {
                  num: "Day 60 · Step 7",
                  title: "Paid Pilot",
                  body: "6-week POC on one use case. Weekly check-in. Build internal champion mid-pilot.",
                },
                {
                  num: "Day 90 · Step 8",
                  title: "Close",
                  body: "Pilot results vs benchmarks. Full platform deal with phased rollout.",
                },
              ],
            },
            {
              type: "dark",
              tag: "PROJECT 04 · CUSTOMER SUCCESS PLAYBOOK",
              title: "5 Core Frameworks Built Into the Playbook",
              cards: [
                {
                  icon: "🚀",
                  title: "Onboarding Checklist",
                  body: "Day 1/Week 1/Month 1 — 18 action items covering kickoff, technical setup, go-live, and 30-day review. Standard enterprise SaaS CSM workflow.",
                  accent: "gold",
                },
                {
                  icon: "📊",
                  title: "Health Score Dashboard",
                  body: "4-metric model: Platform Usage, Support Tickets, NPS Score, Contract Utilisation. Color-coded Healthy/Monitor/At-Risk status.",
                  accent: "blue",
                },
                {
                  icon: "🚨",
                  title: "Escalation Matrix",
                  body: "6-scenario SEV1–SEV3 matrix with trigger conditions, response times, owners, and resolution targets. Based on ITIL frameworks.",
                  accent: "green",
                },
                {
                  icon: "💡",
                  title: "Upsell Trigger System",
                  body: "5 trigger signals: volume threshold, success milestone, QBR insight, renewal window, expansion event. Each linked to a specific sales action.",
                  accent: "purple",
                },
              ],
            },
            {
              type: "win",
              tag: "WHY PROJECTS 3 & 4 MATTER",
              title: "The Business Argument for Pre-Sales Hiring Managers",
              themes: [
                {
                  num: "01",
                  title: "GTM Playbook",
                  body: "Proves you understand the full sales motion — from market sizing to deal close. Most pre-sales candidates can pitch a product. Few can build the framework for how it gets sold.",
                },
                {
                  num: "02",
                  title: "90-Day Sequence",
                  body: "Shows you've internalised enterprise SaaS sales methodology. This is exactly what a pre-sales lead builds when entering a new vertical. No training required.",
                },
                {
                  num: "03",
                  title: "CS Playbook",
                  body: "Customer success and pre-sales are increasingly unified in enterprise SaaS. Understanding the post-sale journey means you sell with long-term value in mind.",
                },
                {
                  num: "04",
                  title: "Email Templates",
                  body: "Writing effective stakeholder emails at each sales stage is a daily pre-sales skill. Having templates ready shows professional maturity.",
                },
              ],
            },
            {
              type: "cta",
              eyebrow: "DECK 2 SUMMARY",
              title: "Together They Cover the Entire Sales Lifecycle",
              quote:
                "From entering a new vertical (GTM) to onboarding the client (CS Playbook) — these two projects show you understand both sides of the commercial equation.",
              items: [
                {
                  title: "Market Entry Strategy",
                  body: "ICP definition, outreach sequence, win themes, and pipeline targets.",
                },
                {
                  title: "Client Lifecycle Framework",
                  body: "Day 1 onboarding through Year 1 renewal — structured and systematic.",
                },
                {
                  title: "Revenue Methodology",
                  body: "How to find the customer, convert them, and keep them growing.",
                },
                {
                  title: "Vertical Depth — BFSI",
                  body: "The largest CPaaS and cloud market in India. Specialisation is a hiring differentiator.",
                },
              ],
            },
          ],
        },
        {
          title: "Deck 3 · AI Business Case & RFP Response",
          color: "#2563EB",
          slides: [
            {
              type: "cover",
              eyebrow: "Deck 03 of 04 · Projects 5 & 6",
              title: "AI Business Case &\n<em>RFP Response</em>",
              sub: "A financial model for AI-powered CRM adoption and a 15-page enterprise cloud migration bid document.",
              author:
                "Shreyas Singh · IIM MBA · Pre-Sales & IT Solutions · 2026",
            },
            {
              type: "stats",
              tag: "PROJECT 05 · AI ADOPTION BUSINESS CASE — SALESFORCE EINSTEIN AI",
              title: "3-Year Financial Model — Mid-Size BFSI Bank",
              stats: [
                { n: "284%", l: "3-Year ROI", s: "Conservative case" },
                { n: "14 Mo", l: "Payback Period", s: "From go-live date" },
                { n: "₹22.4Cr", l: "3-Year NPV", s: "At 12% discount rate" },
                {
                  n: "₹4.2Cr",
                  l: "Year 1 Investment",
                  s: "Licences + implementation",
                },
              ],
            },
            {
              type: "roi",
              tag: "PROJECT 05 · ROI MODEL BREAKDOWN",
              title: "Annual Benefit by Category (₹ Crore)",
              rois: [
                { n: "284%", l: "3-Yr ROI", gold: true },
                { n: "14 Mo", l: "Payback" },
                { n: "₹22.4Cr", l: "NPV" },
                { n: "₹4.2Cr", l: "Investment Y1" },
              ],
              bars: [
                {
                  label: "Call Centre Savings",
                  vals: [4.6, 7.4, 8.8],
                  cls: "b1",
                },
                {
                  label: "Cross-Sell Revenue",
                  vals: [3.8, 8.6, 14.2],
                  cls: "b2",
                },
                { label: "Lead Conversion", vals: [2.2, 4.4, 5.8], cls: "b3" },
              ],
            },
            {
              type: "dark",
              tag: "PROJECT 05 · HOW THE BUSINESS CASE WAS BUILT",
              title: "Methodology & Data Sources",
              cards: [
                {
                  icon: "📰",
                  title: "Salesforce Benchmarks",
                  body: "Published Salesforce financial services ROI benchmarks validated the benefit assumptions — call deflection rates, cross-sell improvement, lead conversion lift.",
                  accent: "gold",
                },
                {
                  icon: "📊",
                  title: "RBI & Industry Data",
                  body: "RBI call deflection case studies and McKinsey 2025 India Banking Report provided the BFSI-specific baseline metrics.",
                  accent: "blue",
                },
                {
                  icon: "🔢",
                  title: "Conservative Assumptions",
                  body: "30% call deflection Y1 (not 40%). Cross-sell 3.2% → 5% Y1 (not 8%). Safety margin vs aggressive projections gives CFO-credible numbers.",
                  accent: "green",
                },
                {
                  icon: "💰",
                  title: "Financial Rigour",
                  body: "12% discount rate for NPV — standard for Indian banking capital allocation. Sensitivity analysis available at 8% and 16% for board discussions.",
                  accent: "purple",
                },
              ],
            },
            {
              type: "ach",
              tag: "PROJECT 06 · MOCK RFP RESPONSE — CLOUD MIGRATION",
              title: "15-Page Enterprise Bid Document — ₹14.8 Crore Engagement",
              tiles: [
                {
                  n: "₹14.8Cr",
                  label: "Engagement\nValue",
                  sub: "Azure cloud migration",
                },
                {
                  n: "340",
                  label: "Workloads\nMigrated",
                  sub: "On-premise to Azure",
                },
                {
                  n: "9 Mo",
                  label: "Delivery\nTimeline",
                  sub: "With 6-week buffer",
                },
                { n: "3", label: "Win Themes\nDefined", sub: "BFSI-specific" },
              ],
            },
            {
              type: "cta",
              eyebrow: "PROJECTS 5 & 6 COMBINED VALUE",
              title:
                "Together They Answer the Most Important Interview Question",
              quote:
                "Show me you can build a business case AND write a winning proposal.",
              items: [
                {
                  title: "Financial Modelling",
                  body: "ROI model quantifies value in CFO language. This converts demos into signed contracts.",
                },
                {
                  title: "Bid Management",
                  body: "RFP response shows you understand enterprise procurement — structured documents, win themes, delivery commitments.",
                },
                {
                  title: "BFSI Vertical Depth",
                  body: "Both projects grounded in BFSI — the biggest CPaaS and cloud market in India.",
                },
                {
                  title: "End-to-End Thinking",
                  body: "Business case (why buy) + bid response (why us) = the full pre-sales value chain.",
                },
              ],
            },
          ],
        },
        {
          title: "Deck 4 · Territory Plan & Portfolio Summary",
          color: "#8B5CF6",
          slides: [
            {
              type: "cover",
              eyebrow: "Deck 04 of 04 · Project 7 + Summary",
              title: "Territory Plan &\n<em>Portfolio Summary</em>",
              sub: "A 90-day sales territory plan for the Noida/NCR IT corridor and a full overview of all 7 portfolio projects.",
              author:
                "Shreyas Singh · IIM MBA · Pre-Sales & IT Solutions · 2026",
            },
            {
              type: "stats",
              tag: "PROJECT 07 · TERRITORY MICRO-MARKET PLAN — NOIDA / DELHI NCR",
              title: "90-Day IT Solutions Sales Plan — Key Metrics",
              stats: [
                {
                  n: "420",
                  l: "Addressable Accounts",
                  s: "Noida/NCR tech firms, 100–2000 emp",
                },
                {
                  n: "28",
                  l: "Priority 1 Targets",
                  s: "High fit · budget ready",
                },
                {
                  n: "₹8Cr",
                  l: "90-Day Pipeline",
                  s: "Qualified pipeline target",
                },
                {
                  n: "22%",
                  l: "Conversion Target",
                  s: "Qualified opp to close",
                },
              ],
            },
            {
              type: "steps",
              tag: "PROJECT 07 · 90-DAY ACTIVITY PLAN",
              title: "Month-by-Month Ramp to ₹8 Crore Pipeline",
              steps: [
                {
                  num: "Month 1 · Build",
                  title: "40 LinkedIn Connections",
                  body: "10 discovery calls. ₹2.5Cr pipeline. 2 industry events. Value-first content to P1 accounts.",
                },
                {
                  num: "Month 1 · Build",
                  title: "80 Cold Emails Sent",
                  body: "Personalised to each account's pain signal — on-premise lease expiry, digital transformation mandate, SAP migration.",
                },
                {
                  num: "Month 2 · Qualify",
                  title: "8 Demos Delivered",
                  body: "Tailored product demos with customised use cases. 4 formal proposals with ROI model attached.",
                },
                {
                  num: "Month 2 · Qualify",
                  title: "Cloud Readiness Workshop",
                  body: "Host for 3 P2 accounts — value-add session positioning you as a trusted advisor before the sales conversation.",
                },
                {
                  num: "Month 3 · Close",
                  title: "2–3 Deals Closed",
                  body: "From Month 2 proposals. ₹1.2Cr booked revenue.",
                },
                {
                  num: "Month 3 · Close",
                  title: "2 Pilots Initiated",
                  body: "With P1 accounts that didn't close outright. ₹8Cr total pipeline by Day 90.",
                },
                {
                  num: "Segment 1",
                  title: "IT Services Firms",
                  body: "HCL, Persistent, Zensar — clients mandating cloud-native delivery. Azure partnership angle.",
                },
                {
                  num: "Segment 2",
                  title: "BFSI Tech Firms",
                  body: "Nucleus, Indus Valley — RBI mandates driving cloud timelines. Compliance-first messaging.",
                },
              ],
            },
            {
              type: "win",
              tag: "PORTFOLIO SUMMARY · ALL 7 PROJECTS",
              title:
                "7 Projects That Answer Every Pre-Sales Interview Question",
              themes: [
                {
                  num: "01 & 02",
                  title: "Dashboard + Competitive Analysis",
                  body: "Real sales data. Research-backed market intelligence. Battlecards and win themes. Proof of analytical depth.",
                },
                {
                  num: "03 & 04",
                  title: "GTM Playbook + CS Playbook",
                  body: "Full sales motion from market entry to client renewal. Shows you understand both the commercial and the delivery side.",
                },
                {
                  num: "05 & 06",
                  title: "AI Business Case + RFP Response",
                  body: "Financial modelling in CFO language. Professional bid management. End-to-end pre-sales value chain demonstrated.",
                },
                {
                  num: "07",
                  title: "Territory Micro-Market Plan",
                  body: "Account strategy, segment messaging, and 90-day pipeline plan for the exact market you're targeting.",
                },
              ],
            },
            {
              type: "cta",
              eyebrow: "PORTFOLIO TAKEAWAY",
              title: "The Candidate Who Brings This Portfolio",
              quote:
                "These projects weren't assigned. They were built independently — showing the same proactive mindset that drives territory growth and client wins.",
              items: [
                {
                  title: "Ready from Day 1",
                  body: "Has already written RFPs, built business cases, and mapped competitive landscapes.",
                },
                {
                  title: "Speaks CFO Language",
                  body: "ROI models, NPV, payback periods — not just pitch decks.",
                },
                {
                  title: "Market-Ready Intelligence",
                  body: "Knows who the competitors are, what enterprises buy, and how to position to win.",
                },
                {
                  title: "Demonstrates Initiative",
                  body: "The same mindset that achieved #1 VAS nationally and 21% conversion improvement.",
                },
              ],
            },
          ],
        },
      ];

      // ── State ──────────────────────────────────────────────────────
      let currentDeck = 0;
      let currentSlide = 0;

      // ── Slide renderers ────────────────────────────────────────────
      function renderSlide(deck, slide) {
        const ac = deck.color;
        if (slide.type === "cover") {
          return `<div class="slide slide-cover">
      <div class="s-bg"></div><div class="s-grid"></div>
      <div class="s-content">
        <div class="s-eyebrow">${slide.eyebrow}</div>
        <div class="s-title">${slide.title.replace(/\n/g, "<br>")}</div>
        <div class="s-sub">${slide.sub}</div>
        <div class="s-author">${slide.author}</div>
      </div>
    </div>`;
        }
        if (slide.type === "stats") {
          return `<div class="slide slide-stats">
      <div class="slide-stats-header" style="background:var(--navy);padding:2.5% 6% 2%;border-bottom:3px solid ${ac};">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:1%;">${slide.tag}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(14px,2.5vw,26px);font-weight:700;color:#fff;">${slide.title}</div>
      </div>
      <div class="stat-cards">${slide.stats.map((s) => `<div class="stat-card"><div class="sc-num" style="color:${ac}">${s.n}</div><div class="sc-label" style="color:${ac}">${s.l}</div><div class="sc-note">${s.s}</div></div>`).join("")}</div>
    </div>`;
        }
        if (slide.type === "dark") {
          const accMap = {
            gold: "rgba(200,151,42,0.8)",
            blue: "rgba(37,99,235,0.8)",
            green: "rgba(16,185,129,0.8)",
            purple: "rgba(139,92,246,0.8)",
          };
          return `<div class="slide slide-dark">
      <div class="s-content">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:1.5%;">${slide.tag}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(16px,2.8vw,28px);font-weight:700;color:#fff;margin-bottom:2%;">${slide.title}</div>
        <div class="info-cards">${slide.cards.map((c) => `<div class="info-card ${c.accent}" style="--card-ac:${accMap[c.accent] || ac}"><div class="ic-icon">${c.icon}</div><div class="ic-title">${c.title}</div><div class="ic-body">${c.body}</div></div>`).join("")}</div>
      </div>
    </div>`;
        }
        if (slide.type === "steps") {
          return `<div class="slide slide-steps">
      <div class="s-content">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:1%;">${slide.tag}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(14px,2.2vw,24px);font-weight:700;color:var(--navy);">${slide.title}</div>
        <div class="steps-g">${slide.steps.map((s, i) => `<div class="step-card"><div class="step-num" style="color:${ac}">${s.num}</div><div class="step-title">${s.title}</div><div class="step-body">${s.body}</div></div>`).join("")}</div>
      </div>
    </div>`;
        }
        if (slide.type === "ach") {
          return `<div class="slide slide-ach">
      <div class="s-content">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:1%;">${slide.tag}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(14px,2.5vw,26px);font-weight:700;color:#fff;margin-bottom:1%;">${slide.title}</div>
        <div class="ach-tiles-g">${slide.tiles.map((t) => `<div class="ach-tile-s"><div class="ats-big" style="color:${ac}">${t.n}</div><div class="ats-label">${t.label.replace(/\n/g, "<br>")}</div><div class="ats-sub">${t.sub}</div></div>`).join("")}</div>
      </div>
    </div>`;
        }
        if (slide.type === "roi") {
          return `<div class="slide slide-roi">
      <div class="s-content">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:1%;">${slide.tag}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(14px,2.2vw,24px);font-weight:700;color:var(--navy);margin-bottom:1%;">${slide.title}</div>
        <div class="roi-boxes">${slide.rois.map((r) => `<div class="roi-box${r.gold ? " gold" : ""}"><div class="rb-num">${r.n}</div><div class="rb-label">${r.l}</div></div>`).join("")}</div>
        <div class="bar-chart">${slide.bars
          .map(
            (b) => `<div class="bar-wrap">
          <div style="font-size:clamp(7px,1vw,10px);color:var(--grey);font-family:'JetBrains Mono',monospace;text-align:center;margin-bottom:1%;">${b.label}</div>
          ${b.vals
            .map(
              (
                v,
                i,
              ) => `<div style="flex:1;display:flex;flex-direction:column;gap:3px;">
            <div style="font-size:clamp(6px,0.9vw,9px);color:var(--grey);text-align:center;font-family:'JetBrains Mono',monospace">Y${i + 1}</div>
            <div style="background:var(--grey-l);border-radius:2px;flex:1;position:relative;overflow:hidden;">
              <div class="bar-fill ${b.cls}" style="height:${(v / 14.2) * 100}%;"></div>
            </div>
            <div class="bar-val">₹${v}Cr</div>
          </div>`,
            )
            .join("")}
        </div>`,
          )
          .join("")}</div>
      </div>
    </div>`;
        }
        if (slide.type === "battle") {
          return `<div class="slide slide-battle">
      <div class="s-content">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:1%;">${slide.tag}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(14px,2.2vw,24px);font-weight:700;color:var(--navy);margin-bottom:1%;">${slide.title}</div>
        <div style="display:grid;grid-template-columns:1.5fr 2fr 2fr;gap:1.5%;margin-bottom:1%;">
          <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:var(--grey);letter-spacing:1px;">COMPETITOR</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:var(--grey);letter-spacing:1px;">THEIR CLAIM</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:var(--green);letter-spacing:1px;">OUR COUNTER</div>
        </div>
        <div class="battle-rows">${slide.rows.map((r) => `<div class="battle-row"><div class="br-co">${r.co}</div><div class="br-their">"${r.their}"</div><div class="br-ours">${r.ours}</div></div>`).join("")}</div>
      </div>
    </div>`;
        }
        if (slide.type === "win") {
          return `<div class="slide slide-win">
      <div class="s-content">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:1%;">${slide.tag}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(14px,2.5vw,26px);font-weight:700;color:#fff;margin-bottom:1%;">${slide.title}</div>
        <div class="win-g">${slide.themes.map((t) => `<div class="win-card"><div class="wc-num">THEME ${t.num}</div><div class="wc-title">${t.title}</div><div class="wc-body">${t.body}</div></div>`).join("")}</div>
      </div>
    </div>`;
        }
        if (slide.type === "cta") {
          return `<div class="slide slide-cta">
      <div class="s-content">
        <div style="font-family:'JetBrains Mono',monospace;font-size:clamp(7px,1vw,10px);color:${ac};letter-spacing:2px;margin-bottom:2%;">${slide.eyebrow}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(16px,3vw,32px);font-weight:700;color:#fff;margin-bottom:1%;">${slide.title}</div>
        <div class="cta-proof"><div class="cta-proof-text">"${slide.quote}"</div></div>
        <div class="cta-items">${slide.items.map((it) => `<div class="cta-item"><div class="cti-title">✓ ${it.title}</div><div class="cti-body">${it.body}</div></div>`).join("")}</div>
      </div>
    </div>`;
        }
        return `<div class="slide slide-cover"><div class="s-content"><div class="s-title">Slide</div></div></div>`;
      }

      // ── Thumb colors ────────────────────────────────────────────────
      function thumbBg(type, color) {
        const map = {
          cover: `linear-gradient(135deg,#0F2B4A,#142848)`,
          stats: `linear-gradient(135deg,#fff,#f1f5f9)`,
          dark: `linear-gradient(135deg,#0A1628,#1E3D6E)`,
          steps: `linear-gradient(135deg,#F9F7F4,#f1f5f9)`,
          ach: `linear-gradient(135deg,#060C14,#0A1628)`,
          roi: `linear-gradient(135deg,#fff,#EFF6FF)`,
          battle: `linear-gradient(135deg,#F1F5F9,#fff)`,
          win: `linear-gradient(135deg,#0F2B4A,#142848)`,
          cta: `linear-gradient(135deg,#0A1628,#0F2B4A)`,
        };
        return map[type] || "#0F2B4A";
      }

      function thumbColor(type) {
        return ["dark", "ach", "win", "cta", "cover"].includes(type)
          ? "#fff"
          : "#0F2B4A";
      }

      // ── Load deck ───────────────────────────────────────────────────
      function loadDeck(idx) {
        currentDeck = idx;
        currentSlide = 0;
        const deck = DECKS[idx];
        document.getElementById("deck-title-bar").textContent = deck.title;
        document
          .querySelectorAll(".deck-tab")
          .forEach((t, i) => t.classList.toggle("active", i === idx));
        renderCurrentSlide();
        renderDots();
        renderThumbs();
        updateControls();
      }

      function renderCurrentSlide() {
        const deck = DECKS[currentDeck];
        const slide = deck.slides[currentSlide];
        const area = document.getElementById("slide-area");
        // Remove old
        area.querySelectorAll(".slide-frame").forEach((f) => f.remove());
        const frame = document.createElement("div");
        frame.className = "slide-frame active";
        frame.innerHTML = renderSlide(deck, slide);
        area.appendChild(frame);
        // Progress
        const pct = ((currentSlide + 1) / deck.slides.length) * 100;
        document.getElementById("progress-bar").style.width = pct + "%";
        document.getElementById("deck-counter").textContent =
          `${currentSlide + 1} / ${deck.slides.length}`;
        // Update thumb active
        document
          .querySelectorAll(".thumb")
          .forEach((t, i) => t.classList.toggle("active", i === currentSlide));
      }

      function renderDots() {
        const deck = DECKS[currentDeck];
        const dots = document.getElementById("slide-dots");
        dots.innerHTML = deck.slides
          .map(
            (_, i) =>
              `<div class="sdot${i === currentSlide ? " active" : ""}" onclick="goToSlide(${i})"></div>`,
          )
          .join("");
      }

      function renderThumbs() {
        const deck = DECKS[currentDeck];
        const strip = document.getElementById("thumb-strip");
        strip.innerHTML = deck.slides
          .map(
            (s, i) => `
    <div class="thumb${i === currentSlide ? " active" : ""}" onclick="goToSlide(${i})">
      <div class="thumb-inner" style="background:${thumbBg(s.type, deck.color)};color:${thumbColor(s.type)}">${String(i + 1).padStart(2, "0")}</div>
    </div>`,
          )
          .join("");
      }

      function updateControls() {
        const deck = DECKS[currentDeck];
        document.getElementById("prev-btn").disabled = currentSlide === 0;
        document.getElementById("next-btn").disabled =
          currentSlide === deck.slides.length - 1;
      }

      function goToSlide(idx) {
        currentSlide = idx;
        renderCurrentSlide();
        renderDots();
        updateControls();
        // Scroll thumb into view
        const thumbs = document.querySelectorAll(".thumb");
        if (thumbs[idx])
          thumbs[idx].scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
            block: "nearest",
          });
      }

      function prevSlide() {
        if (currentSlide > 0) {
          goToSlide(currentSlide - 1);
        }
      }
      function nextSlide() {
        if (currentSlide < DECKS[currentDeck].slides.length - 1) {
          goToSlide(currentSlide + 1);
        }
      }

      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") nextSlide();
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevSlide();
      });

      // Touch swipe
      let touchX = 0;
      document
        .getElementById("slide-area")
        .addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX));
      document
        .getElementById("slide-area")
        .addEventListener("touchend", (e) => {
          const dx = touchX - e.changedTouches[0].clientX;
          if (Math.abs(dx) > 50) {
            dx > 0 ? nextSlide() : prevSlide();
          }
        });

      // FAQ
      function toggleFaq(el) {
        const item = el.parentElement;
        const open = item.classList.contains("open");
        document
          .querySelectorAll(".faq-item")
          .forEach((i) => i.classList.remove("open"));
        if (!open) item.classList.add("open");
      }

      // Smooth scroll with offset
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const t = document.querySelector(a.getAttribute("href"));
          if (t) {
            e.preventDefault();
            window.scrollTo({ top: t.offsetTop - 76, behavior: "smooth" });
          }
        });
      });

      // Hamburger menu
      const hamburger = document.getElementById("navHamburger");
      const mobileMenu = document.getElementById("mobileMenu");
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");
        document.body.style.overflow = mobileMenu.classList.contains("open")
          ? "hidden"
          : "";
      });
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("open");
          mobileMenu.classList.remove("open");
          document.body.style.overflow = "";
        });
      });

      // Init
      loadDeck(0);
