const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case "LOGIN":
            // code block
            return { authenticated: true };
            break;
        case "LOGOUT":
            // code block
            return { authenticated: false };
            break;
        default:
            return { authenticated: false };
            break;
        // Change code above this line
    };

};
const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};

const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};
