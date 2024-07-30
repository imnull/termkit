import { WaitingDots, WaitingRolling, TermFlasher, Progress } from "./src";

const waitingRoll = new WaitingRolling()
const waitingDot = new WaitingDots()
const progress = new Progress()
const term = new TermFlasher()
// term.cursorInNewLine = true

const max = 100
let index = 0;
const interval = setInterval(() => {
    term.log(`${progress.render(index / max)} ${waitingRoll} Waiting ${waitingDot}`);
    index += 1
    if (index > max) {
        clearInterval(interval); // 完成后停止更新
        term.reset()
    }
}, 100);
