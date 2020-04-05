import {db} from '../../firebase';


/** Update user details when the firebase authentication is changed */
export const UPDATE_USER = (auth) => {
    return {
        type:"UPDATE_USER",
        auth: auth
    }
}

/** Update the store as the user signs out */
export const SIGN_OUT = () => {
    return {
        type:"SIGNOUT_USER"
    }
}

/** Update */
export const UPDATE_LOG = (pageName) => {
    let status = true;

    const logID = db.ref('/pagevisitlogs').push();
    logID.set({
        DateVisited: Date.now(),
        Page:pageName
    },
    function(error){
        if(error){
            console.log('Unable to save data');
            status= false;
        }
    }
    );


    return {
        type:"UPDATE_LOG",
        status: status
    }
}