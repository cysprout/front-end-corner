const {appendFile, open, close}  = require('fs')
const {resolve} = require('path')
const {log} = require('console')
const FILE_INFO = "这是测试数据 这是测试数据 |"
const FILE_PATH = resolve(__dirname,"big.txt")

function closeFd(fd) {
    close(fd, (err) => {
      if (err) throw err;
    });
  }

open(FILE_PATH, 'w', (err, fd)=> {
    try{
        let temp = "";
        for (let index = 0; index < 10000000; index++) {
            // 异步将数据追加到文件，遍历10000000次
            temp += FILE_INFO;
        }

        appendFile(FILE_PATH, temp, (err, fd)=> {
            if(err) {
                throw err;
            }    
        })

        closeFd(fd);
        if(err) throw err;
    } catch(err){
        closeFd(fd)
        throw err;
    
    }
});