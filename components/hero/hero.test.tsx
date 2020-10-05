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

it("is it get an Object as a state ? ", () => {
  let state;
  state = User({}, { type: "GET_USER" });

  expect(state).toBeInstanceOf(Object);
});

it("render correctly and show text on h1", () => {
  let wrapper = render(
    <Provider store={store}>
      <Hero />
    </Provider>
  );

  console.log(wrapper.find("h1"));

  expect(wrapper.find("h1")).toBe("Do not seatle in, faz a tabua bigBro !");
});
