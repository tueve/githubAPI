/**
 * Created by MilkyWay on 02/07/2017.
 */
var React = require('react')
var axios = require('axios')

const id = '8c6db882c612c0cc655e'
const sec = 'c9d7964854f81ee0ee9e341b554e8c3edca0f14b'
const APIkey = 'AIzaSyBg0FQc7nuDfqes6HFMsIYMg44pZlHPkE4'
const params = '?client_id=' + id + '&client_secret=' + sec
const RootYoutubeAPIurl = 'https://www.googleapis.com/youtube/v3/search'
const weatherAPI = '//api.openweathermap.org/data/2.5/weather?appid=4997c987859a7a4ac7be1337557e0082&type=accurate&units=metric&q='
const getUserInfo = username =>{return axios.get('https://api.github.com/users/' + username).then(data=>{console.log(data);return data})}

module.exports = {
    youtubeAPI: keywords => {
        var params = {
            part: 'snippet',
            key: APIkey,
            q: keywords,
            type: 'video'
        };
        return axios
            .get(RootYoutubeAPIurl, { params: params })
            .then(response => {return response})
            .catch(error => console.error(error))
    },
    battle: users => { users.map(user=>{getUserInfo(user)})},
    fetchWeatherAPI: location => {
      return axios.get(weatherAPI+location)
          .then(res=>{
              if (res.data.cod && res.data.message) {
                  console.log('error1');
                  console.log(res)
              } else {
                  return res;
              }
          },res=>{
              console.log('error2api',res)
            return res
      })
    },
    fetchAPI: language => {
        return axios.get(window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories&topic:'+language))
            .then(response=>response.data.items)
    }
}