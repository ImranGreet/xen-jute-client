<script lang="ts">
	import type { BlogPost } from "$lib/types/types";

    let { id, title, excerpt, content, imageUrl, category, publishDate, author, commentCount, readTime, tags, slug } = $props();
    let blogPost:BlogPost = {
        id,
        title,
        excerpt,
        content,
        imageUrl,
        category,
        publishDate,
        author,
        commentCount,
        readTime,
        tags,
        slug
    };
</script>

<article class="blog-post">
	<div
		class="post-image"
		style="background-image: url({blogPost.imageUrl})"
	>
		<span class="post-category">{blogPost.category}</span>
	</div>
	<div class="post-content">
		<div class="post-meta">
			<span><i class="far fa-calendar"></i> October 15, 2023</span>
			<span><i class="far fa-user"></i> Admin</span>
			<span><i class="far fa-comment"></i> {blogPost.commentCount} Comments</span>
		</div>
		<h2>{blogPost.title}</h2>
		<p>
			Jute bags are not just an eco-friendly alternative to plastic; they represent a shift towards
			sustainable consumerism. With growing environmental concerns worldwide, jute offers a
			biodegradable, renewable, and durable solution for packaging needs...
		</p>
		<a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
	</div>
</article>
