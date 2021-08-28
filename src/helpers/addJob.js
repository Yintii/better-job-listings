import { JOBS } from '../shared/Jobs';

class Job{
    company = this.company;
    position = this.position;
    pay = this.pay;
    description = this.description;
    id = JOBS[JOBS.length - 1].id++;
}

function addJob(company, position, pay, description){
    const newJob = new Job(company, position, pay, description);
    return JOBS.push(newJob);
}


export default addJob;