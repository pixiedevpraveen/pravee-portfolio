import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request }) => {
        // TODO log the user in
        console.log(request.formData());
    }
};
