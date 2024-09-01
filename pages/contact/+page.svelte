<script lang="ts">
  import { deserialize } from "$app/forms";
  import Head from "$lib/components/Head.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import { CONTACT_FIELDS } from "$lib/constants";
  import { MESSAGE_TAG_CLASSES, type MessageType } from "$lib/message";

  let loading = $state(false);
  let msg = $state<MessageType>({ desc: "", tag: "info" });

  const onsubmit: FormSubmitHandler = async (e) => {
    e.preventDefault();

    loading = true;
    msg.desc = "Sending message...";
    const t = e.currentTarget;
    t.classList.add("highlight-invalid-inputs");

    try {
      const data: Record<string, string> = {};
      let val: string;

      CONTACT_FIELDS.forEach((key) => {
        val = t[key].value;
        if (typeof val === "string") data[key] = val;
      });

      const response = await fetch(t.action, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = deserialize(await response.text());
      console.log(res);

      if ("data" in res && typeof res.data === "object" && "msg" in res.data) {
        msg = res.data.msg as MessageType;
        if (msg.tag === "success") {
          t.reset();
          t.classList.remove("highlight-invalid-inputs");
        }
      } else throw "";
    } catch (error) {
      console.log(error);
      msg.desc = "Something went wrong. Please try again later.";
      msg.tag = "error";
    } finally {
      loading = false;
    }
  };
</script>

<Head title="Contact" />

<header>
  <h1>Contact</h1>
</header>

<main class="px-3">
  <form action="" {onsubmit} id="contact-form">
    <section
      class="max-w-[40rem] bg-blur p-5 rounded-xl m-auto min-h-[60vh] flex flex-col gap-5 justify-evenly"
    >
      <span class="{MESSAGE_TAG_CLASSES[msg?.tag]?.color}"
        >{msg?.["desc"] || "Send me a message"}</span
      >

      <div class="flex flex-col gap-2">
        <label for="contact-title" data-required>Title</label>
        <input
          class="input"
          type="text"
          id="contact-title"
          name="title"
          placeholder="Enter title"
          minlength="3"
          maxlength="150"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="contact-message" data-required>Message</label>
        <textarea
          id="contact-message"
          rows="5"
          class="textarea"
          name="message"
          minlength="10"
          maxlength="500"
          placeholder="Enter message here"
          required
        ></textarea>
      </div>

      <div class="flex flex-col gap-2">
        <label for="contact-name" data-required>Name</label>
        <input
          class="input"
          type="text"
          id="contact-name"
          name="name"
          minlength="3"
          maxlength="150"
          placeholder="Enter name"
          required
        />
      </div>

      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <div class="flex flex-1 flex-col gap-2">
          <label for="contact-email" data-required>Email</label>
          <input
            class="input min-h-[40px]"
            type="email"
            id="contact-email"
            name="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <label for="contact-phone">Phone</label>
          <input
            class="input min-h-[40px]"
            type="phone"
            id="contact-phone"
            name="phone"
            placeholder="Enter phone"
            minlength="10"
            maxlength="13"
          />
        </div>
      </div>

      <button
        class="button mt-3 flex items-center justify-center"
        type="submit"
      >
        <Icon src=":send" size="sm" />
        {loading ? "Loading" : "Send"}
      </button>
    </section>
  </form>
</main>
