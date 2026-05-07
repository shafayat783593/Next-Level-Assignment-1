# How Generics Allow You to Build Reusable, Strictly Typed Components

How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

---

Generics in TypeScript act like a **placeholder or variable for types**. They work similarly to function parameters, but instead of passing values, we pass types. This allows us to write flexible and reusable code while maintaining strict type safety.

---

## Why Use Generics?

When writing functions, we usually either:

- Use a **specific type** like `number` or `string` — which makes the function limited
- Use **`any`** — which removes type safety entirely

Generics solve this problem by allowing **flexibility without losing type safety**.

---

## How Generics Work

We define a generic type using `<T>` (or any name) next to the function name. When the function is called, TypeScript automatically determines what type `T` should be.

###  Without Generics (limited to one type)

```typescript
function getInfo(item: number): number {
  return item;
}
```

###  With Generics (reusable for any type)

```typescript
function getInfo<T>(item: T): T {
  return item;
}

const name = getInfo<string>("Shafayat"); // T = string
const age  = getInfo<number>(26);         // T = number
```

---

## Why Generics Are Powerful

| Benefit | Explanation |
|---|---|
| **Reduce code duplication** | No need to write separate functions for `string`, `number`, etc. |
| **Preserve type information** | If you pass a `string`, TypeScript knows the return value is also a `string` |
| **Enable safer operations** | You can safely use methods like `.length` when the type is known — not possible with `any` |

---

> **In short:** Generics give you the flexibility of `any` with the safety of a strict type. They are one of the most powerful features in TypeScript for writing scalable, reusable code.