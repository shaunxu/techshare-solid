export type UserWidget = {
    type: string;
    others: any;
};

export const fetchUserWidget = function (widget: UserWidget) {
    return "UserWidget";
};