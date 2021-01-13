import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHourglass = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 24.001a.5.5 0 010-1H5V18.5A7.029 7.029 0 019.406 12 7.028 7.028 0 015 5.5V1.001H3.5a.5.5 0 010-1h1.979L5.5 0h13l.021.001H20.5a.5.5 0 010 1H19V5.5a7.028 7.028 0 01-4.406 6.5A7.029 7.029 0 0119 18.5v4.501h1.5a.5.5 0 010 1h-17zM18 23v-2.999h-3a.5.5 0 01-.354-.146L12 17.208l-2.646 2.646a.496.496 0 01-.354.147H6V23h12zm0-3.999V18.5c0-3.308-2.692-6-6-6s-6 2.692-6 6v.501h2.793l2.854-2.854a.5.5 0 01.708 0l2.854 2.854H18zm-9.961-9A6.017 6.017 0 0012 11.5c1.457 0 2.87-.54 3.961-1.499H8.039zm8.831-1A5.938 5.938 0 0018 5.5V1.001H6V5.5c0 1.268.39 2.476 1.13 3.501h9.74z" />
  );

export default SvgHourglass;