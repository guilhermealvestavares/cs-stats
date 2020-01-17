const ENDPOINT_INFO_USER = 'https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/'
const ENDPOINT_INFO_ACHIEVEMENTS = 'https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/'
const ENDPOINT_INFO_HOURS_PLAYED = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
const ENDPOINT_INFO_BAN = 'https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/'

const buttonConsult = document.querySelector('.buttonConsult');
const fieldInfo = document.querySelectorAll('.item-data');
const inputSteamId = document.querySelector('.inputID');

inputSteamId.value = '76561198145496259';

const fieldKills = document.querySelector('#kills');
const fieldDeaths = document.querySelector('#deaths');
const fieldHeadShots = document.querySelector('#fieldHeadShots');
const fieldRoundsWins = document.querySelector('#roundsWins');
const fieldRoundPistol = document.querySelector('#fieldRoundPistol');


const statusMessage = (status, message) => {
  switch(status){
    case 500:
      alert('usuário não existe');
    break;
    case 403:
      alert('Forbidden');    
    break;
    default:
      alert('você precisa digitar algo');    
  }
}


buttonConsult.addEventListener('click', () => {
  const valueInputSteamId = document.querySelector('.inputID').value;
  
  fetch(`https://cs-stats-backend.herokuapp.com/${valueInputSteamId}`).then( response => {
    if(response.status === 200){
      response.json().then(responseJson => {
        console.log(responseJson);
        fieldKills.innerHTML = responseJson.playerstats.stats.find(item => { return item.name === "total_kills" }).value;
        fieldDeaths.innerHTML = responseJson.playerstats.stats.find(item => { return item.name === "total_deaths" }).value;
        fieldHeadShots.innerHTML = responseJson.playerstats.stats.find(item => { return item.name === "total_kills_headshot" }).value;
        fieldRoundsWins.innerHTML = responseJson.playerstats.stats.find(item => { return item.name === "total_wins" }).value;
        fieldRoundPistol.innerHTML = responseJson.playerstats.stats.find(item => { return item.name === "total_wins_pistolround" }).value;

        

        
        
      })
    } else{
      statusMessage(response.status);
    }
  })

})