import {ProfileReducer} from "./Reducers/ProfileReducer";
import {DialogReducer} from "./Reducers/DialogReducer";

export let store = {
    renderTree: () => {
    },
    state: {
        dialog: {
            createMessage: '',
            messageData: [
                {message: "alo", id: 1},
                {message: "aboba", id: 2},
                {message: "bla bla", id: 3}],
            nameData: [
                {name: "some", id: 1},
                {name: "some2", id: 2},
                {name: "some3", id: 3}],
        },
        profile: {
            createPostValue: '',
            postData: [
                {id: 1, message: "bla"},
                {id: 2, message: "bla bla"},
                {id: 3, message: "bla bla bla"},
            ]
        }
    },

    changeValue() {
        this.state.profile.postData.push({
            id: this.state.profile.postData.length + 1,
            message: this.state.profile.createPostValue
        });
        this.state.profile.createPostValue = '';
        this.renderTree();
    },
    changePost(message) {
        this.state.profile.createPostValue = message;
        this.renderTree();
    },
    subscribe(observer) {
        this.renderTree = observer;
    },
    typingMessage(message) {
        this.state.dialog.createMessage = message;
        this.renderTree();
    },
    sendMessage() {
        this.state.dialog.messageData.push({
            id: this.state.dialog.messageData.length + 1,
            message: this.state.dialog.createMessage
        });
        this.state.dialog.createMessage = '';
        this.renderTree();
    },

   // dispatch(action) {

   //   this.state.profile = ProfileReducer(action, this.state.profile);
    //  this.state.dialog = DialogReducer(action, this.state.dialog);
     // this.renderTree();
        // eslint-disable-next-line default-case
        /*switch (action.type) {
            case('typing-post'): {
                this.changePost(action.message);
                break;
            }
            case('add-post'): {
                this.changeValue();
                break;
            }
            case('typing-message'): {
                this.typingMessage(action.message);
                break;
            }
            case('add-message'): {
                this.sendMessage();
                break;
            }
        }*/
   // }
}