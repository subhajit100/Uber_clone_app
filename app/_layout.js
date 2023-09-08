import { Slot } from "expo-router";
import { Provider } from "react-redux";
import store from "../redux/store";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function HomeLayout() {
  return (
    <Provider store={store}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      > */}
        <Slot />
      {/* </KeyboardAvoidingView> */}
    </Provider>
  );
}
