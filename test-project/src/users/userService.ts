export interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

export function getActiveUsers(users: User[]): User[] {
    return users.filter(user => user.active);
}

export function getInactiveUsers(users: User[]): User[] {
    return users.filter(user => !user.active);
}

export function countActiveUsers(users: User[]): number {
    return users.filter(user => user.active).length;
}