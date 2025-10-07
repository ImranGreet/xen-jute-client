<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../assets/scss/style.scss'; 
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let { children } = $props();
	let defaultTitle:string = 'Xen Jute' ;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{defaultTitle}</title>
</svelte:head>

<Header />

<div class="layout-container">
   
    <main>
        {@render children?.()}
    </main>
</div>

<Footer />
