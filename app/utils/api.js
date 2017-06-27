const axios =  require('axios');

const id = '8c6db882c612c0cc655e';
const sec = 'c9d7964854f81ee0ee9e341b554e8c3edca0f14b';
const params = '?client_id=' + id + '&client_secret=' + sec;

function getProfile(username) {
    return axios.get('https://api.github.com/users/' + username + params)
        .then(user=>{return user.data})
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
}

function getStar(repos) {
    return repos.data.reduce((count,repo)=>{return count+repo.stargazers_count},0)
}

function calculateScore(profile,repos) {
    const followers = profile.followers;
    const star = getStar(repos)

    return followers * 3 + star
}

function handleError(error) {
    console.warn(error);
    return false;
}

function getUserData(players) {
    return axios.all([
        getProfile(players),
        getRepos(players)
    ])
        .then((data)=>{
            const profile = data[0];
            const repos = data[1];
            return {
                profile: profile,
                score: calculateScore(profile,repos)
            }
        })
}

function sortPlayers(players) {
    return players.sort((a,b)=>{return a.score-b.score})
}

module.exports = {
    user: function(username){
        const encodeURI = window.encodeURI('https://api.github.com/search/users?q='+ username)
        return axios.get(encodeURI)
            .then(response=>{return response.data.items.length})
    },
    battle: function(players){
        return axios.all(players.map((getUserData)))
            .then(sortPlayers)
            .catch(handleError)
    },
    fetchPopularRepos: function(language){
        var encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories&topic:'+language);
        return axios.get(encodeURI)
            .then(response=>{return response.data.items})
    }
}
