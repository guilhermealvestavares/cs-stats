const ENDPOINT_INFO_USER = 'https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/'
const ENDPOINT_INFO_ACHIEVEMENTS = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/'
const ENDPOINT_INFO_HOURS_PLAYED = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
const ENDPOINT_INFO_BAN = 'http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/'
const KEY_API_STEAM = 'D1108BDE58274899E11D3C55998E2D60';
const APP_ID = '730';

const buttonConsult = document.querySelector('.buttonConsult');
const fieldInfo = document.querySelectorAll('.item-data');
const inputSteamId = document.querySelector('.inputID');

const RequestConfig = {
  options: {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'mode': 'no-cors'
    },
  },
};


buttonConsult.addEventListener('click', () => {
  const valueInputSteamId = document.querySelector('.inputID').value;
  
  fetch(`${ENDPOINT_INFO_USER}?key=${KEY_API_STEAM}&steamid=${valueInputSteamId}&format=json&appid=${APP_ID}`, RequestConfig.options).then(response =>{
    return response.json();
  }).then(data =>
  {
    console.log(response.data);
  })
})