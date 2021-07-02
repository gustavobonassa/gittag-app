import { mount } from "enzyme";
import * as React from "react";
import "@testing-library/jest-native";

import Swiper from "./Swiper";
import { Text } from "react-native";
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe("Swiper success tests", () => {
  beforeEach(() => {

    // Need to fake the timers for timeTravel to work
    jest.useFakeTimers()
})

  it("renders without crashing", () => {
    const component = mount(
      <Swiper
        onChange={() => ({})}
        index={0}
        slides={[]}
      />
    );

    expect(component).toHaveLength(1);
  });

  // it("should change ", () => {
  //   const ref = React.createRef() as any;
  //   const func = jest.fn();
  //   let newIndex = 0;
  //   const component = mount(
  //     <>
  //       <Swiper
  //         onChange={(i) => newIndex = i}
  //         index={0}
  //         slides={[]}
  //         ref={ref}
  //       />
  //     </>
  //   );
  //   // ref?.current?.next();
  //   // console.log(component)
  //   // const ref = component.instance().

  //   expect(newIndex).toBe(1);
  // });

  it("respects style prop", () => {
    const style = {
      backgroundColor: "blue",
    };

    const component = mount(
      <Swiper
        onChange={(i) => ({})}
        index={0}
        slides={[]}
        style={style}
      />
    );

    expect(component).toHaveStyle(style);
  });

  it("should render the correct slide", () => {
    const slides = [
      <Text key="a" testID="a">My slide 1</Text>,
      <Text key="b" testID="b">My slide 2</Text>,
      <Text key="c" testID="c">My slide 3</Text>,
    ]

    const component = mount(
      <Swiper
        onChange={(i) => ({})}
        index={1}
        slides={slides}
      />
    );

    // index === 1, only slide B can appear
    const findSlideA = component.findWhere(
      (node) => node.prop("testID") === "a"
    );
    const findSlideB = component.findWhere(
      (node) => node.prop("testID") === "b"
    );
    const findSlideC = component.findWhere(
      (node) => node.prop("testID") === "c"
    );

    expect(findSlideA.exists()).toBe(false);
    expect(findSlideB.exists()).toBe(true);
    expect(findSlideC.exists()).toBe(false);
  });

});
