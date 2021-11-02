/**
 * Возвращает состояние списка чатов
 * @param store
 * @returns {Reducer<any>}
 */
export const getChatsPartReducer = (store) => store.chatsPartReducer;
/**
 * Возвращает список чатов
 * @param store
 * @returns {*}
 */
export const getChatsList = (store) => getChatsPartReducer(store).chatsList;
/**
 * Возвращает чат по указанному идентификатору
 * @param {string} chatId принимает идентификатор выбора чата
 * @returns {function(*=): *}
 */
export const getChat = (chatId) => (store) => getChatsList(store)[chatId];