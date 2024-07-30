export const STYLES = {
    /** 应用粗体样式 */
    bold: '\x1b[1m',
    /** 应用细体（轻体）样式 */
    faint: '\x1b[2m',
    /** 应用斜体样式（并非所有终端都支持） */
    italic: '\x1b[3m',
    /** 应用下划线样式 */
    underline: '\x1b[4m',
    /** 应用闪烁样式（大多数现代终端不支持） */
    blink: '\x1b[5m',
    /** 应用反转颜色样式（前景色和背景色交换） */
    reverse: '\x1b[7m',
    /** 应用隐藏样式（并非所有终端都支持） */
    hidden: '\x1b[8m',
}

/** 重置所有样式和颜色 */
export const RESET = '\x1b[0m'

export const COLORS = {
    none: '',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    brightBlack: '\x1b[90m',
    brightRed: '\x1b[91m',
    brightGreen: '\x1b[92m',
    brightYellow: '\x1b[93m',
    brightBlue: '\x1b[94m',
    brightMagenta: '\x1b[95m',
    brightCyan: '\x1b[96m',
    brightWhite: '\x1b[97m',
}

export const BG_COLORS = {
    none: '',
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
    brightBlack: '\x1b[100m',
    brightRed: '\x1b[101m',
    brightGreen: '\x1b[102m',
    brightYellow: '\x1b[103m',
    brightBlue: '\x1b[104m',
    brightMagenta: '\x1b[105m',
    brightCyan: '\x1b[106m',
    brightWhite: '\x1b[107m',
}

export const ADDITIONAL_COLORS = {
    notBold: '\x1b[21m',
    noUnderline: '\x1b[24m',
    noReverse: '\x1b[27m',
    noHidden: '\x1b[28m'
}

type TColors = keyof typeof COLORS
type TBackgroundColors = keyof typeof BG_COLORS

type TOptions = {
    bold?: boolean;
    faint?: boolean;
    italic?: boolean;
    underline?: boolean;
    blink?: boolean;
    reverse?: boolean;
    hidden?: boolean;
    background?: TBackgroundColors;
}

export const colors = {
    use: (msg: string, colorName: TColors = 'white', options: TOptions = {}) => {
        const color = COLORS[colorName]
        let bgColor = ''
        let style = '';
        if (options.bold) style += STYLES.bold;
        if (options.faint) style += STYLES.faint;
        if (options.italic) style += STYLES.italic;
        if (options.underline) style += STYLES.underline;
        if (options.blink) style += STYLES.blink;
        if (options.reverse) style += STYLES.reverse;
        if (options.hidden) style += STYLES.hidden;
        if (options.background) {
            bgColor = BG_COLORS[options.background]
        }
        return `${color}${bgColor}${style}${msg}${RESET}`;
    },
    black: (msg: string, options: TOptions = {}) => colors.use(msg, 'black', options),
    red: (msg: string, options: TOptions = {}) => colors.use(msg, 'red', options),
    green: (msg: string, options: TOptions = {}) => colors.use(msg, 'green', options),
    yellow: (msg: string, options: TOptions = {}) => colors.use(msg, 'yellow', options),
    blue: (msg: string, options: TOptions = {}) => colors.use(msg, 'blue', options),
    /** 洋红 */
    magenta: (msg: string, options: TOptions = {}) => colors.use(msg, 'magenta', options),
    /** 蓝绿；青 */
    cyan: (msg: string, options: TOptions = {}) => colors.use(msg, 'cyan', options),
    white: (msg: string, options: TOptions = {}) => colors.use(msg, 'white', options),
    /** 灰色 */
    brightBlack: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightBlack', options),
    brightRed: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightRed', options),
    brightGreen: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightGreen', options),
    brightYellow: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightYellow', options),
    brightBlue: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightBlue', options),
    /** 亮洋红 */
    brightMagenta: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightMagenta', options),
    /** 亮青 */
    brightCyan: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightCyan', options),
    brightWhite: (msg: string, options: TOptions = {}) => colors.use(msg, 'brightWhite', options),
}


type TColorParams = {
    color?: TColors;
    background?: TBackgroundColors;
    bold?: boolean;
}
export class ColorText {
    color: TColors = 'none'
    background: TBackgroundColors = 'none'
    bold: boolean = false;

    constructor(params: TColorParams = {}) {
        this.color = params.color || 'none'
        this.background = params.background || 'none'
        this.bold = !!params.bold
    }

    render(msg: string) {
        return colors.use(msg, this.color, {
            background: this.background,
            bold: this.bold,
        })
    }
    log(msg: string) {
        // console.log(this)
        console.log(this.render(msg))
    }
}

// console.log(colors.blue(' abc ', { background: 'brightBlue' }))

// const txt = new ColorText({ color: 'red', background: 'brightBlack' })
// txt.log(' xyz ')
// console.log(txt.render(' abc '))