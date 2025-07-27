export const SITE = {
  website: "https://charleshood.net/", // replace this with your deployed domain
  author: "Charles Hood",
  profile: "https://charleshood.net/",
  desc: "My personal web log where I write about tech, tunes, and travel!",
  title: "Charles Hood",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/charles-hood/lumen-blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

export interface GiscusProps {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: "pathname" | "url" | "title" | "og:title" | "specific" | "number";
  strict: "0" | "1";
  reactionsEnabled: "0" | "1";
  emitMetadata: "0" | "1";
  inputPosition: "top" | "bottom";
  lang: string;
  loading: "lazy" | "eager";
}

export const GISCUS: GiscusProps = {
  repo: "charles-hood/cdh-astro-blog",
  repoId: "R_kgDONhx-tw",
  category: "Announcements",
  categoryId: "DIC_kwDONhx-t84ClG5J",
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "en",
  loading: "lazy",
};
