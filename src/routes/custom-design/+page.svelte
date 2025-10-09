<script lang="ts">
	let bagType = 'tote';
	let bagSize = 'medium';
	let juteColor = 'natural';
	let handleType = 'standard';
	let printingType = 'silkscreen';
	let designText = '';
	let quantity = 1000;
	let timeline = 'standard';
	let additionalNotes = '';
	let contactInfo = {
		name: '',
		email: '',
		company: '',
		phone: '',
		country: ''
	};
	let selectedFile: any = null;
	// Color options
	const colorOptions = [
		{ id: 'natural', class: 'color-natural', title: 'Natural Jute' },
		{ id: 'bleached', class: 'color-bleached', title: 'Bleached Jute' },
		{ id: 'dyed', class: 'color-dyed', title: 'Dyed Jute' },
		{ id: 'custom', class: 'color-custom', title: 'Custom Color' }
	];

	// Bag types
	const bagTypes = [
		{ value: 'tote', label: 'Tote Bag' },
		{ value: 'shopper', label: 'Shopper Bag' },
		{ value: 'laptop', label: 'Laptop Bag' },
		{ value: 'backpack', label: 'Backpack' },
		{ value: 'promo', label: 'Promotional Bag' },
		{ value: 'drawstring', label: 'Drawstring Bag' }
	];

	// Bag sizes
	const bagSizes = [
		{ value: 'small', label: 'Small (10" x 12")' },
		{ value: 'medium', label: 'Medium (12" x 14")' },
		{ value: 'large', label: 'Large (14" x 16")' },
		{ value: 'xlarge', label: 'Extra Large (16" x 18")' },
		{ value: 'custom', label: 'Custom Size' }
	];

	// Handle types
	const handleTypes = [
		{ value: 'standard', label: 'Standard Jute Handles' },
		{ value: 'reinforced', label: 'Reinforced Handles' },
		{ value: 'cotton', label: 'Cotton Webbing Handles' },
		{ value: 'leather', label: 'Leather Handles' },
		{ value: 'adjustable', label: 'Adjustable Shoulder Strap' }
	];

	// Printing types
	const printingTypes = [
		{ value: 'silkscreen', label: 'Silkscreen Printing' },
		{ value: 'digital', label: 'Digital Printing' },
		{ value: 'embroidery', label: 'Embroidery' },
		{ value: 'patch', label: 'Leather/Patch' },
		{ value: 'none', label: 'No Printing' }
	];

	// Timeline options
	const timelineOptions = [
		{ value: 'standard', label: 'Standard (4-6 weeks)' },
		{ value: 'express', label: 'Express (2-3 weeks)' },
		{ value: 'urgent', label: 'Urgent (1-2 weeks)' }
	];

	// Process steps
	const processSteps = [
		{
			number: 1,
			title: 'Submit Your Design',
			description: 'Use our design portal or upload your own design files with specifications.'
		},
		{
			number: 2,
			title: 'Review & Quote',
			description: "We'll review your design and provide a detailed quote within 24-48 hours."
		},
		{
			number: 3,
			title: 'Sample Production',
			description: 'We create a physical sample for your approval before mass production.'
		},
		{
			number: 4,
			title: 'Bulk Manufacturing',
			description: 'Once approved, we manufacture your order with strict quality control.'
		}
	];

	// Capabilities
	const capabilities = [
		{
			icon: 'fas fa-print',
			title: 'Printing Techniques',
			description: 'Silkscreen, digital printing, heat transfer, and foil stamping on jute fabric.'
		},
		{
			icon: 'fas fa-palette',
			title: 'Color Options',
			description: 'Natural, bleached, or custom-dyed jute in various color combinations.'
		},
		{
			icon: 'fas fa-ruler-combined',
			title: 'Size Variations',
			description: 'Custom sizes and dimensions to meet your specific requirements.'
		},
		{
			icon: 'fas fa-seedling',
			title: 'Material Mix',
			description: 'Combine jute with cotton, linen, or other fabrics for unique designs.'
		},
		{
			icon: 'fas fa-vest',
			title: 'Accessories',
			description: 'Add pockets, zippers, buttons, linings, and other functional elements.'
		},
		{
			icon: 'fas fa-award',
			title: 'Quality Assurance',
			description: 'Rigorous quality checks at every stage of the production process.'
		}
	];

</script>

<!-- Page Header -->
<section class="page-header">
	<div class="container">
		<h1>Custom Design Portal</h1>
		<p>
			Create your unique jute bag designs with our easy-to-use design portal. Perfect for brands,
			retailers, and promotional events.
		</p>
		<a href="#design-form" class="btn">Start Designing</a>
	</div>
</section>

<!-- Design Process -->
<section class="design-process">
	<div class="container">
		<div class="section-title">
			<h2>Our Design Process</h2>
			<p>Simple steps from concept to delivery</p>
		</div>
		<div class="process-steps">
			{#each processSteps as step}
				<div class="process-step">
					<div class="step-number">{step.number}</div>
					<h3>{step.title}</h3>
					<p>{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Design Portal -->
<section class="design-portal" id="design-form">
	<div class="container customer-form">
		<div class="section-title">
			<h2>Design Your Bag</h2>
			<p>Customize every aspect of your jute bag</p>
		</div>
		<div class="portal-container">
			<div class="design-form-container">
				<form >
					<div class="form-group">
						<label for="bagType">Bag Type</label>
						<select class="form-control" id="bagType" bind:value={bagType}>
							{#each bagTypes as type}
								<option value={type.value}>{type.label}</option>
							{/each}
						</select>
					</div>

					<div class="form-group">
						<label for="bagSize">Bag Size</label>
						<select class="form-control" id="bagSize" bind:value={bagSize}>
							{#each bagSizes as size}
								<option value={size.value}>{size.label}</option>
							{/each}
						</select>
					</div>

					<div class="form-group">
						<label>Jute Color</label>
						<div class="color-options">
							{#each colorOptions as color}
								<div
									class="color-option {color.class} {juteColor === color.id ? 'active' : ''}"
									title={color.title}
									onclick={() => (juteColor = color.id)}
								></div>
							{/each}
						</div>
					</div>

					<div class="form-group">
						<label for="handleType">Handle Type</label>
						<select class="form-control" id="handleType" bind:value={handleType}>
							{#each handleTypes as handle}
								<option value={handle.value}>{handle.label}</option>
							{/each}
						</select>
					</div>

					<div class="form-group">
						<label for="printingType">Printing Type</label>
						<select class="form-control" id="printingType" bind:value={printingType}>
							{#each printingTypes as printing}
								<option value={printing.value}>{printing.label}</option>
							{/each}
						</select>
					</div>

					<div class="form-group">
						<label for="designText">Design Text/Logo</label>
						<textarea
							class="form-control"
							id="designText"
							placeholder="Enter text for your design or describe your logo..."
							bind:value={designText}
						></textarea>
					</div>

					<div class="form-group">
						<label>Upload Design Files</label>
						<div class="upload-area">
							<i class="fas fa-cloud-upload-alt"></i>
							<p>Click to upload your design files</p>
							<p class="small">Supported formats: JPG, PNG, PDF, AI, PSD (Max 10MB)</p>
							<input
								type="file"
								class="file-input"
								id="designFile"
								accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
							/>
						</div>
						{#if selectedFile}
							<div id="fileList">
								<p><i class="fas fa-file"></i> {selectedFile.name}</p>
							</div>
						{/if}
					</div>

					<div class="form-row">
						<div class="form-group">
							<label for="quantity">Order Quantity</label>
							<input
								type="number"
								class="form-control"
								id="quantity"
								min="100"
								bind:value={quantity}
							/>
						</div>
						<div class="form-group">
							<label for="timeline">Required Timeline</label>
							<select class="form-control" id="timeline" bind:value={timeline}>
								{#each timelineOptions as option}
									<option value={option.value}>{option.label}</option>
								{/each}
							</select>
						</div>
					</div>

					<div class="form-group">
						<label for="additionalNotes">Additional Notes/Special Requirements</label>
						<textarea
							class="form-control"
							id="additionalNotes"
							placeholder="Any special requirements, lining, pockets, closures, etc."
							bind:value={additionalNotes}
						></textarea>
					</div>

					<div class="form-group">
						<label for="contactInfo">Your Contact Information</label>
						<div class="form-row">
							<input
								type="text"
								class="form-control"
								placeholder="Full Name"
								bind:value={contactInfo.name}
								required
							/>
							<input
								type="email"
								class="form-control"
								placeholder="Email Address"
								bind:value={contactInfo.email}
								required
							/>
						</div>
						<div class="form-row">
							<input
								type="text"
								class="form-control"
								placeholder="Company Name"
								bind:value={contactInfo.company}
							/>
							<input
								type="tel"
								class="form-control"
								placeholder="Phone Number"
								bind:value={contactInfo.phone}
							/>
						</div>
						<input
							type="text"
							class="form-control"
							placeholder="Country"
							bind:value={contactInfo.country}
							required
						/>
					</div>

					<button type="submit" class="btn" style="width: 100%;">Submit Design Request</button>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- Capabilities -->
<section class="capabilities">
	<div class="container">
		<div class="section-title">
			<h2>Our Customization Capabilities</h2>
			<p>We can bring almost any design to life</p>
		</div>
		<div class="capabilities-grid">
			{#each capabilities as capability}
				<div class="capability-card">
					<div class="capability-icon">
						<i class={capability.icon}></i>
					</div>
					<h3>{capability.title}</h3>
					<p>{capability.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>



<style>
	.container.customer-form{
		width: 60%;
	}
	@media(max-width:640px){
      .container.customer-form{
		width: 90%;
	  }
	}
</style>