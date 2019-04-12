import { Widget } from "./widget";

export const getWidgetsContent = function (widgets: Widget[]) {
    const output: any[] = [];
    for (const widget of widgets) {
        output.push(widget.fetchContent());
    }
    return output;
}