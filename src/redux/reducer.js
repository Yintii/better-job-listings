import { JOBS } from '../shared/Jobs';
import { user } from '../shared/User';

export const initialState = {
    jobs: JOBS,
    user: user
}

export const Reducer = (state = initialState, action) => {
    return state;
}