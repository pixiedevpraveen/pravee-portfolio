<script lang="ts">
  import Head from "$lib/components/Head.svelte";
  import type { PageServerData } from "./$types";

  let { data }: { data: PageServerData } = $props();
</script>

<Head title={data.page_type} />

<header>
  <h1 class="capitalize">{data.page_type}</h1>
</header>

<main class="max-w-[1000px] mx-auto flex flex-col gap-2 p-2 mt-[5rem]">
  <div class="flex flex-col mx-auto gap-3">
    {#each data["data"]["items"] as page (page["slug"])}
      <a
        href="{`/${data.page_type}/${page.slug}`}"
        class="anim-inout"
        style="{`view-transition-name: hero-${page.id}`}"
      >
        <div
          class="hover:animate-pulse focus:scale-x-105 w-[min(50rem,90vw)] ps-2 pe-3 py-3 border-2 border-opacity-20 shadow hover:shadow-2xl focus-visible:outline-offset-2 rounded-lg view-from flex gap-3"
        >
          <img class="w-12" src="{page.thumb || '/icons/file.svg'}" alt="" />
          <div class="flex-1 flex flex-col">
            <strong class="pb-1">{page.title}</strong>
            <div class="flex gap-2 justify-between text-sm">
              <span>{new Date(page.created).toLocaleDateString()}</span>
              <span class="ring-1 ring-white rounded-sm px-2"
                >{page.categories}</span
              >
            </div>
          </div>
        </div>
      </a>
    {:else}
      No {data.page_type} found.
    {/each}
  </div>
</main>
