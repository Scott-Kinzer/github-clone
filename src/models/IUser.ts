export interface IUser {
    email: string | null,
    accessToken: Promise<string> | null | string,
    uid: string | null
}