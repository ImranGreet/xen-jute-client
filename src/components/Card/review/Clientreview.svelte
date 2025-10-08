<script lang="ts">
	import type { Review } from '$lib/types/types';

	let { id, reviewerName, reviewerRole, reviewerImage, reviewText } = $props();

	let review: Review = {
		id,
		reviewerName,
		reviewerRole,
		reviewerImage,
		reviewText
	};
</script>

<div class="review-card">
	<p class="review-text">
		{review.reviewText}
	</p>
	<div class="reviewer">
		<div class="reviewer-img">
			<i class="fas fa-user"></i>
		</div>
		<div class="reviewer-info">
			<h4>{review.reviewerName}</h4>
			<p>{review.reviewerRole}</p>
		</div>
	</div>
</div>
