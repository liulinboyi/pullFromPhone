const {input, pour} = require('./utils');

function exec(shell, args, opt) {
    console.log(`${shell} ${
        args.join(" ")
    }`)
    pour(shell, args, opt);
}

void async function () {
    let path = await input();
    if (! path) 
        throw new Error("清输入目录！");
    
    console.log('请求的目录是: %s', path);
    exec('adb', ["pull", "-p", "-a", `/sdcard/Android/data/tv.danmaku.bili/download/${path}/`])
}()
