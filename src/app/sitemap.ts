import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ultrablogs.in/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.ultrablogs.in/blogs/",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.ultrablogs.in/login",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.ultrablogs.in/register",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.ultrablogs.in/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
