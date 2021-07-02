import { mount, shallow } from "enzyme";
import * as React from "react";
import "@testing-library/jest-native";

import InputFilter from "./InputFilter";

describe("InputFilter success tests", () => {

  it("renders without crashing", () => {
    const component = mount(<InputFilter />);

    expect(component).toHaveLength(1);
  });

  it("respects style prop", () => {
    const style = {
      backgroundColor: "purple",
    }
    const component = mount(
      <InputFilter
        style={style}
      />,
    );
    const input = component.find("TextInput");

    expect(input).toHaveStyle(style);
  });

  it("respects styleContainer prop", () => {
    const style = {
      backgroundColor: "purple",
    }
    const component = mount(
      <InputFilter
        styleContainer={style}
      />,
    );
    const view = component.find("View").first();

    expect(view).toHaveStyle(style);
  });

  it("should allow changes to its value", () => {
    const component = shallow(
      <InputFilter
        value=""
        onChangeText={(e) => {
          component.setProps({
            children: <InputFilter value={e} testID="input-children" />,
          });
        }}
      />
    );
    const input = component.findWhere(
      (node) => node.prop("testID") === "input-test"
    );
    input.simulate("changeText", "Hello World");

    const inputChildren = component.findWhere(
      (node) => node.prop("testID") === "input-children"
    );
    expect(inputChildren.props().value).toEqual("Hello World");
  });

  it("respects onChangeText prop", () => {
    const func = jest.fn();
    const component = shallow(<InputFilter value="" onChangeText={func} />);
    const input = component.findWhere(
      (node) => node.prop("testID") === "input-test"
    );
    input.simulate("changeText");
    expect(func).toBeCalled();
  });

  it("respects placeholder prop", () => {
    const component = mount(<InputFilter placeholder="Hello World" />);
    const findInput = component.find("TextInput");
    expect(findInput.prop("placeholder")).toBe("Hello World");
  });

  it("respects autoFocus prop", () => {
    const component = mount(<InputFilter autoFocus />);
    const findInput = component.find("TextInput");
    expect(findInput.prop("autoFocus")).toBe(true);
  });

  it("respects disabled prop", () => {
    const component = mount(<InputFilter disabled />);
    const findInput = component.find("TextInput");

    expect(findInput.prop("editable")).toBe(false);
  });

  it("should render a button to clear when focus and disappear on blur", () => {
    const component = mount(<InputFilter />);
    const findInput = component.find("TextInput");

    const findButton = component.find("TouchableOpacity");
    expect(findButton.exists()).toBe(false);

    findInput.simulate("focus");

    const findButton2 = component.find("TouchableOpacity");
    expect(findButton2.exists()).toBe(true);

    findInput.simulate("blur");

    const findButton3 = component.find("TouchableOpacity");
    expect(findButton3.exists()).toBe(false);
  });

  it("should execute onClear function when clicked", () => {
    const func = jest.fn();
    const component = mount(
      <InputFilter
        onClear={func}
      />,
    );
    // we need to focus on the input for the button to appear
    const findInput = component.find("TextInput");
    findInput.simulate("focus")

    const findButton = component.find("TouchableOpacity");
    findButton.simulate("click");

    expect(func).toBeCalled();
  });

  it("should render a search icon", () => {
    const component = mount(<InputFilter />);
    const findIcon = component.findWhere(
      (node) => node.prop("testID") === "search-icon-test"
    );

    expect(findIcon.exists()).toBe(true);
    expect(findIcon.prop("name")).toBe("search");
  });

  it("respects dark prop", () => {
    const component = mount(
      <InputFilter dark />
    );
    const findIcon = component.findWhere(
      (node) => node.prop("testID") === "search-icon-test"
    );

    expect(findIcon.prop("color")).toBe("#fff");
  });

  it("respects colors prop", () => {
    const colors = {
      searchBar: "green",
      placeholder: "blue",
      searchBarInput: "red",
      text: "yellow"
    }
    const component = mount(
      <InputFilter
        colors={colors}
      />
    );
    const findInput = component.find("TextInput");
    const findContainer = component.find("View").first();

    // container
    expect(findContainer).toHaveStyle({
      backgroundColor: "green"
    });

    // input
    expect(findInput).toHaveStyle({
      backgroundColor: "red",
      color: "yellow",
    });
    expect(findInput.prop("placeholderTextColor")).toBe("blue");

    // clear button
    // let's show it :)
    findInput.simulate("focus");
    const findButton = component.find("TouchableOpacity").find("Text").first();
    expect(findButton).toHaveStyle({
      color: "yellow",
    });
  });
});
