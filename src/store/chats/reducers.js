export const chatsReducers = {
    addChat(state) {
        state.chats[`chat${Date.now().toString(16)}`] = {
            nameChat: `Chat ${Object.keys(state.chats).length + 1}`,
            messages: []
        };
    },
    deleteChat(state, action) {
        delete state.chats[action.payload];
    },
    sendMessage(state, action) {
        state.chats[action.payload.chatId].messages.push({
            msgTime: Date.now(),
            msgAuthor: action.payload.msgData.author,
            msgText: action.payload.msgData.text
        });
    }
}