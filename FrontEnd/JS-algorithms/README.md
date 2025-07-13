# Algorithms in JavaScript

Algorithms are fundamental to programming and problem-solving. This document introduces algorithms, their importance, and how to evaluate their efficiency in JavaScript.

---

## What is an Algorithm?

-   An **algorithm** is a sequence of well-defined steps or instructions to solve a specific problem.
-   Given the same input, an algorithm should always produce the same output.
-   Algorithms should be:
    - Finite (terminate after a certain number of steps)
    - Precise (each step must be clearly defined)
    - Effective (each step must be doable)

## What is the Best Possible Solution?

-   The best solution is one that solves the problem correctly with optimal performance (speed and resource usage).
-   In practice, we often seek algorithms with the lowest possible time and space complexity.
-   Trade-offs between time and space complexity should be considered based on requirements.

## How to Measure Time Complexity

-   Time complexity describes how the runtime of an algorithm increases as the input size grows.
-   Instead of measuring actual execution time (which can vary due to hardware and system load), we use **Big O notation** to express time complexity in terms of input size.
-   Time complexity helps predict algorithm performance at scale.

### Example: Measuring Execution Time in JavaScript

You can use the `performance.now()` method to measure how long a function takes to execute:

```js
// Note: This is for demonstration purposes only
// Real performance testing requires multiple runs and statistical analysis
let start = performance.now();
// Call your function here
let end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);
```

> **Note:** Measuring execution time is not always reliable for comparing algorithms, as results can vary depending on system conditions. Use Big O analysis for a more consistent evaluation.

### Linear Complexity

For a function where the output grows proportionally with the input size, the time complexity is **O(n)** (linear). For example, summing numbers to n:

```js
// This implementation has O(n) time complexity
// It uses a nested loop but the outer loop is unnecessary
function sum(n) {
    for (let i = 0; i <= n; i++) {
        let sum = 0;
        for (let i = 0; i <=n; i++) {
            sum += i;
        }
        return sum;
    }
}
```

### Constant time

The number of inputs has no influence on the time the algorithm takes:

```js
// This implementation has O(1) time complexity
// Uses the mathematical formula for sum of arithmetic sequence
function sum(n) {
    return (n / 2) * (1 + n);
}
```

## Big O Notation:

Big O notation helps express time complexity of algorithms:

1. O(1) - Constant time
2. O(log n) - Logarithmic time
3. O(n) - Linear time
4. O(n^2) - Quadratic time
5. O(n^3) - Cubic time
6. O(2^n) - Exponential time

## Deriving Big O (Asymptotic Analysis)

Example of analyzing time complexity:

```js
// Let's analyze this function step by step
function sum(n) {
    // Cost: O(1)
    let result = 0;
    // Cost: O(1)
    for (let i = 0; i <= n; i++) {
        // Cost: O(n) - executes n times
        sum += i;
    }
    // Cost: O(1)
    return sum;
}
```

## Comparing Algorithms using Big O 

From fastest to slowest:
1. O(1) - Constant time
2. O(log n) - Logarithmic time
3. O(n) - Linear time
4. O(n log n) - Linearithmic time
5. O(n^2) - Quadratic time
6. O(2^n) - Exponential time
7. O(n!) - Factorial time

> **Best Practice:** Always aim for the lowest possible time complexity while maintaining code readability and maintainability.
