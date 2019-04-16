import { Car } from "./car";

export class Benz implements Car {

    private _name: string;
    public get name(): string {
        return this._name;
    }

    constructor() {
        this._name = "Benz";
    }

}