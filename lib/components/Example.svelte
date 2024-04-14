<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";
    let { class: className, ...props }: HTMLAttributes<HTMLElement> = $props();
</script>

<span {...props} class={cn("", className)}>
    <slot />
</span>
