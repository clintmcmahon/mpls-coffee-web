using Microsoft.AspNetCore.Mvc;
using MPLSCoffee.Web.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace MPLSCoffee.Web.Controllers
{
    public class SitemapController : Controller
    {
        private readonly string _blogPostsPath = Path.Combine(Directory.GetCurrentDirectory(), "BlogPosts");

        [HttpGet("sitemap.xml")]
        public IActionResult Sitemap()
        {
            var baseUrl = $"{Request.Scheme}://{Request.Host}";

            var urls = new List<(string loc, string lastmod)>
            {
                (Url.Action("Index", "Home", null, Request.Scheme), null),
                (Url.Action("About", "Home", null, Request.Scheme), null),
                (Url.Action("Download", "Home", null, Request.Scheme), null),
                (Url.Action("Index", "Blog", null, Request.Scheme), null)
            };

            var blogPosts = Directory.GetFiles(_blogPostsPath, "*.md")
                                     .Select(filePath => (
                                         loc: Url.Action("Details", "Blog", new { slug = Path.GetFileNameWithoutExtension(filePath) }, Request.Scheme),
                                         lastmod: System.IO.File.GetLastWriteTime(filePath).ToString("yyyy-MM-dd")
                                     ))
                                     .ToList();

            urls.AddRange(blogPosts);

            XNamespace ns = "http://www.sitemaps.org/schemas/sitemap/0.9";
            var sitemap = new XDocument(
                new XDeclaration("1.0", "utf-8", "yes"),
                new XElement(ns + "urlset",
                    urls.Select(url => new XElement(ns + "url",
                        new XElement(ns + "loc", url.loc),
                        url.lastmod != null ? new XElement(ns + "lastmod", url.lastmod) : null
                    ))
                )
            );

            return Content(sitemap.ToString(), "application/xml", Encoding.UTF8);
        }
    }
}