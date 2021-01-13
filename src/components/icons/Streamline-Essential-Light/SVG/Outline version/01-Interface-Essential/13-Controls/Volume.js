import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolume = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 22.002c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-15c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" />,
    <path d="M13.25 12.502c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75zm0-2.5a.75.75 0 100 1.5.75.75 0 000-1.5zM3 10.501c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5a.5.5 0 01-1 0 .5.5 0 10-.5.5.5.5 0 010 1zM21 10.501a.5.5 0 010-1 .5.5 0 10-.5-.5.5.5 0 01-1 0c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM21 20.501c-.827 0-1.5-.673-1.5-1.5a.5.5 0 011 0 .5.5 0 10.5-.5.5.5 0 010-1c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zM3 20.501c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5a.5.5 0 010 1 .5.5 0 10.5.5.5.5 0 011 0c0 .827-.673 1.5-1.5 1.5zM11.293 4.709a.5.5 0 01-.354-.146 1.49 1.49 0 01-.439-1.06c0-.401.156-.777.439-1.061A1.49 1.49 0 0112 2.003c.401 0 .777.156 1.06.438a1.502 1.502 0 010 2.122.498.498 0 01-.707 0 .5.5 0 010-.707.5.5 0 10-.707 0 .5.5 0 01-.353.853z" />
  );

export default SvgVolume;