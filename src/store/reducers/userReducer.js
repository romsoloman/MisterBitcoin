const INITIAL_STATE = {
  user: null
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'REMOVE_USER':
      return {
        ...state,
        user: (state.user.name !== action.user.name)
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SPEND_BALANCE':
      return {
        ...state,
        user: { ...state.user, coins: state.user.coins - action.spendAmount }
      }
    case 'UPDATE_USER_MOVES':
      return {
        ...state,
        user: { ...state.user, moves: action.moves }
      }
    default:
      return state
  }
}