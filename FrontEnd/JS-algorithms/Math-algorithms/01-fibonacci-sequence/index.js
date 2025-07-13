function fib(n) {
    // by adding two number we decrease loop numbers
    let fib = [1, 1];

    for (i = 2; i <= n; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib[n];
}
console.log(fib(6));
