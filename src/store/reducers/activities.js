import { createReducer } from "@reduxjs/toolkit";
import activities_actions from "../actions/activities";
const { read_activities_from_itinerary } = activities_actions;

const initial_state = {
    activities: []
}

const activities_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_activities_from_itinerary.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                activities: {
                    ...state.activities,
                    [action.meta.arg.itinerary_id]: action.payload.activities
                }
            }
            return new_state;
        }
    )
)


export default activities_reducer;
