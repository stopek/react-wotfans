import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import ThemeProvider from "components/styles/themes/ThemeProvider";
import { date_parse } from "helpers/date";
import { getDateLocale } from "helpers/languages";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectedLanguage } from "reducers/languageSlice";

/**
 *
 * Wywołanie, gdy data jest inna wyświetlana klientowi a inna przesyłana do API
 * <DateInput
 *   label="Data urodzenia"
 *   value={user?.birthdate}
 *   format="dd.MM.yyyy"
 *   format_from="yyyy-MM-dd"
 *   required={true}
 *   disableFuture
 *    onChange={(value) => dispatch(setUserParam({ birthdate: date_format(value) }))}
 * />

 *
 * Wywołanie, gdy data jest tak samo wyświetlana klientowi co przesyłana do API
 * <DateInput
 *   label="Data urodzenia"
 *   value={user?.birthdate}
 *   format="yyyy-MM-dd"
 *   required={true}
 *   disableFuture
 *   onChange={(_, value) => dispatch(setUserParam({ birthdate: value }))}
 * />

 * @param min
 * @param max
 * @param label
 * @param value
 * @param theme
 * @param variant
 * @param onChange
 * @param format
 * @param format_from
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DateInput(
  {
    min = null,
    max = null,
    label,
    value,
    theme = 'default_theme',
    variant = 'standard',
    onChange,
    format = 'd.MM.yyyy, cccc',
    format_from,
    ...props
  }
) {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState(null);

  const language = useSelector(selectedLanguage);

  const params = {};
  if (min) {
    params.minDate = min;
  }

  if (max) {
    params.maxDate = max;
  }

  if (format_from) {
    value = date_parse(value, format_from);
  }

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      locale={getDateLocale(language)}
    >
      <ThemeProvider theme={theme}>
        <KeyboardDatePicker
          InputAdornmentProps={{
            position: "start"
          }}
          label={label}
          format={format}
          margin="none"
          inputVariant={variant}
          value={value}
          onChange={(date, formatted) => {
            onChange(date, formatted);
          }}
          onKeyDown={(event) => event.preventDefault()}
          open={open}
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
            'aria-label': 'change date',
          }}
          okLabel="Potwierdź"
          cancelLabel="Anuluj"
          clearLabel="Wyczyść"
          clearable={true}
          {...params}
          {...props}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};