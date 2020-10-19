const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {

    if (action.type === "LOGIN") {
        return { login: true };
    }
    else {
        return state;
    }
    // action
    // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};
