export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    returnedAt?: any;
    device?: object;
    roles?: Roles;
}

export interface Roles {
    visitor?: boolean;
    subscriber?: boolean;
}