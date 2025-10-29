import { soma } from '../js/soma.js';

QUnit.module('soma', () => {
    QUnit.test('two numbers', (assert) => {
      assert.equal(soma(1, 2), 3);
    });
  });

  QUnit.module('soma', () => {
    QUnit.test('two numbers', (assert) => {
      assert.equal(soma(-5, -9), -14);
    });
  });

    QUnit.module('soma', () => {
    QUnit.test('two numbers', (assert) => {
      assert.equal(soma(7, 0), 7);
    });
    });

    QUnit.module('soma', () => {
    QUnit.test('two numbers', (assert) => {
      assert.equal(soma(-3, 3), 0);
    });
    });

    QUnit.module('soma', () => {
    QUnit.test('two numbers', (assert) => {
      assert.equal(soma(2.5, 2.5), 5);
    });
    });

