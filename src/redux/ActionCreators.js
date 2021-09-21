import * as ActionTypes from './ActionTypes';
import { JOBS } from '../shared/Jobs';

export const addJob = (company, position, pay, description, image, featured)=>({
    type: ActionTypes.ADD_JOBS,
    payload:{
        company,
        position,
        pay,
        description,
        image,
        featured
    }
});

export const fetchJobs = () => dispatch => {
    dispatch(jobsLoading());

    setTimeout(() => {
        dispatch(addJobs(JOBS));
    }, 2000);
};

export const jobsLoading = () => ({
    type: ActionTypes.JOBS_LOADING
});

export const jobsFailed = err => ({
    type: ActionTypes.JOBS_FAILED,
    payload: err
})

export const addJobs = jobs =>({
    type: ActionTypes.ADD_JOBS,
    payload: jobs
});