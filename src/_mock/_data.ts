import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames,
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Alex Sterling',
  email: 'alex.sterling@cmsdash.com',
  photoURL: `${import.meta.env.BASE_URL}assets/images/avatar/avatar-25.webp`,
};

// ----------------------------------------------------------------------

export const _users = [...Array(30)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index) || index % 3 === 0, // More verified users
  avatarUrl: `${import.meta.env.BASE_URL}assets/images/avatar/avatar-${index + 1}.webp`,
  status: index % 5 ? 'active' : 'banned', // Slightly fewer banned users
  role:
    [
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer',
      'Data Analyst', // New role
      'Marketing Lead', // New role
      'Content Strategist', // New role
    ][index % 13] || 'UI Designer',
}));

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: `Q3 Success: ${_description(index).slice(0, 50)}... boosted engagement!`, // Shortened with success note
  coverUrl: `${import.meta.env.BASE_URL}assets/images/cover/cover-${index + 1}.webp`,
  totalViews: 15000 + index * 1000, // Higher views
  totalComments: 12000 + index * 500, // Higher comments
  totalShares: 10000 + index * 400, // Higher shares
  totalFavorites: 11000 + index * 300, // Higher favorites
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: `${import.meta.env.BASE_URL}assets/images/avatar/avatar-${index + 1}.webp`,
  },
}));

// ----------------------------------------------------------------------

const COLORS = [
  '#8640B4', // Primary purple
  '#69328F', // Secondary purple
  '#9BE9D8', // Teal accent
  '#36454F', // Charcoal gray
  '#F5F5F5', // White shade
];

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: _id(index),
    price: _price(index) * 1.2, // 20% price increase for better quarter
    name: _productNames(index),
    priceSale: setIndex % 2 ? null : _price(index) * 0.85, // More frequent sales
    coverUrl: `${import.meta.env.BASE_URL}assets/images/product/product-${setIndex}.webp`,
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 5)) ||
      (setIndex === 23 && COLORS.slice(2, 4)) ||
      (setIndex === 24 && COLORS.slice(0, 3)) ||
      COLORS,
    status:
      ([1, 3, 5, 7].includes(setIndex) && 'sale') ||
      ([4, 8, 12, 16].includes(setIndex) && 'new') ||
      ([2, 6, 10].includes(setIndex) && 'featured') || // New status for variety
      '',
  };
});

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: 'en',
    label: 'English',
    icon: `${import.meta.env.BASE_URL}assets/icons/flags/ic-flag-en.svg`,
  },
  {
    value: 'de',
    label: 'German',
    icon: `${import.meta.env.BASE_URL}assets/icons/flags/ic-flag-de.svg`,
  },
  {
    value: 'fr',
    label: 'French',
    icon: `${import.meta.env.BASE_URL}assets/icons/flags/ic-flag-fr.svg`,
  },
  {
    value: 'es',
    label: 'Spanish',
    icon: `${import.meta.env.BASE_URL}assets/icons/flags/ic-flag-es.svg`, // Added for global expansion
  },
];

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    'Q3 2025, orders, $8420', // Doubled value
    '18 Invoices paid this quarter', // More invoices
    'Order #39210 from October', // Recent order
    'New order placed #XF-2987', // New order ID
    'Record order #XF-3012', // High-value order
  ][index],
  type: `order${index + 1}`,
  time: _times(index),
}));

// ----------------------------------------------------------------------

export const _traffic = [
  {
    value: 'facebook',
    label: 'Facebook',
    total: 45876,
  },
  {
    value: 'google',
    label: 'Google',
    total: 149908,
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    total: 4152,
  },
  {
    value: 'twitter',
    label: 'Twitter',
    total: 5789,
  },
];

// ----------------------------------------------------------------------

export const _tasks = Array.from({ length: 7 }, (_, index) => ({
  id: _id(index),
  name: _taskNames(index) || `Task ${index + 1}: Q3 Campaign`, // Added tasks
}));

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: 'Record order #XF-2987 placed',
    description: 'Shipped and generating $5K revenue',
    avatarUrl: null,
    type: 'order-placed',
    postedAt: _times(1),
    isUnRead: true,
  },
  {
    id: _id(2),
    title: _fullName(2),
    description: 'Commented on Q3 analytics report',
    avatarUrl: `${import.meta.env.BASE_URL}assets/images/avatar/avatar-2.webp`,
    type: 'friend-interactive',
    postedAt: _times(2),
    isUnRead: true,
  },
  {
    id: _id(3),
    title: 'New campaign messages',
    description: '8 unread messages from clients',
    avatarUrl: null,
    type: 'chat-message',
    postedAt: _times(3),
    isUnRead: true, // More unread to show activity
  },
  {
    id: _id(4),
    title: 'Q3 report received',
    description: 'Analytics from marketing team',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(4),
    isUnRead: true, // More unread
  },
  {
    id: _id(5),
    title: 'Bulk order shipped',
    description: 'Order #XF-3012 to global client',
    avatarUrl: null,
    type: 'order-shipped',
    postedAt: _times(5),
    isUnRead: false,
  },
];