const {mkdir, writeFile, readFile, open, close} = require('fs')
const {log, error} = require('console')
const {resolve} = require('path');

const DIR = 'test';
const DIR2 = 'test/a/b'
const FILE_PATH = resolve(__dirname, DIR, '1.txt')
const WRITE_INFO = "这是测试信息3";

// open 和 close 成对出现
function closeFd(fd) {
    close(fd, (err) => {
      if (err) throw err;
    });
  }

// 新建目录
// 版本：v7.0.0+，callback 必选
mkdir(DIR, (err)=>{
    if(err) {
        error(err);
        return;
    }
    log(`Directory ${DIR} created`)
})

// 版本：v10.12.0+，新增：第二个参数现在可以是具有 recursive 和 mode 属性的 options 对象
mkdir(DIR2, {recursive: true}, (err)=>{
    if(err) {
        error(err);
        return;
    }
    log(`Directory ${DIR2} created`)
})

// Input
function writeMyData() {
    writeFile(FILE_PATH, WRITE_INFO, (err)=>{
        if (err) {
            error(err);
            return;
          }
    
        log(`File ${FILE_PATH} saved`) 
    })
}

// (1)覆盖写入
writeMyData();



// (2)非覆盖写入
// 先open，存在则close；否则，就写入
// open(FILE_PATH, 'wx', (err, fd)=>{
//     if(err) {
//         if(err.code === 'EEXIST') {
//             log(`File ${FILE_PATH} already exists.`)
//             return;
//         }
//         throw err;
//     }

//     try{
//         writeMyData();
        
//     } finally {
//         closeFd(fd);
//     }
// })

// Output
readFile(FILE_PATH, 'utf-8', (err, fd)=>{
    if (err) {
        error(err);
        return;
      }
      log(fd);
})
