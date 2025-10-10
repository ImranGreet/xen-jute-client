<script lang="ts"></script>

<div class="form-section active" id="section1">
	<h3 class="section-title">Select Products to Sample</h3>

	<div class="product-selection">
		<div class="product-item">
			<div class="product-info">
				<div class="product-image">
					<i class="fas fa-shopping-bag"></i>
				</div>
				<div class="product-details">
					<h4>Classic Jute Tote Bag</h4>
					<p>Medium size, natural jute, standard handles</p>
					<div class="product-price">$5 per sample</div>
				</div>
			</div>
			<div class="product-quantity">
				<button class="quantity-btn minus" data-product="tote">-</button>
				<input type="number" class="quantity-input" id="tote-qty" value="0" min="0" max="3" />
				<button class="quantity-btn plus" data-product="tote">+</button>
			</div>
		</div>

		<div class="product-item">
			<div class="product-info">
				<div class="product-image">
					<i class="fas fa-laptop"></i>
				</div>
				<div class="product-details">
					<h4>Jute Laptop Bag</h4>
					<p>13-15" laptop compartment, padded interior</p>
					<div class="product-price">$8 per sample</div>
				</div>
			</div>
			<div class="product-quantity">
				<button class="quantity-btn minus" data-product="laptop">-</button>
				<input type="number" class="quantity-input" id="laptop-qty" value="0" min="0" max="3" />
				<button class="quantity-btn plus" data-product="laptop">+</button>
			</div>
		</div>

		<div class="product-item">
			<div class="product-info">
				<div class="product-image">
					<i class="fas fa-gift"></i>
				</div>
				<div class="product-details">
					<h4>Jute Gift Box</h4>
					<p>12" × 9" × 4", magnetic closure</p>
					<div class="product-price">$7 per sample</div>
				</div>
			</div>
			<div class="product-quantity">
				<button class="quantity-btn minus" data-product="giftbox">-</button>
				<input type="number" class="quantity-input" id="giftbox-qty" value="0" min="0" max="3" />
				<button class="quantity-btn plus" data-product="giftbox">+</button>
			</div>
		</div>

		<div class="product-item">
			<div class="product-info">
				<div class="product-image">
					<i class="fas fa-box-open"></i>
				</div>
				<div class="product-details">
					<h4>Bamboo Storage Box</h4>
					<p>10" × 10" × 6", slide-top lid</p>
					<div class="product-price">$9 per sample</div>
				</div>
			</div>
			<div class="product-quantity">
				<button class="quantity-btn minus" data-product="bamboo">-</button>
				<input type="number" class="quantity-input" id="bamboo-qty" value="0" min="0" max="3" />
				<button class="quantity-btn plus" data-product="bamboo">+</button>
			</div>
		</div>
	</div>

	<div class="form-navigation">
		<div></div>
		<!-- Empty div for spacing -->
		<button class="btn" id="nextToStep2">Continue to Details</button>
	</div>
</div>


