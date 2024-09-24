<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { PUBLIC_NAV_ROUTES } from "$env/static/public";
    import Icon from "$lib/components/Icon.svelte";

    let { loading }: { loading?: boolean } = $props()
    
    const routes: {
        path: string;
        pathPrefix?: string;
        icon: string;
        text: string;
    }[] = JSON.parse(PUBLIC_NAV_ROUTES);
</script>

<nav
    class="navbar sticky top-2 bg-blur max-w-fit h-fit z-20 mx-auto px-3 py-2 rounded-3xl"
    data-loading={loading}
    oncontextmenu={(e) => {
        e.preventDefault();
        goto('/login');
    }}
>
    <ul class="navbar__routes w-full flex justify-4center gap-3">
        {#each routes as route (route.path)}
            <li>
                <a
                    href="{route.path}"
                    class:route__active={$page.url.pathname === route.path ||
                        (route.pathPrefix &&
                            $page.url.pathname.startsWith(route.pathPrefix))}
                    class="relative flex flex-col items-center"
                >
                    <div class="transition-transform rounded-full">
                        <Icon class="active:scale-90" src={route.icon} />
                    </div>
                    <small
                        class="route__text bg-blur px-2 py-1 rounded-lg absolute top-[3rem]"
                    >
                        {route.text}
                    </small>
                </a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="postcss">
    @media screen and (hover: none) {
        .navbar {
            padding-bottom: 1rem;
        }
        .navbar .route__text {
            font-size: xx-small;
            top: 2rem;
            background: transparent;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }
    }

    @media screen and (hover: hover) {
        .navbar__routes li .route__text {
            transition: all 0.3s;
            opacity: 0;
            transform: translateY(-100vh);
        }

        .navbar__routes li:hover .route__text {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .navbar__routes li div:hover {
        transform: scale(1.05);
    }
    .navbar__routes:hover li div {
        opacity: 0.8;
    }
    .navbar__routes:hover li div:hover {
        opacity: 1;
    }
    .navbar__routes li .route__active > div {
        filter: brightness(0) saturate(100%) invert(62%) sepia(35%)
            saturate(7023%) hue-rotate(352deg) brightness(100%) contrast(96%);
    }

    .navbar__routes li .route__active > div::before {
        @apply bg-primary bg-opacity-20;
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        border-radius: 100%;
        z-index: -1;
        view-transition-name: active-page;
    }
    .navbar>* {
        transition: 0.3s transform;
        transition-delay: .2s;
    }
    .navbar[data-loading="true"]>* {
        transform: scale(0.95);
    }
    .navbar[data-loading="true"] {
        animation: loading-ring-primary linear 1s infinite;
        animation-delay: .2s;
    }
    @keyframes loading-ring-primary {
        0%, 100% {
            box-shadow:
                1px 1px 1px hsl(var(--primary) / 1),
                -1px -1px 1px hsl(var(--primary) / 0.1);
                transform: translate(-2px, -2px);
            }
            50% {
            transform: translate(0, 0);
            box-shadow:
                1px 1px 1px hsl(var(--primary) / 0.1),
                -1px -1px 1px hsl(var(--primary) / 1);
        }
    }
</style>
