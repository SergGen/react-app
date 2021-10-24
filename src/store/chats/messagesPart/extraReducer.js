import {createAsyncThunk} from "@reduxjs/toolkit";
import {sendMessage} from "./slice";

/**
 * Функция для обработки отправленных сообщений с помощью Thunk
 * @type {AsyncThunk<unknown, void, {}>}
 */
export const sendMessageThunk = createAsyncThunk(
    "messagesPartReducer/sendMessageBot",
    ({chatId, botCurrentName, botCurrentAnswer, newMsgData},{dispatch}) => {
        dispatch(sendMessage({chatId, newMsgData }));
        if(newMsgData.author !== botCurrentName) {
            setTimeout(()=>{
                    dispatch(sendMessage(
                        {
                            chatId,
                            newMsgData: {
                                author: botCurrentName,
                                text: botCurrentAnswer
                            }
                        }
                    ));
                },
                1500
            )
        }
    }
);
/**
 * Объект для обработки с состояний асинхронных функций
 * @type {{}}
 */
export const messagesPartExtraReducer = {}