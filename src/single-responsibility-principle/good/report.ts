export class Report {

    private _content: string[];

    public get content(): string[] {
        return this._content;
    }

    constructor() {
        this._content = [];
    }

}