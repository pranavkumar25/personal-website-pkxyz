export type Route = "home" | "work" | "about" | "writing" | "contact";

/**
 * The site reads as a single document. CHAPTERS is the contents.
 * Each id maps to an in-page anchor (e.g. #ch-position).
 */
export const CHAPTERS = [
  { id: "cover", num: "00", name: "Cover", route: "home" as const },
  { id: "position", num: "01", name: "Position", route: "home" as const },
  { id: "index", num: "02", name: "Index", route: "home" as const },
  { id: "work", num: "03", name: "Work", route: "work" as const },
  { id: "practice", num: "04", name: "Practice", route: "home" as const },
  { id: "principles", num: "05", name: "Principles", route: "home" as const },
  { id: "origin", num: "06", name: "Origin", route: "about" as const },
  { id: "notes", num: "07", name: "Notes", route: "writing" as const },
  { id: "contact", num: "08", name: "Contact", route: "contact" as const },
  { id: "signoff", num: "09", name: "Sign off", route: "home" as const },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];

export const TOTAL_PAGES = CHAPTERS.length;

export type Project = {
  id: string;
  num: string;
  client: string;
  title: string;
  role: string;
  category: string;
  year: string;
  excerpt: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  featured?: boolean;
  glyph: string;
};

export type Writing = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read: number;
};

export type Service = {
  num: string;
  name: string;
  italic: string;
  desc: string;
  tags: string[];
};

export type TimelineRow = {
  year: string;
  label: string;
  text: string;
};

export type Belief = {
  title: string;
  italic: string;
  body: string;
};

export const PROJECTS: Project[] = [
  {
    id: "cloudtailor",
    num: "01",
    client: "CloudTailor",
    title: "Visualization Workflows",
    role: "Lead product designer",
    category: "Product",
    year: "2023",
    excerpt:
      "A complex 3D workflow, reframed into a system users could trust and finish without friction.",
    challenge:
      "The 3D path was abandoning users in the highest intent moments. Steps were technical. The reward came too late.",
    approach:
      "Rebuilt the journey from the logic up. A modular system that became repeatable across thirteen surfaces.",
    outcome:
      "Workflow completion lifted 40 percent. Time to first render dropped a third.",
    metrics: [
      { label: "Workflow completion", value: "+40%" },
      { label: "Time to first render", value: "−32%" },
      { label: "Surfaces unified", value: "13" },
    ],
    tags: ["UX research", "Design systems", "Workflow design"],
    featured: true,
    glyph: "C",
  },
  {
    id: "plentiful",
    num: "02",
    client: "Plentiful",
    title: "Retention-led Mobile",
    role: "Product and growth design",
    category: "Mobile",
    year: "2023",
    excerpt:
      "Onboarding and behavioural loops, rebuilt where the app was losing users fastest.",
    challenge:
      "The first week was leaking users. Retention curves were softest where they hurt most.",
    approach:
      "Re-sequenced onboarding around real intent. Introduced loops anchored in observed behaviour, not aspiration.",
    outcome:
      "Day-30 retention grew fifteen percent. Onboarding completion grew twenty seven.",
    metrics: [
      { label: "Day-30 retention", value: "+15%" },
      { label: "Onboarding completion", value: "+27%" },
    ],
    tags: ["Mobile UX", "Growth design", "Prototyping"],
    featured: true,
    glyph: "P",
  },
  {
    id: "ist",
    num: "03",
    client: "IST",
    title: "Branding and Platform",
    role: "Brand and web designer",
    category: "Brand",
    year: "2021",
    excerpt:
      "A new podcast platform. A clear identity and a usable interface, from day one.",
    challenge: "Launching from zero recognition. Small team. Tight runway.",
    approach:
      "Built the brand system. Translated it into a web experience that was consistent, calm, and accessible.",
    outcome:
      "Launched with strong qualitative feedback on clarity and accessibility. Lighthouse a11y at 98.",
    metrics: [
      { label: "Lighthouse a11y", value: "98" },
      { label: "Time to launch", value: "9 wks" },
    ],
    tags: ["Branding", "Accessibility", "Web experience"],
    featured: true,
    glyph: "I",
  },
  {
    id: "ngo",
    num: "04",
    client: "NGO Initiative",
    title: "COVID Relief Apps",
    role: "Rapid prototyper",
    category: "Rapid",
    year: "2020",
    excerpt: "Six web applications. Four weeks. Coordinating relief in real time.",
    challenge:
      "Time mattered more than polish. Teams needed tools to coordinate under pressure.",
    approach:
      "Scoped, prototyped, and shipped six applications in four weeks with a lean cross-functional setup.",
    outcome:
      "Enabled critical resource coordination during a moment of acute urgency.",
    metrics: [
      { label: "Apps shipped", value: "6" },
      { label: "Timeline", value: "4 wks" },
    ],
    tags: ["Rapid prototyping", "Crisis response", "Web apps"],
    glyph: "N",
  },
  {
    id: "ausmate",
    num: "05",
    client: "Ausmate",
    title: "Care coordination iOS",
    role: "Product designer",
    category: "Mobile",
    year: "2022",
    excerpt:
      "Helping families coordinate care without making the household feel like a project plan.",
    challenge: "Existing tools turned everyday care into chores and tickets.",
    approach:
      "Re-architected the home around moments of care, not tasks. A calmer notification model.",
    outcome:
      "Weekly active families up 38 percent. 4.7 store rating in early access.",
    metrics: [
      { label: "Weekly active families", value: "+38%" },
      { label: "Rating", value: "4.7" },
    ],
    tags: ["iOS", "Care", "Information architecture"],
    glyph: "A",
  },
  {
    id: "vistaprint",
    num: "06",
    client: "Vistaprint",
    title: "Studio Tooling",
    role: "Senior design partner",
    category: "Product",
    year: "2024",
    excerpt:
      "Internal tooling so the studio could ship more, with less drift between design and production.",
    challenge:
      "Throughput was bottlenecked by handoff and review, not creative work.",
    approach:
      "Mapped the real critical path. Removed three review steps. Rebuilt the templating editor around it.",
    outcome:
      "Cycle times dropped 41 percent. The feedback loop between design and production got quieter.",
    metrics: [
      { label: "Cycle time", value: "−41%" },
      { label: "Templates / quarter", value: "+22%" },
    ],
    tags: ["Internal tools", "Workflow", "Editor UX"],
    glyph: "V",
  },
];

export const WRITINGS: Writing[] = [
  {
    id: "closed-company",
    title: "Why I closed my company. And what I'd do differently.",
    excerpt:
      "Two years of building Accuplish changed how I think about business, identity, and what it means to grow something responsibly.",
    category: "Business",
    date: "2024-12-04",
    read: 11,
  },
  {
    id: "data-driven",
    title: "Data driven design doesn't mean removing your intuition.",
    excerpt:
      "The best decisions pair evidence with judgment. One does not replace the other.",
    category: "Design and Product",
    date: "2024-11-12",
    read: 6,
  },
  {
    id: "case-studies",
    title: "The case studies no one publishes.",
    excerpt:
      "Messy projects teach more than polished wins. The industry should talk about them more honestly.",
    category: "Lessons",
    date: "2024-10-08",
    read: 7,
  },
  {
    id: "design-business",
    title: "What running a design business taught me about design.",
    excerpt:
      "Once you sell, scope, ship and retain, your definition of design gets less romantic. And more useful.",
    category: "Business",
    date: "2024-09-15",
    read: 5,
  },
  {
    id: "generalist",
    title: "In defense of the operator generalist.",
    excerpt:
      "Range, used carefully, is one of the most underrated forms of leverage.",
    category: "Perspective",
    date: "2024-07-30",
    read: 8,
  },
  {
    id: "ai-native",
    title: "Designing with AI without losing the plot.",
    excerpt:
      "Notes on building AI native workflows that compress time without flattening judgment.",
    category: "Design and Product",
    date: "2024-06-18",
    read: 9,
  },
];

export const SERVICES: Service[] = [
  {
    num: "01",
    name: "Product",
    italic: "Strategy.",
    desc: "Discovery, prioritization, roadmaps. Grounded in customer behaviour and business reality.",
    tags: ["Discovery", "Roadmaps", "PRDs", "Launch plans"],
  },
  {
    num: "02",
    name: "Growth",
    italic: "Design.",
    desc: "Acquisition, activation, retention. Systems that compound, not spike.",
    tags: ["Funnels", "Experiments", "Lifecycle", "Activation"],
  },
  {
    num: "03",
    name: "UX and",
    italic: "Interface.",
    desc: "Design systems and high fidelity work. Serving the product, not decorating it.",
    tags: ["Systems", "Flows", "Hi-fi", "Prototypes"],
  },
  {
    num: "04",
    name: "AI native",
    italic: "Builds.",
    desc: "Lean prototypes, AI assisted workflows, internal tools. Compressing time to value.",
    tags: ["Prototypes", "Agents", "Automations", "Audits"],
  },
];

export const TIMELINE: TimelineRow[] = [
  {
    year: "2019",
    label: "Beginning",
    text: "Self taught design through freelance platforms. Logos became websites. Websites became interfaces.",
  },
  {
    year: "2021",
    label: "Pivot",
    text: "Moved from isolated visual work into complete product experiences. Led projects from exploration to launch.",
  },
  {
    year: "2022",
    label: "Studio",
    text: "Founded Accuplish. Built the operation. Led the team. Delivered fifty plus projects across twelve industries.",
  },
  {
    year: "2024",
    label: "Reset",
    text: "Closed the studio. Reset around independent consulting with a broader lens across product, growth, and AI.",
  },
  {
    year: "Now",
    label: "Operating",
    text: "Working selectively. One engagement per quarter. Teams that want range and execution from the same person.",
  },
];

export const BELIEFS: Belief[] = [
  {
    title: "Systems over",
    italic: "artifacts.",
    body: "Pretty screens age badly. The engine underneath is what compounds.",
  },
  {
    title: "Depth with",
    italic: "range.",
    body: "Generalism is useful when it is earned. Each lane needs enough depth to create real leverage.",
  },
  {
    title: "Honesty creates",
    italic: "velocity.",
    body: "The fastest teams are not the ones avoiding tension. They name what is not working early.",
  },
  {
    title: "Build for the",
    italic: "second loop.",
    body: "First impressions are easy. The second time someone uses a thing is where craft shows up.",
  },
];

export const CLIENTS = [
  "Vistaprint",
  "CloudTailor",
  "Ausmate",
  "StartupNREV",
  "Plentiful",
  "IST",
  "Forrest&Co",
  "NGO Initiative",
];

export const MARQUEE = [
  "Product",
  "Growth",
  "UX / UI",
  "AI native",
  "Systems",
  "Strategy",
  "Discovery",
];
