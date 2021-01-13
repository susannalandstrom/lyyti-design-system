import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-text_svg__a"
      d="M8.5 8.5h7M8.5 11.5h7M8.5 14.5H13M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-text_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-text_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3"
    />
  );

export default SvgPhoneActionText;