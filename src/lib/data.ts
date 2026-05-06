export const SHOP = {
  name: "Main Street Barbershop",
  short: "Main St. Barbershop",
  est: 2004,
  street: "70 W. Main St.",
  city: "Bergenfield",
  state: "New Jersey",
  zip: "07621",
  phone: "(201) 387-6300",
  phoneHref: "tel:+12013876300",
  email: "shop@mainstreetbarber.co",
  instagram: "https://www.instagram.com/mainstreetbarbershop04/",
  instagramHandle: "@mainstreetbarbershop04",
  yelp: "https://www.yelp.com/biz/main-street-barber-shop-bergenfield",
  hours: [
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "10:00 — 19:00" },
    { day: "Wednesday", time: "10:00 — 19:00" },
    { day: "Thursday", time: "10:00 — 19:00" },
    { day: "Friday", time: "10:00 — 19:00" },
    { day: "Saturday", time: "10:00 — 18:00" },
  ],
};

export const SERVICES = [
  {
    code: "01",
    name: "Signature Cut",
    desc: "A precision haircut tailored to your face and lifestyle. Includes consultation, hot towel, and a finish with classic pomade or matte clay.",
    duration: "45 min",
    price: 38,
  },
  {
    code: "02",
    name: "Skin Fade",
    desc: "Razor-tight bald fade with seamless gradients, sharp line-up, and a precise neck shave finish.",
    duration: "50 min",
    price: 42,
  },
  {
    code: "03",
    name: "Beard Sculpt",
    desc: "Beard shaping, trim, and contouring with straight-razor detail. Hot towel and beard oil included.",
    duration: "30 min",
    price: 28,
  },
  {
    code: "04",
    name: "Hot Towel Shave",
    desc: "The full ritual. Pre-shave oil, lathered straight razor, hot and cold towels, balm finish. Old-world quiet.",
    duration: "45 min",
    price: 45,
  },
  {
    code: "05",
    name: "Father & Son",
    desc: "Two cuts, side by side. Walking out with the same line is a tradition since 2004.",
    duration: "60 min",
    price: 60,
  },
  {
    code: "06",
    name: "The Kid's Cut",
    desc: "Patient cuts for the little ones (10 & under). Bubblegum optional, shape-up included.",
    duration: "30 min",
    price: 25,
  },
];

export const TEAM = [
  {
    name: "Eddie",
    role: "Master Barber · Owner",
    years: 22,
    bio: "Opened the doors in 2004. Specializes in classic tapers, scissor work, and the kind of conversation that turns a haircut into a Saturday.",
    initials: "ED",
    accent: "rust",
  },
  {
    name: "Marco",
    role: "Senior Barber",
    years: 14,
    bio: "Skin fades, beard sculpting, and a straight razor that hasn't met a line it couldn't carve.",
    initials: "MA",
    accent: "brass",
  },
  {
    name: "Luis",
    role: "Barber",
    years: 8,
    bio: "Modern textures, low-fade craftsman, and the shop's quiet perfectionist.",
    initials: "LU",
    accent: "rust",
  },
  {
    name: "Tony",
    role: "Apprentice",
    years: 2,
    bio: "Learning the chair the right way. Under the lights, in front of every regular on Main Street.",
    initials: "TO",
    accent: "brass",
  },
];

export const REVIEWS = [
  {
    quote:
      "Best barbershop in Bergen County. Eddie has been cutting my hair since I was nine. Wouldn't go anywhere else.",
    name: "Anthony R.",
    where: "Google · 5★",
  },
  {
    quote:
      "Walked in for a quick line-up, walked out with the cleanest fade I've had in years. Old-school feel, modern result.",
    name: "Jamel W.",
    where: "Yelp · 5★",
  },
  {
    quote:
      "Brought my dad and my son here. Three generations, one chair. That tells you everything.",
    name: "Mike C.",
    where: "Google · 5★",
  },
  {
    quote:
      "The hot towel shave is genuinely a religious experience. I'm not exaggerating. Block out an hour.",
    name: "David K.",
    where: "Yelp · 5★",
  },
];

export const STATS = [
  { num: "21", label: "Years on Main St." },
  { num: "4", label: "Master barbers" },
  { num: "120k+", label: "Cuts delivered" },
  { num: "5.0", label: "Average rating" },
];

export const NAV = [
  { href: "#story", label: "Story" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Barbers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];
