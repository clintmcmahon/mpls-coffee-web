using Microsoft.AspNetCore.Mvc;
using MPLSCoffee.Web.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace MPLSCoffee.Web.Controllers
{
    public class BlogController : Controller
    {
        private readonly string _blogPostsPath = Path.Combine(Directory.GetCurrentDirectory(), "BlogPosts");

        public IActionResult Index()
        {
            var blogPosts = Directory.GetFiles(_blogPostsPath, "*.md")
                                     .Select(filePath => new BlogPost
                                     {
                                         Title = System.IO.File.ReadLines(filePath).FirstOrDefault(),
                                         Content = string.Join("\n", System.IO.File.ReadLines(filePath).Skip(1)),
                                         Slug = Path.GetFileNameWithoutExtension(filePath)
                                     })
                                     .ToList();
            return View(blogPosts);
        }

        public IActionResult Details(string slug)
        {
            var filePath = Path.Combine(_blogPostsPath, $"{slug}.md");
            if (!System.IO.File.Exists(filePath))
            {
                return NotFound();
            }

            var lines = System.IO.File.ReadAllLines(filePath);
            var blogPost = new BlogPost
            {
                Title = lines.FirstOrDefault(),
                Content = string.Join("\n", lines.Skip(1))
            };

            var blogPosts = Directory.GetFiles(_blogPostsPath, "*.md")
                                     .Select(filePath => new BlogPost
                                     {
                                         Title = System.IO.File.ReadLines(filePath).FirstOrDefault(),
                                         Slug = Path.GetFileNameWithoutExtension(filePath)
                                     })
                                     .ToList();

            ViewBag.BlogPosts = blogPosts;

            return View(blogPost);
        }
    }
}