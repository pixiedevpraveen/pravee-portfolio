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
      <a href="{`/${data.page_type}/${page.slug}`}" class="anim-inout">
        <div
          class="hover:animate-pulse focus:scale-x-105 w-[min(50rem,90vw)] px-2 py-3 border-2 border-opacity-20 shadow hover:shadow-2xl focus-visible:outline-offset-2 rounded-lg view-from flex gap-3"
        >
          <img class="w-12" src="/icons/file.svg" alt="" />
          <div class="flex flex-col">
            <strong
              class="pb-1"
              style="{`view-transition-name: hero-${page.id}`}"
              >{page.title}</strong
            >
            <div class="flex gap-2 text-sm">
              <span>{page.created}</span>
              <span>{page.categories}</span>
            </div>
          </div>
        </div>
      </a>
    {:else}
      No {data.page_type} found.
    {/each}
  </div>
</main>
