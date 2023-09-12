import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

// READ comments for a specific itinerary
const read_comments_from_itinerary = createAsyncThunk(
    'read_comments_from_itinerary',
    async (obj, thunkAPI) => {
        try {
            const response = await axios.get(apiUrl + 'comments/', {
                params: {
                    itinerary_id: obj.itinerary_id
                }
            });
            if (response.data.success) {
                return { comments: response.data.response, itinerary_id: obj.itinerary_id };
            } else {
                return thunkAPI.rejectWithValue(response.data.message);
            }
        } catch (error) {
            console.error('Error reading comments:', error);
            return thunkAPI.rejectWithValue('Failed to get comments');
        }
    }
);

// CREATE comment for a specific itinerary
const create_comment = createAsyncThunk(
    'create_comment',
    async (obj, thunkAPI) => {
        try {
            const response = await axios.post(apiUrl + 'comments/', {
                content: obj.content,
                itinerary_id: obj.itinerary_id,
                admin_id: obj.admin_id  
            });
            if (response.data.success) {
                return { comment: response.data.response, itinerary_id: obj.itinerary_id };
            } else {
                return thunkAPI.rejectWithValue(response.data.message);
            }
        } catch (error) {
            console.error('Error creating comment:', error);
            return thunkAPI.rejectWithValue('Failed to create comment');
        }
    }
);

const comments_actions = { 
    read_comments_from_itinerary,
    create_comment
}

export default comments_actions;
