<h1>Welcome to SvelteKit <span>REd</span> </h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button class="btn">Add to cart</button>

<style lang="scss">
    h1 {
        color: purple;
        font-size: 2em;
        &:hover{
            background-color: red;
            transition: 0.53s all ease-in-out;
            & span {
                color: white;
            }
        }
    }
</style>