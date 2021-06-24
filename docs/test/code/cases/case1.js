// 1、O(n)，单层循环的时间复杂度
const alg1 = (n) => {
    for(let i=1; i<=n; ++i) {
        let j = i;
        j++;
    }
}

// 2、O(n^2)，循环嵌套的时间复杂度O(a*b*c)
const alg2 = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            console.log(j,"Hello World\n");
        }
    }
}

// 3、O(最大的时间复杂度)，这里是O(n^2)，条件句中的时间复杂度
const alg3 = (n) => {
    if (n >= 0) {
        // 第一条路径时间复杂度为 O(n^2)
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                console.log("输入数据大于等于零\n");
            }
        }
    } else {
        // 第二条路径时间复杂度为 O(n)
        for(let j = 0; j < n; j++) {
            console.log("输入数据小于零\n");
        }
    }
}

// 4、同理，顺序执行，无嵌套关系的局部时间复杂度，依最高复杂度为最终算法的复杂度
const alg4 = (n) => {
    // 第一部分时间复杂度为 O(n^2)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log("Hello, World!\n");
        }
    }
    // 第二部分时间复杂度为 O(n)
    for(let j = 0; j < n; j++) {
        console.log("Hello, World!\n");
    }
}

// 4、有幂指数参与其中
const alg5 = (n) =>{
    for (let i = 2; i < n; i++) {
        i *= 2; // 此处 i = i * 2，若执行 x 次，则 2^x < n，当值趋近与n时，2^x=n，可以通过指数对数转换推导得到：x=log(2)(n)，时间复杂度就是log(2)(n)
        console.log(`${i}\n`);
    }
}