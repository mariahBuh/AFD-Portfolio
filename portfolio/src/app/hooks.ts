// This scripts purpose defines typed Redux hooks (useAppDispatch and useAppSelector) so components can dispatch actions and select state with proper types.

import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




