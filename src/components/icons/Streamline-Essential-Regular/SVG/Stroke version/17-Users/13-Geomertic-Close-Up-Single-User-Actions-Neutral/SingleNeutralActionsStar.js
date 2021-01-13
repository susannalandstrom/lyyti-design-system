import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-star_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-star_svg__cls-1"
      d="M.75 17.25a6.751 6.751 0 0110.517-5.6"
    />,
    <circle
      className="single-neutral-actions-star_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-star_svg__cls-1"
      d="M17.946 11.68L19.488 15h3a.735.735 0 01.518 1.283l-2.6 2.562 1.443 3.314a.786.786 0 01-1.119.982l-3.487-1.961-3.486 1.961a.786.786 0 01-1.12-.982l1.443-3.314-2.6-2.562A.734.734 0 0111.988 15h3l1.544-3.323a.8.8 0 011.414.003z"
    />
  );

export default SvgSingleNeutralActionsStar;