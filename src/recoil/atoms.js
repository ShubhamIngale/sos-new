import {atom} from 'recoil'

// JOB ATOM
export const jobs = atom({
        key: 'jobs',
        default: []
});

export const jobError = atom({
        key: 'jobError',
        default: ''
})

export const jobDetails = atom({
        key: 'jobInfo',
        default: []
});


// USER ATOM
export const loggedIn = atom({
        key: 'loggedIn',
        default: false
})

export const isVerified = atom({
        key: 'isVerified',
        dafault: false
})

export const user = atom({
        key: 'user',
        default: [],
        dangerouslyAllowMutability: true,
})



// FORM PANEL 
export const enrollPanel = atom({
        key: 'enrollPanel',
        default: false
})