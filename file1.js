const fs = require('fs')

const str = []
for(let i=0;i<20_000;i++){
    str.push(`arr.push(${i})`)
}

fs.appendFileSync(__dirname+'/file2.ts',str.join("\n"),'utf-8')