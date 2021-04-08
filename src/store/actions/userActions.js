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

export function spendBalance(spendAmount) {
  return async dispatch => {
    // Update the userService
    dispatch({ type: 'SPEND_BALANCE', spendAmount })
  }
}