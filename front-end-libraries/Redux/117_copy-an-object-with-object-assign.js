const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            // Don't mutate state here or the tests will fail
            // console.log(state);
            let x = Object.assign({}, state, { status: "online" });
            let newObj = Object.assign({}, state, { status: action.type });
            // const x=Object.assign({}, state, { status: "online" });
            console.log(newObj);
            console.log(x);
            return x;
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);
