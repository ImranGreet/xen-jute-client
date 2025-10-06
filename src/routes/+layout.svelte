<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../assets/scss/style.scss'; 

	let { children } = $props();
	let defaultTitle:string = 'Xen Jute' ;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{defaultTitle}</title>
</svelte:head>

{@render children?.()}
