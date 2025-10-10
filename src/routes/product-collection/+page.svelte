<script lang="ts">
	import ProductCard from '../../components/Productcollection/Product-card.svelte';

	let products = [
		{
			name: 'Eco-Friendly Tote Bag',
			size: 'medium',
			price: '$15.00',
			description: 'A stylish and durable tote bag made from 100% jute, perfect for everyday use.',
			icon: 'fas fa-shopping-bag',
			badge: 'Best Seller',
			productThumbnail:
				'https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'
		},
		{
			name: 'Jute Laptop Bag',
			size: 'large',
			price: '$30.00',
			description: 'Protect your laptop in style with this eco-friendly jute laptop bag.',
			icon: 'fas fa-laptop',
			badge: '',
			productThumbnail:
				'https://images.unsplash.com/photo-1572810677431-9a662da8d284?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
		},
		{
			name: 'Promotional Jute Bag',
			size: 'small',
			price: '$8.00',
			description: 'Customizable jute bags ideal for promotional events and giveaways.',
			icon: 'fas fa-gift',
			badge: '',
			productThumbnail:
				'https://images.unsplash.com/photo-1758708536099-9f46dc81fffc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1070'
		}
	];
</script>

<!-- Page Header -->
<section class="page-header">
	<div class="container">
		<h1>Our Product Collection</h1>
		<p>
			Explore our wide range of eco-friendly jute fashion bags. From classic designs to custom
			creations, we have the perfect sustainable solution for your business.
		</p>
		<a href="index.html#contact" class="btn">Request Custom Quote</a>
	</div>
</section>

<!-- Catalog Controls -->
<section class="catalog-controls">
	<div class="container">
		<div class="controls-container">
			<div class="search-box">
				<i class="fas fa-search"></i>
				<input type="text" id="searchInput" placeholder="Search products..." />
			</div>

			<div class="filter-options">
				<select class="filter-select" id="categoryFilter">
					<option value="all">All Categories</option>
					<option value="tote">Tote Bags</option>
					<option value="shopper">Shopper Bags</option>
					<option value="laptop">Laptop Bags</option>
					<option value="promo">Promotional Bags</option>
					<option value="fashion">Fashion Bags</option>
				</select>

				<select class="filter-select" id="sizeFilter">
					<option value="all">All Sizes</option>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
				</select>

				<select class="filter-select" id="priceFilter">
					<option value="all">All Prices</option>
					<option value="low">Under $10</option>
					<option value="medium">$10 - $25</option>
					<option value="high">Over $25</option>
				</select>
			</div>

			<div class="view-options">
				<div class="view-btn active" id="gridView">
					<i class="fas fa-th"></i>
				</div>
				<div class="view-btn" id="listView">
					<i class="fas fa-list"></i>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Products Section -->
<section class="products">
	<div class="container">
		<div class="products-grid" id="productsContainer">
			{#each products as product}
				<ProductCard
					name={product.name}
					size={product.size}
					price={product.price}
					description={product.description}
					icon={product.icon}
					badge={product.badge}
					productThumbnail={product.productThumbnail}
				/>
			{/each}
		</div>

		<div class="pagination">
			<a href="#" class="active">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">4</a>
			<a href="#"><i class="fas fa-chevron-right"></i></a>
		</div>
	</div>
</section>
