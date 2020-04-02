let user = {
    id: 0,
    username: ''
};

export default (state = user, action) => {
    switch (action.type) {
        case 'ADD_USER_STATUS':
            return action.payload;
        default:
            return state;
    }
}