/**
 * Place your global test hooks here.
 *
 * See more at:
 * - [mocha](https://mochajs.org)
 * - [chai](https://chaijs.com)
 */

if (process.env.AXIOS_DEBUG) {
	require('dotenv').config();
  const plg = require('pluga-plg');
  const axiosDebug = require('axios-debug');
  axiosDebug(plg.axios);

}

before(function (done) {
  console.log('Testing functions...');
  console.log(process.env);
  done();
});
