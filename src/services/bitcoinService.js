const axios = require('axios');
import { loadFromStorage, saveToStorage } from './utilService';
export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

const TRANSACTIONS_DB = 'transactions';
const MARKET_DB = 'market';

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
    const market = loadFromStorage(MARKET_DB);
    if (!market) {
        return axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
            .then(res => {
                market.push(res.data.values);
                saveToStorage(MARKET_DB, market)
                return res.data.values;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            })
    }
}

function getConfirmedTransactions() {
    const transactions = loadFromStorage(TRANSACTIONS_DB);
    if (!transactions) {
        return axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
            .then(res => {
                transactions.push(res.data.values)
                saveToStorage(TRANSACTIONS_DB, transactions)
                return res.data.values;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            })
    } else return transactions;
}