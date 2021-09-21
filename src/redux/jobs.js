import * as ActionTypes from './ActionTypes';

export const Jobs = (state = {
        isLoading: true,
        err: null,
        jobs: []
    }, action) => {
    switch (action.type){
        case ActionTypes.ADD_JOBS:
            return {...state, isLoading: false, err: null, jobs: action.payload};

        case ActionTypes.JOBS_LOADING:
            return {...state, isLoading: true, err: null, jobs: []};

        case ActionTypes.JOBS_FAILED:
            return {...state, isLoading: false, err: action.payload};

        case ActionTypes.ADD_JOB:
            const job = action.payload;
            job.id = state.length;
            return state.concat(job);
        default:
            return state;
    }
}