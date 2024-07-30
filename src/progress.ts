export class Progress {
    private readonly chars: [string, string]
    readonly size: number
    constructor(chars: [string, string] = ['#', '⠂'], size: number = 18) {
        this.chars = chars
        this.size = size
    }

    render(percent: number) {
        const per = Math.max(0, Math.min(1, percent))
        const left = (per * this.size) >> 0, right = this.size - left
        const [L, R] = this.chars
        return `[${L.repeat(left)}${R.repeat(right)}]`
    }
}