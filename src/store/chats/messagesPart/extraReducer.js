import {createAsyncThunk} from "@reduxjs/toolkit";
import {sendMessage} from "./slice";

/**
 * Функция для обработки отправленных сообщений с помощью Thunk
 * @type {AsyncThunk<unknown, void, {}>}
 */
export const sendMessageThunk = createAsyncThunk(
    "messagesPartReducer/sendMessageBot",
    ({chatId, botMsgData, newMsgData},{dispatch}) => {
        dispatch(sendMessage({chatId, newMsgData }));
        if(newMsgData.author !== botMsgData.botCurrentName) {
            setTimeout(()=>{
                    dispatch(sendMessage(
                        {
                            chatId,
                            newMsgData: {
                                id: botMsgData.botId,
                                author: botMsgData.botCurrentName,
                                text: botMsgData.botCurrentAnswer
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
 * Объект для обработки состояний асинхронных функций
 * @type {{}}
 */
export const messagesPartExtraReducer = {}