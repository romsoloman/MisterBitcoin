import { saveToStorage, loadFromStorage } from './utilService';
const axios = require('axios');
export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
    getUSDBTC
}

const TRANSACTIONS_DB = 'transactions';
const MARKET_DB = 'market';

function getUSDBTC() {
    return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        .then(res => {
            return res.data.bpi.USD.rate_float;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
}

function getRate(coins) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        .then(res => {
            return res.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
}

function getMarketPrice() {
    let market = loadFromStorage(MARKET_DB);
    if (!market) {
        return axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
            .then(res => {
                market = res.data.values;
                saveToStorage(MARKET_DB, market)
                return res.data.values;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            })
    }
    return market;
}

function getConfirmedTransactions() {
    let transactions = loadFromStorage(TRANSACTIONS_DB);
    if (!transactions) {
        return axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
            .then(res => {
                transactions = res.data.values;
                console.log('transactions', transactions);
                saveToStorage(TRANSACTIONS_DB, transactions)
                return res.data.values;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            })
    }
    return transactions;
}