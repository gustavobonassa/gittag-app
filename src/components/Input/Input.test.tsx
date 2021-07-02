import { mount, shallow } from "enzyme";
import * as React from "react";
import { View } from "react-native";
import "@testing-library/jest-native";

import Input from "./Input";

describe("Input success tests", () => {
  it("renders without crashing", () => {
    const component = mount(<Input />);

    expect(component).toHaveLength(1);
  });

  it("respects style prop", () => {
    const style = {
      backgroundColor: "purple",
    };
    const component = mount(
      <Input
        style={style}
      />,
    );
    const input = component.find("TextInput");

    expect(input).toHaveStyle(style);
  });

  it("should allow changes to its value", () => {
    const component = shallow(
      <Input
        value=""
        onChangeText={(e) => {
          component.setProps({
            children: <Input value={e} testID="input-children" />,
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
    const component = shallow(<Input value="" onChangeText={func} />);
    const input = component.findWhere(
      (node) => node.prop("testID") === "input-test"
    );
    input.simulate("changeText");
    expect(func).toBeCalled();
  });

  it("respects placeholder prop", () => {
    const component = mount(<Input placeholder="Hello World" />);
    const findInput = component.find("TextInput");
    expect(findInput.prop("placeholder")).toBe("Hello World");
  });

  it("respects autoFocus prop", () => {
    const component = mount(<Input autoFocus />);
    const findInput = component.find("TextInput");
    expect(findInput.prop("autoFocus")).toBe(true);
  });

  it("respects disabled prop", () => {
    const component = mount(<Input disabled />);
    const findInput = component.find("TextInput");

    expect(findInput.prop("editable")).toBe(false);

    expect(findInput).toHaveStyle({
      backgroundColor: "rgba(0, 0, 0, .05)",
      color: "rgba(0, 0, 0, .3)",
    });
  });

  it("should render an icon", () => {
    const component = mount(
      <Input
        Icon={() => (
          <View testID="my-icon" />
        )}
      />
    );
    const findIcon = component.findWhere(
      (node) => node.prop("testID") === "my-icon"
    );
    expect(findIcon.exists()).toBe(true);
  });

  it("respects the style that Input sent to the icon", () => {
    const component = mount(
      <Input
        Icon={(props: any) => (
          <View testID="my-icon" {...props} />
        )}
      />
    );
    const findIcon = component.findWhere(
      (node) => node.prop("testID") === "my-icon"
    );
    const styleProp = findIcon.first().prop("style");
    expect(styleProp.position).toBe("absolute");
  });
});
