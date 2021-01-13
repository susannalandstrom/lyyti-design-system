import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap_svg__a"
      d="M6.75 23.248V12a5.25 5.25 0 0110.5 0v11.25"
    />,
    <path
      className="gesture-tap_svg__a"
      d="M14.25 11.248v1.5h-4.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5zM20.25 19.629a11.25 11.25 0 10-16.5 0"
    />
  );

export default SvgGestureTap;