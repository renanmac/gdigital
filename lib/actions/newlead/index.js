/**
 * Action handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {string} event.meta.baseURI - Environment base URI.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json fields.
 *
 * @returns {Promise} Promise object represents the action result.
 */

const createLead = (plg, event) => {
  return plg.axios({
    method: 'post',
    url: `${event.meta.baseURI}newlead.php`,
    data: {
      tag: event.input.tag,
      email: event.input.email,
      nome: event.input.nome,
      telefone: event.input.telefone,
      ID: event.auth.ID,
      tk: event.auth.tk,
      acao: 'cadastrar',
      api_origem: 'pluga',
      id_form: event.input.id_form,
    },
	}).then(res => res.data).catch(err => {
    throw `Create Lead: ${err.message}`;
	});
};

exports.handle = createLead;
