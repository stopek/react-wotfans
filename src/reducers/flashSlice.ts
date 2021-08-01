import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { FlashMessageInterface } from "interfaces/FlashMessageInterface";

type FlashType = {
  messages: FlashMessageInterface[] | []
}

const initialState: FlashType = {
  messages: []
}

export const flashSlice = createSlice({
  name: "flash",
  initialState: initialState,
  reducers: {
    setMessage: {
      reducer: (state, action: PayloadAction<FlashMessageInterface>) => {
        state.messages = [
          Object.assign({}, action.payload, {
            seconds_time: action.payload?.seconds_time ?? 10,
            no_clear: action.payload?.no_clear ?? false
          })
        ];
      },
      prepare: (message: FlashMessageInterface) => {
        message.id = nanoid();

        return { payload: message }
      },
    },
    removeMessage: (state, action: PayloadAction<string>) => {
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

export const flashMessages = (state: RootState) => state.flash.messages;

export default flashSlice.reducer;
