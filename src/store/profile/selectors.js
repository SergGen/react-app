/**
 * Получение имени пользователя из store
 * @returns {string} имя пользователя
 * @param store
 */
export const getUserName = (store) => store.profileReducer.userName;
/**
 * Получение имени бота из store
 * @returns {string} имя бота
 * @param store
 */
export const getBotName = (store) => store.profileReducer.botName;

export const getBotAnswer = (store) => store.profileReducer.botAnswer;

export const USER_NAME = 'userName';
export const BOT_NAME = 'botName';