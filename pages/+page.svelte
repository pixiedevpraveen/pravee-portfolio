<script lang="ts">
  import AboutSections from "$lib/containers/AboutSections.svelte";

  import CircleHero from "$lib/components/CircleHero.svelte";
  import type { PageServerData } from "./$types";
  import Head from "$lib/components/Head.svelte";
  // import { formSubmitJson } from "$lib/utils";

  let { data }: { data: PageServerData } = $props();
</script>

<Head title={data["title"] || "Home"} />
<CircleHero data={data.data.work} />

<!-- <form onsubmit={formSubmitJson(console.log)}>
  <input type="text" name="name">
  <button>Submit</button>
</form> -->

<AboutSections data={data.data} content={data.content} />
