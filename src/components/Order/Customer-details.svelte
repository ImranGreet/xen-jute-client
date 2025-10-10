<script lang="ts"></script>

<div class="form-section" id="section2">
	<h3 class="section-title">Your Information</h3>

	<form id="customerDetails">
		<div class="form-grid">
			<div class="form-group">
				<label for="fullName">Full Name *</label>
				<input type="text" id="fullName" class="form-control" required />
			</div>
			<div class="form-group">
				<label for="email">Email Address *</label>
				<input type="email" id="email" class="form-control" required />
			</div>
			<div class="form-group">
				<label for="company">Company Name</label>
				<input type="text" id="company" class="form-control" />
			</div>
			<div class="form-group">
				<label for="phone">Phone Number *</label>
				<input type="tel" id="phone" class="form-control" required />
			</div>
			<div class="form-group">
				<label for="country">Country *</label>
				<select id="country" class="form-control" required>
					<option value="">Select Country</option>
					<option value="us">United States</option>
					<option value="ca">Canada</option>
					<option value="uk">United Kingdom</option>
					<option value="de">Germany</option>
					<option value="fr">France</option>
					<option value="jp">Japan</option>
					<option value="au">Australia</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div class="form-group">
				<label for="address">Street Address *</label>
				<input type="text" id="address" class="form-control" required />
			</div>
			<div class="form-group">
				<label for="city">City *</label>
				<input type="text" id="city" class="form-control" required />
			</div>
			<div class="form-group">
				<label for="state">State/Province</label>
				<input type="text" id="state" class="form-control" />
			</div>
			<div class="form-group">
				<label for="zip">ZIP/Postal Code *</label>
				<input type="text" id="zip" class="form-control" required />
			</div>
			<div class="form-group full-width">
				<label for="businessType">Type of Business</label>
				<select id="businessType" class="form-control">
					<option value="">Select Business Type</option>
					<option value="retail">Retail Store</option>
					<option value="ecommerce">E-commerce</option>
					<option value="wholesale">Wholesaler/Distributor</option>
					<option value="corporate">Corporate Gifting</option>
					<option value="event">Event Planning</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div class="form-group full-width">
				<label for="purpose">Intended Use for Samples</label>
				<textarea
					id="purpose"
					class="form-control"
					placeholder="Please describe how you plan to use our products..."
				></textarea>
			</div>
		</div>

		<div class="form-navigation">
			<button type="button" class="btn btn-outline" id="backToStep1">Back to Products</button>
			<button type="button" class="btn" id="nextToStep3">Continue to Shipping</button>
		</div>
	</form>
</div>


