const divisao = require('../js/divisao.js');

QUnit.test('divisao 6 / 2 é igual 3', assert => {
    assert.strictEqual(divisao(6, 2), 3);
});

QUnit.test('divisao -10 / -2 é igual 5', assert => {
    assert.strictEqual(divisao(-10, -2), 5);
});

QUnit.test('divisao 10 / 0 é igual Infinity', assert => {
    assert.strictEqual(divisao(10, 0), Infinity);
});

QUnit.test('divisao 7 / -2 é igual -3.5', assert => {
    assert.strictEqual(divisao(7, -2), -3.5);
});
