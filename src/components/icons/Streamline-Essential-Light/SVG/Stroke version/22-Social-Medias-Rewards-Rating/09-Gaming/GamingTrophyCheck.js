import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingTrophyCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-trophy-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gaming-trophy-check_svg__a"
      d="M15.824 3.471l-4.75 6-2.5-2.5M3.113 13.753A4 4 0 01.5 10V7.5a1 1 0 011-1h2.051M20.887 13.753A4 4 0 0023.5 10V7.5a1 1 0 00-1-1h-2.051"
    />,
    <path
      className="gaming-trophy-check_svg__a"
      d="M20.982 1.525a1 1 0 00-1-1.025H4.018a1 1 0 00-1 1.025C3.365 15.739 10.971 11.678 10.971 17c-.055 3.082-1.333 4.225-3.523 4.455a1.051 1.051 0 00-.942 1.045 1 1 0 001 1h8.988a1 1 0 001-1 1.051 1.051 0 00-.942-1.045c-2.19-.23-3.468-1.373-3.523-4.455 0-5.322 7.606-1.261 7.953-15.475z"
    />
  );

export default SvgGamingTrophyCheck;