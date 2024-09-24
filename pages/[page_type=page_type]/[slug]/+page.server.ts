import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Config } from "@sveltejs/adapter-vercel";

export const load: PageServerLoad = async ({ params, locals }) => {
  try {
    return {
      pageData: await locals.pb.send("/api/myapi/pages/" + params.slug, {
        page_type: params.page_type,
      }),
    };
  } catch (error) {
    console.log(error);
  }

  error(404, "Page not found or moved somewhere else");
};

export const config: Config = {
  isr: {
    expiration: 300,
  },
};
