// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//     // siteUrl:'https://nftconstructer.com/',
//     siteUrl:'http://localhost:3000/',
//     generateRobotsTxt: true,
//   }


const siteUrl = 'https://nftconstructer.com/';
module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}sitemap.xml`,
      `${siteUrl}server-sitemap.xml`,
    ],
  },
};