const plg = require('pluga-plg');
const expect = require('chai').expect;
const action = require('../../../lib/actions/newlead/');


const event = {
	meta: {
		baseURI: process.env.BASE_URI
	},
	auth: {
		ID: process.env.API_KEY,
		tk: process.env.API_SECRET
	},
	input: {
		email: 'testeemail@gmail.com',
		nome: 'Teste Pluga2',
		telefone: '44999999999',
		acao: 'cadastrar',
		id_form: '9405',
	},  
};

describe('Action: New lead', function () {
	it('Deveria criar novo lead', function (done) {
		action.handle(plg, event).then((res) => {
			console.log(res);
			done();
		}).catch(done);
  	});
});
