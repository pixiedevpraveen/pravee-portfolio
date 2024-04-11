<script lang="ts">
    import { page } from "$app/stores";
    import Icon from "./Icon.svelte";

    const routes = [
        { path: "/", icon: "home", text: "Home" },
        { path: "/about", icon: "info", text: "About" },
        { path: "/contact", icon: "mail", text: "Contact" },
    ];
</script>

<nav class="navbar bg-blur max-w-fit m-auto mt-2 px-5 py-2 rounded-full">
    <ul class="navbar__routes flex gap-3">
        {#each routes as route (route.path)}
            <li>
                <a
                    href={route.path}
                    class:route__active={$page.url.pathname === route.path}
                >
                    <div
                        class="relative flex flex-col justify-center rounded-full"
                    >
                        <Icon name={route.icon} />
                        <small
                            class="route__text bg-blur px-2 py-1 rounded-lg absolute top-[3rem]"
                        >
                            {route.text}
                        </small>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="postcss">
    .navbar__routes li a div {
        display: flex;
        flex-direction: row;
        transition: transform 0.5s;
    }
    .navbar__routes li a div .route__text {
        transition: all 0.3s;
        opacity: 0;
        transform: translateY(-100vh);
    }
    .navbar__routes li a div:hover .route__text {
        opacity: 1;
        transform: translateY(0);
    }
    .navbar__routes li a div:hover {
        transform: scale(1.05);
    }
    .navbar__routes:hover li a div {
        opacity: 0.8;
    }
    .navbar__routes:hover li a div:hover {
        opacity: 1;
    }
    .navbar__routes li a.route__active div {
        background-color: #ffffff20;
        filter: brightness(0) saturate(100%) invert(81%) sepia(51%)
            saturate(412%) hue-rotate(146deg) brightness(107%) contrast(96%);
    }
</style>
