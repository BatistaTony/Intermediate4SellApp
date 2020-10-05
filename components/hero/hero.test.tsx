import { getUser } from "../../store/actions/user";
import User from "../../store/reducers/user";
import { IUser } from "../../types";
import Hero from "./hero";
import { render, shallow, mount } from "enzyme";
import "./../../testSetup";
import { Provider } from "react-redux";
import store from "./../../store/index";

it("test first redux", () => {
  expect(getUser()).toEqual({ type: "GET_USER" });
});

it("is it get the state ? ", () => {
  let state;
  state = User({}, { type: "GET_USER" });

  expect(state).toBeInstanceOf(Object);
});

it("render correctly and show text", () => {
  let wrapper = mount(
    <Provider store={store}>
      <Hero />
    </Provider>
  );

  expect(wrapper.find("Button").text()).toBe(
    "Do not seatle in, faz a tabua bigBro !"
  );
});
