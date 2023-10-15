export const projects = [
  {
    id: 1,
    title: "Gboosting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    links: {
      site: "https://gboosting.com/",
      code: null,
    },
    image: {
      phone: "/gb-phone.png",
      desktop: "/gb.png",
    },
  },
  {
    id: 2,
    title: "Audiophile Ecommerce",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    links: {
      site: "https://audiophileecommercewebsite.vercel.app/",
    },
    image: {
      phone: "/audiophile-phone.png",
      desktop: "/audiophile.png",
    },
  },
  {
    id: 3,
    title: "Where in the world",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    links: {
      site: "https://whereeintheworld.netlify.app/",
    },
    image: {
      phone: "/where-in-the-world-phone.png",
      desktop: "where-in-the-world.png",
    },
  },
  {
    id: 4,
    title: "URL shortening",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    links: {
      site: "https://urlshortenapp.vercel.app/",
    },
    image: {
      phone: "/shortly-phone.png",
      desktop: "/shortly.png",
    },
  },
  {
    id: 5,
    title: "IP address tracker",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    links: {
      site: "https://ipaddresstrack3r.netlify.app/",
    },
    image: {
      phone: "/ip-tracker-phone.png",
      desktop: "/ip-tracker.png",
    },
  },
];

export type Project = (typeof projects)[0];
