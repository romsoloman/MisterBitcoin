import { makeId } from '../services/utilService'

export default {
    // getUser,
    signUp,
    getLoggedinUser,
    chargeUser,
    addMove,

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

function signUp({ name }) {
    const user = getEmptyUser();
    user.name = name
    _saveLocalUser(user)
    return Promise.resolve(user)
}

async function chargeUser(user, chargeAmount) {
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

function _saveLocalUser(user) {
    console.log('new user inserted to DB', user)
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
