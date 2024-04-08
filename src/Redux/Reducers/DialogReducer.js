let dialog = {
    createMessage: '',
    messageData: [
        {message: "alo", id: 1},
        {message: "aboba", id: 2},
        {message: "bla bla", id: 3}],
    nameData: [
        {name: "some", id: 1},
        {name: "some2", id: 2},
        {name: "some3", id: 3}],
};

export const DialogReducer = (state = dialog, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case('typing-message'): {
            /*
            let copyState={...state};
            copyState.createMessage = action.message;*/
            return {
                ...state,
                createMessage: action.message
            };
        }
        case('add-message'): {
            /*
            let copyState={...state};
            copyState.nameData=[...state.nameData];
            copyState.messageData=[...state.messageData];
            copyState.messageData.push({
                id: copyState.messageData.length + 1,
                message: copyState.createMessage
            });
            copyState.createMessage = '';*/
            return {
                ...state,
                createMessage: '',
                nameData: [...state.nameData],
                messageData: [...state.messageData, {id: state.messageData.length+1,message: state.createMessage}]
            };
        }
        default: {
            return state;
        }
    }
}