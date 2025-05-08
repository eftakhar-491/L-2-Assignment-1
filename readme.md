# 1. What are some differences between interfaces and types in TypeScript?

When we use typescript, we need to declier data type and shape of data. and therefore we can use type aliases or interfaces

## Differentce beetween Interfaces and Type aliases

- Both are support all custom types for object and other data types
- interfaces can redeclar but type does not support it
- we can extend interfaces but not type
- we can use type for all types of data but interface can support only object type of data

## Final Thoughs

we can Think, interfaces for objects and extendable APIs, while type shines when you need flexibility with union types and advanced type compositions.

# 2. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

enums can define a set of named constants. it can make your code more readable and meaningful by replacing hard-coded values. Enums are realy helpful when you need a fixed set of options like roles, directions, states, or categories.

## Numeric Enum Example

numeric enums can auto-increment. If Up is 1, then Down becomes 2, left become 3 and go on.

```
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log(move); // Output is 3
```

## String Enum Example

In string enums, each member must be initialized with a string literal. They're great when you want to log meaningful values or POST values on APIs.

```
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let currentRole: Role = Role.Admin;
console.log(currentRole); // Output: "ADMIN"
```

## Final Thoughs

- Enums are a powerful feature in TypeScript that add clarity when working with a fixed set of related values. Whether you're managing user roles, directions, or status codes, enums help make your intent clear and your logic more robust.

- If you’re building large-scale applications or working with APIs, enums can significantly improve the readability and stability of your code. For simpler use-cases, consider using union types to keep things lightweight.
