import assert from "node:assert/strict";
import test from "node:test";

import { getActiveUsers, type User } from "../src/users/userService";

test("returns all users when every user is active", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: true },
    ];

    const result = getActiveUsers(users);

    assert.deepStrictEqual(result, users);
});

test("returns no users when every user is inactive", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: false },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
    ];

    const result = getActiveUsers(users);

    assert.deepStrictEqual(result, []);
});

test("returns only active users from a mixed collection", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
        { id: 3, name: "Carol", email: "carol@example.com", active: true },
    ];

    const result = getActiveUsers(users);

    assert.deepStrictEqual(result, [users[0], users[2]]);
});

test("returns an empty array for an empty collection", () => {
    const users: User[] = [];

    const result = getActiveUsers(users);

    assert.deepStrictEqual(result, []);
});

test("does not mutate the original collection", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
    ];
    const originalSnapshot = structuredClone(users);

    getActiveUsers(users);

    assert.deepStrictEqual(users, originalSnapshot);
});