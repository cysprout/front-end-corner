// 阶乘，比如5! = 5x4x3x2x1
// 为什么选用递归，因为我们看到计算 (num-1)! 是我们计算原始问题 num! 的一个子问题
function factorial(num) {
    if(num === 0||num === 1) return 1; //必须设计递归出口，或者说基线条件
    return factorial(num-1) * num
}

// test
factorial(5)