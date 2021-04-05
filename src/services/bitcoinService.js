const axios = require('axios');


export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}


function getRate(coins) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        .then(res => {
            console.log('res.data', res.data);
            return res.data;
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