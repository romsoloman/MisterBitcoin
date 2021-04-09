import userService from '../../services/userService'

export function loadUser() {
  return async dispatch => {
    const user = await userService.getLoggedinUser();
    const action = {
      type: 'GET_USER',
      user
    }
    dispatch(action)
  }
}

export function signUp(user) {
  return async dispatch => {
    const signedUpUser = await userService.signUp(user)
    dispatch({ type: 'SET_USER', signedUpUser })
  }
}

export function logout() {
  return async dispatch => {
    const loggedoutUser = await userService.logout()
    dispatch({ type: 'DELETE_USER', loggedoutUser })
  }
}


export function chargeUser(user, spendAmount, contact) {
  return async dispatch => {
    const spentAmount = await userService.chargeUser(user, spendAmount)
    const userMoves = await userService.addMove(user, spendAmount, contact)
    dispatch({ type: 'SPEND_BALANCE', spentAmount })
    dispatch({ type: 'UPDATE_USER_MOVES', userMoves })
  }
}
