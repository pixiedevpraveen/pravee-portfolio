<script lang="ts">
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let { class: className, ...props }: HTMLTextareaAttributes = $props();
</script>

<textarea
	{...props}
	class={cn(
		"flex min-h-[60px] w-full rounded-md border border-input bg-white/10 px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
		className,
	)}
/>
