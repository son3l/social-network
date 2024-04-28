import {DialogActionType, dialogType} from "../../Utils/Types/Types";

let dialog: dialogType =
    {
        messageData: [
            {message: "alo", id: 1},
            {message: "aboba", id: 2},
            {message: "bla bla", id: 3}],
        nameData: [
            {name: "some", id: 1},
            {name: "some2", id: 2},
            {name: "some3", id: 3}],
        createMessage: ''

    };

export const DialogReducer = (state = dialog, action: DialogActionType): dialogType => {
    switch (action.type) {
        case('typing-message'): {
            return {
                ...state,
                createMessage: action.message
            };
        }
        case('add-message'): {
            return {
                ...state,
                createMessage: '',
                nameData: [...state.nameData],
                messageData: [...state.messageData, {id: state.messageData.length + 1, message: action.message}]
            };
        }
        default: {
            return state;
        }
    }
}