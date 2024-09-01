<script lang="ts">
    const data = [
        {
            img: "/android-chrome-192x192.png",
        },
        {
            img: "/android-chrome-192x192.png",
        },
        {
            img: "/android-chrome-192x192.png",
        },
        {
            img: "/android-chrome-192x192.png",
        },
    ];
</script>

<div class="relative my-5 mx-auto w-48 flex overflow-hidden1">
    {#each data as d}
        <span class="absolute left-0 top-1/2 -translate-y-1/2">&lt;</span>
        <img class="w-full" src={d.img} alt="" />
        <span class="absolute right-0 top-1/2 -translate-y-1/2">&gt;</span>
    {/each}
</div>
