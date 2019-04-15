{
    interface Workable {

        work(): void;

    }

    interface Feedable {

        eat(): void;

    }

    interface Chargeable {

        charge(): void

    }

    class NormalFactoryWorker implements Workable, Feedable {

        public work(): void {
            console.log("i'm working");
        }

        public eat(): void {
            console.log("i'm eating");
        }

    }

    class ExperiencedFactoryWorker implements Workable, Feedable {

        public work(): void {
            console.log("i'm working very well");
        }

        public eat(): void {
            console.log("i'm eating a lot");
        }

    }

    class Robot implements Workable, Chargeable {

        public work(): void {
            console.log("^!(@*&$!@$%!@*&#^@!$%");
        }

        public charge(): void {
            console.log("99% -> 100%");
        }

    }

    class Factory {

        public work(worker: Workable): void {
            worker.work();
        }

        public lunch(worker: Feedable): void {
            worker.eat();
        }

        public charge(worker: Chargeable): void {
            worker.charge();
        }

    }

}