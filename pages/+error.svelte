<script>
    import Head from "$lib/components/Head.svelte";
</script>

<Head title="404 page not found" />

<header class="mt-2">
    <h1>404 - Page not found</h1>
</header>

<main class="grid text-center min-h-96">

    <div class="grid gap-5 justify-center mt-auto">
        <p>Sorry, we couldn't find the page you were looking for.</p>

        <a href="/" class="button mx-auto w-28" data-sveltekit-replacestate>
            Home
        </a>
    </div>
</main>
