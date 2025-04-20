import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log('欢迎使用时间计算器')

function askQuestion() {
    rl.question("请输入分钟：",function(answer){
        const minutes = parseInt(answer);
        const s = minutes * 60;
        if (s < 100) {
            console.log(`${s}秒`)
        } else {
            let firstPart = '';
            let processedStr = `${s}`;
    
            if (`${s}`.length % 2 !== 0) {
            firstPart = `${s}`[0];
            processedStr = `${s}`.slice(1);
            }
    
            const result = [];
            for (let i = 0; i < processedStr.length; i += 2) {
            result.push(processedStr.slice(i, i + 2));
            }
    
            if (firstPart) {
                result.unshift(firstPart);
            }
    
            console.log(`${result[0]}分${result[1]}秒`)
        }
        askQuestion()
    });
}

askQuestion()

rl.on("close", function(){
    process.exit(0);
});