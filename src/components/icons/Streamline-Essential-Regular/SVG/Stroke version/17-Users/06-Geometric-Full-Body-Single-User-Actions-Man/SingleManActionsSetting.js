import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-setting_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-setting_svg__cls-1"
      d="M9.674 9.75A5.25 5.25 0 00.75 13.5v2.25H3l.75 7.5h4.5l.521-5.216"
    />,
    <circle
      className="single-man-actions-setting_svg__cls-1"
      cx={17.25}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="single-man-actions-setting_svg__cls-1"
      d="M18.524 10.7l.442 1.453a.993.993 0 001.173.681l1.473-.342a1.339 1.339 0 011.274 2.219l-1.03 1.111a1 1 0 000 1.362l1.03 1.111a1.338 1.338 0 01-1.274 2.218l-1.473-.341a.992.992 0 00-1.173.681l-.442 1.447a1.331 1.331 0 01-2.549 0l-.442-1.452a.992.992 0 00-1.173-.681l-1.473.341a1.338 1.338 0 01-1.274-2.218l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.339 1.339 0 011.274-2.219l1.473.342a.993.993 0 001.173-.681l.442-1.453a1.331 1.331 0 012.549.005zM6 8.25v6"
    />
  );

export default SvgSingleManActionsSetting;