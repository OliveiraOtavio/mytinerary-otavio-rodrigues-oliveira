import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";

const { read_user, read_single_user } = user_actions;

const initial_state = {
    users: [],
    singleUser: null
}

const user_reducer = createReducer(
    initial_state,
    (builder) => {
        builder
            .addCase(read_user.fulfilled, (state, action) => {
                return {
                    ...state,
                    users: action.payload.users
                };
            })
            .addCase(read_single_user.fulfilled, (state, action) => {
                return {
                    ...state,
                    singleUser: action.payload.user
                };
            });
    }
);

export default user_reducer;
