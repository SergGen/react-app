/**
 * Редьюсеры для работы со списками сообщений
 * @type {{addMessagesPart(*, *): void, deleteMessagesPart(*, *): void, sendMessage(*, *): void}}
 */
export const messagesPartReducer = {
    /**
     * Добавляет сообщения в store
     * @param state
     * @param action
     */
    sendMessage(state, action) {
        if(state.messagesList.hasOwnProperty(action.payload.chatId)){
            state.messagesList[action.payload.chatId][`msg_${action.payload.newMsgData.id}_${Date.now().toString(36)}`] = {
                msgTime: Date.now(),
                msgAuthor: action.payload.newMsgData.author,
                msgText: action.payload.newMsgData.text
            }
        } else {
            console.log('Error in "sendMessage". messagesList[payload.chatId] is not present.');
        }
    },
    /**
     * Удаляет список сообщений чата по ключу
     * @param state
     * @param action содержит идентификатор удаляемого списка сообщений чата
     */
    deleteMessagesPart(state, action) {
        if(state.messagesList.hasOwnProperty(action.payload.chatKey)){
            delete state.messagesList[action.payload.chatKey];
        } else {
            console.log('Error in "deleteMessagesPart". messagesList[payload.chatKey] is not present.');
        }
    },
    /**
     * Создаёт в списке сообщений нового чата объект списка сообщений для добавления в него новых сообщений
     * @param state
     * @param action принимает время создания чата
     */
    addMessagesPart(state, action) {
        state.messagesList[`chat_${action.payload.timeCreate.toString(36)}`] = {}
    },
    /**
     * Удаление всех чатов
     * @param state
     */
    dropMessagesPart(state){
        state.messagesList = {};
    }
}