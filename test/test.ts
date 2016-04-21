import * as test from 'blue-tape';
import * as login from 'facebook-chat-api';

test('login', (t) => {
  t.plan(1);
  t.equal(typeof login, 'function');
});
