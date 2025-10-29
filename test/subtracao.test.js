const subtracao = require('../js/subtracao');

QUnit.test('subtracao 5 - 2 é igual 3', assert => {
    assert.strictEqual(subtracao(5, 2), 3);
});

QUnit.test('subtracao -10 - -5 é igual -5', assert => {
    assert.strictEqual(subtracao(-10, -5), -5);
});

QUnit.test('subtracao 7 - 0 é igual 7', assert => {
    assert.strictEqual(subtracao(7, 0), 7);
});

QUnit.test('subtracao -3 - 3 é igual -6', assert => {
    assert.strictEqual(subtracao(-3, 3), -6);
});

QUnit.test('subtracao 5.5 - 2.5 é igual 3', assert => {
    assert.strictEqual(subtracao(5.5, 2.5), 3);
});