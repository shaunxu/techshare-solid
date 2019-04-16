import { Car } from "./car";

export class BMW implements Car {

    private _name: string;
    public get name(): string {
        return this._name;
    }

    constructor() {
        this._name = "BMW";
    }

}