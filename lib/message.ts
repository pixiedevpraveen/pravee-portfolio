export type MessageType = {
    desc: string,
    tag: "info" | "success" | "error"
}

export const Message = {
    create(message: string | Error | unknown, tag: MessageType['tag'] = "info"): { msg: MessageType } {
        if (message && typeof message === "string")
            return { msg: { desc: message, tag } }

        return {
            msg: {
                desc: (message instanceof Error && message.message)
                    ? message.message
                    : "Unknown error occurred!",
                tag: "error"
            }
        }
    },
    info(message: string): MessageType {
        return { desc: message, tag: "info" }
    },
    success(message: string): MessageType {
        return { desc: message, tag: "success" }
    },
    error(message: string): MessageType {
        return { desc: message, tag: "error" }
    }
}

export const MESSAGE_TAG_CLASSES = {
    info: {
        color: ""
    },
    success: {
        color: "text-green-500"
    },
    error: {
        color: "text-red-500"
    },
}
