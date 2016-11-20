function myOutput(item) {
    console.log(item);
    window.outputBuffer += item;
}

function myOutputEqual(assert, func, ref) {
    window.outputBuffer = "";

    func();
    assert.equal(
        window.outputBuffer, ref,
        func.name + "() outputs '" + ref + "'"
    );
}

function myAEqual(assert, func, a, res) {
    assert.strictEqual(
        func(a), res,
        func.name + "(" + a + ") is " + res
    );
}

function myABEqual(assert, func, a, b, res) {
    assert.strictEqual(
        func(a, b), res,
        func.name + "(" + a + ", " + b + ") is " + res
    );
}

function myABEqualU(assert, func, a, b, res) {
    assert.deepEqual(
        func(a, b), res,
        func.name + "(" + a + ", " + b + ") is " + res
    );
}

function myABCEqual(assert, func, a, b, c, res) {
    assert.strictEqual(
        func(a, b, c), res,
        func.name + "(" + a + ", " + b + ", " + c + ") is " + res
    );
}
