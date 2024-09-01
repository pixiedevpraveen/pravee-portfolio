<script lang="ts">
    import DotStepper from "$lib/components/DotStepper.svelte";
    import type { HomePageData } from "../types/home";
    import Icon from "./Icon.svelte";

    let { data }: { data: HomePageData["data"]["skills"] } = $props();
</script>

<div class="flex flex-col ml-auto max-w-[800px]">
    {#each data as skills (skills["name"])}
        <DotStepper>
            <div class="flex flex-col gap-2">
                <div class="font-medium capitalize">
                    {skills.name}
                </div>
                <div class="flex flex-wrap gap-3 sm:gap-5 px-1 sm:px-3">
                    {#each skills["value"] as skill (skill)}
                        <div
                            class="py-1 ps-2 pe-3 flex items-center justify-center gap-2 ring-2 ring-gray-400 focus-within:ring-gray-300 rounded-lg"
                        >
                            <Icon size="sm" src={skill.icon} class="hover:bg-transparent" alt={skill.name} />
                            <span class="text-sm">{skill.name}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </DotStepper>
    {/each}
</div>
