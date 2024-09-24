<script lang="ts">
    import "../src/app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Subscribe from "$lib/components/Subscribe.svelte";
    import { onNavigate, beforeNavigate } from "$app/navigation";
    let { children } = $props()

    let loading = $state(false)

    onNavigate((navigation) => {
        if (!(document as any).startViewTransition) return;
        
        
        return new Promise((resolve) => {
            (document as any).startViewTransition(async () => {
                resolve()
                loading = false
                console.log("end");
                await navigation.complete;
            })
        })
    })

    beforeNavigate(() => {
        console.log("start");
        loading = true
    })
</script>

<Navbar loading={loading} />

<div id="page" class="flex-1 mt-3 flex flex-col">
    {@render children()}
</div>

<Subscribe />
<Footer />