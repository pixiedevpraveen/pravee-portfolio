import type { Actions } from "@sveltejs/kit";
import pb from "../../src/pb.server";
import { CONTACT_FIELDS } from "$lib/constants";
import { ClientResponseError } from "pocketbase";
import { parseSchema, SchemaError } from "$lib/parser";
import { ContactSchema } from "./utils";
import { Message } from "$lib/message";

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const json = await request.json()

            const data = parseSchema(ContactSchema, json)
            const fdata = new FormData();
            let val: string;

            CONTACT_FIELDS.forEach((key) => {
                val = data[key];
                if (typeof val !== "string") return;

                fdata.set(key, val);
            });

            await pb.collection("contact").create(fdata)

            return Message.create("Contact sent successfully", "success")
        } catch (error) {
            if (typeof error === "string" || error instanceof SchemaError || error instanceof ClientResponseError) return Message.create(error, "error")
        }

        return Message.create("Something went wrong", "error")
    }
};
