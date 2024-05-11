import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";

export default function Rtl(props) {
  return (
    <StyleSheetManager stylisPlugins={[rtlPlugin]}>
      {props.children}
    </StyleSheetManager>
  );
}
