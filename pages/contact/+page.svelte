<script lang="ts">
  import { deserialize } from "$app/forms";
  import Button from "$lib/components/Button.svelte";
    import Head from "$lib/components/Head.svelte";
  import Textarea from "$lib/components/Textarea.svelte";
  import type { ActionResult } from "@sveltejs/kit";
  import { onMount } from "svelte";
  import type { EventHandler } from "svelte/elements";

  let nameInputEl: HTMLInputElement;

  onMount(() => {
    nameInputEl.focus();
  });

  const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
    e.preventDefault();

    const t = e.currentTarget;

    const data = new FormData();
    let val: string;

    ["name", "email", "message"].forEach((key) => {
      val = (t.querySelector(`[name=${key}]`) as HTMLInputElement)?.value;
      if (val) data.set(key, val);
    });

    console.log(data);
    const response = await fetch("/contact", {
      method: "POST",
      body: data,
    });
    console.log(response);

    const result: ActionResult = deserialize(await response.text());
    console.log(result);

    if (result.type === "success") {
      // rerun all `load` functions, following the successful update
      // await invalidateAll();
    }

    // applyAction(result);
  };
</script>

<Head title="Contact" />

<main class="px-3">
  <h1>Contact</h1>
  <form {onsubmit}>
    <section
      class="highlight-invalid-inputs max-w-[40rem] bg-blur p-5 rounded-xl m-auto min-h-[60vh] flex flex-col gap-5 justify-evenly"
    >
      <h2>Send me a message</h2>

      <div class="flex flex-col gap-2">
        <label for="contact-name">Name*</label>
        <input
          class="flex min-h-[45px] w-full border border-input bg-white/10 px-3 py-1 rounded-lg shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          type="text"
          id="contact-name"
          name="name"
          bind:this={nameInputEl}
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="contact-email">Email*</label>
        <input
          class="flex min-h-[45px] w-full border border-input bg-white/10 px-3 py-1 rounded-lg shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          type="email"
          id="contact-email"
          name="email"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="contact-message">Message*</label>
        <Textarea
          id="contact-message"
          rows={5}
          name="message"
          minlength={2}
          required
        ></Textarea>
      </div>

      <Button class="py-3" type="submit">Submit</Button>
    </section>
  </form>
</main>
