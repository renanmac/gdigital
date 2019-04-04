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
    url: `${event.meta.baseURI}/leads/index.php`,
    params: {
      email: event.input.email,
      name: event.input.name,
      phone: event.input.phone,
    	id: event.auth.id,
    	tk: event.auth.tk,
    	api_origem: 'pluga',
    	acao: 'cadastrar',
      id_form: even.input.id_form
    },
    data: event.input
  }).then(res => res.data).catch(err => {
    throw `Create Lead: ${err.message}`;
  });
};
