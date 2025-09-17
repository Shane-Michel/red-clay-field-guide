import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const App = () => {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      <header className="border-b border-brand-charcoal/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="font-display text-xl font-semibold tracking-wide text-brand-red">
            Red Clay Field Guide
          </span>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a className="transition hover:text-brand-red" href="#">
              Food
            </a>
            <a className="transition hover:text-brand-red" href="#">
              Travel
            </a>
            <a className="transition hover:text-brand-red" href="#">
              Entertainment
            </a>
            <a className="transition hover:text-brand-red" href="#">
              Services
            </a>
          </nav>
        </div>
      </header>
      <main>
        <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:flex-row sm:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: 'easeOut' }}
            variants={heroVariants}
            className="max-w-xl"
          >
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-brand-red">
              Explore Northeast Georgia
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-brand-charcoal sm:text-5xl">
              Stories from the foothills, curated by Shane & Vicki.
            </h1>
            <p className="mt-6 text-lg text-brand-charcoal/80">
              The Red Clay Field Guide celebrates the food, trails, hidden gems, and people that make Northeast Georgia special.
              Follow along as we share weekend itineraries, seasonal guides, and local favorites.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand-red/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                href="#"
              >
                Read the latest
              </a>
              <a className="text-sm font-semibold uppercase tracking-wide text-brand-charcoal/70 hover:text-brand-charcoal" href="#">
                View categories
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="w-full max-w-md overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white shadow-xl"
          >
            <div className="bg-gradient-to-br from-brand-red/90 to-brand-charcoal/90 p-6 text-white">
              <h2 className="font-display text-2xl font-semibold">Coming soon</h2>
              <p className="mt-2 text-sm text-white/80">
                This placeholder hero shows the design direction while we build out the data-driven homepage.
              </p>
            </div>
            <div className="space-y-6 p-6 text-sm text-brand-charcoal/80">
              <p>
                The frontend is powered by React, Vite, Tailwind CSS, and Framer Motion inside a PNPM workspace.
              </p>
              <p>
                As API endpoints and CMS content come online, this hero will display featured stories and surface the latest
                guides curated from the database.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="border-t border-brand-charcoal/10 bg-white/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-4 text-sm text-brand-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Red Clay Field Guide. All rights reserved.</span>
          <div className="flex gap-4">
            <a className="transition hover:text-brand-red" href="#">
              About
            </a>
            <a className="transition hover:text-brand-red" href="#">
              Contact
            </a>
            <a className="transition hover:text-brand-red" href="#">
              Advertise
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
