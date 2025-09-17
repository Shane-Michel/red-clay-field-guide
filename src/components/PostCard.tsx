import { motion } from 'framer-motion';
import type { Post } from '../lib/homepageData';
import { categoryLookup } from '../lib/homepageData';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

type PostCardVariant = 'standard' | 'featured';

interface PostCardProps {
  post: Post;
  variant?: PostCardVariant;
  showExcerpt?: boolean;
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

const PostCard = ({ post, variant = 'standard', showExcerpt = true }: PostCardProps) => {
  if (variant === 'featured') {
    return (
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="group relative overflow-hidden rounded-3xl bg-brand-charcoal text-white shadow-2xl"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${post.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent" />
        <div className="relative flex h-full min-h-[420px] flex-col justify-end gap-5 p-10">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            <span>{categoryLookup[post.category]?.name ?? post.category}</span>
            <span aria-hidden="true" className="h-px w-6 bg-white/40" />
            <span>
              {formatDate(post.publishedAt)} • {post.readTimeMinutes} min read
            </span>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{post.title}</h3>
            <p className="max-w-2xl text-base text-white/80">{post.excerpt}</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="rounded-full bg-white/15 px-4 py-1">{post.location}</span>
            <span className="text-white/80">By {post.author}</span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeIn}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          alt={post.imageAlt}
          src={post.imageUrl}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/20 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
          <span>{categoryLookup[post.category]?.name ?? post.category}</span>
          <span aria-hidden="true" className="h-px w-6 bg-brand-charcoal/10" />
          <span>
            {formatDate(post.publishedAt)} • {post.readTimeMinutes} min
          </span>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-xl font-semibold text-brand-charcoal transition group-hover:text-brand-red">
            {post.title}
          </h3>
          {showExcerpt && <p className="text-sm leading-relaxed text-brand-charcoal/80">{post.excerpt}</p>}
        </div>
        <div className="mt-auto flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
          <span>{post.location}</span>
          <span>By {post.author}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default PostCard;
