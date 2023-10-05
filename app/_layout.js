import { Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import { Provider } from "react-redux";
import configureStore from "../store";

const store = configureStore();

export default function _layout() {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
