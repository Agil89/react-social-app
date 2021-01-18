import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    rerenderEntireTree() {
        console.log('asd')
    },
    _state : {
        messagesPage:{
            messages:[
                {message:'HI how are you?'},
                {message:'Its a good day'},
                {message:'Nice to meet you'}],
            newMessage:'',
            dialogs: [
                {pathUrl:'1',nameUrl:'Aqil'},
                {pathUrl:'2',nameUrl:'Eli'},
                {pathUrl:'3',nameUrl:'Elman'}]
        },
        profilePage:{
            posts: [
                {id:1,name:'Aqil',likeCount:15},
                {id:2,name:'Elman',likeCount:20},
                {id:3,name:'Eli',likeCount:25},
                {id:4,name:'Fexi',likeCount:30}],
            newPostText:''
        },
        sidebarList:{
            friends:[
                {name:'Senan',ava:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
                {name:'Fexri',ava:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
                {name:'Eli',ava:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
            ]
        }
    },
    getState () {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    // addPost () {
    //     let newPost = {
    //         id:5,
    //         name:this._state.profilePage.newPostText,
    //         likeCount:31
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this.rerenderEntireTree(this._state);
    // },
    // updateNewPostText (newText){
    //     this._state.profilePage.newPostText = newText;
    //     this.rerenderEntireTree(this._state);
    // },
    // addMessage () {
    //     let newMessage = {
    //         message:this._state.messagesPage.newMessage
    //     }
    //     this._state.messagesPage.messages.push(newMessage)
    //     this._state.messagesPage.newMessage = ''
    //     this.rerenderEntireTree(this._state);
    // },
    // updateNewMessageText(newMessage) {
    //     this._state.messagesPage.newMessage = newMessage;
    //     this.rerenderEntireTree(this._state);
    // },
    dispatch(action) {
        profileReducer(this._state.profilePage, action )
        dialogsReducer(this._state.messagesPage, action )
        this.rerenderEntireTree(this._state);
    }

}


export default store;