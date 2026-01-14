import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

export default function ThemeApplier() {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return null;
}
