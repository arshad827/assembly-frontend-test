// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import React from "react";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App Test", () => {
  test("renders learn react link", () => {
    const wrapper = mount(<App />);

    expect(wrapper.find("div").text()).toContain("Loading...");
    
  });
});
