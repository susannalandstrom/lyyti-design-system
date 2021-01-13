import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMoviePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="controls-movie-play_svg__a" cx={18} cy={18} r={5.5} />,
    <path
      className="controls-movie-play_svg__a"
      d="M2.5.5h19a2 2 0 012 2V5a.5.5 0 01-.5.5H1A.5.5 0 01.5 5V2.5a2 2 0 012-2zM.5 4.5l4-4M4.5 5.5l5-5M9.5 5.5l5-5M14.5 5.5l5-5M19.5 5.5l3.823-3.823M23.5 12.5V8a.5.5 0 00-.5-.5H1a.5.5 0 00-.5.5v11.5a2 2 0 002 2h8"
    />,
    <path
      className="controls-movie-play_svg__a"
      d="M16.5 15.5v5L21 18l-4.5-2.5z"
    />
  );

export default SvgControlsMoviePlay;