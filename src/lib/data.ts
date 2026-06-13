export type Route = "home" | "work" | "about" | "writing" | "contact";

export type Project = {
  id: string;
  num: string;
  client: string;
  title: string;
  summary: string;
  role: string;
  category: "Product" | "Growth" | "Design" | "Build";
  year: string;
  duration: string;
  team: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  glyph: string;
  accent: string;
  featured?: boolean;
};

export type Writing = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read: number;
};

export type Capability = {
  num: string;
  name: string;
  intent: string;
  desc: string;
  tags: string[];
};

export type Experience = {
  period: string;
  role: string;
  org: string;
  type: string;
  summary: string;
  highlights: string[];
};

export type Tool = {
  group: string;
  items: string[];
};

export type CurrentlyItem = {
  label: string;
  body: string;
};

export const PROJECTS: Project[] = [
  {
    id: "cloudtailor",
    num: "01",
    client: "CloudTailor",
    title: "Rebuilding a 3D workflow people actually finish",
    summary:
      "A complex 3D customization journey was losing users right before the reward. We rebuilt the system around the real critical path.",
    role: "Lead Product Designer, partial PM",
    category: "Product",
    year: "2023",
    duration: "5 months",
    team: "PM, 2 engineers, design",
    challenge:
      "Drop off was concentrated in the last three steps of the 3D editor. The product had thirteen surfaces that each looked and behaved a little differently. Users gave up before they ever saw the output that the product was actually good at.",
    approach:
      "Rebuilt the journey from the logic up. Mapped the real user task in five rounds of interviews, then designed a modular system that the team could repeat across surfaces without redrawing each screen.",
    outcome:
      "Workflow completion went up forty percent. Time to first render dropped by a third. Thirteen surfaces started feeling like one product, not thirteen.",
    metrics: [
      { label: "Workflow completion", value: "+40%" },
      { label: "Time to first render", value: "−32%" },
      { label: "Surfaces unified", value: "13" },
    ],
    tags: ["Discovery", "Design systems", "Workflow", "3D editor"],
    glyph: "CT",
    accent: "#367AFF",
    featured: true,
  },
  {
    id: "plentiful",
    num: "02",
    client: "Plentiful",
    title: "Onboarding and loops that hold the curve",
    summary:
      "Day seven retention was the soft spot. We rewrote onboarding around real intent and added loops anchored in observed behaviour.",
    role: "Product and growth design",
    category: "Growth",
    year: "2023",
    duration: "3 months",
    team: "Founder, 1 engineer, design",
    challenge:
      "Week one was leaking the users we worked hardest to acquire. The product had good moments, but the path to those moments was buried two screens too deep.",
    approach:
      "Re-sequenced onboarding around the real first job, not the brand pitch. Built loops based on what users actually came back for, and removed two features that were quietly hurting retention.",
    outcome:
      "Day thirty retention up fifteen percent. Onboarding completion up twenty seven. Acquisition spend started compounding instead of leaking.",
    metrics: [
      { label: "Day-30 retention", value: "+15%" },
      { label: "Onboarding completion", value: "+27%" },
      { label: "Features removed", value: "2" },
    ],
    tags: ["Mobile", "Onboarding", "Retention", "Experiments"],
    glyph: "PL",
    accent: "#367AFF",
    featured: true,
  },
  {
    id: "vistaprint",
    num: "03",
    client: "Vistaprint",
    title: "Internal tools that take the meetings out of the work",
    summary:
      "Throughput was bottlenecked by handoff and review, not by the creative work. We cut the path back to its actual shape.",
    role: "Senior Design Partner",
    category: "Product",
    year: "2024",
    duration: "4 months",
    team: "2 PMs, 4 engineers, design",
    challenge:
      "Cycle time on studio output had crept up quarter on quarter. The team was strong. The path between idea and production was the problem.",
    approach:
      "Mapped the critical path with the team. Identified three review steps that had outlived their reason and rebuilt the templating editor around what was left.",
    outcome:
      "Cycle time down forty one percent. Twenty two percent more templates shipped per quarter. The team got their afternoons back.",
    metrics: [
      { label: "Cycle time", value: "−41%" },
      { label: "Templates / quarter", value: "+22%" },
      { label: "Review steps cut", value: "3" },
    ],
    tags: ["Internal tools", "Workflow", "Editor", "Operations"],
    glyph: "VP",
    accent: "#367AFF",
    featured: true,
  },
  {
    id: "ausmate",
    num: "04",
    client: "Ausmate",
    title: "Care coordination that respects a real family",
    summary:
      "Existing tools turned care into chores and reminders. We re-architected around moments, not tasks.",
    role: "Product Designer",
    category: "Design",
    year: "2022",
    duration: "4 months",
    team: "Founder, 2 engineers",
    challenge:
      "Families were drowning in notifications and to dos that did not match the rhythm of caregiving. The product felt like a project manager when it needed to feel like a kitchen counter.",
    approach:
      "Redesigned the home screen around moments of care. Built a calmer notification model. Cut the active surface area in half without removing capability.",
    outcome:
      "Weekly active families up thirty eight percent. Four point seven rating in early access. Support tickets about notifications down by half.",
    metrics: [
      { label: "Weekly active families", value: "+38%" },
      { label: "App store rating", value: "4.7" },
      { label: "Notification tickets", value: "−50%" },
    ],
    tags: ["iOS", "Information architecture", "Notifications"],
    glyph: "AM",
    accent: "#367AFF",
  },
  {
    id: "ist",
    num: "05",
    client: "IST",
    title: "Brand and platform for a new podcast network",
    summary:
      "Identity, product, and web due at once. A small team and a tight runway. The brand had to feel like a brand on day one.",
    role: "Brand and Web Designer",
    category: "Design",
    year: "2021",
    duration: "9 weeks",
    team: "Founder, 1 engineer",
    challenge:
      "Launching from zero recognition. The team needed clarity and trust on the first visit, on every device, with no time for a second pass.",
    approach:
      "Built the brand system first. Then translated it into a web experience that was consistent, calm, and accessible by default.",
    outcome:
      "Launched in nine weeks with ninety eight on Lighthouse accessibility. The team kept hearing the same two words from listeners: clear, trustworthy.",
    metrics: [
      { label: "Lighthouse a11y", value: "98" },
      { label: "Time to launch", value: "9 wks" },
    ],
    tags: ["Branding", "Web", "Accessibility"],
    glyph: "IS",
    accent: "#367AFF",
  },
  {
    id: "ngo",
    num: "06",
    client: "NGO Initiative",
    title: "Six relief tools shipped in four weeks",
    summary:
      "Early pandemic. Volunteers on the ground needed coordination tools that worked today, not next month.",
    role: "Rapid Prototyper",
    category: "Build",
    year: "2020",
    duration: "4 weeks",
    team: "Cross functional, distributed",
    challenge:
      "Time mattered more than polish. The need was clear, the constraints were brutal, and no one had time to plan a full release cycle.",
    approach:
      "Scoped, prototyped, and shipped six web apps in four weeks. Useful first, pretty later. Built on stacks the team already knew so we could maintain them in the field.",
    outcome:
      "Tools held up while volunteers and supplies moved through them. The polish came after the crisis did.",
    metrics: [
      { label: "Apps shipped", value: "6" },
      { label: "Timeline", value: "4 wks" },
    ],
    tags: ["No code", "Rapid prototyping", "Crisis response"],
    glyph: "NG",
    accent: "#367AFF",
  },
];

export const WRITINGS: Writing[] = [
  {
    id: "closed-company",
    title: "Why I closed my company. And what I would do differently.",
    excerpt:
      "Two years of running a studio rewired how I think about business, identity, and what it actually means to grow something responsibly.",
    category: "Business",
    date: "2024-12-04",
    read: 11,
  },
  {
    id: "data-driven",
    title: "Data driven design does not mean removing your intuition.",
    excerpt:
      "The best decisions pair evidence with judgment. Neither replaces the other, and the teams that pretend otherwise pay for it later.",
    category: "Product",
    date: "2024-11-12",
    read: 6,
  },
  {
    id: "case-studies",
    title: "The case studies nobody publishes.",
    excerpt:
      "Messy projects teach more than polished wins. The industry would get better, faster, if we wrote about them more honestly.",
    category: "Craft",
    date: "2024-10-08",
    read: 7,
  },
  {
    id: "design-business",
    title: "What running a design business taught me about design.",
    excerpt:
      "Once you have to sell, scope, ship, and keep the client, your definition of design gets less romantic. And quite a bit more useful.",
    category: "Business",
    date: "2024-09-15",
    read: 5,
  },
  {
    id: "generalist",
    title: "In defense of the operator generalist.",
    excerpt:
      "Range, used carefully, is one of the most underrated forms of leverage in modern product work.",
    category: "Career",
    date: "2024-07-30",
    read: 8,
  },
  {
    id: "ai-native",
    title: "Designing with AI without losing the plot.",
    excerpt:
      "Notes from building AI native workflows that compress time without flattening the judgment that made the work worth doing.",
    category: "Product",
    date: "2024-06-18",
    read: 9,
  },
];

export const CAPABILITIES: Capability[] = [
  {
    num: "01",
    name: "Product thinking",
    intent: "Decide what to build, and why now.",
    desc: "Discovery, prioritization, roadmaps, PRDs, launch. Frame the problem, sharpen the bet, write the spec the team can build from on Monday.",
    tags: ["Discovery", "Roadmaps", "PRDs", "User research", "Prioritization"],
  },
  {
    num: "02",
    name: "Growth and analytics",
    intent: "Make the loop keep turning.",
    desc: "Acquisition, activation, retention. Funnels, experiments, lifecycle. Read the curves first, decide second. Build the small change that compounds.",
    tags: ["Funnels", "Experimentation", "Retention", "Lifecycle", "GA / Mixpanel"],
  },
  {
    num: "03",
    name: "Design and craft",
    intent: "Make the product feel inevitable.",
    desc: "Systems thinking, end to end journeys, high fidelity execution. The work in service of the product, never the other way around.",
    tags: ["Systems", "Journeys", "Prototypes", "Figma", "Accessibility"],
  },
  {
    num: "04",
    name: "Build and ship",
    intent: "Turn a doc into a working thing.",
    desc: "No code, AI assisted workflows, internal tools. Shopify, Webflow, automations. The point is to compress the path from idea to in hand.",
    tags: ["No code", "Webflow", "Shopify", "AI automation", "Internal tools"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    period: "2022 — 2024",
    role: "Founder & Design Director",
    org: "Accuplish",
    type: "Studio",
    summary:
      "Started and led a design-first product studio from zero to operational scale. I wore every hat it took to build a real business, from crafting the user experience to writing code to closing the deals myself.",
    highlights: [
      "Built the go-to-market engine: outreach systems, ICP, and regional positioning",
      "Designed the delivery infrastructure with CSAT, SUS, and task-completion tracking",
      "Led UX architecture and design standards across every client project",
      "Hired and grew the team while staying hands-on in code and AI automation",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Product & Design Consultant",
    org: "CloudTailor · early-stage startups",
    type: "Consulting",
    summary:
      "Partnered with founders and leadership teams to take products from concept to launch. I architected a real-time 3D customization workflow at CloudTailor and wrote the PRDs, flows, and MVPs that got a string of early startups off the ground.",
    highlights: [
      "Designed a real-time 3D preview for fitment, sizing, and configuration",
      "Wrote PRDs, roadmaps, and competitive analysis alongside founders",
      "Shipped MVPs that balanced core value with speed to market",
      "Built accessible design systems and ran usability testing",
    ],
  },
  {
    period: "2021",
    role: "Product Design Intern",
    org: "Plentiful · Ausmate · VistaPrint",
    type: "Internships",
    summary:
      "A year of shipping real product across three countries. I designed a direct-to-consumer mobile app from scratch for Plentiful, internal retail tools for Ausmate, and internal platforms for VistaPrint, learning the craft by doing it under deadline.",
    highlights: [
      "Designed Plentiful's D2C app end to end, wireframes to prototype",
      "Built Ausmate's billing dashboard and multi-store management system",
      "Shipped internal tools and design-system work at VistaPrint",
      "Collaborated remote across UK, US, and India time zones",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Freelance Designer",
    org: "DesignCrowd · Upwork · Fiverr",
    type: "Independent",
    summary:
      "Where it started. I taught myself design on the marketplaces and shipped more than seventy projects: logos that became brands, brands that became websites, websites that became product. This is where I learned to scope, pitch, and deliver under pressure.",
    highlights: [
      "70+ completed projects across brand, web, and marketing",
      "Crossed from graphics into web and product UX",
      "Ran client communication, scoping, and proposals solo",
      "Built the work ethic the rest of the career stands on",
    ],
  },
];

export const TOOLS: Tool[] = [
  {
    group: "Product",
    items: ["Linear", "Notion", "Jira", "Dovetail", "Figma FigJam"],
  },
  {
    group: "Design",
    items: ["Figma", "Framer", "Lovable", "Replit", "Bolt", "Claude", "Sketch", "Adobe CC", "Webflow"],
  },
  {
    group: "Analytics",
    items: ["Mixpanel", "Amplitude", "GA4", "Hotjar", "Looker"],
  },
  {
    group: "Build",
    items: ["Shopify", "Webflow", "Bubble", "Zapier", "Make", "Cursor", "Claude", "v0"],
  },
];

export const INDUSTRIES = [
  "SaaS",
  "Healthcare",
  "Fintech",
  "Education",
  "Media",
  "E-commerce",
  "Non profit",
  "Real estate",
  "Climate",
  "Travel",
  "Consumer",
  "B2B platforms",
];

export const STATS = [
  { value: "5+", label: "Years building", footnote: "Across product, design, and ops" },
  { value: "50+", label: "Products shipped", footnote: "Solo and with teams" },
  { value: "12", label: "Industries", footnote: "From healthcare to climate" },
  { value: "1", label: "Company built", footnote: "And responsibly closed" },
];

export const CURRENTLY: CurrentlyItem[] = [
  {
    label: "Reading",
    body: "Good notes on operating cadence and how solid leaders structure their whole week.",
  },
  {
    label: "Building",
    body: "An AI workflow that takes founder interviews and gives you a first-draft PRD in under five minutes flat.",
  },
  {
    label: "Studying",
    body: "PM Fellow at NextLeap right now. Also picking up SQL and Python, and constantly juggling with new AI tools.",
  },
  {
    label: "Listening",
    body: "Claude & Codex upskilling videos, mostly the engineering and growth ones. Plus doing the best I can with my wired earphones and Spotify.",
  },
];

export const PRINCIPLES = [
  {
    num: "01",
    title: "Outcomes over outputs",
    lead: "Outcomes over",
    accent: "outputs.",
    body: "Ship what moves a real number. Volume of work is not the same as quality of decision, and headcount is not the same as throughput.",
    practice: "I measure success by what moved, not what shipped.",
  },
  {
    num: "02",
    title: "Speed with judgment",
    lead: "Speed with",
    accent: "judgment.",
    body: "Move fast where the cost of being wrong is small. Slow down where it is not. Both are part of the job.",
    practice: "Some decisions deserve a week. Most deserve an hour.",
  },
  {
    num: "03",
    title: "Honesty creates velocity",
    lead: "Honesty creates",
    accent: "velocity.",
    body: "The fastest teams name what is not working early, even when it's awkward, then they move. Avoidance is the most expensive thing.",
    practice: "I name the elephant in the room. Twice if needed.",
  },
  {
    num: "04",
    title: "Build for the second loop",
    lead: "Build for the",
    accent: "second loop.",
    body: "First impressions are easy to manufacture. The second time someone reaches for a product is where craft actually shows up.",
    practice: "First-time users are easy. The second visit is the test.",
  },
];

export type Recommendation = {
  id: string;
  name: string;
  initials: string;
  role: string;
  relationship: string;
  quote: string;
  verifyUrl: string;
};

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "srikanth",
    name: "Srikanth N D",
    initials: "SN",
    role: "COO at KPMG India",
    relationship: "Worked with Pranav as a client",
    quote:
      "Pranav is a rare blend of creative sharpness and execution discipline. His UI/UX thinking brought clarity and purpose to our project, always anchored in user empathy and design elegance.",
    verifyUrl: "https://www.linkedin.com/in/pranavkumar05/details/recommendations/",
  },
  {
    id: "shailendra",
    name: "Shailendra Shyamsukha",
    initials: "SS",
    role: "Senior Marketer at Visa",
    relationship: "Managed Pranav directly",
    quote:
      "Pranav is a skilled UI/UX designer with a great eye for detail and user experience. Creative, reliable, and easy to work with. An asset to any team.",
    verifyUrl: "https://www.linkedin.com/in/pranavkumar05/details/recommendations/",
  },
  {
    id: "amit",
    name: "Amit Kumar",
    initials: "AK",
    role: "Tech at Goofy Tails",
    relationship: "Worked with Pranav for 3 years",
    quote:
      "I've worked with Pranav for three years across several design projects. He truly understands what a project needs and always delivers clean, thoughtful, and professional designs. One of the few designers I trust for important projects.",
    verifyUrl: "https://www.linkedin.com/in/pranavkumar05/details/recommendations/",
  },
];

export const MARQUEE = [
  "Product",
  "Growth",
  "Strategy",
  "UX / UI",
  "AI native",
  "Operations",
  "Discovery",
  "Systems",
];

export const CONTACT = {
  email: "p@pranavkumar.xyz",
  calendar: "https://cal.com/pranavkumar.co/30min",
  linkedin: "https://www.linkedin.com/in/pranavkumar05/",
  resume: "/Pranav-Kumar-Resume.pdf",
  location: "India · Remote",
  status: "Open to APM and PM roles",
  start: "Starting June 2026",
};
