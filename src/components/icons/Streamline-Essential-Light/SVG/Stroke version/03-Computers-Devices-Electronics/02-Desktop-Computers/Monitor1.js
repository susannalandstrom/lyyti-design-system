import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="monitor-1_svg__a"
      x={0.5}
      y={1}
      width={23}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="monitor-1_svg__a"
      d="M12 20.5a9.429 9.429 0 011.963.2L13.5 17h-3l-.463 3.7A9.429 9.429 0 0112 20.5z"
    />,
    <path
      className="monitor-1_svg__a"
      d="M7 23c0-1.381 2.239-2.5 5-2.5s5 1.119 5 2.5z"
    />
  );

export default SvgMonitor1;