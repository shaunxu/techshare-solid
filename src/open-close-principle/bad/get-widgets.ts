import { fetchTeamWidget, TeamWidget } from "./widget-team";
import { fetchUserWidget, UserWidget } from "./widget-user";
import { fetchProjectWidget, ProjectWidget } from "./widget-project";

export const getWidgetsContent = function (widgets: any[]) {
    const output: any[] = [];
    for (const widget of widgets) {
        switch (widget.type) {
            case "team":
                output.push(fetchTeamWidget(widget as TeamWidget));
                break;
            case "project":
                output.push(fetchProjectWidget(widget as ProjectWidget));
                break;
            case "user":
                output.push(fetchUserWidget(widget as UserWidget));
                break;
            default:
                break;
        }
    }
    return output;
}