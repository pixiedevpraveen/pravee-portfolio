<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import { onMount } from "svelte";

    let headings = $state<HTMLHeadingElement[]>([]);

    onMount((): void => {
        updateHeadings();
    });

    function updateHeadings() {
        headings = [
            ...document.querySelectorAll<HTMLHeadingElement>(
                "h1, h2, h3, h4, h5, h6",
            ),
        ];
    }
</script>

{#if headings.length > 0}
    <li class="border-l border-white/20 ps-2">
        <button title="Headings" class="active:scale-90" data-show-toggler>
            <div class="relative flex flex-col justify-center rounded-full">
                <Icon src=":hash" />
            </div>
        </button>

        <section
            class="absolute right-0 bg-blur mt-3 px-5 py-3 rounded-3xl flex flex-col gap-2"
            data-show-container
        >
            {#each headings as heading (heading)}
                <button
                    class="text-left"
                    onclick={() =>
                        heading.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })}
                >
                    {heading.textContent?.trim().slice(0, 20)}
                </button>
            {/each}
        </section>
    </li>
{/if}

<style>
    [data-show-container] {
        transform: translateY(-100vh);
        transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
    }
    [data-show-toggler]:focus-within ~ [data-show-container] {
        transform: translateY(0);
    }
</style>
