var axios = require('axios')


module.exports.list = () => {
    return axios.get('http://localhost:15030/plantas')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
module.exports.getRegisto = id => {
    return axios.get('http://localhost:15030/plantas/' + id)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
module.exports.getEspecie = idE => {
    console.log(idE)
    return axios.get('http://localhost:15030/plantas', {
                params: {
                especie: idE
            } })
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}