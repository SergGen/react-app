/**
 * Возвращает состояние списка сообщений
 * @param store
 * @returns {Reducer<any>}
 */
export const getDataGistsReducer = (store) => store.gistsReducer;
/**
 * Возвращает объект со списками сообщений чатов
 * @param store
 * @returns {*}
 */
// export const getDataGists = (store) => getDataGistsReducer(store).dataGists;

// export const getStatus = (store) => getDataGistsReducer(store).status;

// export const getQuantity = (store) => getDataGistsReducer(store).quantity;

export const GISTS_DEFAULT_URL = 'https://jsonplaceholder.typicode.com/todos';
export const GISTS_DEFAULT_QUANTITY = '10';
export const RESOLVED_STATUS = 'resolved';
export const REJECTED_STATUS = 'rejected';
export const LOADING_STATUS = 'loading';