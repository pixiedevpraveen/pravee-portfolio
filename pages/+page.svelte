<script lang="ts">
  import AboutSections from "$lib/containers/AboutSections.svelte";

  import CircleHero from "$lib/components/CircleHero.svelte";
  import type { PageServerData } from "./$types";
  import Head from "$lib/components/Head.svelte";

  let { data }: { data: PageServerData } = $props();
</script>

<Head title={data["title"] || "Home"} />

<CircleHero data={data.data.work} />

<AboutSections data={data.data} content={data.content} />
