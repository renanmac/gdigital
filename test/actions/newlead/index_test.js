const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../../lib/actions/newlead/');

const event = {
  meta: {
    baseURI: 'https://testespark.gpages.com.br/api/pluga/newlead.php'
  },
  auth: {
    id: '15738',
    tk: process.env.API_SECRET
  },
  input: {
    email: 'all12394@gmail.com',
    nome: 'Teste Cadastro',
    telefone: '44999915204',
    acao: 'cadastrar',
    id_form: '9405'
  },
  
};

describe('Action: New lead', function () {
  it('Deveria criar novo lead', function (done) {
    action.handle(plg, event).then((res) => {
      console.log(res);
      console.log(event);
      console.log(process.env);
      done();
    }).catch(done);
  });
});
