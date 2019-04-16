import { Driver } from "./driver";
import { Car } from "./car";

{
    class App {

        public static main(driver: Driver, car: Car) {
            driver.drive(car);
        }

    }
}