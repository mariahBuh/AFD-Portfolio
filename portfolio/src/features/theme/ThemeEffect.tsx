// This component applies the selected theme mode to the document root

import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

// define and export the ThemeEffect component
export default function ThemeEffect() {
  // get current theme mode from Redux store
  const mode = useSelector((state: RootState) => state.theme.mode);

  // effect to update the data-theme attribute on the document root
  useEffect(() => {
    // set the data-theme attribute to the current mode
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return null;
}
