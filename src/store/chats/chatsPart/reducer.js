/**
 * Редьюсеры для работы со списком чатов
 * @type {{addChatPart(*, *): void, deleteChatPart(*, *): void, catchCurrentTextDraft(*, *): void}}
 */
export const chatsPartReducer = {
    /**
     * Добавляет новый чат в список чатов
     * @param state
     * @param action принимает время создания нового чата
     */
    addChatPart(state, action) {
        state.chatsList[`chat_${action.payload.timeCreate.toString(36)}`] = {
            chatName: `Chat ${Object.keys(state.chatsList).length + 1}`,
            msgList: [],
            currentTextDraft: ''
        };
    },
    /**
     * Удаляет чат из списка чатов
     * @param state
     * @param action принимает ключ, по которому удаляется чат из спика чатов
     */
    deleteChatPart(state, action) {
        if(state.chatsList[action.payload.chatKey]){
            delete state.chatsList[action.payload.chatKey];
        }
    },
    /**
     * Сохраняет введённый, но неотправленный текст в черновик
     * @param state
     * @param action принимает введённый текс
     */
    catchCurrentTextDraft(state, action){
        if(state.chatsList[action.payload.chatId]){
            state.chatsList[action.payload.chatId].currentTextDraft = action.payload.currentTextDraft;
        }
    }
}