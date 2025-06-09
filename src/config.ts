export const SITE = {
  website: "https://blog.luba.dev/",
  author: "Olaf Luijks",
  profile: "https://github.com/oluijks/",
  desc: "My personal blog about me, my beautiful wife luba, my family, programming, paleontology, art, webdevelopment, rust, my own poetry and short (erotic) stories, movies, classical and metal music, my Bull Terrier Bogdan, the roman empire, drumming, cosmology and much more",
  title: "luba.blog",
  ogImage: "astropaper-og.jpg", // TODO: replace with my own image
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/oluijks/blog.luba.dev/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "Europe/Amsterdam",
} as const;
