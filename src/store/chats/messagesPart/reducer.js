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
    sendMessage({messagesList}, {payload}) {
        if(messagesList.hasOwnProperty(payload.chatId)){
            messagesList[payload.chatId][`msg_${payload.newMsgData.id}_${Date.now().toString(36)}`] = {
                msgTime: Date.now(),
                msgAuthor: payload.newMsgData.author,
                msgText: payload.newMsgData.text
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
    deleteMessagesPart({messagesList}, {payload}) {
        if(messagesList.hasOwnProperty(payload.chatKey)){
            delete messagesList[payload.chatKey];
        } else {
            console.log('Error in "deleteMessagesPart". messagesList[payload.chatKey] is not present.');
        }
    },
    /**
     * Создаёт в списке сообщений нового чата объект списка сообщений для добавления в него новых сообщений
     * @param state
     * @param action принимает время создания чата
     */
    addMessagesPart({messagesList}, {payload}) {
        messagesList[`chat_${payload.timeCreate.toString(36)}`] = {}
    },
}