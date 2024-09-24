import { PB_AUTO_CANCELLATION, PB_URL } from '$env/static/private';
import PocketBase from 'pocketbase';
import type { TPocketBase } from '../src/pb-types-advance';

export const createPb = () => {
    const pb = new PocketBase(PB_URL) as TPocketBase

    if (PB_AUTO_CANCELLATION === "FALSE") {
        pb.autoCancellation(false);
    }

    return pb
}
