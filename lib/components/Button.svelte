<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLButtonAttributes } from "svelte/elements";
    let { ...props }: HTMLButtonAttributes = $props();
</script>

<button
    {...props}
    class={cn(
        "button bg-blur px-5 py-1 rounded-2xl transition-all duration-300",
        props.class,
    )}
>
    <slot />
</button>

<style>
    :global(button.button:not(:disabled)) {
        box-shadow: inset 0 4px 12px 0 #ffffff25;
        transform: scale(0.95);
    }
    :global(button.button:active:not(:disabled)) {
        box-shadow: inset 0 4px 12px 0 #ffffff10;
        background-color: #ffffff25;
        transform: scale(0.95) translate(2px, 2px);
    }
    :global(button.button:disabled) {
        opacity: 0.95;
        cursor: not-allowed;
    }
</style>
