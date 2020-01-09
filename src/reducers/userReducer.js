//import userActions types
import { userActionsType } from "../constants/actions";

//define initial state
const initialState = {
  userList: []
};

/**
 * User reducer create to update state
 * @param {*} state
 * @param {*} action
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionsType.SET_USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
