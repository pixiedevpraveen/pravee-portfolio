<script lang="ts">
    import Icon from "./Icon.svelte";

    const routes = [
        {
            url: "https://linkedin.com/pixiedev",
            icon: "linkedin",
            text: "Linkedin",
        },
        {
            url: "https://github.com/pixiedevpraveen",
            icon: "github",
            text: "Github",
        },
        {
            url: "https://instagram.com/@praveen.yadu1c",
            icon: "instagram",
            text: "Instagram",
        },
    ];
</script>

<footer
    class="flex mobile:flex-wrap items-center justify-around gap-2 px-2 py-5"
>
    <div>
        <a
            onclick={(e) => console.log(e)}
            rel="external"
            target="_blank"
            href="/">praveenyadav.vercel.app</a
        >
    </div>
    <div class="flex flex-wrap">
        {#each routes as route (route.icon)}
            <a
            onclick={(e) => console.log(e)}
                class="cursor-pointer hover:bg-slate-100/10"
                href={route.url}
                rel="external"
                target="_blank"
            >
                <div
                    class="flex flex-col justify-center rounded-full cursor-pointer"
                    title={route.text}
                >
                    <Icon name={route.icon} />
                </div>
            </a>
        {/each}
    </div>
</footer>
