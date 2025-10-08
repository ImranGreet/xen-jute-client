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
			badge: "Best Seller"
		},
		{
			name: "Jute Laptop Bag",
			size: "large",
			price: "$30.00",
			description:
				"Protect your laptop in style with this eco-friendly jute laptop bag.",
			icon: "fas fa-laptop",
			badge: ""
		},
		{
			name: "Promotional Jute Bag",
			size: "small",
			price: "$8.00",
			description:
				"Customizable jute bags ideal for promotional events and giveaways.",
			icon: "fas fa-gift",
			badge: ""
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
			<a href="#contact" class="btn">Get In Touch</a>
		</div>
	</div>
</section>

<!-- Products Section -->
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
							<p>info@xenmesh.com</p>
						</div>
					</div>
					<div class="contact-item">
						<div class="contact-icon">
							<i class="fas fa-phone"></i>
						</div>
						<div>
							<h4>Call Us</h4>
							<p>+880 1234 567890</p>
						</div>
					</div>
				</div>
			</div>

			<div class="contact-form">
				<h3>Send Us Your Requirements</h3>
				<p>Select your preferred option below:</p>

				<div class="form-options">
					<div class="form-option active" data-option="sample">
						<i class="fas fa-box-open"></i>
						<p>Purchase Sample</p>
					</div>
					<div class="form-option" data-option="custom">
						<i class="fas fa-pencil-alt"></i>
						<p>Custom Design</p>
					</div>
					<div class="form-option" data-option="bulk">
						<i class="fas fa-shipping-fast"></i>
						<p>Bulk Order</p>
					</div>
				</div>

				<form id="inquiryForm">
					<div class="form-group">
						<label for="name">Full Name</label>
						<input type="text" id="name" class="form-control" required />
					</div>
					<div class="form-group">
						<label for="email">Email Address</label>
						<input type="email" id="email" class="form-control" required />
					</div>
					<div class="form-group">
						<label for="company">Company Name</label>
						<input type="text" id="company" class="form-control" />
					</div>
					<div class="form-group">
						<label for="country">Country</label>
						<input type="text" id="country" class="form-control" required />
					</div>
					<div class="form-group">
						<label for="message">Your Requirements</label>
						<textarea id="message" class="form-control" required></textarea>
					</div>
					<button type="submit" class="btn">Submit Inquiry</button>
				</form>
			</div>
		</div>
	</div>
</section>
