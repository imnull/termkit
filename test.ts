import { DotsFrames, RollingFrames, TermFlasher, Progress, colors, ColorText } from "./src";

// 输出黄色文字
console.log(colors.yellow(' abc '))
// 输出带背景色文字
console.log(colors.blue(' abc ', { background: 'brightBlue' }))

const txt = new ColorText({
    color: 'red',
    background: 'brightBlack',
    bold: true,
})

// 内部调用`console.log`输出
txt.log(' xyz ')
// 作为模版渲染文字
console.log(txt.render(' abc '))

const waitingRoll = new RollingFrames()
const waitingDot = new DotsFrames()
const progress = new Progress()
const term = new TermFlasher()
// term.cursorInNewLine = true

console.log(progress.render(0.75))

const max = 50
let index = 0;
const interval = setInterval(() => {
    term.log(`${colors.brightBlack(progress.render(index / max), { bold: true })} ${waitingRoll} ${colors.green(`Waiting`)} ${colors.brightYellow(waitingDot.render())}`);
    index += 1
    if (index > max) {
        clearInterval(interval); // 完成后停止更新
        term.reset()
        console.log(`${colors.brightBlack(progress.render(1), { bold: true })} ${colors.green(`Done`)}`)
    }
}, 100);
