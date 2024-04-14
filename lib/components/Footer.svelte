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
    class="flex mobile:flex-wrap items-center justify-around gap-2 px-2 py-5"
>
    <div>
        Author:
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
                onclick={(e) => console.log(e)}
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
</footer>
