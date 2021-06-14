import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { FlashMessageInterface } from "interfaces/FlashMessageInterface";

export const flashSlice = createSlice({
  name: "flash",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessage: {
      reducer: (state, action: PayloadAction<FlashMessageInterface>) => {
        const new_message = { ...action.payload };

        state.messages = [
          {
            ...new_message,
            seconds_time: new_message?.seconds_time ?? 10,
            no_clear: new_message?.no_clear ?? false
          }
        ];
      },
      prepare: (message: FlashMessageInterface) => {
        message.id = nanoid();

        return { payload: message }
      },
    },
    removeMessage: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter((item) => {
        return item.id !== action.payload;
      });
    },
    clearMessages: (state) => {
      state.messages = state.messages.filter((item) => (true === item?.no_clear));
    },
  },
});

export const { setMessage, clearMessages, removeMessage } = flashSlice.actions;

export const flashMessages = (state) => state.flash.messages;

export default flashSlice.reducer;
