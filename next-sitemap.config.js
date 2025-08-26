/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oprahomes.ca',   // your custom domain
  generateRobotsTxt: true,           // automatically create robots.txt
  sitemapSize: 5000,                 // optional, split if large
  changefreq: 'daily',               // optional, update frequency
  priority: 0.7                      // optional, default priority
};
