<script lang="ts">
	let showMenu = false;
	let activeLink = '/'; 

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function handleNavClick(path:string) {
		activeLink = path;
		showMenu = false;
	}
</script>

<header>
	<div class="container">
		<nav class="navbar">
			<a href="/" class="logo">Xen<span>mesh</span></a>

			<ul class="nav-links" class:show-navbar={showMenu}>
				<li>
					<a
						href="/"
						onclick={() => handleNavClick('/')}
						class:active={activeLink === '/'}
						>Home</a
					>
				</li>
				<li>
					<a
						href="/product-collection"
						onclick={() => handleNavClick('/product-collection')}
						class:active={activeLink === '/product-collection'}
						>Our Products</a
					>
				</li>
				<li>
					<a
						href="/gift-box"
						onclick={() => handleNavClick('/gift-box')}
						class:active={activeLink === '/gift-box'}
						>Gift Boxes</a
					>
				</li>
				<li>
					<a
						href="/custom-design"
						onclick={() => handleNavClick('/custom-design')}
						class:active={activeLink === '/custom-design'}
						>Custom Design</a
					>
				</li>
				<li>
					<a
						href="/blog"
						onclick={() => handleNavClick('/blog')}
						class:active={activeLink === '/blog'}
						>Blog</a
					>
				</li>
				<li>
					<a
						href="/order"
						onclick={() => handleNavClick('/order')}
						class:active={activeLink === '/order'}
						>Order</a
					>
				</li>
				<li>
					<a
						href="/#contact"
						onclick={() => handleNavClick('/#contact')}
						class:active={activeLink === '/#contact'}
						>Contact</a
					>
				</li>
			</ul>

			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button type="button" class="hamburger" onclick={toggleMenu}>
				<i class="fas fa-bars"></i>
			</button>
		</nav>
	</div>
</header>
