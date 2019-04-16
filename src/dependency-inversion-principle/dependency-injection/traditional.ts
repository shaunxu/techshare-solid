{

    class B {
        public func(): void {
            // ... ...
        }
    }

    class A {

        public method(): void {
            const b = new B();
            b.func();
        }

    }

}
