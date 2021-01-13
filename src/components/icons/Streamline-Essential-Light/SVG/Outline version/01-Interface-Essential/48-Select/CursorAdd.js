import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.725 9.446a1 1 0 01-.896-.556L.105 1.446A.992.992 0 01.05.683.99.99 0 01.999 0c.155 0 .31.036.448.105L8.896 3.83a1.001 1.001 0 01-.202 1.864l-2.401.599-.598 2.396a.999.999 0 01-.97.757zM.999.998l3.726 7.446.67-2.684a.498.498 0 01.364-.364l2.692-.672L.999.998c.001 0 0 0 0 0zM14.999 23.467c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5zm0-16c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.364-7.5-7.5-7.5z" />,
    <path d="M14.999 19.467a.5.5 0 01-.5-.5v-3.5h-3.5a.5.5 0 010-1h3.5v-3.5a.5.5 0 011 0v3.5h3.5a.5.5 0 010 1h-3.5v3.5a.5.5 0 01-.5.5z" />
  );

export default SvgCursorAdd;