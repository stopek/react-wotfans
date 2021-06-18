import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { nanoid } from "@reduxjs/toolkit";
import { getDateLocale } from "helpers/languages";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectedLanguage } from "reducers/languageSlice";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function TimeInput(
  {
    label,
    value,
    onChange,
    format = 'HH:mm',
    theme = 'default_theme',
    ...props
  }
) {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState(null);
  const language = useSelector(selectedLanguage);

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      locale={getDateLocale(language)}
    >
      <ThemeProvider theme={theme}>
        <KeyboardTimePicker
          InputAdornmentProps={{
            position: "start"
          }}
          margin="none"
          id={`standard-time-picker-${nanoid()}`}
          label={label}
          value={value}
          minutesStep={5}
          ampm={false}
          format={format}
          okLabel="Potwierdź"
          cancelLabel="Anuluj"
          clearLabel="Wyczyść"
          clearable={true}
          open={open}
          onChange={onChange}
          onKeyDown={(event) => event.preventDefault()}
          onClick={(event) => {
            setElement(event.target);
            setOpen(!open);
          }}
          onClose={() => {
            const timer = setTimeout(() => {
              element.blur()
            }, 200);
            setElement(null);
            setOpen(!open);
            return () => clearTimeout(timer);
          }}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          {...props}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};
