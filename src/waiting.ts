export abstract class TextWaiting {
    protected index: number = 0;
    protected step: number = 1
    private readonly frames: string[]
    constructor(frames: string[]) {
        if(frames.length < 1) {
            throw `Frames length must be greater than 0`
        }
        this.frames = frames
    }
    progress() {
        this.index = (this.index + this.step) % this.frames.length
    }
    toString() {
        return this.render()
    }
    render() {
        const frame = this.frames[this.index]
        this.progress()
        return frame
    }
}

export class WaitingRolling extends TextWaiting {
    constructor() {
        super(['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'])
    }
}

export class WaitingDots extends TextWaiting {
    constructor() {
        super(['   ', '.  ', '.. ', '...'])
    }
}