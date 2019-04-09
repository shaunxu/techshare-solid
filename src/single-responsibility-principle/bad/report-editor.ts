export class ReportEditor {

    private _content: string[];

    constructor() {
        this._content = [];
    }

    public append(content: string): void {
        this._content.push(content);
    }

    public remove(index: number): void {
        this._content.splice(index, 1);
    }

    public edit(index: number, content: string): void {
        this._content[index] = content;
    }

    public display() {
        console.log(JSON.stringify(this._content, null, 2));
    }

}