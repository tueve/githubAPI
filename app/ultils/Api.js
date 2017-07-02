/**
 * Created by MilkyWay on 02/07/2017.
 */
var React = require('react')
var axios = require('axios')

module.exports = {
    fetchAPI: language => {
        return axios.get(window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories&topic:'+language))
            .then(response=>response.data.items)
    }
}