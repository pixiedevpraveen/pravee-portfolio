import type { Actions } from "@sveltejs/kit";
import { Message } from "$lib/message";
import { createPb } from "$lib/pb";
import { getTokenPayload } from "pocketbase";

export const actions: Actions = {
    default: async ({ request, cookies, locals }) => {
        try {
            const form = await request.formData()
            const username = form.get("username"), password = form.get("password")
            if (!username || typeof username !== "string" || !password || typeof password !== "string") throw "Username and password are required!"

            const pb = createPb()

            await pb.collection("users").authWithPassword(username, password)

            cookies.set(
                "pb_auth",
                JSON.stringify({ token: pb.authStore.token }),
                {
                    "secure": true,
                    "httpOnly": true,
                    "sameSite": "strict",
                    "path": "/",
                    "expires": new Date(getTokenPayload(pb.authStore.token).exp * 1000)
                }
            )

            return Message.create("login successfully", "success")

        } catch (error) {
            if (typeof error === "string") return Message.create(error, "error")
        }

        return Message.create("Something went wrong", "error")
    }
};
