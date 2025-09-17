import { motion } from 'framer-motion';
import { newsletterContent } from '../../lib/homepageData';

const NewsletterSignup = () => (
  <section aria-labelledby="newsletter-heading" className="mx-auto max-w-5xl px-4 pb-24">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white/90 p-10 shadow-2xl backdrop-blur"
    >
      <div className="absolute -top-24 right-12 hidden h-56 w-56 rounded-full bg-brand-red/10 blur-3xl sm:block" aria-hidden />
      <div className="absolute -bottom-16 left-8 hidden h-40 w-40 rounded-full bg-brand-red/20 blur-3xl sm:block" aria-hidden />
      <div className="relative space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">{newsletterContent.eyebrow}</p>
        <h2 id="newsletter-heading" className="font-display text-3xl font-semibold text-brand-charcoal sm:text-4xl">
          {newsletterContent.headline}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/80">{newsletterContent.description}</p>
        <form className="mt-8 flex flex-col gap-4 sm:flex-row" noValidate>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            className="w-full rounded-full border border-brand-charcoal/15 bg-white px-6 py-3 text-sm text-brand-charcoal shadow-inner shadow-brand-charcoal/5 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30"
            id="newsletter-email"
            name="email"
            placeholder="you@example.com"
            type="email"
            autoComplete="email"
            required
          />
          <button
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand-red/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            type="submit"
          >
            Join the list
          </button>
        </form>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-charcoal/50">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </motion.div>
  </section>
);

export default NewsletterSignup;
