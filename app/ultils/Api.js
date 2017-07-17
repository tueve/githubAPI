/**
 * Created by MilkyWay on 02/07/2017.
 */
var React = require('react')
var axios = require('axios')

const id = '8c6db882c612c0cc655e'
const sec = 'c9d7964854f81ee0ee9e341b554e8c3edca0f14b'
const params = '?client_id=' + id + '&client_secret=' + sec

function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username).then(data=>{console.log(data);return data})
}

module.exports = {
    battle: users => { users.map(user=>{getUserInfo(user)})
    },

    fetchAPI: language => {
        return axios.get(window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories&topic:'+language))
            .then(response=>response.data.items)
    }
}