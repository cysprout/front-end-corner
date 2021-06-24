// 题意
// 有一个背包，背包容量是M。有n个物品，物品可以分割成任意大小。要求尽可能让装入背包中的物品总价值最大，但不能超过总容量。

// 贪心算法思路

// 计算出每个物品单位重量的价值
// 按单位价值从大到小将物品排序
// 根据背包当前所剩容量选取物品
// 如果背包的容量大于当前物品的重量，那么就将当前物品装进去。否则，那么就将当前物品舍去，然后跳出循环结束