import { Slider, SliderProps, Typography } from "@material-ui/core";
import React from 'react';
import { FormattedMessage } from "react-intl";
import { Themes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface RangeInputInterface extends SliderProps {
  theme?: Themes,
  label?: string,
  handleChange: (value: number | number[]) => any
}

const RangeInput: React.FC<RangeInputInterface> = (
  {
    theme = Themes.DefaultTheme,
    color,
    value,
    handleChange,
    step = 10,
    label,
    ...props
  }
) => {
  return (
    <ThemeProvider theme={theme}>
      <Slider
        value={value}
        color={color}
        onChange={(_, value) => handleChange(value)}
        aria-labelledby="discrete-slider-always"
        step={step}
        valueLabelDisplay="on"
        {...props}
      />

      {!!label && (
        <Typography>
          <FormattedMessage id={label} />
        </Typography>
      )}
    </ThemeProvider>
  );
}

//@todo - wrócić do typowania
// RangeInput.propTypes = {
//   theme: PropTypes.string,
//   color: PropTypes.string,
//   steps: PropTypes.number,
//   value: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.arrayOf(PropTypes.number)
//   ])
// }
//
// RangeInput.defaultProps = {
//   steps: 10
// }

export default RangeInput;
