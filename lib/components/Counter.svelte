<script lang="ts">
    import { store } from "$lib/store.svelte";
    import { fade, fly } from "svelte/transition";
    import Button from "./Button.svelte";
</script>

<div class="flex flex-col pb-5">
    <div>
        <Button onclick={() => store.count++}>Inc</Button>
        <Button disabled>do nothing</Button>
    </div>

    {#if store.count % 2 == 0}
        <span class="absolute translate-y-10" transition:fly={{ x: 200 }}>count {store.count}</span>
    {/if}
</div>
