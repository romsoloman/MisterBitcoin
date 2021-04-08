const INITIAL_STATE = {
  user: { name: 'Rom Soloman', coins: 100, moves: [] }
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SPEND_BALANCE':
      return {
        ...state,
        user: { ...state.user, balance: state.user.balance - action.spendAmount }
      }

    default:
      return state
  }
}