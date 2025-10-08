<script lang="ts">
	import GiftCardFeature from '../../components/Card/giftcard/gift-card-feature.svelte';
	import Uses from '../../components/Card/giftcard/uses.svelte';

	let uses = [
		{
			id: '1',
			title: 'Apparel Brands',
			description: 'Sustainable packaging solution for clothing, accessories, and fashion items.',
			icon: 'fas fa-tshirt'
		},
		{
			id: '2',
			title: 'Beauty Products',
			description: 'Natural packaging for cosmetics, skincare, and wellness products.',
			icon: 'fas fa-spa'
		},
		{
			id: '3',
			title: 'Food & Beverage',
			description: 'Perfect for specialty foods, wines, teas, and gourmet gift sets.',
			icon: 'fas fa-wine-bottle'
		},
		{
			id: '4',
			title: 'Jewelry',
			description: 'Luxurious yet sustainable packaging for fine jewelry and accessories.',
			icon: 'fas fa-gem'
		},
		{
			id: '5',
			title: 'Corporate Gifting',
			description:
				'Professional yet eco-friendly packaging for corporate gifts and client appreciation.',
			icon: 'fas fa-gift'
		}
	];

	let giftFeatures = [
		{
			id: 1,
			giftTitle: 'Jute & Bamboo Luxury Box',
			giftCategory: 'Luxary',
			giftMaterial: ['Bamboo', 'Jute'],
			giftCode: 'x-0-f-35',
			giftDimentions: [12, 10, 23],
			features: ['Natural', 'No fuel'],
			giftThumbnail:"https://images.unsplash.com/photo-1577135762420-935f66186244?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			id: 1,
			giftTitle: 'Jute & Bamboo Luxury Box',
			giftCategory: 'Luxary',
			giftMaterial: ['Bamboo', 'Jute'],
			giftCode: 'xm-0L-f-35',
			giftDimentions: [12, 10, 23],
			features: ['Natural', 'No fuel'],
			giftThumbnail:"https://images.unsplash.com/photo-1655105482013-b8d1fe932168?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			id: 1,
			giftTitle: 'Jute & Bamboo Luxury Box',
			giftCategory: 'Ordinary',
			giftMaterial: ['Bamboo', 'Jute'],
			giftCode: 'x-0-f-35',
			giftDimentions: [12, 10, 23],
			features: ['Natural', 'No fuel'],
			giftThumbnail:"https://images.unsplash.com/photo-1585800935411-d7d7eed23ccc?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		}
	];

	let solution = [
  {
    id: "1",
    icon: "fas fa-ribbon",
    title: "Jute Ribbons",
    description:
      "Complement your gift boxes with our natural jute ribbons in various widths and colors."
  },
  {
    id: "2",
    icon: "fas fa-tag",
    title: "Custom Tags",
    description:
      "Eco-friendly tags made from recycled paper or jute with your custom printing."
  },
  {
    id: "3",
    icon: "fas fa-fill-drip",
    title: "Filler Material",
    description:
      "Shredded jute or natural paper filler to protect contents and enhance presentation."
  },
  {
    id: "4",
    icon: "fas fa-sticky-note",
    title: "Inserts & Cards",
    description:
      "Custom printed inserts, thank you cards, or care instruction cards."
  }
];

</script>

<!-- Page Header -->
<section class="page-header">
	<div class="container">
		<h1>Eco-Friendly Gift Boxes</h1>
		<p>Premium jute and bamboo gift packaging solutions for sustainable brands</p>
		<a href="#collection" class="btn">Explore Collection</a>
	</div>
</section>

<!-- Materials Showcase -->
<section class="materials-showcase">
	<div class="container">
		<div class="section-title">
			<h2>Natural Materials</h2>
			<p>Crafted from sustainable, biodegradable materials</p>
		</div>

		<div class="materials-grid">
			<div class="material-card jute">
				<div class="material-icon">
					<i class="fas fa-leaf"></i>
				</div>
				<h3>Jute Fabric</h3>
				<p>
					Strong, durable, and completely biodegradable. Jute is one of the most sustainable natural
					fibers available.
				</p>
				<ul class="material-features">
					<li>100% biodegradable and compostable</li>
					<li>High tensile strength</li>
					<li>Breathable natural fiber</li>
					<li>Eco-friendly production process</li>
					<li>Natural golden color or custom dyed</li>
				</ul>
			</div>

			<div class="material-card bamboo">
				<div class="material-icon">
					<i class="fas fa-tree"></i>
				</div>
				<h3>Bamboo Accents</h3>
				<p>
					Fast-growing and renewable, bamboo adds structural integrity and natural elegance to our
					gift boxes.
				</p>
				<ul class="material-features">
					<li>Rapidly renewable resource</li>
					<li>Natural antibacterial properties</li>
					<li>Lightweight yet strong</li>
					<li>Beautiful natural grain</li>
					<li>Easily customizable</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Gift Box Collection -->
<section class="gift-collection" id="collection">
	<div class="container">
		<div class="section-title">
			<h2>Gift Box Collection</h2>
			<p>Beautiful packaging solutions for every occasion</p>
		</div>

		<div class="collection-filters">
			<button class="filter-btn active" data-filter="all">All Boxes</button>
			<button class="filter-btn" data-filter="jute">Jute Boxes</button>
			<button class="filter-btn" data-filter="bamboo">Bamboo Boxes</button>
			<button class="filter-btn" data-filter="mixed">Mixed Material</button>
			<button class="filter-btn" data-filter="luxury">Luxury Edition</button>
		</div>

		<div class="gift-grid">
			{#each giftFeatures as feature}
				<GiftCardFeature
					id={feature.id}
					giftCategory={feature.giftCategory}
					giftCode={feature.giftCode}
					giftDimentions={feature.giftDimentions}
					giftFeatures={feature.features}
					giftMaterial={feature.giftMaterial}
					giftTitle={feature.giftTitle}
					giftThumbnail={feature.giftThumbnail}
				/>
			{/each}
		</div>
	</div>
</section>

<!-- Customization Options -->
<section class="customization">
	<div class="container">
		<div class="section-title">
			<h2>Customization Options</h2>
			<p>Make our gift boxes uniquely yours</p>
		</div>

		<div class="custom-grid">
			<div class="custom-options">
				<div class="custom-option">
					<div class="option-icon">
						<i class="fas fa-print"></i>
					</div>
					<div class="option-content">
						<h3>Custom Printing</h3>
						<p>
							Add your logo, brand name, or custom designs with our high-quality printing services.
							Choose from screen printing, digital printing, or embossing.
						</p>
					</div>
				</div>

				<div class="custom-option">
					<div class="option-icon">
						<i class="fas fa-palette"></i>
					</div>
					<div class="option-content">
						<h3>Color Variations</h3>
						<p>
							Select from natural jute tones or choose custom-dyed colors to match your brand
							identity. Bamboo elements can be stained in various wood tones.
						</p>
					</div>
				</div>

				<div class="custom-option">
					<div class="option-icon">
						<i class="fas fa-ruler-combined"></i>
					</div>
					<div class="option-content">
						<h3>Size Customization</h3>
						<p>
							Need a specific size? We can create custom dimensions to perfectly fit your products,
							from small jewelry boxes to large apparel packaging.
						</p>
					</div>
				</div>

				<div class="custom-option">
					<div class="option-icon">
						<i class="fas fa-tag"></i>
					</div>
					<div class="option-content">
						<h3>Private Labeling</h3>
						<p>
							Complete private labeling services including custom tags, labels, and packaging
							inserts to create a fully branded unboxing experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Applications -->
<section class="applications">
	<div class="container">
		<div class="section-title">
			<h2>Perfect For</h2>
			<p>Ideal applications for our gift boxes</p>
		</div>

		<div class="applications-grid">
			{#each uses as use}
				<Uses id={use.id} title={use.title} description={use.description} icon={use.icon} />
			{/each}
		</div>
	</div>
</section>

<!-- Packaging Solutions -->
<section class="packaging-solutions">
	<div class="container">
		<div class="section-title">
			<h2>Complete Packaging Solutions</h2>
			<p>Beyond the box - complete your packaging with our accessories</p>
		</div>

		<div class="solutions-container">
            {#each solution as solve}
                <div class="solution-card">
				<div class="solution-icon">
					<i class="{solve.icon}"></i>
				</div>
				<h3>{solve.title}</h3>
				<p>
					{solve.description}
				</p>
			</div>
            {/each}
		</div>
	</div>
</section>

<style>
	.p-20 {
		padding: 20px;
	}
</style>




