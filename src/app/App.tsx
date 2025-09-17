import { motion } from 'framer-motion';
import FeaturedStories from '../features/home/FeaturedStories';
import CategoryShowcase from '../features/home/CategoryShowcase';
import NewsletterSignup from '../features/home/NewsletterSignup';
import SponsorSpotlight from '../features/home/SponsorSpotlight';
import { featuredStories, homepageSections, sponsorSpotlight } from '../lib/homepageData';

const heroVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const navLinks = [
  { label: 'Stories', href: '#stories' },
  { label: 'Food', href: '#food' },
  { label: 'Travel', href: '#travel' },
  { label: 'Entertainment', href: '#entertainment' },
  { label: 'Services', href: '#services' }
];

const heroHighlights = [
  'Weekend itineraries curated by Shane & Vicki',
  'Local restaurants, trails, makers & events',
  'Subscriber-only sponsor perks & giveaways'
];

const App = () => {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      <header className="sticky top-0 z-40 border-b border-brand-charcoal/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a className="font-display text-xl font-semibold uppercase tracking-[0.3em] text-brand-red" href="#stories">
            Red Clay Field Guide
          </a>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/70 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="transition hover:text-brand-red" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="hidden rounded-full bg-brand-red px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-md shadow-brand-red/30 transition hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
            href="#newsletter"
          >
            Subscribe
          </a>
        </div>
      </header>
      <main>
        <section
          className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-20 sm:flex-row sm:items-center"
          id="stories"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, ease: 'easeOut' }}
            variants={heroVariants}
            className="max-w-xl space-y-8"
          >
            <div className="space-y-4">
              <p className="font-semibold uppercase tracking-[0.3em] text-brand-red">Explore Northeast Georgia</p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-brand-charcoal sm:text-5xl">
                Stories from the foothills, curated with heart.
              </h1>
              <p className="text-lg text-brand-charcoal/80">
                The Red Clay Field Guide celebrates the people and places that make our corner of the South unforgettable—from
                farm suppers and trail adventures to porch concerts and hidden makers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand-red/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                href="#featured"
              >
                Read the latest
              </a>
              <a
                className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-charcoal/70 transition hover:text-brand-charcoal"
                href="#newsletter"
              >
                Join the newsletter
              </a>
            </div>
            <ul className="grid gap-3 text-sm text-brand-charcoal/70 sm:grid-cols-2">
              {heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
            className="w-full max-w-md overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white shadow-xl"
          >
            <div className="bg-gradient-to-br from-brand-red/90 to-brand-charcoal/90 p-6 text-white">
              <h2 className="font-display text-2xl font-semibold">Now featuring stories across four beats</h2>
              <p className="mt-2 text-sm text-white/80">
                Dive into food & drink, trails & travel, arts & entertainment, and trusted local services while we finish
                connecting the CMS.
              </p>
            </div>
            <div className="space-y-6 p-6 text-sm text-brand-charcoal/80">
              <p>
                The frontend is powered by React, Vite, Tailwind CSS, and Framer Motion inside a PNPM workspace. Each section below
                is wired to render curated data while the API is under construction.
              </p>
              <p>
                As endpoints go live, these modules will swap to dynamic content—ready for scheduling, sponsorships, and editorial
                workflows defined in the implementation plan.
              </p>
            </div>
          </motion.div>
        </section>
        <FeaturedStories posts={featuredStories} />
        <SponsorSpotlight sponsor={sponsorSpotlight} />
        {homepageSections.map((section, index) => (
          <CategoryShowcase key={section.category.slug} category={section.category} posts={section.posts} index={index} />
        ))}
        <div id="newsletter">
          <NewsletterSignup />
        </div>
      </main>
      <footer className="border-t border-brand-charcoal/10 bg-white/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/60 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Red Clay Field Guide. All rights reserved.</span>
          <div className="flex gap-4">
            <a className="transition hover:text-brand-red" href="#about">
              About
            </a>
            <a className="transition hover:text-brand-red" href="#contact">
              Contact
            </a>
            <a className="transition hover:text-brand-red" href="#advertise">
              Advertise
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
