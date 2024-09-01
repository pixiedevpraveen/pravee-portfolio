<script lang="ts">
    import { PUBLIC_AUTHOR, PUBLIC_SOCIAL } from "$env/static/public";
    import Icon from "./Icon.svelte";

    const routes: {
        url: string;
        icon: string;
        text: string;
    }[] = JSON.parse(PUBLIC_SOCIAL);
</script>

<footer
    class="relative flex flex-wrap items-center justify-around gap-2 px-2 py-5 mt-5"
>
    <div class="px-2">
        <span>&copy;{new Date().getFullYear()}</span>
        <a
            onclick={(e) => console.log(e)}
            rel="external"
            target="_blank"
            href="/"
        >
            {PUBLIC_AUTHOR}
        </a>
    </div>
    <div class="flex flex-wrap">
        {#each routes as route (route.icon)}
            <a
                class="cursor-pointer"
                href={route.url}
                rel="external"
                target="_blank"
            >
                <div
                    class="flex flex-col justify-center rounded-full cursor-pointer"
                    title={route.text}
                >
                    <Icon src={route.icon} />
                </div>
            </a>
        {/each}
    </div>
    <div
        class="absolute left-1/2 -translate-x-1/2 bottom-4 border-b-2 border-gray-400 w-4/6"
    ></div>
</footer>
