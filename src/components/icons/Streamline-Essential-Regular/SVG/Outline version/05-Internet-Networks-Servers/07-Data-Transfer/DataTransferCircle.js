import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M14.25 12a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L15.439 9H9a.75.75 0 010-1.5h6.439l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026a.726.726 0 01.001.517l-.006.016a.764.764 0 01-.168.257L14.78 11.78a.743.743 0 01-.53.22zM9.75 19.5a.743.743 0 01-.53-.22l-3-3a.75.75 0 01-.163-.245l-.009-.024a.733.733 0 010-.522l.012-.032a.75.75 0 01.16-.238l3-3a.746.746 0 011.06.001.752.752 0 010 1.061L8.561 15H15a.75.75 0 010 1.5H8.561l1.72 1.72a.75.75 0 01-.531 1.28z" />
  );

export default SvgDataTransferCircle;