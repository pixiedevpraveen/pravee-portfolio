<script lang="ts">
  import Head from "$lib/components/Head.svelte";
  import type { PageServerData } from "./$types";

  let { data }: { data: PageServerData } = $props();
</script>

<Head title={data.pageData.title} />

<header>
  <h1
    class="view-to"
    style={`view-transition-name: hero-${data.pageData.id}`}
  >
    {data.pageData.title}
  </h1>
</header>

<main class="dynamic-content max-w-[1000px] mx-auto flex flex-col gap-2 p-2">
  <article>
    {@html data.pageData.content}
  </article>
</main>
