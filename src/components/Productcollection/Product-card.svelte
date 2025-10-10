<script lang="ts">
	import type Product from '$lib/types/types';
	let { name, size, price, description, icon, badge,productThumbnail } = $props();

	let product: Product = {
		name,
		size,
		price,
		description,
		icon,
		badge,
		productThumbnail,
	};
</script>

<div class="product-card">
	<div class="product-img">
		<!-- <i class={product.icon}></i> -->
		<div class="gift-image mixed w-100">
			<img
				src="{product.productThumbnail}"
				alt="{product.name}"
				width="100%"
				height="100%"
			/>
		</div>
		{#if product.badge}
			<div class="product-badge">{product.badge}</div>
		{/if}
	</div>
	<div class="product-info">
		<h3>{product.name}</h3>
		<div class="product-meta">
			<span>{product.size.charAt(0).toUpperCase() + product.size.slice(1)}</span>
			<span class="product-price">{product.price}</span>
		</div>
		<p>{product.description}</p>
		<div class="product-actions">
			<a href="#" class="btn btn-outline">Add To Cart</a>
			<a href="/product-details" class="btn btn-outline">View Details</a>
		</div>
	</div>
</div>

<style>
	.product-card {
		background: #fff;
		border-radius: 1rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		cursor: pointer;
	}

	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
	}

	.product-img {
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid #f2f2f2;
	}

	.gift-image {
		position: relative;
		width: 100%;
		height: 220px;
		border-radius: 0.75rem 0.75rem 0 0;
		overflow: hidden;
	}

	.gift-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease, filter 0.4s ease;
		border-radius: inherit;
	}

	.product-card:hover .gift-image img {
		transform: scale(1.1);
		filter: brightness(1.1) saturate(1.15);
	}

	.product-badge {
		position: absolute;
		top: 12px;
		left: 12px;
		right: auto;
		display: inline;
		background: linear-gradient(135deg, #ff7b00, #ff3c00);
		color: #fff;
		padding: 0.35rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		border-radius: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.product-info {
		padding: 1rem;
	}

	.product-info h3 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
		color: #333;
	}

	.product-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
		color: #666;
		font-size: 0.9rem;
	}

	.product-price {
		color: #1e88e5;
		font-weight: 600;
	}

	.product-info p {
		font-size: 0.9rem;
		color: #777;
		line-height: 1.5;
		margin-bottom: 1rem;
	}


</style>

