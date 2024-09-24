import { error, fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { HomePageData } from "../lib/types/home";
import type { Config } from "@sveltejs/adapter-vercel";

export const load: PageServerLoad = async ({ locals }) => {
  // try {
    return locals.pb.send("/api/myapi/pages/home", {}) as Promise<HomePageData>;
  // } catch (error) {
  //   console.error("ERROR: ", error);
  // }

  // return error(404, "Page not found or moved somewhere else");
};

export const actions: Actions = {
  subscribe: async ({ request, locals }) => {
    try {
      const jsonData = await request.json();

      const body: Record<string, unknown> = {};

      if (typeof jsonData?.email !== "string") throw "Missing/Invalid email";

      body["email"] = jsonData.email;
      let found = false;

      try {
        const res = await locals.pb
          .collection("subscribe")
          .getFirstListItem(
            locals.pb.filter("email = {:email}", { email: jsonData.email }),
          );
        found = !!res.id;
        // const res = await pb.send("/pcoder/subscribe", { method: "POST", body })
        // console.log("send", typeof res, res);
        // console.log("get", res);
        if (!res.is_active) {
          const res2 = await locals.pb
            .collection("subscribe")
            .update(res.id, { is_active: true });
          // console.log("update", res2);
          if (!res2) return fail(400);
        }
      } catch (er) {
        if (!found) {
          const res = await locals.pb.collection("subscribe").create(body);
          if (!res) throw "Failed to create";
        }
      }

      return { success: true };
    } catch (error) {
      console.error(error);
    }

    return fail(400);
  },
};

export const config: Config = {
  isr: {
    expiration: 300,
  },
};
