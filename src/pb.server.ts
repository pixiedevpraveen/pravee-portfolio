import { PB_EMAIL, PB_PASS } from '$env/static/private';
import { createPb } from '$lib/pb';

let authToken = '';

// const store = new AsyncAuthStore({
//     save: async (serialized) => Preferences.set({ key: 'pb_auth', value: serialized }),
//     initial: (await Preferences.get({ key: 'pb_auth' })).value ?? undefined,
// });

export const pb = createPb()
pb.admins.authWithPassword(PB_EMAIL, PB_PASS)

pb.authStore.onChange((c: string) => (authToken = c || authToken))
