<script lang="ts">
	import type { GiftFeature } from '$lib/types/types';

	let { id, giftTitle, giftCategory, giftMaterial, giftCode, giftDimentions, giftFeatures,giftThumbnail } =
		$props();
	let Features: GiftFeature = {
		id,
		giftTitle,
		giftCategory,
		giftMaterial,
		giftCode,
		giftDimentions,
		giftFeatures,
		giftThumbnail,
	};
</script>

<div class="gift-card" data-category="mixed luxury">
	<div class="gift-badge">{Features.giftCategory}</div>
	<div class="gift-image mixed">
		<!-- <i class="fas fa-gem"></i> -->

		<img
			src="{Features.giftThumbnail}"
			alt="{Features.giftTitle}"
			width="100%"
			height="100%"
		/>
	</div>
	<div class="gift-info p-20">
		<div class="gift-meta">
			<span class="gift-material">
				{#each Features.giftMaterial as material}
					<span class="material-tag bamboo">{material}</span>
				{/each}
			</span>
			<span>{Features.giftCode}</span>
		</div>
		<h3>{Features.giftTitle}</h3>
		<div class="gift-dimensions">14" × 10" × 5"</div>
		<ul class="gift-features">
			{#each Features.giftFeatures as feature}
				<li>{feature}</li>
			{/each}
		</ul>
		<div class="gift-actions">
			<a href="order.html" class="btn">Order Sample</a>
			<a href="custom-design.html" class="btn btn-outline">Customize</a>
		</div>
	</div>
</div>

<style>
	.p-20 {
		padding: 20px;
	}
</style>
