<script>
	import Clientreview from "../components/Card/review/Clientreview.svelte";
import ProductCard from "../components/Productcollection/Product-card.svelte";
	let products = [
		{
			name: "Eco-Friendly Tote Bag",
			size: "medium",
			price: "$15.00",
			description:
				"A stylish and durable tote bag made from 100% jute, perfect for everyday use.",
			icon: "fas fa-shopping-bag",
			badge: "Best Seller",
			productThumbnail:"https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
		},
		{
			name: "Jute Laptop Bag",
			size: "large",
			price: "$30.00",
			description:
				"Protect your laptop in style with this eco-friendly jute laptop bag.",
			icon: "fas fa-laptop",
			badge: "",
			productThumbnail:"https://images.unsplash.com/photo-1572810677431-9a662da8d284?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
		},
		{
			name: "Promotional Jute Bag",
			size: "small",
			price: "$8.00",
			description:
				"Customizable jute bags ideal for promotional events and giveaways.",
			icon: "fas fa-gift",
			badge: "",
			productThumbnail:"https://images.unsplash.com/photo-1758708536099-9f46dc81fffc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1070"
		}
	];

	let reviews = [
		{
			id: "1",
			reviewerName: "John Doe",
			reviewerRole: "Purchasing Manager, EcoGoods Ltd.",
			reviewerImage: "",
			reviewText:
				"Xenmesh provided us with high-quality jute bags that perfectly matched our sustainability goals. Their customer service was exceptional, and the delivery was prompt. Highly recommend!"
		},
		{
			id: "2",
			reviewerName: "Jane Smith",
			reviewerRole: "Owner, GreenMarket",
			reviewerImage: "",
			reviewText:
				"We've been sourcing jute bags from Xenmesh for our store for over a year now. The quality is consistently excellent, and our customers love the eco-friendly designs. Great experience overall!"
		},
		{
			id: "3",
			reviewerName: "Akira Tanaka",
			reviewerRole: "Import Manager, Tokyo Eco Supplies",
			reviewerImage: "",
			reviewText:
				"Xenmesh has been a reliable partner for our jute bag needs. Their products meet international standards, and their team is always responsive to our inquiries. Looking forward to continuing our collaboration."
		}
	];

</script>
<!-- Hero Section -->
<section class="hero" id="home">
	<div class="container">
		<div class="hero-content">
			<h1>Eco-Friendly Jute Fashion Bags for Global Markets</h1>
			<p>
				Premium quality jute bags crafted with sustainability in mind. Exporting to EU, Japan, USA,
				Canada and beyond.
			</p>
			<a href="/product-collection" class="btn">Get In Touch</a>
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

<!-- Reviews Section -->
<section class="reviews" id="reviews">
	<div class="container">
		<div class="section-title">
			<h2>Client Reviews</h2>
			<p>What our international clients say about us</p>
		</div>
		<div class="review-container">
			{#each reviews as review}
				<Clientreview 
					id={review.id}
					reviewerName={review.reviewerName}
					reviewerRole={review.reviewerRole}
					reviewerImage={review.reviewerImage}
					reviewText={review.reviewText}
				/>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="contact" id="contact">
	<div class="container">
		<div class="section-title">
			<h2>Get In Touch</h2>
			<p>Connect with us for samples, custom designs, or bulk orders</p>
		</div>
		<div class="contact-container">
			<div class="contact-info">
				<h3>Let's Work Together</h3>
				<p>
					We specialize in supplying high-quality jute fashion bags to international markets.
					Whether you need samples, custom designs, or bulk orders, we're here to help.
				</p>

				<div class="contact-details">
					<div class="contact-item">
						<div class="contact-icon">
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<div>
							<h4>Our Location</h4>
							<p>Dhaka, Bangladesh</p>
						</div>
					</div>
					<div class="contact-item">
						<div class="contact-icon">
							<i class="fas fa-envelope"></i>
						</div>
						<div>
							<h4>Email Us</h4>
							<p><a href="mailto:hossainimran1208@gmail.com" class="email-custom">hossainimran1208@gmail.com</a></p>
						</div>
					</div>
					<div class="contact-item">
						<div class="contact-icon">
							<i class="fas fa-phone"></i>
						</div>
						<div>
							<h4>Call Us</h4>
							<p> <span><i class="fa-brands fa-whatsapp"></i></span>+8801912444216</p>
						</div>
					</div>
				</div>
			</div>

			
		</div>
	</div>
</section>
