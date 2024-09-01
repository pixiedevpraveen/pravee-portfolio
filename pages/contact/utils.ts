// import * as v from "valibot";

// export const ContactSchema = v.object({
//     title: v.pipe(v.string(), v.minLength(3), v.maxLength(150)),
//     name: v.pipe(v.string(), v.minLength(3), v.maxLength(150)),
//     email: v.pipe(v.string(), v.email()),
//     message: v.pipe(v.string(), v.minLength(10), v.maxLength(500)),
//     phone: v.optional(v.pipe(v.string(), v.minLength(10), v.maxLength(13))),
// })


export const ContactSchema = {
    title: {
        type: String(),
        minLength: 3,
        maxLength: 150,
    },
    name: {
        type: String(),
        minLength: 3,
        maxLength: 150,
    },
    email: {
        type: String(),
        minLength: 3,
        maxLength: 150,
    },
    message: {
        type: String(),
        minLength: 10,
        maxLength: 500,
    },
    phone: {
        type: String(),
        minLength: 10,
        maxLength: 13,
        optional: true
    },
}


// let o: object;
// // o = { title: "sdf" }
// o = { title: "sdf", name: "sdfsd", email: "test@test.com", message: "jksdhnfksdhfk", asdas: "as" }

// try {
//     o = parseSchema(ContactSchema, o)
//     console.log("parseSchema", o);

// } catch (error) {
//     console.log(error instanceof Error ? error.message : error);
// }
