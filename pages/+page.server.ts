import { error, fail, type Actions } from "@sveltejs/kit";
import pb from "../src/pb.server";
import type { PageServerLoad } from "./$types";
import type { HomePageData } from "../lib/types/home";


export const load: PageServerLoad = async () => {
    try {
        // return pb.send("/api/my/home-page", { query: { about: true } }) as Promise<HomePageData>
        return pb.collection("pages").getFirstListItem(pb.filter("slug = 'home' && is_active = true"), { fields: "data,content,description,title" }) as Promise<HomePageData>

    } catch (error) {
        console.log(error);
    }

    return error(404, "Page not found or moved somewhere else")
};


export const actions: Actions = {
    subscribe: async ({ request }) => {
        try {
            const jsonData = await request.json();

            const body: Record<string, unknown> = {};

            if (typeof jsonData?.email !== "string")
                throw "Missing/Invalid email"

            body["email"] = jsonData.email
            let found = false

            try {
                const res = await pb.collection("subscribe").getFirstListItem(pb.filter("email = {:email}", { email: jsonData.email }))
                found = !!res.id
                // const res = await pb.send("/pcoder/subscribe", { method: "POST", body })
                // console.log("send", typeof res, res);
                // console.log("get", res);
                if (!res.is_active) {
                    const res2 = await pb.collection("subscribe").update(res.id, { is_active: true })
                    // console.log("update", res2);
                    if (!res2) return fail(400)
                }

            } catch (er) {
                if (!found) {
                    const res = await pb.collection("subscribe").create(body)
                    if (!res) throw "Failed to create"
                }
            }

            return { success: true }
        } catch (error) {
            console.error(error);
        }

        return fail(400)
    }
};
