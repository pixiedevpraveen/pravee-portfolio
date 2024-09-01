export type BaseSchema = {
    [key: string]: {
        type: unknown,
        default?: any,
        minLength?: number,
        maxLength?: number,
        optional?: boolean,
    }
};

export class SchemaError extends Error {
    constructor(readonly message: string) {
        super(message)
    }
}

export function parseSchema<Schema extends BaseSchema>(schema: Schema, obj: unknown) {
    if (!(obj instanceof Object) || obj.constructor.name !== "Object") throw new SchemaError("Value must be a object")
    let o = {} as { [key: string]: any };

    Object.keys(schema).forEach(key => {
        const { type, minLength, maxLength, optional } = schema[key];

        if (!Object.hasOwn(obj, key)) {
            if (optional) return;
            throw new SchemaError(`Missing required field: "${key}"`);
        }

        if (typeof obj[key as keyof typeof obj] !== typeof type) {
            throw new SchemaError(`Field "${key}" must be of type ${type}`);
        }
        if (minLength && obj[key as keyof typeof obj].length < minLength) {
            throw new SchemaError(`Field "${key}" must be at least ${minLength} characters long`);
        }
        if (maxLength && obj[key as keyof typeof obj].length > maxLength) {
            throw new SchemaError(`Field "${key}" must be at most ${maxLength} characters long`);
        }

        o[key] = obj[key as keyof typeof obj];
    })

    return o;
}
