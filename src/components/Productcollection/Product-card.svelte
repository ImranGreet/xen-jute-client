<script lang="ts">
	import type Product from '$lib/types/types';
	let { name, size, price, description, icon, badge } = $props();

	let product: Product = {
		name,
		size,
		price,
		description,
		icon,
		badge
	};
</script>

<div class="product-card">
	<div class="product-img">
		<i class={product.icon}></i>
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
			<a href="#" class="btn btn-outline">Request Sample</a>
			<a href="#" class="btn">Bulk Order</a>
		</div>
	</div>
</div>
