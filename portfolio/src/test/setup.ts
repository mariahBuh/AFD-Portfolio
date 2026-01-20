// Mock localStorage for testing environment

// Check if localStorage is not already defined
if (!globalThis.localStorage) {
  // create a simple in-memory mock of localStorage
  let store: Record<string, string> = {};
  // define the mock localStorage object
  globalThis.localStorage = {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    key: (i: number) => Object.keys(store)[i] || null,
    get length() {
      return Object.keys(store).length;
    },
  };
}

import "@testing-library/jest-dom";


