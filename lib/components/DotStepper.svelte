<script lang="ts">
    let { children, border }: {border?: boolean, children: any} = $props();
</script>

<div class="border-l-2 ms-2 ps-5 sm:ms-5 relative min-h-20 pb-3">
    <div
        data-is="line-dot"
        class="w-6 -left-3 -translate-x-0.5 absolute aspect-square rounded-full bg-primary border-2"
    ></div>

    {@render children()}

    {#if border}
    <hr class="w-2/3 mx-auto mt-4 border-t-2" />
    {/if}
</div>
