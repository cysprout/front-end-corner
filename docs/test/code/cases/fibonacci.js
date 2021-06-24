// 两种版本
// 版本一：迭代
function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) { // n >= 2
      fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
      fibNMinus2 = fibNMinus1;
      fibNMinus1 = fibN;
}
    return fibN;
}
// 版本二：递归
function fibonacci(n){
    if (n < 1) return 0; // {1}
    if (n <= 2) return 1; // {2}
    return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}

// 版本三：优化迭代，空间换时间
// 声明了一个 memo 数组来缓存所有的计算结果(行{1})。如果结果已 经被计算了，
// 我们就返回它(行{2})，否则计算该结果并将它加入缓存(行{3})。
function fibonacciMemoization(n) {
    const memo = [0, 1]; // {1}
    const fibonacci = (n) => {
      if (memo[n] != null) return memo[n]; // {2}
      return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // {3}
    };
    return fibonacci;
}