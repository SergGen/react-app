/**
 * Возвращает состояние списка сообщений
 * @param store
 * @returns {Reducer<any>}
 */
export const getMessagesPartReducer = (store) => store.messagesPartReducer;
/**
 * Возвращает объек со списками сообщений чатов
 * @param store
 * @returns {*}
 */
export const getMessagesList = (store) => getMessagesPartReducer(store).messagesList;
/**
 * Возвращает объект со писском сообщений заданного чата
 * @param {string} chatId идентификатор чата
 * @returns {function(*=): *}
 */
export const getMessages = (chatId) => (store) => getMessagesList(store)[chatId];
/**
 * Возвращает объект сообщения заданного по идентификатору
 * @param chatId идентификатор чата
 * @param msgId идентификатор сообщения
 * @returns {function(): *}
 */
// export const getMessage = (chatId, msgId) => () => getMessages(chatId)[msgId];