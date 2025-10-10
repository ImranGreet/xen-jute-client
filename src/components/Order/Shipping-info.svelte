<script lang="ts"></script>

<div class="form-section" id="section3">
	<h3 class="section-title">Shipping & Customization</h3>

	<div class="form-group">
		<label>Shipping Method *</label>
		<div class="shipping-options">
			<div class="shipping-option active" data-shipping="standard">
				<h4>Standard Shipping</h4>
				<div class="shipping-price">$15</div>
				<div class="shipping-time">7-14 business days</div>
			</div>
			<div class="shipping-option" data-shipping="express">
				<h4>Express Shipping</h4>
				<div class="shipping-price">$35</div>
				<div class="shipping-time">3-5 business days</div>
			</div>
			<div class="shipping-option" data-shipping="priority">
				<h4>Priority Shipping</h4>
				<div class="shipping-price">$65</div>
				<div class="shipping-time">1-2 business days</div>
			</div>
		</div>
	</div>

	<div class="form-group">
		<label>Customization Options</label>
		<div class="customization-options">
			<div class="custom-option" data-custom="none">
				<h4>Standard Samples</h4>
				<p>Receive our standard product samples as-is</p>
			</div>
			<div class="custom-option" data-custom="color">
				<h4>Color Variations</h4>
				<p>Request specific color options (additional $2 per sample)</p>
			</div>
			<div class="custom-option" data-custom="print">
				<h4>Logo Printing</h4>
				<p>Add your logo to samples (additional $5 per sample)</p>
			</div>
		</div>
	</div>

	<div class="form-group full-width">
		<label for="specialRequests">Special Requests or Notes</label>
		<textarea
			id="specialRequests"
			class="form-control"
			placeholder="Any specific requirements, color preferences, or additional information..."
		></textarea>
	</div>

	<div class="order-summary">
		<div class="summary-header">
			<h3>Order Summary</h3>
			<span id="items-count">0 items</span>
		</div>
		<div class="summary-items" id="summary-items">
			<!-- Items will be dynamically added here -->
		</div>
		<div class="summary-item">
			<span>Shipping</span>
			<span id="shipping-cost">$15.00</span>
		</div>
		<div class="summary-item" id="customization-cost-container" style="display: none;">
			<span>Customization</span>
			<span id="customization-cost">$0.00</span>
		</div>
		<div class="summary-total">
			<span>Total</span>
			<span id="total-cost">$15.00</span>
		</div>
	</div>

	<div class="form-navigation">
		<button type="button" class="btn btn-outline" id="backToStep2">Back to Details</button>
		<button type="button" class="btn" id="nextToStep4">Review & Submit</button>
	</div>
</div>


