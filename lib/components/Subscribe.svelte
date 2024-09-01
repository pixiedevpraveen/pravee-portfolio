<script lang="ts">
    import type { EventHandler } from "svelte/elements";
    let loading = $state(false);

    const msg = "Thanks to Subscribe.";
    const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
        e.preventDefault();
        loading = true;

        const t = e.currentTarget;
        if (!(t.email instanceof HTMLInputElement)) return;

        let unsetValue = "";
        let email = "";
        try {
            t.email.disabled = true;
            email = t.email.value;
            console.log(t.action, email);
            const res = await fetch(t.action, {
                method: "POST",
                body: JSON.stringify({ email }),
            });

            console.log(res);
            console.log(await res.text());

            if (res.status !== 200) throw "";

            // await new Promise((res, rej) =>
            //     setTimeout(() => {
            //         if (email.startsWith("pc")) return rej("");
            //         return res("");
            //     }, 2000),
            // );
            console.log(email);
            t.email.value = msg;
        } catch (er) {
            console.log(er);
            t.email.value = "Failed to Subscribe you";
            unsetValue = email;
        } finally {
            setTimeout(() => {
                loading = false;
                t.email.value = unsetValue;
                t.email.disabled = false;
            }, 1000);
        }
    };
</script>

<form class="mt-5" action="/?/subscribe" method="post" {onsubmit}>
    <section
        class="flex justify-between p-2 gap-2 rounded-2xl max-w-sm mx-auto ring-2 ring-gray-400 focus-within:ring-gray-300"
    >
        <input
            type="email"
            name="email"
            placeholder="yourEm@il.com"
            class="bg-transparent ms-2 w-10/12 border-b-2 border-gray-400 focus:border-gray-200 focus:outline-none"
        />
        <button type="submit" class="button-outline text-sm">
            {loading ? "Loading..." : "Subscribe"}
        </button>
    </section>
</form>
