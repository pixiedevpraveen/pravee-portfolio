<script>
    import "../src/app.css";
    import Footer from "../lib/components/Footer.svelte";
    import Navbar from "../lib/components/Navbar.svelte";
</script>

<Navbar />

<div id="page" class="min-h-[80vh]">
    <slot />
</div>

<Footer />

<style>
</style>
