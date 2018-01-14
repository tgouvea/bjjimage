const Foto = require('./foto')

Foto.methods(['get', 'post', 'put', 'delete'])
Foto.updateOptions({new: true, runValidators: true}) //Por padrão o update do restful ignora as validações por isso é necessáriop habilitar

module.exports = Foto