import { motion } from 'framer-motion';
import PostCard from '../../components/PostCard';
import type { Category, Post } from '../../lib/homepageData';

interface CategoryShowcaseProps {
  category: Category;
  posts: Post[];
  index: number;
}

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CategoryShowcase = ({ category, posts, index }: CategoryShowcaseProps) => (
  <section
    aria-labelledby={`${category.slug}-heading`}
    className="mx-auto max-w-6xl px-4 pb-20"
    id={category.slug}
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={headingVariants}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
      className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/60">{category.name}</p>
        <h3 id={`${category.slug}-heading`} className="font-display text-2xl font-semibold text-brand-charcoal sm:text-3xl">
          {category.tagline}
        </h3>
      </div>
      <a
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/60 transition hover:text-brand-red"
        href={`#${category.slug}`}
      >
        View more {category.name.toLowerCase()}
        <span aria-hidden="true">→</span>
      </a>
    </motion.div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </section>
);

export default CategoryShowcase;
