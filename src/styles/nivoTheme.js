import { COLOR_TEXT } from "styles/colors";

export const nivoTheme = {
  textColor: COLOR_TEXT,
  fontSize: 11,
  tooltip: {
    container: {
      position: 'absolute',
      padding: 0,
      borderRadius: 0,
      width: 200
    }
  },
  axis: {
    domain: {
      line: {
        stroke: 'transparent',
        strokeWidth: 1
      }
    },
    ticks: {
      line: {
        stroke: COLOR_TEXT,
        strokeWidth: 1
      }
    }
  },
  crosshair: {
    line: {
      stroke: COLOR_TEXT,
      strokeWidth: 1,
      strokeOpacity: 1,
    },
  },
  grid: {
    line: {
      stroke: COLOR_TEXT,
      strokeWidth: 1
    }
  }
}
