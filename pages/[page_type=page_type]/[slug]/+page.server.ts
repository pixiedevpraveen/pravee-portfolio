import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import pb from "../../../src/pb.server";


export const load: PageServerLoad = async ({ params }) => {
    try {

        return { pageData: await pb.collection("pages").getFirstListItem(pb.filter("slug = {:slug} && page_type = {:page_type} && is_active = true && is_public = true", { page_type: params.page_type, slug: params.slug })) }

    } catch (error) {
        console.log(error);
    }

    error(404, "Page not found or moved somewhere else")
};
