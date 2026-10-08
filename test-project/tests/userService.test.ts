import assert from "node:assert/strict";
import test from "node:test";

import { countActiveUsers, getActiveUsers, getInactiveUsers, type User } from "../src/users/userService";

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

test("returns all users when every user is inactive", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: false },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
    ];

    const result = getInactiveUsers(users);

    assert.deepStrictEqual(result, users);
});

test("returns no users when every user is active", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: true },
    ];

    const result = getInactiveUsers(users);

    assert.deepStrictEqual(result, []);
});

test("returns only inactive users from a mixed collection", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
        { id: 3, name: "Carol", email: "carol@example.com", active: false },
    ];

    const result = getInactiveUsers(users);

    assert.deepStrictEqual(result, [users[1], users[2]]);
});

test("returns an empty array for inactive-user retrieval from an empty collection", () => {
    const users: User[] = [];

    const result = getInactiveUsers(users);

    assert.deepStrictEqual(result, []);
});

test("does not mutate the original collection when retrieving inactive users", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
    ];
    const originalSnapshot = structuredClone(users);

    getInactiveUsers(users);

    assert.deepStrictEqual(users, originalSnapshot);
});

test("returns the number of active users when several are active", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
        { id: 3, name: "Carol", email: "carol@example.com", active: true },
    ];

    const result = countActiveUsers(users);

    assert.equal(result, 2);
});

test("returns zero when no users are active", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: false },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
    ];

    const result = countActiveUsers(users);

    assert.equal(result, 0);
});

test("returns the number of active users from a mixed collection", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
        { id: 3, name: "Carol", email: "carol@example.com", active: true },
        { id: 4, name: "Dave", email: "dave@example.com", active: false },
    ];

    const result = countActiveUsers(users);

    assert.equal(result, 2);
});

test("returns zero for an empty collection", () => {
    const users: User[] = [];

    const result = countActiveUsers(users);

    assert.equal(result, 0);
});

test("does not mutate the original collection when counting active users", () => {
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
        { id: 3, name: "Carol", email: "carol@example.com", active: true },
    ];
    const originalSnapshot = structuredClone(users);

    countActiveUsers(users);

    assert.deepStrictEqual(users, originalSnapshot);
});