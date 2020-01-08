import { userActionsType } from "../constants/actions";
//user actions
export const setUserList = value => ({
  type: userActionsType.SET_USER_LIST,
  payload: value
});
