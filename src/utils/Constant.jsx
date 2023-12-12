import { strToBool } from "./Functions";

// import env
export const BASE_API = import.meta.env.VITE_BASE_API;
export const DEBUG_MODE = strToBool(import.meta.env.VITE_DEBUG_MODE);