import { motion } from 'framer-motion';
import PostCard from '../../components/PostCard';
import type { Post } from '../../lib/homepageData';

interface FeaturedStoriesProps {
  posts: Post[];
}

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const FeaturedStories = ({ posts }: FeaturedStoriesProps) => {
  if (!posts.length) {
    return null;
  }

  const [primary, ...secondary] = posts;

  const hasSecondary = secondary.length > 0;

  return (
    <section aria-labelledby="featured-heading" className="mx-auto max-w-6xl px-4 pb-20" id="featured">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/60">Featured this week</p>
          <h2 id="featured-heading" className="font-display text-3xl font-semibold text-brand-charcoal sm:text-4xl">
            Fresh from the foothills
          </h2>
          <p className="max-w-xl text-base text-brand-charcoal/70">
            A first look at the seasonal stories, itineraries, and guides we're most excited to explore right now.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand-charcoal/70 transition hover:text-brand-red"
          href="#stories"
        >
          Browse all stories
          <span aria-hidden="true">→</span>
        </a>
      </motion.div>
      <div className={`grid gap-6 ${hasSecondary ? 'lg:grid-cols-[1.4fr,1fr]' : ''}`}>
        <PostCard post={primary} variant="featured" />
        {hasSecondary && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedStories;
