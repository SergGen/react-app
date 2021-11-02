import {Box} from "@mui/material";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
    getDataGistsReducer, GISTS_DEFAULT_QUANTITY, GISTS_DEFAULT_URL
} from "../../store/gists/selector";
import {useEffect} from "react";
import {fetchDataThunk, setQuantity, setUrl} from "../../store/gists/slice";
import {deleteData} from "../../store/gists/slice";
import {useCallback} from "react";
import {ErrorFallback} from "../../components/ErrorFallback";
import {ErrorBoundary} from "react-error-boundary";
import {DataOutput} from "./DataOutput";
import {Buttons} from "./Buttons";
import {SetRequestParams} from "./SetRequestParams";

// Разобраться с выбором в Header

/**
 * Компонент-контейнер Gists
 * @returns {JSX.Element}
 * @constructor
 */
export const Gists = () => {
    const dispatch = useDispatch();
    const {url, quantity, dataGists, status, error} = useSelector(getDataGistsReducer, shallowEqual);

    /**
     * Функция отправки запроса на получение данных с сервера
     * @type {(function(): void)|*}
     */
    const getRemoteDataHandler = useCallback(() => {
        let postfixQuantity = quantity === '' ? '' : '?_limit=' + quantity;
            dispatch(deleteData());
            dispatch(fetchDataThunk({url: url + postfixQuantity}));
    },[dispatch, quantity, url]);

    /**
     * Хук автозапроса данных c debounce
     */
    useEffect(() => {
        let timeoutID = setTimeout(getRemoteDataHandler, 1000);
        return () => {clearTimeout(timeoutID)}
    },[dispatch, getRemoteDataHandler, url]);

    /**
     * Функция обработчика установки адреса
     * @type {(function(*): void)|*}
     */
    const onSetUrlHandler = useCallback( (event) => {
        let currentUrl = event.target.value.trim();
        dispatch(setUrl({currentUrl}));
    }, [dispatch]);
    /**
     * Функция обработчика установки ограничения списка по количеству элементов
     * @type {(function(*): void)|*}
     */
    const onSetQuantityHandler = useCallback( (event) => {
        let digit = event.target.value.trim();
        const regexp = /\D/g;
        digit = digit.replace(regexp, '');
            dispatch(setQuantity({currentQuantity: digit}));
    }, [dispatch]);
    /**
     * Функция обработчика установки к значениям по умолчанию.
     */
    const setDefaultHandler = () => {
        dispatch(deleteData());
        dispatch(setUrl({currentUrl: GISTS_DEFAULT_URL}));
        dispatch(setQuantity({currentQuantity: GISTS_DEFAULT_QUANTITY}));
    };

    return <Box>
        <ErrorBoundary FallbackComponent = {ErrorFallback} onReset={setDefaultHandler}>
            <Box component="form" onSubmit={(event) => event.preventDefault()}>
                <SetRequestParams param={url} onSetHandler={onSetUrlHandler} fullWidth={true} ariaLabel='url'>
                    Current URL for fetching a list: </SetRequestParams>
                <SetRequestParams param={quantity} ariaLabel='quantity' onSetHandler={onSetQuantityHandler} fullWidth={false}>
                    The list limit is disabled if this place is empty. Current quantity elements in the list:</SetRequestParams>
                <Buttons setDefaultHandler={setDefaultHandler} getRemoteDataHandler={getRemoteDataHandler} status={status} />
            </Box>
            <DataOutput status={status} dataGists={dataGists} error={error} />
        </ErrorBoundary>
    </Box>
}