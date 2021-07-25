import { scroller } from "react-scroll";

export default function mainScroll() {
  scroller.scrollTo('main', {
    duration: 500,
    delay: 0,
    smooth: true,
    containerId: 'main',
  });
}
