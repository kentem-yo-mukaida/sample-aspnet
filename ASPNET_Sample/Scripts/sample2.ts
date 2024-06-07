/// <reference path="sample.ts" />

class Index {
    private sample: SampleClass;

    constructor() {
        this.sample = new SampleClass();
    }

    public show() {
        this.sample.showMessage();
    }
}
