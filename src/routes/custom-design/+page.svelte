<!-- Header -->
<header>
	<div class="container">
		<nav class="navbar">
			<a href="index.html" class="logo">Xen<span>mesh</span></a>
			<ul class="nav-links">
				<li><a href="index.html">Home</a></li>
				<li><a href="products.html">Products</a></li>
				<li><a href="custom-design.html" class="active">Custom Design</a></li>
				<li><a href="index.html#contact">Contact</a></li>
			</ul>
			<div class="hamburger">
				<i class="fas fa-bars"></i>
			</div>
		</nav>
	</div>
</header>

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
			<div class="process-step">
				<div class="step-number">1</div>
				<h3>Submit Your Design</h3>
				<p>Use our design portal or upload your own design files with specifications.</p>
			</div>
			<div class="process-step">
				<div class="step-number">2</div>
				<h3>Review & Quote</h3>
				<p>We'll review your design and provide a detailed quote within 24-48 hours.</p>
			</div>
			<div class="process-step">
				<div class="step-number">3</div>
				<h3>Sample Production</h3>
				<p>We create a physical sample for your approval before mass production.</p>
			</div>
			<div class="process-step">
				<div class="step-number">4</div>
				<h3>Bulk Manufacturing</h3>
				<p>Once approved, we manufacture your order with strict quality control.</p>
			</div>
		</div>
	</div>
</section>

<!-- Design Portal -->
<section class="design-portal" id="design-form">
	<div class="container">
		<div class="section-title">
			<h2>Design Your Bag</h2>
			<p>Customize every aspect of your jute bag</p>
		</div>
		<div class="portal-container">
			<div class="design-form-container">
				<form id="designForm">
					<div class="form-group">
						<label for="bagType">Bag Type</label>
						<select class="form-control" id="bagType">
							<option value="tote">Tote Bag</option>
							<option value="shopper">Shopper Bag</option>
							<option value="laptop">Laptop Bag</option>
							<option value="backpack">Backpack</option>
							<option value="promo">Promotional Bag</option>
							<option value="drawstring">Drawstring Bag</option>
						</select>
					</div>

					<div class="form-group">
						<label for="bagSize">Bag Size</label>
						<select class="form-control" id="bagSize">
							<option value="small">Small (10" x 12")</option>
							<option value="medium" selected>Medium (12" x 14")</option>
							<option value="large">Large (14" x 16")</option>
							<option value="xlarge">Extra Large (16" x 18")</option>
							<option value="custom">Custom Size</option>
						</select>
					</div>

					<div class="form-group">
						<label>Jute Color</label>
						<div class="color-options">
							<div
								class="color-option color-natural active"
								data-color="natural"
								title="Natural Jute"
							></div>
							<div
								class="color-option color-bleached"
								data-color="bleached"
								title="Bleached Jute"
							></div>
							<div class="color-option color-dyed" data-color="dyed" title="Dyed Jute"></div>
							<div class="color-option color-custom" data-color="custom" title="Custom Color"></div>
						</div>
					</div>

					<div class="form-group">
						<label for="handleType">Handle Type</label>
						<select class="form-control" id="handleType">
							<option value="standard">Standard Jute Handles</option>
							<option value="reinforced">Reinforced Handles</option>
							<option value="cotton">Cotton Webbing Handles</option>
							<option value="leather">Leather Handles</option>
							<option value="adjustable">Adjustable Shoulder Strap</option>
						</select>
					</div>

					<div class="form-group">
						<label for="printingType">Printing Type</label>
						<select class="form-control" id="printingType">
							<option value="silkscreen">Silkscreen Printing</option>
							<option value="digital">Digital Printing</option>
							<option value="embroidery">Embroidery</option>
							<option value="patch">Leather/Patch</option>
							<option value="none">No Printing</option>
						</select>
					</div>

					<div class="form-group">
						<label for="designText">Design Text/Logo</label>
						<textarea
							class="form-control"
							id="designText"
							placeholder="Enter text for your design or describe your logo..."
						></textarea>
					</div>

					<div class="form-group">
						<label>Upload Design Files</label>
						<div class="upload-area" id="uploadArea">
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
						<div id="fileList"></div>
					</div>

					<div class="form-row">
						<div class="form-group">
							<label for="quantity">Order Quantity</label>
							<input type="number" class="form-control" id="quantity" min="100" value="1000" />
						</div>
						<div class="form-group">
							<label for="timeline">Required Timeline</label>
							<select class="form-control" id="timeline">
								<option value="standard">Standard (4-6 weeks)</option>
								<option value="express">Express (2-3 weeks)</option>
								<option value="urgent">Urgent (1-2 weeks)</option>
							</select>
						</div>
					</div>

					<div class="form-group">
						<label for="additionalNotes">Additional Notes/Special Requirements</label>
						<textarea
							class="form-control"
							id="additionalNotes"
							placeholder="Any special requirements, lining, pockets, closures, etc."
						></textarea>
					</div>

					<div class="form-group">
						<label for="contactInfo">Your Contact Information</label>
						<div class="form-row">
							<input type="text" class="form-control" placeholder="Full Name" required />
							<input type="email" class="form-control" placeholder="Email Address" required />
						</div>
						<div class="form-row">
							<input type="text" class="form-control" placeholder="Company Name" />
							<input type="tel" class="form-control" placeholder="Phone Number" />
						</div>
						<input type="text" class="form-control" placeholder="Country" required />
					</div>

					<button type="submit" class="btn" style="width: 100%;">Submit Design Request</button>
				</form>
			</div>

			<div class="design-preview">
				<h3>Design Preview</h3>
				<div class="preview-controls">
					<button class="preview-btn active" data-view="front">Front</button>
					<button class="preview-btn" data-view="back">Back</button>
					<button class="preview-btn" data-view="side">Side</button>
				</div>
				<div class="preview-area">
					<div class="preview-bag" id="previewBag">
						<div class="preview-handle"></div>
						<div class="preview-design" id="previewDesign">Your Design Will Appear Here</div>
					</div>
				</div>
				<div class="spec-summary">
					<h4>Specification Summary</h4>
					<div class="spec-item">
						<span>Bag Type:</span>
						<span class="spec-value" id="specType">Tote Bag</span>
					</div>
					<div class="spec-item">
						<span>Size:</span>
						<span class="spec-value" id="specSize">Medium (12" x 14")</span>
					</div>
					<div class="spec-item">
						<span>Color:</span>
						<span class="spec-value" id="specColor">Natural Jute</span>
					</div>
					<div class="spec-item">
						<span>Handles:</span>
						<span class="spec-value" id="specHandles">Standard Jute</span>
					</div>
					<div class="spec-item">
						<span>Printing:</span>
						<span class="spec-value" id="specPrinting">Silkscreen</span>
					</div>
				</div>
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
			<div class="capability-card">
				<div class="capability-icon">
					<i class="fas fa-print"></i>
				</div>
				<h3>Printing Techniques</h3>
				<p>Silkscreen, digital printing, heat transfer, and foil stamping on jute fabric.</p>
			</div>
			<div class="capability-card">
				<div class="capability-icon">
					<i class="fas fa-palette"></i>
				</div>
				<h3>Color Options</h3>
				<p>Natural, bleached, or custom-dyed jute in various color combinations.</p>
			</div>
			<div class="capability-card">
				<div class="capability-icon">
					<i class="fas fa-ruler-combined"></i>
				</div>
				<h3>Size Variations</h3>
				<p>Custom sizes and dimensions to meet your specific requirements.</p>
			</div>
			<div class="capability-card">
				<div class="capability-icon">
					<i class="fas fa-seedling"></i>
				</div>
				<h3>Material Mix</h3>
				<p>Combine jute with cotton, linen, or other fabrics for unique designs.</p>
			</div>
			<div class="capability-card">
				<div class="capability-icon">
					<i class="fas fa-vest"></i>
				</div>
				<h3>Accessories</h3>
				<p>Add pockets, zippers, buttons, linings, and other functional elements.</p>
			</div>
			<div class="capability-card">
				<div class="capability-icon">
					<i class="fas fa-award"></i>
				</div>
				<h3>Quality Assurance</h3>
				<p>Rigorous quality checks at every stage of the production process.</p>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer>
	<div class="container">
		<div class="footer-content">
			<div class="footer-col">
				<h3>Xenmesh</h3>
				<p>
					Leading exporter of premium jute fashion bags to global markets including EU, Japan, USA,
					and Canada.
				</p>
				<div class="social-links">
					<a href="#"><i class="fab fa-facebook-f"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-instagram"></i></a>
					<a href="#"><i class="fab fa-linkedin-in"></i></a>
				</div>
			</div>
			<div class="footer-col">
				<h3>Quick Links</h3>
				<a href="index.html">Home</a>
				<a href="products.html">Products</a>
				<a href="custom-design.html">Custom Design</a>
				<a href="index.html#contact">Contact</a>
			</div>
			<div class="footer-col">
				<h3>Services</h3>
				<a href="index.html#contact">Sample Orders</a>
				<a href="custom-design.html">Custom Designs</a>
				<a href="index.html#contact">Bulk Export</a>
				<a href="index.html#contact">Private Labeling</a>
			</div>
			<div class="footer-col">
				<h3>Markets</h3>
				<a href="#">European Union</a>
				<a href="#">Japan</a>
				<a href="#">United States</a>
				<a href="#">Canada</a>
			</div>
		</div>
		<div class="copyright">
			<p>&copy; 2023 Xenmesh. All rights reserved.</p>
		</div>
	</div>
</footer>


