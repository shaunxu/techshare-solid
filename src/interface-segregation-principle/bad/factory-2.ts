{
    interface FactoryWorker {

        work(): void;

        eat(): void;

        charge(): void
    }

    class NormalFactoryWorker implements FactoryWorker {

        public work(): void {
            console.log("i'm working");
        }

        public eat(): void {
            console.log("i'm eating");
        }

        public charge(): void {
            throw new Error("worker doesn't need to charge");
        }
    }

    class ExperiencedFactoryWorker implements FactoryWorker {

        public work(): void {
            console.log("i'm working very well");
        }

        public eat(): void {
            console.log("i'm eating a lot");
        }

        public charge(): void {
            throw new Error("worker doesn't need to charge");
        }
    }

    class Factory {

        public work(worker: FactoryWorker): void {
            worker.work();
        }

        public lunch(worker: FactoryWorker): void {
            worker.eat();
        }

        public charge(worker: FactoryWorker): void {
            worker.charge();
        }

    }

    class Robot implements FactoryWorker {

        public work(): void {
            console.log("^!(@*&$!@$%!@*&#^@!$%");
        }

        public eat(): void {
            throw new Error("robot doesn't need to eat");
        }

        public charge(): void {
            console.log("99% -> 100%");
        }

    }
}