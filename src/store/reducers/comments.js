import { createReducer } from "@reduxjs/toolkit";
import comments_actions from "../actions/comments";

const { read_comments_from_itinerary, create_comment } = comments_actions;

const initial_state = {
    comments: {},
    isLoading: false,   // Nuevo estado para manejar la carga de comentarios
    isCreating: false,  // Nuevo estado para manejar la creación de comentarios
    error: null
}

const comments_reducer = createReducer(
    initial_state,
    (builder) => {
        builder
        .addCase(read_comments_from_itinerary.pending, (state) => {
            state.isLoading = true;
            state.error = null; // Reseteamos el error cuando comenzamos una nueva petición
        })
        .addCase(read_comments_from_itinerary.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comments[action.payload.itinerary_id] = action.payload.comments;
        })
        .addCase(read_comments_from_itinerary.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(create_comment.pending, (state) => {
            state.isCreating = true;
            state.error = null; // Reseteamos el error cuando comenzamos una nueva petición
        })
        .addCase(create_comment.fulfilled, (state, action) => {
            const itinerary_id = action.payload.itinerary_id;
            if (state.comments[itinerary_id]) {
                // Asegurémonos de que el comentario se añade correctamente
                state.comments[itinerary_id] = [...state.comments[itinerary_id], action.payload.comment];
            } else {
                state.comments[itinerary_id] = [action.payload.comment];
            }
        })
        
        
        .addCase(create_comment.rejected, (state, action) => {
            state.isCreating = false;
            state.error = action.payload;
        });
    }
);

export default comments_reducer;
