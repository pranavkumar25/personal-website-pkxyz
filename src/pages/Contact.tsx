import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { ArrowOutgoing } from "../components/icons/Arrow";

type FormState = {
  name: string;
  email: string;
  company: string;
  scope: string[];
  budget: string;
  message: string;
};

const SCOPES = ["Product strategy", "Growth", "UX and Interface", "AI / Prototype", "Brand", "Other"];
const BUDGETS = ["under 10k", "10 to 25k", "25 to 60k", "60k plus", "Equity"];

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    scope: [],
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleScope = (val: string) => {
    setForm((f) => ({
      ...f,
      scope: f.scope.includes(val) ? f.scope.filter((x) => x !== val) : [...f.scope, val],
    }));
  };

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
      setForm({ name: "", email: "", company: "", scope: [], budget: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  return (
    <div className="animate-page-fade">
      <section className="shell pt-[112px] sm:pt-[128px] md:pt-[152px] pb-8">
        <Reveal className="eyebrow">Contact · Fig 05</Reveal>
        <Reveal
          as="h1"
          className="ovo mt-6 sm:mt-8 leading-[0.92] tracking-tightest text-balance"
          style={{ fontSize: "clamp(54px, 10.5vw, 184px)" } as React.CSSProperties}
        >
          What's the
          <br />
          <i className="text-signal">situation?</i>
        </Reveal>
        <Reveal className="body-lg mt-10 sm:mt-12 max-w-[58ch]">
          Best for early or mid stage product teams that want strategic range and craft. Tell me a little about the work below. I read everything personally.
        </Reveal>
      </section>

      <section className="shell">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-24 pt-16 pb-[80px] sm:pb-[120px]">
          <form onSubmit={submit} noValidate>
            <Reveal className="field">
              <label className="label block mb-3">01 · Your name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Alex Rivera"
                data-cursor=""
                autoComplete="name"
              />
              {errors.name && (
                <div className="text-signal text-[12px] mt-2 tracking-wide">{errors.name}</div>
              )}
            </Reveal>
            <Reveal className="field">
              <label className="label block mb-3">02 · Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="alex@company.com"
                data-cursor=""
                autoComplete="email"
              />
              {errors.email && (
                <div className="text-signal text-[12px] mt-2 tracking-wide">{errors.email}</div>
              )}
            </Reveal>
            <Reveal className="field">
              <label className="label block mb-3">03 · Company or project</label>
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme, or a side thing"
                data-cursor=""
                autoComplete="organization"
              />
            </Reveal>
            <Reveal className="field">
              <label className="label block mb-3">04 · Scope</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {SCOPES.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleScope(s)}
                    data-cursor=""
                    className={
                      "px-4 py-2 border rounded-full text-[13px] transition-colors duration-quick " +
                      (form.scope.includes(s)
                        ? "bg-midnight text-bone border-midnight"
                        : "border-midnight/20 hover:border-midnight")
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Reveal>
            <Reveal className="field">
              <label className="label block mb-3">05 · Budget</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {BUDGETS.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setForm({ ...form, budget: form.budget === b ? "" : b })}
                    data-cursor=""
                    className={
                      "px-4 py-2 border rounded-full text-[13px] transition-colors duration-quick " +
                      (form.budget === b
                        ? "bg-midnight text-bone border-midnight"
                        : "border-midnight/20 hover:border-midnight")
                    }
                  >
                    {b}
                  </button>
                ))}
              </div>
            </Reveal>
            <Reveal className="field">
              <label className="label block mb-3">06 · The situation</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's working, what isn't, what would success look like in 90 days?"
                data-cursor=""
              />
              {errors.message && (
                <div className="text-signal text-[12px] mt-2 tracking-wide">{errors.message}</div>
              )}
            </Reveal>
            <button
              type="submit"
              disabled={sending}
              data-cursor="SEND"
              data-signal=""
              className="
                inline-flex items-center gap-3 mt-10 px-7 py-5 rounded-full bg-midnight text-bone
                text-[15px] font-medium hover:bg-signal hover:-translate-y-0.5
                transition-all duration-standard ease-editorial disabled:opacity-50
              "
            >
              {sending ? "Sending" : "Send the brief"}
              <ArrowOutgoing size={16} />
            </button>
          </form>

          <aside className="contact-aside">
            <div className="grid grid-cols-[110px_1fr] gap-3 py-5 border-b border-midnight/10 items-baseline">
              <span className="meta">Direct</span>
              <a
                href="mailto:p@pranavkumar.co"
                className="ovo text-[20px] sm:text-[22px] tracking-snug"
              >
                <i>p@pranavkumar.co</i>
              </a>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-3 py-5 border-b border-midnight/10 items-baseline">
              <span className="meta">Calendar</span>
              <a
                href="https://cal.com/pranav"
                target="_blank"
                rel="noopener noreferrer"
                className="ovo text-[20px] sm:text-[22px] tracking-snug"
              >
                cal.com / pranav
              </a>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-3 py-5 border-b border-midnight/10 items-baseline">
              <span className="meta">Response</span>
              <span className="ovo text-[20px] sm:text-[22px] tracking-snug">Within 48 hrs</span>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-3 py-5 border-b border-midnight/10 items-baseline">
              <span className="meta">Based</span>
              <span className="ovo text-[20px] sm:text-[22px] tracking-snug">London / remote</span>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-3 py-5 border-b border-midnight/10 items-baseline">
              <span className="meta">Hours</span>
              <span className="ovo text-[20px] sm:text-[22px] tracking-snug">GMT, occasionally PT</span>
            </div>

            <div className="mt-12 p-7 sm:p-8 bg-sand/60">
              <div className="meta">A small note</div>
              <p
                className="ovo leading-[1.4] tracking-snug mt-4 text-midnight"
                style={{ fontSize: "clamp(18px, 1.7vw, 22px)" } as React.CSSProperties}
              >
                I take on roughly one engagement per quarter. Briefs that are honest about constraints get a more useful reply.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <div
        className={
          "fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 rounded-full bg-midnight text-bone text-[14px] tracking-wide z-[220] shadow-[0_24px_60px_rgba(0,0,35,0.3)] transition-transform duration-[500ms] ease-editorial " +
          (sent ? "translate-y-0" : "translate-y-[140%]")
        }
      >
        Thank you. I'll be in touch within 48 hours.
      </div>
    </div>
  );
}
