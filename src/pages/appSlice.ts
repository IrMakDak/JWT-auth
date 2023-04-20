import { RootState } from "@/store/store";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
interface TInitialState {
  authorizedStatus: boolean;
}
const adapter = createEntityAdapter();

const initialState: TInitialState = adapter.getInitialState({
  authorizedStatus: false,
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
  },
});

const { actions, reducer } = appSlice;

export default reducer;
export const { signin, signout } = actions;

export const selectCount = (state: RootState) => state.auth.authorizedStatus;
