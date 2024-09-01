import { PB_AUTO_CANCELLATION, PB_EMAIL, PB_PASS, PB_URL } from '$env/static/private';
import PocketBase from 'pocketbase';
import type { TPocketBase } from './pb-types-advance';

let authToken = '';

// const store = new AsyncAuthStore({
//     save: async (serialized) => Preferences.set({ key: 'pb_auth', value: serialized }),
//     initial: (await Preferences.get({ key: 'pb_auth' })).value ?? undefined,
// });

const pb = new PocketBase(PB_URL) as TPocketBase
pb.admins.authWithPassword(PB_EMAIL, PB_PASS)

pb.authStore.onChange((c: string) => (authToken = c || authToken))

if (PB_AUTO_CANCELLATION === "FALSE") {
    pb.autoCancellation(false);
}

export default pb;
