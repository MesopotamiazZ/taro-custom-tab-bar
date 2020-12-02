import { SETNAVHEIGHT } from '../constants/global'

const INITIAL_STATE = {
  navbarHeight: 0
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SETNAVHEIGHT:
      return {
        ...state,
        navbarHeight: action.value
      }
    default:
      return state
  }
}
