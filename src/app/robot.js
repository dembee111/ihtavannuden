export default function robot() {
  return {
    rules: {
      // all the user agents from all Search engines
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: "https://ikhtavannuden.mn/sitemap.xml",
  };
}
