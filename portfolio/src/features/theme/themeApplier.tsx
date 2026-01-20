// This component applies the selected theme mode to the document root

// import necessary modules
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

// define and export the ThemeApplier component
export default function ThemeApplier() {
  // get current theme mode from Redux store
  const mode = useAppSelector((state) => state.theme.mode);

  // effect to update the data-theme attribute on the document root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  // this component does not render any visible UI
  return null;
}
