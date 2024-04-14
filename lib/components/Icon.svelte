<script lang="ts">
    import { cn } from "$lib/utils";
    import { ICON_SIZES } from "../constants";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        size,
        /** url for the icon image, prefix svg icon name with ':' to use local static svg icons */
        src,
        alt,
        class: className,
        ...props
    }: {
        src: string;
        alt?: string;
        size?: keyof typeof ICON_SIZES;
    } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
    {...props}
    class={cn(
        "icon flex justify-center items-center cursor-pointer rounded-full hover:bg-[#ffffff20]",
        ICON_SIZES[size && size in ICON_SIZES ? size : "md"],
        className,
    )}
>
    <img src={src.startsWith(":") ? `/icons/${src.slice(1)}.svg` : src} {alt} />
</div>
