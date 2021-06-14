import { removeMessage, setMessage } from "reducers/flashSlice";
import { COLOR_BLUE, COLOR_GREEN, COLOR_RED } from "styles/colors";

export const TYPE_INFO = 'info';
export const TYPE_ERROR = 'error';
export const TYPE_SUCCESS = 'success';

export const backgroundByType = (type) => {
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

export const setInfoMessage = (message) => {
  return setMessage({
    message: message,
    type: TYPE_INFO
  });
}

export const setErrorMessage = (message, no_clear = false) => {
  return setMessage({
    message: message,
    no_clear: no_clear,
    type: TYPE_ERROR
  });
}

export const setSuccessMessage = (message, no_clear = false) => {
  return setMessage({
    message: message,
    no_clear: no_clear,
    type: TYPE_SUCCESS
  });
}

export const defaultEmpty = (type) => {
  switch (type) {
    case TYPE_ERROR:
      return 'Wystąpił niezidentyfikowany problem';
    case TYPE_SUCCESS:
      return 'Operacja zakończona powodzeniem';
    default:
      return null;
  }
}

function isObject(item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

export const prepareMessages = (dispatch, messages) => {
  return Object.values(messages).map((item) => {
    const message = item?.message;
    const type = item?.type;

    const remove = (id, seconds_time) => {

      const timer = setTimeout(() => {
        dispatch(removeMessage(id));
      }, seconds_time * 1000);
      return () => clearTimeout(timer);
    };

    let display_message;
    if (Array.isArray(message)) {
      display_message = Object.values(message).join('\n');
    } else if (isObject(message)) {
      let all = [];

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
      remove: () => remove(item.id, item.seconds_time)
    };
  }).reverse();
}