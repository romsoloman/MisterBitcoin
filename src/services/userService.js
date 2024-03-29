import { makeId } from '../services/utilService'

export default {
    // getUser,
    signUp,
    getLoggedinUser,
    chargeUser,
    addMove,
    logout,

}


const gUser =
{
    name: "Rom Soloman",
    coins: 60000,
    moves: []
}


// function getUser() {
//     // const loggedinUser = sessionStorage.getItem('loggedinUser') || gUser;
//     // _saveLocalUser(loggedinUser)
//     return Promise.resolve(gUser);
// }

function signUp({ name, password }) {
    const user = getEmptyUser();
    user.name = name
    user.password = password
    _saveLocalUser(user)
    return Promise.resolve(user)
}

async function chargeUser(user, chargeAmount) {
    if (user.coins < 0) return;
    const loggedinUser = { ...user };
    loggedinUser.coins -= chargeAmount
    _saveLocalUser(loggedinUser)
    return loggedinUser
}

async function addMove(user, amount, contact) {
    const loggedinUser = { ...user };
    loggedinUser.coins -= amount
    loggedinUser.moves.push({
        toId: makeId(),
        to: contact.name,
        at: Date.now(),
        amount
    })
    _saveLocalUser(loggedinUser)
    return loggedinUser
}

function logout() {
    sessionStorage.clear()
}

function _saveLocalUser(user) {
    // console.log('new user inserted to DB', user)
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getEmptyUser() {
    return {
        name: '',
        coins: 60000,
        moves: []
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}
