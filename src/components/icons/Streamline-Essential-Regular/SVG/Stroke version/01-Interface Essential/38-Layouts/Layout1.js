import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-1_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path className="layout-1_svg__a" d="M1.5 7.497h21M9 22.497v-15" />
  );

export default SvgLayout1;