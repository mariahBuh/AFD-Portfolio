import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

export default function ThemeEffect() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return null;
}
