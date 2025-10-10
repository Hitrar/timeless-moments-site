const Blog = () => {
  const blogPosts = [
    {
      title: "10 Tips for Perfect Wedding Photos",
      date: "March 15, 2024",
      excerpt: "Discover the secrets to capturing stunning wedding moments that you'll treasure forever.",
    },
    {
      title: "Choosing Your Wedding Photography Style",
      date: "March 8, 2024",
      excerpt: "Learn about different photography styles and how to choose the perfect one for your big day.",
    },
    {
      title: "The Best Wedding Venues in 2024",
      date: "March 1, 2024",
      excerpt: "Explore our curated list of the most beautiful wedding venues perfect for your special day.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-playfair font-semibold mb-6 text-center">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Wedding photography tips, inspiration, and stories
          </p>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-secondary rounded-lg p-8 border border-border hover:border-accent transition-colors"
              >
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <h2 className="text-2xl font-playfair font-semibold mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <a href="#" className="text-accent hover:underline">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
