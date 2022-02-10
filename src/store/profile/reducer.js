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
        if(state.hasOwnProperty(action.payload.nameProfile)) {
            state[action.payload.nameProfile].name = action.payload.newName;
        } else {
            console.log('ErrorFallback in "changeName". state[action.payload.nameProfile] is not present.');
        }
    },
    /**
     * Редьюсер смены текста ответа бота
     * @param state
     * @param action
     */
    changeBotAnswer(state, action) {
        state.botData.answer = action.payload.newBotAnswer;
    },
    /**
     * Редьюсер для изменения идентификатора пользователя
     * @param state
     * @param action
     */
    changeId(state, action){
        state[action.payload.nameProfile].id = action.payload.id;
    },
    /**
     * Редьюсер для сохранения email текущего аутентифицированного пользователя
     * @param state
     * @param action
     */
    setUserAuth(state, action) {
        state.userData.userAuthEmail = action.payload.email;
    }
}