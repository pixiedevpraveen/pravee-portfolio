
import type PocketBase from 'pocketbase'
import type { ListResult, RecordService, SendOptions } from 'pocketbase'


// This file was @generated using pocketbase-typegen
import type { CollectionResponses } from './pb-types';



// for Key comletion

// type Split<S extends string, D extends string> =
// 	string extends S ? string[] :
// 	S extends '' ? [] :
// 	S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

// type JoinKeys<T extends string[], D extends string> =
// 	T extends [] ? '' :
// 	T extends [infer F] ? F :
// 	T extends [infer F, ...infer R] ?
// 	F extends string ?
// 	R extends string[] ?
// 	`${F}${D}${JoinKeys<R, D>}` : never : never : never;

// type Combinations<T extends string, U extends string = T> =
// 	[T] extends [never]
// 	? ''
// 	: T extends T
// 	? T | `${T},${Combinations<Exclude<U, T>>}`
// 	: never;

// type UnionConcat<U extends string, Sep extends string> =
// 	JoinKeys<Split<Combinations<U>, ','>, Sep>;



// Generate union type of comma-separated keys
type Join<K extends string, D extends string> =
	K extends string ?
	`${K}${D}${Join<Exclude<string, K>, D>}` | K
	: never;

type FieldCombinations<T> = Join<Extract<keyof T, string>, ','>;

type ParseFields<S extends string> =
	S extends `${infer F},${infer Rest}` ? F | ParseFields<Rest> : S;

type PickFields<T, K extends keyof T> = {
	[P in K]: T[P];
};


interface MyCommonOptions<K> extends SendOptions {
	fields?: K;
}

interface MyListOptions<K> extends MyCommonOptions<K> {
	page?: number;
	perPage?: number;
	sort?: string;
	filter?: string;
	skipTotal?: boolean;
}
interface MyFullListOptions<K> extends MyListOptions<K> {
	batch?: number;
}
interface MyRecordOptions<K> extends MyCommonOptions<K> {
	expand?: string;
}
interface MyRecordListOptions<K> extends MyListOptions<K>, MyRecordOptions<K> {
}
interface MyRecordFullListOptions<K> extends MyFullListOptions<K>, MyRecordOptions<K> {
}

interface MyRecordService<M> extends RecordService<M> {
	getFullList<
		F extends FieldCombinations<M>,
		Keys = ParseFields<F> extends keyof M ? ParseFields<F> : keyof M,
		R = PickFields<M, Extract<Keys, keyof M>>
	>(options?: MyFullListOptions<F>): Promise<Array<R>>;

	getFullList<
		F extends FieldCombinations<M>,
		Keys = ParseFields<F> extends keyof M ? ParseFields<F> : keyof M,
		R = PickFields<M, Extract<Keys, keyof M>>
	>(batch?: number, options?: MyListOptions<F>): Promise<Array<R>>;

	getList<
		F extends FieldCombinations<M>,
		Keys = ParseFields<F> extends keyof M ? ParseFields<F> : keyof M,
		R = PickFields<M, Extract<Keys, keyof M>>
	>(page?: number, perPage?: number, options?: MyListOptions<F>): Promise<ListResult<R>>;

	getFirstListItem<
		F extends FieldCombinations<M>,
		Keys = ParseFields<F> extends keyof M ? ParseFields<F> : keyof M,
		R = PickFields<M, Extract<Keys, keyof M>>
	>(filter: string, options?: MyCommonOptions<F>): Promise<R>;

	getOne<
		F extends FieldCombinations<M>,
		Keys = ParseFields<F> extends keyof M ? ParseFields<F> : keyof M,
		R = PickFields<M, Extract<Keys, keyof M>>
	>(
		id: string,
		options?: MyRecordOptions<F> | undefined
	): Promise<R>;
}


// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions
export interface TPocketBase extends PocketBase {
	collection<Name extends keyof CollectionResponses>(idOrName: Name): MyRecordService<CollectionResponses[Name]>
}
