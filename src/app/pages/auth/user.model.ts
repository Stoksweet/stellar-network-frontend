export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    returnedAt?: any;
    device?: object;
    roles?: Roles;
    accounts?: Account;
}

export interface Account {
    dagAccounts?: [];
    ethAccounts?: [];
}

export interface Roles {
    visitor?: boolean;
    subscriber?: boolean;
}