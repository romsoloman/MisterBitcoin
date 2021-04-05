export default userService = {
    getUser,
}

const gUser = [
    {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
]

function getUser() {
    return Promise.resolve(gUser);
}