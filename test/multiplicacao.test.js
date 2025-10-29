const multiplicacao = require('../js/multiplicacao');

QUnit.test('multiplicacao 3 * 4 é igual 12', assert => {
    assert.strictEqual(multiplicacao(3, 4), 12);
});

QUnit.test('multiplicacao -5 * -2 é igual 10', assert => {
    assert.strictEqual(multiplicacao(-5, -2), 10);
});

QUnit.test('multiplicacao 7 * 0 é igual 0', assert => {
    assert.strictEqual(multiplicacao(7, 0), 0);
});

QUnit.test('multiplicacao -3 * 3 é igual -9', assert => {
    assert.strictEqual(multiplicacao(-3, 3), -9);
});

QUnit.test('multiplicacao 2.5 * 4 é igual 10', assert => {
    assert.strictEqual(multiplicacao(2.5, 4), 10);
});
