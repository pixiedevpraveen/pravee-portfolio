<script lang="ts">
    let {
        ...props
    }: { name: string; size?: keyof typeof sizes; class?: string } = $props();

    const sizes = {
        sm: "w-[30px] h-[30px]",
        md: "w-[40px] h-[40px]",
        lg: "w-[50px] h-[50px]",
    };
</script>

<div
    class={"icon flex justify-center items-center cursor-pointer rounded-full hover:bg-[#ffffff20] " +
        sizes[props.size || "md"] +
        (props.class ? " " + props.class : "")}
>
    <img src={`/icons/${props.name}.svg`} alt="" />
</div>
