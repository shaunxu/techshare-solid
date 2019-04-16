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

        private _b!: IB;
        public set b(value: IB) {
            this._b = value;
        }

        public method(): void {
            this._b.func();
        }

    }

}
