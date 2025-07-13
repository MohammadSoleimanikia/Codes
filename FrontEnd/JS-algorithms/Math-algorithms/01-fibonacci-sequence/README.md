# Fibonacci Sequence

its starts with 1, 1 and after that every element is the sum of its preceding elements

[1, 1, 2, 3, 5, 8, 13, 21, ...]

## Interview Question :

Return the nth element of the Fibonacci sequence ex: fib(4) => 5

### algorithm should do two thing ?

1. Calculate the sequence up to the element we're looking for
2. Return the element

### Solution:

```js
function fib(n) {
    let fib = [1, 1];
    for (i = 2; i <= n; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib[n];
}
fib(4); // equal to 5
```

## Calculate time complexity

```js
function fib(n) {
    // Step 1: Array initialization - O(1)
    let fib = [1, 1];

    // Step 2: Loop from 2 to n
    // The loop runs (n-1) times
    // Time complexity: O(n)
    for (i = 2; i <= n; i++) {
        // Step 3: Inside loop operations
        // - Array access for fib[i-2] is O(1)
        // - Array access for fib[i-1] is O(1)
        // - Addition operation is O(1)
        // - Array push operation is O(1)
        // Total per iteration: O(1)
        fib.push(fib[i - 2] + fib[i - 1]);
    }

    // Step 4: Return value - O(1)
    return fib[n];
}
fib(4);
```
Therefore, the total time complexity is:
- T(n) = O(1) + O(n) + O(1)
- **Simplified to: O(n)** Linear Time Complexity 


