import { RootState } from "@/store/store";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
interface TInitialState {
  authorizedStatus: boolean;
  userName?: string;
  userInfo: {
    userFirstName?: string;
    userSecondName?: string;
  };
}
const adapter = createEntityAdapter();

const initialState: TInitialState = adapter.getInitialState({
  authorizedStatus: false,
  userInfo: {
    userFirstName: undefined,
    userSecondName: undefined,
  },
});

const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state) {
      state.authorizedStatus = true;
    },
    signout(state) {
      state.authorizedStatus = false;
    },
    setUsername(state, action) {
      state.userInfo = {
        userFirstName: action.payload.firstName,
        userSecondName: action.payload.secondName,
      };
    },
    cleanUser(state) {
      state.userInfo = {
        userFirstName: undefined,
        userSecondName: undefined,
      };
    },
  },
});

const { actions, reducer } = appSlice;

export default reducer;
export const { signin, signout, setUsername, cleanUser } = actions;

export const selectCount = (state: RootState) => state.auth.authorizedStatus;
export const selectUser = (state: RootState) => state.auth.userInfo;
