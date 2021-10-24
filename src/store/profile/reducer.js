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
    changeName(state, action) {
        if(state[action.payload.nameProfile]) {
            state[action.payload.nameProfile] = action.payload.newName;
        }
    },
    /**
     * Редьюсер смены текста ответа бота
     * @param state
     * @param action
     */
    changeBotAnswer(state, action) {
        state.botAnswer = action.payload.newBotAnswer;
    }
}