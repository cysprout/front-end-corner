const net = require('net');
const {error, log} = require('console')

const server = net.createServer();
const socketArray = []

// 服务端的代码
server.listen({
    host: 'localhost',
    port: 3000,
}, ()=>{
    log('[Info]: c/s server is listening at port 3000');
})

server.on('connection', (socket)=>{
    log(`[Info]: ${socket.remoteAddress} client connected to server..`)
    socket.write(`[server ${new Date().toLocaleString()}]\r\n`);
    socket.write('Hello, this is Server!\r\n')

    if(socketArray.indexOf(socket)>-1){
        return false;
    }

    socketArray.push(socket);
    // 接收客户端的消息
    socket.on('data', (data)=>{
        process.stdout.write(data)
    })
    socket.on('error', (err)=>{
        if(err) error(`[Error]: ${err}`);

        for(let i=0; i<socketArray.length;i++) {
            if(socketArray[i] == socket) {
                socketArray.splice(i,1)
                socket.end();
                break;
            }
        }
    })


})
server.on('error', (err)=>{
    if(err) throw err;
})

//打开标准输入
process.stdin.resume();
process.stdin.on('data', function(data) {
    for(let i=0; i<socketArray.length;i++) {
        const sockect = socketArray[i]
        if(sockect) {
            sockect.write(`[server ${new Date().toLocaleString()}]\r\n`);
            sockect.write(data);
        }
    }
})
