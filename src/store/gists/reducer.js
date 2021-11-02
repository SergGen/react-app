/**
 * Редьюсер компонента Gists
 * @type {{deleteData(*): void, setQuantity(*, *): void, setUrl(*, *): void}}
 */
export const gistsReducer = {
    /**
     * Устанавливает адрес для запроса данных
     * @param state
     * @param action
     */
    setUrl(state, action) {
        state.url = action.payload.currentUrl;
    },
    /**
     * Устанавливает количество запрашиваемых элементов списка
     * @param state
     * @param action
     */
    setQuantity(state, action) {
        state.quantity = action.payload.currentQuantity;
    },
    /**
     * Удаляет полученные данные из store
     * @param state
     */
    deleteData(state) {
        state.dataGists = [];
    }
}