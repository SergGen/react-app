/*  !!!Тестовый функционал!!!  */

export const profileReducers = {
    check1(state) {
        state.checkboxState1 = !state.checkboxState1;
    },
    check2(state) {
        state.checkboxState2 = !state.checkboxState2;
    },
    increment(state) {
        state.count++;
    },
    addText(state, action) {
        state.texts.push(action.payload);
    }
}