

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Eneotu Joe',
  description: 'I\'m an artificial intelligence and software engineer',
  BASE_URL: 'https://eneotu.com',
  share_image_url: '',
  logo_url: '',

  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Project" },
    { href: "/research", label: "Research" },
  ],

  socialLinks: {
    github: "https://github.com/eneotujoe",
    facebook: 'https://web.facebook.com/eneotujoe',
    linkedin: 'https://www.linkedin.com/in/eneotujoe/',
    instagram: 'https://instagram.com/eneotujoe',
    x: 'https://x.com/eneotujoe',
    youtube: 'https://www.youtube.com/eneotujoe',
  },
}
