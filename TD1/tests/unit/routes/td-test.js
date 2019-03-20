import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | TD', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:td');
    assert.ok(route);
  });
});
