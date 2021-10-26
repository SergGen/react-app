/**
 * Редьюсеры профиля
 * @type {{check1(*): void, check2(*): void, addText(*, *): void, increment(*): void}}
 */
export const profileReducers = {
    /**
     * Редьюсер смены имени User или бота в зависимости от nameProfile
     * @param state
     * @param action
     */
    changeName(state, {payload}) {
        if(state.hasOwnProperty(payload.nameProfile)) {
            state[payload.nameProfile].name = payload.newName;
        } else {
            console.log('ErrorFallback in "changeName". state[action.payload.nameProfile] is not present.');
        }
    },
    /**
     * Редьюсер смены текста ответа бота
     * @param state
     * @param action
     */
    changeBotAnswer({botData}, {payload}) {
        botData.answer = payload.newBotAnswer;
    }
}