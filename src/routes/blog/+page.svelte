<script>
	import BlogCard from "../../components/Blogstore/blog-card.svelte";
	import Blogsidebar from "../../components/Blogstore/blogsidebar.svelte";

    let blogPosts = [
        {
            id: 1,
            title: "Why Jute Bags Are the Future of Sustainable Packaging",
            excerpt: "Jute bags are not just an eco-friendly alternative to plastic; they represent a shift towards sustainable consumerism. With growing environmental concerns worldwide, jute offers a biodegradable, renewable, and durable solution for packaging needs...",
            content: "Full content of the blog post goes here...",
            imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Sustainability",
            publishDate: "2023-10-15",
            author: "Admin",
            commentCount: 12,
            readTime: "5 min read",
            tags: ["Jute Bags", "Eco-Friendly", "Sustainability"],
            slug: "why-jute-bags-are-the-future-of-sustainable-packaging"
        },
        {
            id: 2,
            title: "Understanding EU Regulations for Jute Product Imports",
            excerpt: "Exporting jute bags to European markets requires compliance with specific regulations. From REACH compliance to packaging waste directives, understanding these requirements is crucial for successful market entry. This guide covers the essential regulations you need to know...",
            content: "Full content of the blog post goes here...",
            imageUrl: "https://images.unsplash.com/photo-1572810677431-9a662da8d284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Export Guide",
            publishDate: "2023-10-08",
            author: "Export Manager",
            commentCount: 8,
            readTime: "4 min read",
            tags: ["Jute Bags", "EU Regulations", "Export"],
            slug: "understanding-eu-regulations-for-jute-product-imports"
        },
        {
            id: 3,
            title: "Top 5 Jute Bag Design Trends for 2024",
            excerpt: "As the demand for eco-friendly products rises, jute bag designs are evolving to meet consumer preferences. From minimalist aesthetics to vibrant prints, here are the top design trends for jute bags in 2024 that can help your products stand out...",
            content: "Full content of the blog post goes here...",
            imageUrl: "https://images.unsplash.com/photo-1663776376262-1d12c353f789?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Design Trends",
            publishDate: "2023-10-01",
            author: "Design Team",
            commentCount: 15,
            readTime: "6 min read",
            tags: ["Jute Bags", "Design Trends", "Sustainability"],
            slug: "top-5-jute-bag-design-trends-for-2024"
        }
    ];

</script>

 
    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Xenmesh Blog</h1>
            <p>Industry insights, sustainability tips, and export guidance for jute bag businesses</p>
            <a href="#blog-posts" class="btn">Explore Articles</a>
        </div>
    </section>

    <!-- Blog Content -->
    <section class="blog" id="blog-posts">
        <div class="container">
            <div class="blog-content">
                <!-- Main Blog Posts -->
                <div class="blog-posts">
                    <!-- Blog Post 1 -->
                    {#each blogPosts as post}
                        <BlogCard 
                            id={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            content={post.content}
                            imageUrl={post.imageUrl}
                            category={post.category}
                            publishDate={post.publishDate}
                            author={post.author}
                            commentCount={post.commentCount}
                            readTime={post.readTime}
                            tags={post.tags}
                            slug={post.slug}
                        />
                    {/each}
                </div>

                <!-- Sidebar -->
               <Blogsidebar />
            </div>

            <!-- Pagination -->
            <div class="pagination">
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#"><i class="fas fa-chevron-right"></i></a>
            </div>
        </div>
    </section>

