<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../assets/scss/style.scss'; 
	import Footer from '../components/Layouts/Footer.svelte';
	import Header from '../components/Layouts/Header.svelte';

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
