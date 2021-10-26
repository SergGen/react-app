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
    addChatPart({chatsList}, {payload}) {
        chatsList[`chat_${payload.timeCreate.toString(36)}`] = {
            chatName: `Chat ${Object.keys(chatsList).length + 1}`,
            currentTextDraft: ''
        };
    },
    /**
     * Удаляет чат из списка чатов
     * @param state
     * @param action принимает ключ, по которому удаляется чат из спика чатов
     */
    deleteChatPart({chatsList}, {payload}) {
        if(chatsList.hasOwnProperty(payload.chatKey)){
            delete chatsList[payload.chatKey];
        } else {
            throw new Error('ErrorFallback in "deleteChatPart". state.chatsList[action.payload.chatKey] is not present.');
        }
    },
    /**
     * Сохраняет введённый, но неотправленный текст в черновик
     * @param state
     * @param action принимает введённый текс
     */
    catchCurrentTextDraft({chatsList}, {payload}){
        if(chatsList.hasOwnProperty(payload.chatId)){
            chatsList[payload.chatId].currentTextDraft = payload.currentTextDraft;
        } else {
            throw new Error('ErrorFallback in "catchCurrentTextDraft". state.chatsList[action.payload.chatId] is not present.');
        }
    }
}