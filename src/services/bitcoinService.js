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
    return axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        .then(res => {
            return res.data.values;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
}

function getConfirmedTransactions() {
    return axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
        .then(res => {
            return res.data.values;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
}