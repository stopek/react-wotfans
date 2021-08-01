import { AppDispatch } from "app/store";
import { FlashMessageInterface } from "interfaces/FlashMessageInterface";
import { removeMessage, setMessage } from "reducers/flashSlice";
import { COLOR_BLUE, COLOR_GREEN, COLOR_RED } from "styles/colors";

export const TYPE_INFO = 'info';
export const TYPE_ERROR = 'error';
export const TYPE_SUCCESS = 'success';

export type MessageTypes = typeof TYPE_ERROR | typeof TYPE_INFO | typeof TYPE_SUCCESS;

export const backgroundByType = (type: MessageTypes) => {
  switch (type) {
    case TYPE_ERROR:
      return COLOR_RED;
    case TYPE_INFO:
      return COLOR_BLUE;
    case TYPE_SUCCESS:
      return COLOR_GREEN;
    default:
      return 'black';
  }
}

export const setInfoMessage = (message: string) => {
  return setMessage({
    message: message,
    type: TYPE_INFO
  });
}

export const setErrorMessage = (message: string, no_clear: boolean = false) => {
  return setMessage({
    message: message,
    no_clear: no_clear,
    type: TYPE_ERROR
  });
}

export const setSuccessMessage = (message: string, no_clear: boolean = false) => {
  return setMessage({
    message: message,
    no_clear: no_clear,
    type: TYPE_SUCCESS
  });
}

export const defaultEmpty = (type: MessageTypes) => {
  switch (type) {
    case TYPE_ERROR:
      return 'Wystąpił niezidentyfikowany problem';
    case TYPE_SUCCESS:
      return 'Operacja zakończona powodzeniem';
    default:
      return null;
  }
}

function isObject(item: any) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

export const prepareMessages = (dispatch: AppDispatch, messages: FlashMessageInterface[]) => {
  return messages.map((item) => {
    const message = item?.message;
    const type: MessageTypes = item?.type;

    const remove = (id: string, seconds_time: number = 10) => {
      const timer = setTimeout(() => {
        dispatch(removeMessage(id));
      }, seconds_time * 1000);
      return () => clearTimeout(timer);
    };

    let display_message;
    if (Array.isArray(message)) {
      display_message = Object.values(message).join('\n');
    } else if (isObject(message)) {
      let all: string[] = [];

      Object.values(message).forEach((item) => {
        if (Array.isArray(item)) {
          all = [...all, ...item];
        } else {
          all.push(item);
        }
      });

      display_message = all.join('\n');
    } else {
      display_message = message;
    }

    if (!display_message?.length) {
      display_message = defaultEmpty(type);
    }

    return {
      ...item,
      display_message: display_message,
      remove: () => typeof item?.id === 'string' ? remove(item?.id, item?.seconds_time) : {}
    };
  }).reverse();
}
