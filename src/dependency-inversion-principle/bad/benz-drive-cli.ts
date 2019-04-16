{
    class Benz {

        private _name: string;
        public get name(): string {
            return this._name;
        }

        constructor() {
            this._name = "Benz";
        }

    }

    class Driver {

        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        public drive(car: Benz): void {
            console.log(`${this._name} is driving car ${car.name}`);
        }

    }

    class App {

        public static main(driver: Driver, benz: Benz) {
            driver.drive(benz);
        }

    }
}