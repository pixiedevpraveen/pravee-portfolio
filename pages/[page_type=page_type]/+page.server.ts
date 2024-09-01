import { error } from "@sveltejs/kit";
import pb from "../../src/pb.server";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    try {
        return { page_type: params.page_type, data: await pb.collection("pages").getList(1, 10, { fields: "id,title,slug", filter: pb.filter("page_type = {:page_type} && is_active = true && is_indexed = true", { page_type: params.page_type }) }) }

    } catch (error) {
        console.log(error);
    }

    return error(404, "Page not found or moved somewhere else")
};

// export const prerender = "auto";
