export type CategorySlug = 'food' | 'travel' | 'entertainment' | 'services';

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: CategorySlug;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  publishedAt: string;
  readTimeMinutes: number;
  author: string;
  location: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface SponsorPlacement {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

export const categories: Category[] = [
  {
    slug: 'food',
    name: 'Food & Drink',
    tagline: 'Restaurants, farms, and makers fueling the foothills.'
  },
  {
    slug: 'travel',
    name: 'Trails & Travel',
    tagline: 'Scenic drives, waterfall hikes, and cozy cabins to book next.'
  },
  {
    slug: 'entertainment',
    name: 'Arts & Entertainment',
    tagline: 'Live music, gallery openings, festivals, and small town events.'
  },
  {
    slug: 'services',
    name: 'Local Services',
    tagline: 'Trusted guides, outfitters, and pros keeping our community moving.'
  }
];

export const categoryLookup = categories.reduce<Record<CategorySlug, Category>>((acc, category) => {
  acc[category.slug] = category;
  return acc;
}, {} as Record<CategorySlug, Category>);

const posts: Post[] = [
  {
    id: 'supper-club-fall',
    title: 'Harvest Supper Club: Farmhouse Flavors for Fall',
    slug: 'harvest-supper-club-farmhouse-flavors',
    category: 'food',
    excerpt:
      'Chef Denise Holloway showcases heritage grains, orchard produce, and Appalachian cheeses in a candlelit supper under the stars.',
    imageUrl:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A candlelit farm table set for an autumn dinner with seasonal dishes.',
    publishedAt: '2024-10-02',
    readTimeMinutes: 6,
    author: 'Shane Michel',
    location: 'Clarkesville, GA',
    tags: ['seasonal', 'chef'],
    isFeatured: true
  },
  {
    id: 'cider-trail',
    title: 'North Georgia Cider Trail: Five Stops to Sip This Weekend',
    slug: 'north-georgia-cider-trail-weekend',
    category: 'food',
    excerpt:
      'From small-batch pear blends to tart apple spice, explore a self-guided tasting tour across orchards in Rabun and White counties.',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A row of hard cider glasses on a wooden bar with autumn leaves in the background.',
    publishedAt: '2024-09-24',
    readTimeMinutes: 5,
    author: 'Vicki Michel',
    location: 'Tiger, GA',
    tags: ['itinerary', 'beverage'],
    isFeatured: true
  },
  {
    id: 'smoky-mountain-lineup',
    title: '7 Live Music Sets to Catch Before the Leaves Change',
    slug: 'live-music-sets-leaf-season',
    category: 'entertainment',
    excerpt:
      'From bluegrass brunches to rooftop jazz jams, here are the can’t-miss performances lighting up the foothills this month.',
    imageUrl:
      'https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A guitarist performing on stage with warm lights reflecting on the audience.',
    publishedAt: '2024-09-28',
    readTimeMinutes: 4,
    author: 'Shane Michel',
    location: 'Gainesville, GA',
    tags: ['music', 'events'],
    isFeatured: true
  },
  {
    id: 'mountain-biking',
    title: 'Singletrack Secrets: Flowy Fall Rides Near Yonah',
    slug: 'singletrack-secrets-fall-rides',
    category: 'travel',
    excerpt:
      'We mapped three intermediate-friendly routes with sweeping views, creek crossings, and post-ride tacos nearby.',
    imageUrl:
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Mountain bikers riding through a forest trail covered in fall leaves.',
    publishedAt: '2024-09-18',
    readTimeMinutes: 7,
    author: 'Vicki Michel',
    location: 'Yonah Mountain, GA',
    tags: ['outdoors', 'cycling']
  },
  {
    id: 'leatherwood-market',
    title: 'Leatherwood Market: Meet the Makers Reviving Folk Crafts',
    slug: 'leatherwood-market-makers',
    category: 'entertainment',
    excerpt:
      'Quilt artist Aaliyah Brooks and potter Miguel Herrera share how the market is passing traditions to the next generation.',
    imageUrl:
      'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'An artisan pottery display at an outdoor market.',
    publishedAt: '2024-09-10',
    readTimeMinutes: 6,
    author: 'Shane Michel',
    location: 'Dahlonega, GA',
    tags: ['makers', 'community']
  },
  {
    id: 'moonrise-cabin',
    title: 'Moonrise Cabin: A Weekend Retreat Above Lake Burton',
    slug: 'moonrise-cabin-weekend-retreat',
    category: 'travel',
    excerpt:
      'Design-forward interiors, a cedar sauna, and a chef’s kitchen make this hideaway perfect for a slow, restorative long weekend.',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A modern cabin with floor-to-ceiling windows overlooking a forested lake.',
    publishedAt: '2024-09-05',
    readTimeMinutes: 8,
    author: 'Vicki Michel',
    location: 'Lake Burton, GA',
    tags: ['stay', 'design']
  },
  {
    id: 'service-guide-trail',
    title: 'Trailside Tune-Ups: Mechanics Keeping Riders Rolling',
    slug: 'trailside-tune-ups',
    category: 'services',
    excerpt:
      'Mobile mechanics and gear co-ops share how they keep locals and visitors ready for any mountain adventure.',
    imageUrl:
      'https://images.unsplash.com/photo-1448387473223-5c37445527e7?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A bicycle mechanic working on a mountain bike outdoors.',
    publishedAt: '2024-08-27',
    readTimeMinutes: 5,
    author: 'Shane Michel',
    location: 'Helen, GA',
    tags: ['service', 'outdoors']
  },
  {
    id: 'farmers-market-finds',
    title: 'What to Buy at the October Clarkesville Farmers Market',
    slug: 'october-farmers-market-finds',
    category: 'food',
    excerpt:
      'Sweet potato hand pies, muscadine jam, and cold brew from a new micro-roaster lead our picks this month.',
    imageUrl:
      'https://images.unsplash.com/photo-1542838686-73e80f1a5db0?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Fresh produce and baked goods at a fall farmers market booth.',
    publishedAt: '2024-09-30',
    readTimeMinutes: 4,
    author: 'Vicki Michel',
    location: 'Clarkesville, GA',
    tags: ['market', 'seasonal']
  },
  {
    id: 'ridge-wildflower-guide',
    title: 'Where to Spot the Last Wildflowers Along Panther Creek',
    slug: 'panther-creek-wildflowers',
    category: 'travel',
    excerpt:
      'Our ranger friends share the exact overlooks where the final bursts of color are still holding strong.',
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Wildflowers blooming beside a rushing creek in the mountains.',
    publishedAt: '2024-09-14',
    readTimeMinutes: 3,
    author: 'Shane Michel',
    location: 'Tallulah Gorge, GA',
    tags: ['wildflowers', 'hiking']
  },
  {
    id: 'storytelling-festival',
    title: 'Storytelling Festival Returns With Porch Concerts & Poetry',
    slug: 'storytelling-festival-returns',
    category: 'entertainment',
    excerpt:
      'Two days of porch concerts, open-mic poetry, and kid-friendly workshops fill the historic square with sound.',
    imageUrl:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'People gathered outdoors listening to a storyteller with string lights overhead.',
    publishedAt: '2024-09-12',
    readTimeMinutes: 5,
    author: 'Vicki Michel',
    location: 'Clarkesville, GA',
    tags: ['festival', 'family']
  },
  {
    id: 'barista-profile',
    title: 'Behind the Bar: Kennesaw’s Award-Winning Latte Artist',
    slug: 'kennesaw-latte-artist',
    category: 'food',
    excerpt:
      'Latte art champion Maria Sosa shares her morning routine, favorite beans, and what makes a perfect pour.',
    imageUrl:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A barista pouring latte art into a cup of coffee.',
    publishedAt: '2024-08-22',
    readTimeMinutes: 6,
    author: 'Shane Michel',
    location: 'Kennesaw, GA',
    tags: ['coffee', 'profile']
  },
  {
    id: 'lanier-paddle-guide',
    title: 'Sunrise Paddle Guide: Launch Points Around Lake Lanier',
    slug: 'sunrise-paddle-guide-lanier',
    category: 'travel',
    excerpt:
      'Beat the heat with sunrise routes, breakfast stops, and insider tips for navigating quiet coves.',
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&sat=-15',
    imageAlt: 'Kayakers paddling across a calm lake at sunrise.',
    publishedAt: '2024-08-18',
    readTimeMinutes: 4,
    author: 'Vicki Michel',
    location: 'Lake Lanier, GA',
    tags: ['water', 'guide']
  },
  {
    id: 'stagecoach-theatre',
    title: 'Stagecoach Theatre Debuts Renovated Historic Playhouse',
    slug: 'stagecoach-theatre-renovation',
    category: 'entertainment',
    excerpt:
      'Take a peek inside the lovingly restored playhouse ahead of its grand opening performance schedule.',
    imageUrl:
      'https://images.unsplash.com/photo-1515168833906-d1c4eddfba53?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Interior of a historic theatre with red velvet seats and ornate ceiling.',
    publishedAt: '2024-08-15',
    readTimeMinutes: 7,
    author: 'Shane Michel',
    location: 'Toccoa, GA',
    tags: ['theatre', 'heritage']
  },
  {
    id: 'service-guide-event-planners',
    title: 'Event Planners Bridging Atlanta & the Mountains',
    slug: 'event-planners-foothills',
    category: 'services',
    excerpt:
      'Boutique planners share logistics tips for weddings, corporate retreats, and creative residencies in the region.',
    imageUrl:
      'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'An outdoor wedding reception with hanging lights and elegantly set tables.',
    publishedAt: '2024-08-12',
    readTimeMinutes: 6,
    author: 'Vicki Michel',
    location: 'Cleveland, GA',
    tags: ['business', 'planning']
  },
  {
    id: 'gear-library',
    title: 'Borrow Before You Buy: Meet the Regional Gear Library',
    slug: 'regional-gear-library',
    category: 'services',
    excerpt:
      'Check out backpacking kits, film cameras, and festival gear thanks to a new cooperative lending program.',
    imageUrl:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Shelves filled with outdoor gear like backpacks and lanterns.',
    publishedAt: '2024-08-03',
    readTimeMinutes: 5,
    author: 'Shane Michel',
    location: 'Athens, GA',
    tags: ['community', 'resources']
  },
  {
    id: 'supper-series',
    title: 'Sunday Supper Series Heads to the Orchard',
    slug: 'sunday-supper-series-orchard',
    category: 'food',
    excerpt:
      'Tickets just dropped for this chef-collab dinner featuring heirloom apples and live fire cooking.',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80&sat=-20',
    imageAlt: 'A farm dinner with shared plates and seasonal dishes.',
    publishedAt: '2024-07-29',
    readTimeMinutes: 3,
    author: 'Vicki Michel',
    location: 'Ellijay, GA',
    tags: ['events', 'food']
  },
  {
    id: 'service-guide-gardeners',
    title: 'Master Gardeners Cultivating Pollinator Corridors',
    slug: 'master-gardeners-pollinator-corridors',
    category: 'services',
    excerpt:
      'Meet the volunteers transforming vacant lots into teaching gardens lined with native blooms.',
    imageUrl:
      'https://images.unsplash.com/photo-1441118963152-fb0bc406e9b2?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A gardener planting flowers in a community garden.',
    publishedAt: '2024-07-20',
    readTimeMinutes: 4,
    author: 'Shane Michel',
    location: 'Cornelia, GA',
    tags: ['gardening', 'community']
  }
];

export const featuredStories = posts.filter((post) => post.isFeatured);

export const postsByCategory = categories.reduce<Record<CategorySlug, Post[]>>((acc, category) => {
  acc[category.slug] = posts.filter((post) => post.category === category.slug).slice(0, 4);
  return acc;
}, {} as Record<CategorySlug, Post[]>);

export const homepageSections = categories.map((category) => ({
  category,
  posts: postsByCategory[category.slug]
}));

export const sponsorSpotlight: SponsorPlacement = {
  name: 'Soque River Outfitters',
  description:
    'Guided fly fishing floats, casting workshops, and curated gear for anglers discovering the Soque River headwaters.',
  imageUrl:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&sat=-25',
  imageAlt: 'An angler casting a line in a misty river at sunrise.',
  ctaLabel: 'Book a float trip',
  ctaHref: '#'
};

export const newsletterContent = {
  eyebrow: 'Weekend Dispatch',
  headline: 'Get the Red Clay itinerary before anyone else.',
  description:
    'Every Thursday morning we send a quick guide with new stories, events, and sponsor perks to help you plan your weekend in Northeast Georgia.'
};
