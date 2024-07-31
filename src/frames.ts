export abstract class TextFrames {
    protected index: number = 0;
    protected step: number = 1
    private readonly frames: string[]
    constructor(frames: string[]) {
        if(frames.length < 1) {
            throw `Frames length must be greater than 0`
        }
        this.frames = frames
    }
    count() {
        return this.frames.length
    }
    progress() {
        this.index = (this.index + this.step) % this.count()
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

export class RollingFrames extends TextFrames {
    constructor() {
        super(['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'])
    }
}

export class DotsFrames extends TextFrames {
    constructor() {
        super(['   ', '.  ', '.. ', '...', ' ..', '  .'])
    }
}