import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Send } from 'lucide-react';

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <SectionWrapper title="Contact" subtitle="Get in touch.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="surface-card rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
            <p className="text-muted-foreground mt-2">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title="Contact" subtitle="Have a project in mind? Let's talk.">
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="mt-2 w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Your name"
          />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="mt-2 w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="mt-2 w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
            placeholder="Tell me about your project..."
          />
          {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity btn-press"
        >
          Send Message <Send size={14} />
        </button>
        </form>
      </div>
    </SectionWrapper>
  );
};
