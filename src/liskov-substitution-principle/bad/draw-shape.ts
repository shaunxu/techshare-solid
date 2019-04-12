class Retangle {

    private _width: number;

    private _height: number;

    constructor() {
        this._width = 0;
        this._height = 0;
    }

    public setWidth(value: number): void {
        this._width = value;
    }

    public setHeight(value: number): void {
        this._height = value;
    }

    public getWidth(): number {
        return this._width;
    }

    public getHeight(): number {
        return this._height;
    }

}

class Square extends Retangle {

    public setWidth(value: number): void {
        super.setWidth(value);
        super.setHeight(value);
    }

    public setHeight(value: number): void {
        super.setWidth(value);
        super.setHeight(value);
    }

}

const setRetangleWidth = function (r: Retangle, value: number): void {
    r.setWidth(value);
};

const square = new Square();
square.setWidth(100);

setRetangleWidth(square, 200);

console.log(JSON.stringify(square, null, 2));