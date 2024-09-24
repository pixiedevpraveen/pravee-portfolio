<script lang="ts">
  import { deserialize } from "$app/forms";
  import Head from "$lib/components/Head.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import type { MessageType } from "$lib/message";

  let loading = $state(false);
  let msg = $state<MessageType>({ desc: "", tag: "info" });

  const onsubmit: FormSubmitHandler = async (e) => {
    e.preventDefault();

    loading = true;
    msg.desc = "Sending data...";
    const t = e.currentTarget;

    try {
      const form = new FormData();
      form.set("username", t.username.value);
      form.set("password", t.password.value);
      const response = await fetch(t.action, {
        method: "POST",
        body: form,
      });
      const res = deserialize(await response.text());
      console.log(res);

      if ("data" in res && typeof res.data === "object" && "msg" in res.data) {
        msg = res.data.msg as MessageType;
        if (msg.tag === "success") {
          t.reset();
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

<Head title="Login" />

<header>
  <h1>Login</h1>
</header>

<main class="mt-[5rem] px-3 h-full">
  <form action="" {onsubmit} id="login-form" class="contents">
    <section
      class="max-w-[40rem] bg-blur p-5 rounded-xl m-auto flex flex-col gap-5 justify-evenly"
    >
      <span
        class="{msg?.tag === 'success'
          ? 'text-green-500'
          : msg?.tag === 'error'
            ? 'text-red-500'
            : ''}">{msg?.["desc"] || "Fill details to login"}</span
      >

      <div class="flex flex-col gap-2">
        <label for="username-input" data-required>Username/Email</label>
        <input
          class="input"
          type="text"
          id="username-input"
          name="username"
          minlength="5"
          maxlength="50"
          placeholder="Enter username/email"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="password-input" data-required>Password</label>
        <input
          class="input"
          type="password"
          id="password-input"
          name="password"
          minlength="8"
          maxlength="25"
          placeholder="Enter password"
          required
        />
      </div>

      <button
        class="button mt-3 flex items-center justify-center"
        type="submit"
      >
        <Icon src=":send" size="sm" />
        {loading ? "Loading" : "Login"}
      </button>
    </section>
  </form>
</main>
