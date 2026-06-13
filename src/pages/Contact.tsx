import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { ArrowOutgoing } from "../components/icons/Arrow";
import { KineticWords, FadeUp } from "../components/Kinetic";
import { CONTACT } from "../lib/data";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

const ROLES = ["APM role", "PM role", "Product project", "Just saying hi"];

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "An email I can reply to.";
    if (form.message.trim().length < 12)
      e.message = "A few sentences. What is the actual situation?";
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", company: "", role: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  return (
    <div className="animate-page-fade">
      <section className="relative">
        <div className="shell-wide pt-[128px] sm:pt-[160px] pb-[60px]">
          <FadeUp>
            <span className="status-pill">
              <span className="live-dot" aria-hidden />
              {CONTACT.status}
            </span>
          </FadeUp>
          <h1 className="display-sans display-2xl mt-9 text-balance max-w-[20ch]">
            <KineticWords text="Let's" />{" "}
            <span className="ovo-i text-signal">
              <KineticWords text="talk." delay={120} />
            </span>
            <br />
            <span className="text-midnight/55">
              <KineticWords text="Real briefs only." delay={240} />
            </span>
          </h1>
          <FadeUp delay={300} className="mt-10 max-w-[60ch]">
            <p className="body-lg muted">
              Best fit is a team hiring for an APM or PM role. The shorter and more specific your note, the better the reply. I read every message myself.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="shell-wide pb-[100px] sm:pb-[140px]">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-12">
          <Reveal className="card p-7 sm:p-10">
            <form onSubmit={submit} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="field-label">
                    <span className="ovo-i text-signal mr-2">01</span>Your name
                  </label>
                  <div className="field">
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Rivera"
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && (
                    <div className="text-signal text-[18px] mt-2">{errors.name}</div>
                  )}
                </div>
                <div>
                  <label className="field-label">
                    <span className="ovo-i text-signal mr-2">02</span>Email
                  </label>
                  <div className="field">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && (
                    <div className="text-signal text-[18px] mt-2">{errors.email}</div>
                  )}
                </div>
              </div>

              <div>
                <label className="field-label">
                  <span className="ovo-i text-signal mr-2">03</span>Company or team
                </label>
                <div className="field">
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme, or your team"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div>
                <label className="field-label">
                  <span className="ovo-i text-signal mr-2">04</span>Reason
                </label>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setForm({ ...form, role: form.role === r ? "" : r })}
                      className={"chip " + (form.role === r ? "chip-active" : "")}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="field-label">
                  <span className="ovo-i text-signal mr-2">05</span>The situation
                </label>
                <div className="field">
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="A few sentences on the role, team, and what success looks like in the first ninety days."
                  />
                </div>
                {errors.message && (
                  <div className="text-signal text-[18px] mt-2">{errors.message}</div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="meta">Response within 48 hours.</span>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn disabled:opacity-50"
                >
                  {sending ? "Sending" : "Send the message"}
                  <span className="arr">
                    <ArrowOutgoing size={14} />
                  </span>
                </button>
              </div>
            </form>
          </Reveal>

          <aside className="space-y-4">
            <Reveal className="card p-7">
              <span className="meta">Direct</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block mt-3 ovo-i text-[28px] sm:text-[32px] hover:text-signal transition-colors duration-quick"
              >
                {CONTACT.email}
              </a>
              <div className="hr my-5" />
              <div className="grid gap-3">
                <Link label="LinkedIn" href={CONTACT.linkedin} external />
                <Link label="Book a 30 min call" href={CONTACT.calendar} external />
                <Link label="Download resume" href={CONTACT.resume} />
              </div>
            </Reveal>

            <Reveal className="card-soft p-7">
              <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                <Fact k="Based" v="London, UK" />
                <Fact k="Hours" v="GMT, ±5 hrs" />
                <Fact k="Open to" v="Hybrid / Remote" />
                <Fact k="Notice" v="Two weeks" />
              </div>
            </Reveal>

            <Reveal className="card-dark on-dark p-7">
              <div className="flex items-center gap-2.5">
                <span className="live-dot" aria-hidden />
                <span className="meta">A small note</span>
              </div>
              <p className="body-md mt-5 text-bone/85">
                I&apos;m most useful early, when the problem isn&apos;t fully framed yet. If your role description starts with <span className="ovo-i">we need someone who can figure this out</span>, we&apos;ll probably get along.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>

      <div
        className={
          "fixed bottom-6 sm:bottom-8 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-midnight text-bone text-[18px] z-[220] text-center shadow-[0_24px_60px_rgba(0,0,35,0.3)] transition-transform duration-[500ms] ease-editorial " +
          (sent ? "translate-y-0" : "translate-y-[200%]")
        }
      >
        Thank you. I&apos;ll reply within 48 hours.
      </div>
    </div>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="meta">{k}</span>
      <div className="text-[18px] mt-1.5">{v}</div>
    </div>
  );
}

function Link({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between text-[18px] hover:text-signal transition-colors duration-quick"
    >
      <span>{label}</span>
      <ArrowOutgoing size={12} />
    </a>
  );
}
