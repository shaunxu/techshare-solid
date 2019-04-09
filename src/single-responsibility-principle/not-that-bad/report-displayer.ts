import { Report } from "./report";

export class ReportEditor {

    private _report: Report;

    constructor(report: Report) {
        this._report = report;
    }

    public display() {
        console.log(JSON.stringify(this._report.content, null, 2));
    }


}