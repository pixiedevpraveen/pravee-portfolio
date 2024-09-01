<script lang="ts">
    import "../src/app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Subscribe from "$lib/components/Subscribe.svelte";
    import { onNavigate } from "$app/navigation";
    let { children } = $props()

    // let pos = {x: 0, y: 0}

    // onMount(() => {
    //     document.addEventListener("click", onClick)
    //     return () => {
    //         document.removeEventListener("click", onClick)
    //     }
    // })


    onNavigate((navigation) => {
        if (!(document as any).startViewTransition) return;

        return new Promise((resolve) => {
            (document as any).startViewTransition(async () => {
                resolve()
                await navigation.complete;
            })
        })
    })
    
    // const onClick = (e: MouseEvent) => {
    //         console.log(e.x, e.y);
    //         pos.x = e.x
    //         pos.y = e.y
    //     }
</script>

<Navbar />

<div id="page" class="flex-1 mt-3">
    {@render children()}
</div>

<Subscribe />
<Footer />