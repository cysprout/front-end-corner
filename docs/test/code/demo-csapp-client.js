const net = require('net');
const {error, log} = require('console')
// const {appendMyData} = require('./demo-fs')

const client = net.connect(3000, 'localhost', ()=>{
    log('[Info]: c/s client connect to server at localhost:3000')
});

// 接收服务端信息
client.on('data', (data)=>{
   // 打印到终端控制台
   process.stdout.write(data);
//    appendMyData(data)
});
client.on('end', ()=>{
    process.stdout.write('[Info]: disconnected from server!')
});
client.on('error', (err)=>{
    if(err) error(`[Error]: ${err}`);
});
client.on('close', ()=>{
    log('[Info]: server closed');
    process.exit();
});

// 打开标准输入
process.stdin.resume();
process.stdin.on('data', (data)=>{
    const info = `[client ${client.remoteAddress} ${new Date().toLocaleString()}]\r\n${data}`
    client.write(info);
    // appendMyData(info)

})
process.on('exit',(err)=>{
    log("[Info]: client exit");
    if(err) error(`[Error]: ${err}`);
})
process.on('SIGINT', ()=>{
    process.exit();
})