{

    interface IB {
        func(): void
    }

    class B implements IB {
        public func(): void {
            // ... ...
        }
    }

    class A {

        public method(b: IB): void {
            b.func();
        }

    }

}
