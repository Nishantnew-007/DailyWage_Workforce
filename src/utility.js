const fetch = require('node-fetch');
const url = 'https://university-college-list-and-rankings.p.rapidapi.com/api/top-universities/india';
const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'bff01c275dmsh5e64ff843d7a418p1cea1fjsndd20e59dcc43',
      'x-rapidapi-host': 'university-college-list-and-rankings.p.rapidapi.com'
    }
  };
  
async function getcollegedata(url) {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
module.exports={
    getcollegedata
}


