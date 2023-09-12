import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";

const { read_user, read_single_user, signin, signin_token, signout } = user_actions;

const initial_state = {
    users: [],
    singleUser: null,
    token: '',
    messages: []
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
            })
            .addCase(
                signin.fulfilled,
                (state, action) => {
                    let new_state = {
                        ...state,
                        user: action.payload.user,
                        token: action.payload.token,
                        messages: action.payload.messages
                    }
                    return new_state
                }
            )
            .addCase(
                signin_token.fulfilled,
                (state, action) => {
                    let new_state = {
                        ...state,
                        user: action.payload.user,
                        token: action.payload.token
                    }
                    return new_state
                }
            )
            .addCase(
                signout.fulfilled,
                (state, action) => {
                    let new_state = {
                        ...state,
                        user: action.payload.user,
                        token: action.payload.token
                    }
                    return new_state
                }
            )
    }
);

export default user_reducer;