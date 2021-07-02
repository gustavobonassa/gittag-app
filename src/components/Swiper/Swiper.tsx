import React from "react";
import {
  Animated,
  View,
  Dimensions,
  Easing,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "./Swiper.style";

const width = Dimensions.get("screen").width;

interface ISwiper {
  /**
   * Restarts the slide when it reaches the end
   */
  loop?: boolean;
  /**
   */
  style?: StyleProp<ViewStyle>;
  /**
   * called when the index changes
   */
  onChange: (index: number) => void;
  /**
   * current slide
   */
  index: number;
  /**
   * all slides
   */
  slides: any[];
}

function Swiper(props: ISwiper, ref: any) {
  /**
   * animation type
   */
  const [type, setType] = React.useState("");
  const [desiredIndex, setDesiredIndex] = React.useState(0) as any;
  const [animation] = React.useState(() => new Animated.Value(0));
  const { slides, index, onChange, loop, style } = props;

  function translate(a: any, toValue: any, callback?: any) {
    const config = {
      toValue,
      duration: 500,
      easing: Easing.bezier(0.55, 0, 0.1, 1),
      useNativeDriver: true,
    };
    Animated.timing(a, config).start(callback);
  }

  function next() {
    setDesiredIndex(null);
    setType("next");
  }

  function goTo(i: number) {
    setDesiredIndex(i - 1);
    setType("next");
  }

  function prev() {
    if (index > 0) {
      setDesiredIndex(null);
      setType("prev");
    }
  }

  React.useEffect(() => {
    if (type === "next") {
      animation.setValue(0);
      translate(animation, -1, () => {
        const i = desiredIndex !== null ? desiredIndex : index;
        let nextIndex = i + 1;
        if (loop && !slides[nextIndex]) {
          nextIndex = 0;
        }
        onChange(nextIndex);
        animation.setValue(1);
        translate(animation, 0, () => setType(""));
      });
    } else if (type === "prev") {
      animation.setValue(0);
      translate(animation, 1, () => {
        onChange(index - 1);
        animation.setValue(-1);
        translate(animation, 0, () => setType(""));
      });
    }
  }, [type]);

  React.useImperativeHandle(ref, () => ({
    next,
    prev,
    goTo,
  }));

  const animationI = animation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-width / 2, 0, width / 2],
  });

  const animationII = animation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.content,
          { transform: [{ translateX: animationI }], opacity: animationII },
        ]}
      >
        {slides[index]}
      </Animated.View>
    </View>
  );
}

export default React.forwardRef(Swiper);
