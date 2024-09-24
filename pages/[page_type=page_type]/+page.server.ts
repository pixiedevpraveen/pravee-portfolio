import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Config } from "@sveltejs/adapter-vercel";

export const load: PageServerLoad = async ({ params, url, locals }) => {
  try {
    let page = Number(url.searchParams.get("page"))
    if (Number.isNaN(page) || page < 1) page = 1

    return {
      page_type: params.page_type,
      data: await locals.pb.collection("page_list").getList(page, 10, {
        sort: "-created",
        filter: locals.pb.filter("page_type = {:page_type}", {
          page_type: params.page_type,
        }),
      }),
    };
  } catch (error) {
    console.log(error);
  }

  return error(404, "Page not found or moved somewhere else");
};

// export const prerender = "auto";

export const config: Config = {
  isr: {
    expiration: 300,
  },
};
