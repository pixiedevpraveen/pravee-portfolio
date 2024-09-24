// src/hooks.server.js
import { createPb } from "$lib/pb";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.pb = createPb();

  const cookie = event.request.headers.get("cookie");

  if (cookie) {
    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(cookie || "");

    try {
      // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
      event.locals.pb.authStore.isValid &&
        (await event.locals.pb.collection("users").authRefresh());
    } catch (_) {
      // clear the auth store on failed refresh
      event.locals.pb.authStore.clear();
    }
  }

  const response = await resolve(event);

  if (cookie) {
    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append(
      "set-cookie",
      event.locals.pb.authStore.exportToCookie(),
    );
  }

  return response;
};
