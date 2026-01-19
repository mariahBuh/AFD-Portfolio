import React, { type PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { store as appStore } from "../app/store";

type Options = {
  store?: typeof appStore;
  route?: string;
};

export function renderWithProviders(
  ui: React.ReactElement,
  { store = appStore, route = "/" }: Options = {}
) {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    );
  }

  return render(ui, { wrapper: Wrapper });
}
