import { PUBLIC_PAGE_TYPES } from "$env/static/public";

export function match(param: string) {
    return PUBLIC_PAGE_TYPES.includes(param)
}
