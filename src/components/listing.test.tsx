// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import React from "react";
import Listing from "./listing";
import { json } from "../mockresponse";

configure({ adapter: new Adapter() });

describe("Listing", () => {
  test("Should set initial state with the values", () => {
    const wrapper = shallow(<Listing data={json} />);
    expect(wrapper.state("isOpen")).toBe(false);
    expect(wrapper.state("data")).toBe(json);
    expect(wrapper.state("index")).toBe(0);
  });

  test("Should update state with new values", () => {
    const wrapper = shallow(<Listing data={json} />);
    const componentInstance = wrapper.instance();
    componentInstance.setState({ isOpen: true, index: 1 });

    expect(wrapper.state("isOpen")).toBe(true);
    expect(wrapper.state("index")).toBe(1);
  });

  test("Handle change", () => {
    const wrapper = shallow(<Listing data={json} />);

    wrapper
      .find("input")
      .simulate("change", { target: { name: "width", value: "When" } });

    expect(wrapper.state("data")).toEqual([json[1]]);
  });
});
