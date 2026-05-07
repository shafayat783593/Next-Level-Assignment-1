How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?



Generics in TypeScript act like a placeholder or variable for types. They work similarly to function parameters, but instead of passing values, we pass types. This allows us to write flexible and reusable code while maintaining strict type safety.

 Why Use Generics?
1. Flexibility with Type Safety

When writing functions, we usually either:

Use a specific type like number or string, or
Use any, which removes type safety

Using a fixed type makes the function limited, and using any makes it unsafe. Generics solve this problem by allowing flexibility without losing type safety.

 How Generics Work

We define a generic type using <T> (or any name) next to the function name. When the function is called, TypeScript automatically determines what type T should be.
  Example

Without Generics (limited to one type):

function getInfo(item: number): number {
  return item;
}

With Generics (reusable for any type):

function getInfo<T>(item: T): T {
  return item;
}

const name = getInfo<string>("Shafayat");
const age = getInfo<number>(26);
Why Generics Are Powerful
Reduce code duplication
No need to write separate functions for strings, numbers, etc.
Preserve type information
If you pass a string, TypeScript knows the return value is also a string.
Enable safer operations
You can safely use methods like .length when the type is known, which is not possible with any.