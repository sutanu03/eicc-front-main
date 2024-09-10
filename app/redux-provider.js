/* // app/redux-provider.js
"use client";

import { Provider } from "react-redux";
import { store } from "../app/store/store";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
} */