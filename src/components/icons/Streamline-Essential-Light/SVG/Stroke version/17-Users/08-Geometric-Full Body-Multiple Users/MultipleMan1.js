import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleMan1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-man-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-man-1_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="multiple-man-1_svg__cls-1" cx={5.5} cy={4} r={3.5} />,
    <path
      className="multiple-man-1_svg__cls-1"
      d="M20.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H16l.5 6zM15.484 2.223A5.809 5.809 0 0019.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="multiple-man-1_svg__cls-1" cx={18.5} cy={4} r={3.5} />
  );

export default SvgMultipleMan1;