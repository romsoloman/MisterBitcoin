export default {
    getUser,
    signUp,
    getLoggedinUser
}


const gUser =
{
    name: "Rom Soloman",
    coins: 60000,
    moves: []
}


function getUser() {
    // const loggedinUser = sessionStorage.getItem('loggedinUser') || gUser;
    // _saveLocalUser(loggedinUser)
    return Promise.resolve(gUser);
}

function signUp({ name }) {
    const user = getEmptyUser();
    user.name = name
    _saveLocalUser(user)
    return Promise.resolve(user)
}

function _saveLocalUser(user) {
    console.log('new user inserted to DB', user)
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getEmptyUser() {
    return {
        name: '',
        coins: 100,
        moves: []
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}
