import { Report } from "./report";

export class ReportEditor {

    private _report: Report;

    constructor(report: Report) {
        this._report = report;
    }

    public append(content: string): void {
        this._report.content.push(content);
    }

    public remove(index: number): void {
        this._report.content.splice(index, 1);
    }

    public edit(index: number, content: string): void {
        this._report.content[index] = content;
    }

}