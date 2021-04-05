const axios = require('axios');


export default bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}


function getRate(coins) {
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
}

function getMarketPrice() {

}

function getConfirmedTransactions() {

}