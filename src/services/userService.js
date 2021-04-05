export default {
    getUser,
}

const gUser =
{
    name: "Rom Soloman",
    coins: 60000,
    moves: []
}


function getUser() {
    return Promise.resolve(gUser);
}