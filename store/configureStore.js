import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
const configureStore = () => {
  const store = createStore(reducer);
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
