<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import { slide } from "svelte/transition";
    import Skills from "$lib/components/Skills.svelte";
    import DotStepper from "$lib/components/DotStepper.svelte";
    import type { HomePageData } from "$lib/types/home";

    let { data, content }: { data: HomePageData["data"], content: string } = $props();
    const educationHeaders = ["course", "cgpa/percentage", "institute", "year"];

    let educationTableView = $state(false);
    let skillsColumnView = $state(false);
</script>

<main
    class="dynamic-content underline-wavy-headings max-w-[1000px] mx-auto flex flex-col gap-2 p-2"
>
    <section class="anim-inout">
        <h2>Hello!</h2>
        <p class="px-2 ml-auto max-w-[800px]">{@html content}</p>
    </section>

    <section class="anim-inout">
        <div class="flex items-center">
            <h3 id="h-skills">Skills</h3>
        
            <Icon
                tabindex={0}
                src={skillsColumnView ? ':list' : ':columns'}
                class="focus-within:border-2"
                onclick={() => (skillsColumnView = !skillsColumnView)}
            />
        </div>
       {#if skillsColumnView}
         <ul
            transition:slide={{ delay: 0, duration: 500 }}
            class="px-2 ml-auto max-w-[800px]">
             {#each data["skills"] as {name, value} (name)}
                 <li class="mt-2">
                     <div class="block w-48 sm:inline-block capitalize">
                         {name}:
                     </div>
                     <strong
                         >{value.map(v => v.name).join(", ")}</strong
                     >
                 </li>
             {/each}
         </ul>
       {:else}
           <Skills data={data.skills} />
       {/if}
    </section>

    {#if data.education?.length}        
        <section class="anim-inout">
            <div class="flex items-center">
                <h3 id="h-education">Education</h3>
    
                <Icon
                    tabindex={0}
                    src={educationTableView ? ':list' : ':table'}
                    class="focus-within:border-2"
                    onclick={() => (educationTableView = !educationTableView)}
                />
            </div>
    
            {#if educationTableView}
                <table
                    transition:slide={{ delay: 0, duration: 500 }}
                    class="w-full px-1 overflow-auto"
                >
                    <thead class="bg-white/10 hidden sm:table-header-group">
                        <tr class="flex sm:table-row flex-col">
                            {#each educationHeaders as key (key)}
                                <th
                                    class="px-2 py-1 capitalize border border-gray-700"
                                    >{key}</th
                                >
                            {/each}
                        </tr>
                    </thead>
                    <tbody>
                        {#each data["education"] as row (row["course"])}
                            <tr
                                class="hover:bg-white/5 flex sm:table-row mt-2 flex-col"
                            >
                                {#each educationHeaders as key (key)}
                                    <td
                                        class="px-2 py-1 min-h-10 border border-gray-700 before:content-[attr(title)] sm:before:hidden before:pe-1 before:font-semibold before:capitalize"
                                        aria-label={key}
                                        title={`${key}:`}
                                        >{row[key.split("/")[0] as keyof typeof row]}</td
                                    >
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {:else}
                <div
                    transition:slide={{ delay: 0, duration: 500 }}
                    class="ml-auto max-w-[800px]"
                >
                    {#each data["education"] as row (row["course"])}
                        <DotStepper>
                            <div class="grid grid-cols-6">
                                <strong class="col-span-2">
                                    {row.course}
                                </strong>
                                <strong class="col-span-2">
                                    {row.cgpa}
                                </strong>
                                <strong class="col-span-2">
                                    {row.year}
                                </strong>
                            </div>
                            <div>
                                Institute: <strong>{row.institute}</strong>
                            </div>
                        </DotStepper>
                    {/each}
                </div>
            {/if}
        </section>
    {/if}
    
    <section class="anim-inout">
        <h3 id="h-internship">Internship</h3>

        <div class="ml-auto max-w-[800px]">
            {#each data["internships"] as row (row["time"])}
                <DotStepper>
                    <div class="flex flex-col gap-3">
                        {#each Object["entries"](row) as [key, val] (key)}
                            <span class="first-letter:capitalize break-words">
                                {key}:
                                <strong
                                    >{Array.isArray(val)
                                        ? val["join"](", ")
                                        : val}</strong
                                >
                            </span>
                        {/each}
                    </div>
                </DotStepper>
            {/each}
        </div>
    </section>

    <section class="anim-inout">
        <h3 id="h-projects">Projects</h3>

        <div class="ml-auto max-w-[800px]">
            {#each data["projects"] as row (row["title"])}
                <DotStepper>
                    <div
                        class="flex flex-col md:flex-row justify-between lg:grid grid-cols-6"
                    >
                        <strong class="col-span-2">
                            {row.title}
                        </strong>
                    </div>
                    <p class="sm:mt-2">
                        {row.details}
                    </p>
                    <div class="flex flex-col md:flex-row justify-between">
                        <a
                            class="w-fit break-words"
                            rel="external"
                            href={row.url}
                        >
                            {row.url}
                        </a>
                        {#if row.source}
                            <a
                                class="w-fit break-words"
                                rel="external"
                                href={row.source}
                            >
                                {row.source}
                            </a>
                        {/if}
                    </div>
                </DotStepper>
            {/each}
        </div>
    </section>

    <section class="anim-inout">
        <h3 id="h-achievements">Achievements</h3>

        <div class="ml-auto max-w-[min(800px,100%)]">
            {#each data["achievements"] as row (row["title"])}
                <DotStepper>
                    <div class="flex flex-wrap justify-between gap-x-3">
                        <strong>
                            {row.title}
                        </strong>
                        <strong class="sm:min-w-24">
                            {row.time}
                        </strong>
                    </div>
                    <p class="sm:mt-2">
                        {row.details}
                    </p>
                </DotStepper>
            {/each}
        </div>
    </section>
</main>
