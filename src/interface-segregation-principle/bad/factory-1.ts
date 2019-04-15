{
    interface FactoryWorker {

        work(): void;

        eat(): void;
    }

    class NormalFactoryWorker implements FactoryWorker {

        public work(): void {
            console.log("i'm working");
        }

        public eat(): void {
            console.log("i'm eating");
        }
    }

    class ExperiencedFactoryWorker implements FactoryWorker {

        public work(): void {
            console.log("i'm working very well");
        }

        public eat(): void {
            console.log("i'm eating a lot");
        }
    }

    class Factory {

        public work(worker: FactoryWorker): void {
            worker.work();
        }

        public lunch(worker: FactoryWorker): void {
            worker.eat();
        }

    }

}