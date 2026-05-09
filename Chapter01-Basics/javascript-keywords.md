# JavaScript Keywords

## All Reserved Keywords

### Control Flow
| Keyword | Example |
|---------|---------|
| `if` | `if (x > 0) { return x; }` |
| `else` | `if (x > 0) { return x; } else { return 0; }` |
| `switch` | `switch(day) { case 1: break; }` |
| `case` | See `switch` |
| `break` | `for (let i = 0; i < 5; i++) { if (i === 3) break; }` |
| `continue` | `for (let i = 0; i < 5; i++) { if (i === 2) continue; }` |
| `return` | `function add(a, b) { return a + b; }` |
| `throw` | `throw new Error("Invalid");` |
| `try` | `try { risky(); } catch (e) { }` |
| `catch` | See `try` |
| `finally` | `try { } finally { cleanup(); }` |
| `default` | `switch(x) { default: break; }` |
| `do` | `do { i++; } while (i < 5);` |
| `while` | `while (i < 5) { i++; }` |
| `for` | `for (let i = 0; i < 5; i++) { }` |
| `in` | `for (let key in obj) { }` |
| `of` | `for (let val of arr) { }` |
| `with` | `with (Math) { return PI; }` |

### Declarations
| Keyword | Example |
|---------|---------|
| `var` | `var count = 10;` |
| `let` | `let name = "John";` |
| `const` | `const PI = 3.14;` |
| `function` | `function greet() { return "Hi"; }` |
| `class` | `class Person { constructor(name) { this.name = name; } }` |
| `extends` | `class Student extends Person { }` |
| `static` | `class MathUtil { static add(a, b) { return a + b; } }` |
| `new` | `const obj = new Person("John");` |
| `this` | `this.name = name;` |
| `super` | `super(name);` |
| `import` | `import { add } from "./math.js";` |
| `export` | `export const add = (a, b) => a + b;` |
| `default` (export) | `export default function() { }` |

### Data Types & Literals
| Keyword | Example |
|---------|---------|
| `true` | `const active = true;` |
| `false` | `const deleted = false;` |
| `null` | `const empty = null;` |
| `undefined` | `let x; console.log(x === undefined);` |
| `NaN` | `const result = parseInt("abc"); // NaN` |
| `Infinity` | `const max = Infinity;` |

### Logical & Comparison
| Keyword | Example |
|---------|---------|
| `instanceof` | `obj instanceof Array` |
| `typeof` | `typeof "hello" // "string"` |

### Async
| Keyword | Example |
|---------|---------|
| `async` | `async function fetchData() { }` |
| `await` | `const data = await fetch(url);` |

### Other Reserved
`debugger`, `delete`, `void`, `yield`

---

## Strict Mode Reserved (Future)
`implements`, `interface`, `package`, `private`, `protected`, `public`

## Contextual Keywords (Not fully reserved)
`as`, `from`, `get`, `set`, `target`, `of`, `async`, `await`
