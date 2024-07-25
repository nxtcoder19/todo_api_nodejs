import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz-', 40)

export const uuid = (size) => {
    return nanoid(size)
}