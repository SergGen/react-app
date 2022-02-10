/**
 * Получение имени пользователя из store
 * @returns {string} имя пользователя
 * @param store
 */
export const getUserName = (store) => store.profileReducer.userData.name;
/**
 * Получение идентификатора пользователя из store
 * @param store
 * @returns {string} идентификатор профиля пользователя
 */
export const getUserId = (store) => store.profileReducer.userData.id;
/**
 * Получение имени бота из store
 * @returns {string} имя бота
 * @param store
 */
export const getBotName = (store) => store.profileReducer.botData.name;
/**
 * Получение текста текущего ответа бота
 * @param store
 * @returns {string} текст ответа бота
 */
export const getBotAnswer = (store) => store.profileReducer.botData.answer;
/**
 * Получение идентификатора бота из store
 * @param store
 * @returns {string} идентификатор профиля бота
 */
export const getBotId = (store) => store.profileReducer.botData.id;

export const getUserAuth = (store) => store.profileReducer.userData.userAuthEmail;

/**
 * Константы
 * @type {string}
 */
export const USER_DATA = 'userData';
export const BOT_DATA = 'botData';
export const USER_DEFAULT_NAME = 'You';
export const BOT_DEFAULT_NAME = 'Bot';
export const BOT_DEFAULT_ANSWER = 'Hi! I`m a bot.';