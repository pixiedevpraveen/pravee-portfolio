/**
* This file was @generated using pocketbase-typegen
*/


export enum Collections {
	BlogList = "blog_list",
	Contact = "contact",
	Freelance = "freelance",
	Note = "note",
	Notes = "notes",
	NotesList = "notes_list",
	Pages = "pages",
	SiteData = "site_data",
	Subscribe = "subscribe",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum BlogListPageTypeOptions {
	"page" = "page",
	"route" = "route",
	"tool" = "tool",
	"blog" = "blog",
	"material" = "material",
	"other" = "other",
}
export type BlogListRecord = {
	categories?: string
	page_type: BlogListPageTypeOptions
	slug: string
	title: string
}

export type ContactRecord = {
	email: string
	message: string
	name: string
	phone?: string
	title: string
	user?: RecordIdString
}

export enum FreelanceProjectStatusOptions {
	"confirm" = "confirm",
	"working" = "working",
	"finished" = "finished",
	"unfinished" = "unfinished",
	"failed" = "failed",
}

export enum FreelancePriceStatusOptions {
	"pending" = "pending",
	"received" = "received",
	"refund" = "refund",
	"not found" = "not found",
}
export type FreelanceRecord = {
	TaskName?: string
	completedAt?: IsoDateString
	confirmedAt?: IsoDateString
	fileNames?: string
	price: number
	priceStatus?: FreelancePriceStatusOptions
	projectStatus?: FreelanceProjectStatusOptions
	tech: string
	title: string
}

export type NoteRecord = {
	color?: string
	content?: HTMLString
	folder?: string
	is_active?: boolean
	is_favourite?: boolean
	is_locked?: boolean
	is_md?: boolean
	keywords?: string
	title: string
	user: RecordIdString
}

export type NotesRecord = {
	color?: string
	content?: HTMLString
	folder?: string
	is_active?: boolean
	is_favourite?: boolean
	is_locked?: boolean
	is_md?: boolean
	keywords?: string
	title: string
	user: RecordIdString
}

export type NotesListRecord = {
	color?: string
	folder?: string
	is_active?: boolean
	is_favourite?: boolean
	is_locked?: boolean
	is_md?: boolean
	keywords?: string
	title: string
	user: RecordIdString
}

export enum PagesPageTypeOptions {
	"page" = "page",
	"route" = "route",
	"tool" = "tool",
	"blog" = "blog",
	"material" = "material",
	"other" = "other",
}
export type PagesRecord<Tdata = unknown> = {
	categories?: string
	content: HTMLString
	cover?: string
	data?: null | Tdata
	description?: string
	is_active?: boolean
	is_indexed?: boolean
	is_md?: boolean
	is_public?: boolean
	keywords?: string
	page_type: PagesPageTypeOptions
	slug: string
	thumb?: string
	title: string
	user: RecordIdString
}

export type SiteDataRecord<Tdata = unknown> = {
	category: string
	data?: null | Tdata
	is_active?: boolean
	is_public?: boolean
	name: string
}

export enum SubscribeFeedOptions {
	"all" = "all",
	"blog" = "blog",
	"event" = "event",
	"feature" = "feature",
}
export type SubscribeRecord = {
	email: string
	feed: SubscribeFeedOptions[]
	is_active?: boolean
	user?: RecordIdString
}

export type UsersRecord<Tdata = unknown> = {
	avatar?: string
	data?: null | Tdata
	is_admin?: boolean
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type BlogListResponse<Texpand = unknown> = Required<BlogListRecord> & BaseSystemFields<Texpand>
export type ContactResponse<Texpand = unknown> = Required<ContactRecord> & BaseSystemFields<Texpand>
export type FreelanceResponse<Texpand = unknown> = Required<FreelanceRecord> & BaseSystemFields<Texpand>
export type NoteResponse<Texpand = unknown> = Required<NoteRecord> & BaseSystemFields<Texpand>
export type NotesResponse<Texpand = unknown> = Required<NotesRecord> & BaseSystemFields<Texpand>
export type NotesListResponse<Texpand = unknown> = Required<NotesListRecord> & BaseSystemFields<Texpand>
export type PagesResponse<Tdata = unknown, Texpand = unknown> = Required<PagesRecord<Tdata>> & BaseSystemFields<Texpand>
export type SiteDataResponse<Tdata = unknown, Texpand = unknown> = Required<SiteDataRecord<Tdata>> & BaseSystemFields<Texpand>
export type SubscribeResponse<Texpand = unknown> = Required<SubscribeRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Tdata = unknown, Texpand = unknown> = Required<UsersRecord<Tdata>> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	blog_list: BlogListRecord
	contact: ContactRecord
	freelance: FreelanceRecord
	note: NoteRecord
	notes: NotesRecord
	notes_list: NotesListRecord
	pages: PagesRecord
	site_data: SiteDataRecord
	subscribe: SubscribeRecord
	users: UsersRecord
}

export type CollectionResponses = {
	blog_list: BlogListResponse
	contact: ContactResponse
	freelance: FreelanceResponse
	note: NoteResponse
	notes: NotesResponse
	notes_list: NotesListResponse
	pages: PagesResponse
	site_data: SiteDataResponse
	subscribe: SubscribeResponse
	users: UsersResponse
}
