import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-play_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-play_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14.167V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1v12.667"
    />,
    <rect
      className="email-action-play_svg__a"
      x={7.5}
      y={4.5}
      width={9}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="email-action-play_svg__a"
      d="M10.5 7.287a.286.286 0 01.434-.246l2.927 1.213a.287.287 0 010 .492l-2.927 1.213a.285.285 0 01-.289 0 .288.288 0 01-.145-.249z"
    />
  );

export default SvgEmailActionPlay;