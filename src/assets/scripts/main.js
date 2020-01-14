const ENDPOINT_INFO_USER = 'https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/'
const ENDPOINT_INFO_ACHIEVEMENTS = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/'
const ENDPOINT_INFO_HOURS_PLAYED = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
const ENDPOINT_INFO_BAN = 'http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/'
const KEY_API_STEAM = 'D1108BDE58274899E11D3C55998E2D60';
const APP_ID = '730';

const buttonConsult = document.querySelector('.buttonConsult');
const fieldInfo = document.querySelectorAll('.item-data');
const inputSteamId = document.querySelector('.inputID');

inputSteamId.value = '76561198145496259';

const RequestConfig = {
  options: {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers': '*',
      "Content-Type": "application/json",
      'mode': 'no-cors',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  },
};


buttonConsult.addEventListener('click', () => {
  const valueInputSteamId = document.querySelector('.inputID').value;
  
  fetch('https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?key=D1108BDE58274899E11D3C55998E2D60&steamid=76561198145496259&format=json&appid=730', RequestConfig.options).then(response =>{
    console.log(response);
  }).then(data =>
  {
    console.log(data);
  })
})