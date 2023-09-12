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

const signin = createAsyncThunk(
    'signin',
    async(obj) => {
        try {
            let data = await axios.post(apiUrl+'auth/signin', obj.data)
            console.log(data);
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message ]
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async() => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization': `Bearer ${token}`} }
            let data = await axios.post(apiUrl+'auth/token',null, authorization)
            //console.log(data);
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async() => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization': `Bearer ${token}`} }
            let data = await axios.post(apiUrl+'auth/signout',null, authorization)
            //console.log(data);
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: ''
            }
        }
    }
)

const user_actions = { read_user, read_single_user, signin, signin_token, signout  };
export default user_actions;