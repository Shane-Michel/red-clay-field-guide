import { motion } from 'framer-motion';
import type { SponsorPlacement } from '../../lib/homepageData';

interface SponsorSpotlightProps {
  sponsor: SponsorPlacement;
}

const SponsorSpotlight = ({ sponsor }: SponsorSpotlightProps) => (
  <section aria-labelledby="sponsor-heading" className="mx-auto max-w-6xl px-4 pb-20">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-gradient-to-br from-brand-charcoal via-brand-charcoal/95 to-brand-red/90 text-white shadow-2xl"
    >
      <div className="flex flex-col gap-8 p-8 sm:flex-row sm:items-center sm:p-10 lg:gap-12">
        <div className="relative h-48 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:h-56 sm:w-56">
          <img
            alt={sponsor.imageAlt}
            src={sponsor.imageUrl}
            className="h-full w-full object-cover opacity-90"
            loading="lazy"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Sponsor spotlight</p>
            <h2 id="sponsor-heading" className="font-display text-3xl font-semibold sm:text-4xl">
              {sponsor.name}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80">{sponsor.description}</p>
          </div>
          <a
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-charcoal transition hover:bg-brand-cream"
            href={sponsor.ctaHref}
          >
            {sponsor.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SponsorSpotlight;
