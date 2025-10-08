<script lang="ts">
	import type { Uses } from '$lib/types/types';
	let { id, title, description, icon } = $props();
	let uses: Uses = {
		id,
		title,
		description,
		icon
	};
</script>

<div class="application-card">
	<div class="application-icon">
		<i class={uses.icon}></i>
	</div>
	<h3>{uses.title}</h3>
	<p>{uses.description}</p>
</div>
