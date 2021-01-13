import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={9} cy={18.75} r={1.125} />,
    <path d="M20.25 24a.75.75 0 01-.75-.75v-.75h-15v.75a.75.75 0 01-1.5 0v-.75H1.75C.785 22.5 0 21.715 0 20.75v-4C0 15.785.785 15 1.75 15h7.48l.562-1.5H2.889A1.39 1.39 0 011.5 12.111V1.389A1.39 1.39 0 012.889 0h18.222A1.39 1.39 0 0122.5 1.389v10.722a1.39 1.39 0 01-1.389 1.389h-6.904l.563 1.5h7.48c.965 0 1.75.785 1.75 1.75v4c0 .965-.785 1.75-1.75 1.75H21v.75a.75.75 0 01-.75.75zm2-3a.25.25 0 00.25-.25V19.5h-9.75V21h9.5zm-20.5-4.5a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h9.5v-4.5h-9.5zM22.5 18v-1.25a.25.25 0 00-.25-.25h-9.5V18h9.75zm-9.332-3l-.562-1.5h-1.211l1.773 1.5zM21 12V1.5H3V12h18z" />
  );

export default SvgMoviesHome;