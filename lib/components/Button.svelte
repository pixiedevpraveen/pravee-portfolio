<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLButtonAttributes } from "svelte/elements";
    let { class: cls, children, ...props }: HTMLButtonAttributes = $props();
</script>

<button
    {...props}
    class={cn(
        "button",
        cls,
    )}
>
    {@render children?.()}
</button>
