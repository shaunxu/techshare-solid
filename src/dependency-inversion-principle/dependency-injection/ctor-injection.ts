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

        private _b: IB;

        constructor(b: IB) {
            this._b = b;
        }

        public method(): void {
            this._b.func();
        }

    }

}
