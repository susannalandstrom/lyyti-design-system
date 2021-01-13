import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 24c-1.103 0-2-.897-2-2V2C0 .897.897 0 2 0h10c1.103 0 2 .897 2 2v1h2c1.103 0 2 .897 2 2v14c0 1.103.897 2 2 2s2-.897 2-2v-7.086a1.498 1.498 0 01-.914-.914H21c-1.103 0-2-.897-2-2s.897-2 2-2h.086c.209-.59.774-1 1.414-1 .827 0 1.5.673 1.5 1.5v3c0 .64-.41 1.205-1 1.414V19c0 1.654-1.346 3-3 3s-3-1.346-3-3V5c0-.551-.448-1-1-1h-2v18c0 1.103-.897 2-2 2H2zm-1-2c0 .552.449 1 1 1h10a1 1 0 001-1v-7H1v7zm12-8V2c0-.551-.448-1-1-1H2c-.551 0-1 .449-1 1v12h12zm9.5-7a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM21 8a1.001 1.001 0 000 2V8z" />,
    <path d="M3 6a.5.5 0 010-1h1.5a.5.5 0 010 1H3zM3 8a.5.5 0 010-1h1.5a.5.5 0 010 1H3zM3 10a.5.5 0 010-1h1.5a.5.5 0 010 1H3zM3 12a.5.5 0 010-1h1.5a.5.5 0 010 1H3zM9.5 8a.5.5 0 010-1H11a.5.5 0 010 1H9.5zM9.5 10a.5.5 0 010-1H11a.5.5 0 010 1H9.5zM9.5 12a.5.5 0 010-1H11a.5.5 0 010 1H9.5zM6.5 10a.5.5 0 010-1h1a.5.5 0 010 1h-1zM6.5 12a.5.5 0 010-1h1a.5.5 0 010 1h-1zM6.388 21a.89.89 0 01-.888-.889v-2.222a.89.89 0 011.361-.753l1.692 1.058a.936.936 0 01.422.591.946.946 0 01-.424 1.022l-1.693 1.058A.871.871 0 016.39 21h-.002zm.112-1.09L7.956 19 6.5 18.09v1.82z" />
  );

export default SvgMusicPlayer;