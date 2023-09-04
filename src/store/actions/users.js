import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../apiUrl";
import axios from "axios";

// Action para leer todos los usuarios
const read_user = createAsyncThunk(
    'read_user',
    async() => {
        try {
            let users = await axios.get(`${apiUrl}users`); // Aquí utilizo template literals
           // console.log(users.data.response);
            return {
                users: users.data.response
            };
        } catch (error) {
            console.log(error);
            return {
                users: []
            };
        }    
    }
);

// Action para leer un único usuario basado en su ID
const read_single_user = createAsyncThunk(
    'read_single_user',
    async (userId) => {
        try {
            let user = await axios.get(`${apiUrl}users/${userId}`);
            //console.log(user.data.response);
            return {
                user: user.data.response
            };
        } catch (error) {
            console.log(error);
            return {
                user: null
            };
        }  
    }
);

const user_actions = { read_user, read_single_user };
export default user_actions;
