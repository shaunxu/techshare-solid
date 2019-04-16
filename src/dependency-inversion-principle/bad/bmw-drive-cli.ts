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

    class BMW {

        private _name: string;
        public get name(): string {
            return this._name;
        }

        constructor() {
            this._name = "BMW";
        }

    }

    class DriverBenz {

        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        public drive(car: Benz): void {
            console.log(`${this._name} is driving car ${car.name}`);
        }

    }

    class DriverBMW {

        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        public drive(car: BMW): void {
            console.log(`${this._name} is driving car ${car.name}`);
        }

    }

    class App {

        public static main(driver: DriverBenz | DriverBMW, car: Benz | BMW) {
            switch (car.name) {
                case "Benz":
                    (driver as DriverBenz).drive(car as Benz);
                    break;
                case "BMW":
                    (driver as DriverBMW).drive(car as BMW);
                    break;
                default:
                    throw new Error("Oops. Invalid driver and car type.");
            }
        }

    }
}