import React from "react";
import styles from "./Auth.style";
import { Animated, View, Text, Easing, Keyboard, Platform } from "react-native";
import Swiper from "../../components/Swiper/Swiper";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import store from "../../system/Store";
import { runInAction } from "mobx";
import { checkUser, loginUser, signUpUser } from "../../helpers/apiRequests";
import toast from "../../helpers/toast";
import { createAccountValidate } from "./Auth.logic";
import { LinearGradient } from 'expo-linear-gradient';

import Intro from "./Steps/Intro";
import Username from "./Steps/Username";
import Password from "./Steps/Password";

const logo = require("../../assets/images/gitlogo-small.png");

function Auth() {
  const swiper = React.useRef(null) as any;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isNewUser, setIsNewUser] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const [index, setIndex] = React.useState(0);
  const [height, setHeight] = React.useState(300);
  const [animation, setAnimation] = React.useState(new Animated.Value(300));

  function showBanner() {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: height,
      easing: Easing.bezier(0, 0, 0.1, 1),
    }).start();
  }

  function hideBanner() {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 0,
      easing: Easing.bezier(0, 0, 0.1, 1),
    }).start();
  }

  function swiperBack() {
    setLoading(false);
    setPassword("");
    setConfirmPassword("");
    swiper?.current?.prev?.();
  }

  React.useEffect(() => {

    if (Platform.OS === "android") {
      Keyboard.addListener("keyboardDidShow", () => hideBanner());
      Keyboard.addListener("keyboardDidHide", () => showBanner());
    } else {
      Keyboard.addListener("keyboardWillShow", () => hideBanner());
      Keyboard.addListener("keyboardWillHide", () => showBanner());
    }
    return () => {
      if (Platform.OS === "android") {
        Keyboard.removeListener("keyboardDidShow", () => hideBanner());
        Keyboard.removeListener("keyboardDidHide", () => showBanner());
      } else {
        Keyboard.removeListener("keyboardWillShow", () => hideBanner());
        Keyboard.removeListener("keyboardWillHide", () => showBanner());
      }
    };
  }, []);

  const checkUserExist = async () => {
    if (!username) {
      toast("Digite seu Github");
      return;
    }
    setLoading(true);
    const userExist = await checkUser(username);

    if (userExist.error) {
      toast(userExist.error || "Usuario nao existe no Github");
      setLoading(false);
      return;
    }
    if (userExist.success) {
      setIsNewUser(userExist.newAccount);
      swiper?.current?.next?.();
    } else {
      toast(userExist.error || "Falha ao verificar usuario");
    }
    setLoading(false);
  };

  const login = async () => {
    if (!password) {
      toast("Digite sua senha");
      return;
    }
    setLoading(true);
    const user = await loginUser(username, password);

    if (user.error) {
      toast(user.error || "Login nao confere");
      setLoading(false);
      return;
    }
    setLoading(false);

    if (user.token) {
      runInAction(() => {
        store.token = user.token;
        store.username = user.user.username;
      });
    } else {
      toast(user.error || "Falha ao realizar o login");
    }
  };

  const createAccount = async () => {
    const validate = createAccountValidate(password, confirmPassword);
    if (validate) {
      toast(validate);
      return;
    }
    if (password !== confirmPassword) {
      toast("As senhas nao conferem")
    }
    setLoading(true);
    const user = await signUpUser(username, password);

    if (user.error) {
      toast(user.error || "Erro ao criar a conta");
      setLoading(false);
      return;
    }
    setLoading(false);

    if (user.token) {
      runInAction(() => {
        store.token = user.token;
        store.username = user.user.username;
      });
      toast("Conta criada com sucesso");
    } else {
      toast(user.error || "Falha ao criar a conta");
    }
  };

  const slides = [
    <Intro
      onPress={() => swiper?.current?.next?.()}
    />,
    <Username
      onBack={() => swiperBack()}
      onPress={() => checkUserExist()}
      username={username}
      setUsername={(e) => setUsername(e)}
      loading={loading}
    />,
    <Password
      onBack={() => swiperBack()}
      isNewUser={isNewUser}
      setPassword={(e) => setPassword(e)}
      setConfirmPassword={(e) => setConfirmPassword(e)}
      password={password}
      confirmPassword={confirmPassword}
      onPress={() => {
        if (isNewUser) {
          createAccount();
        } else {
          login();
        }
      }}
      loading={loading}
    />,
  ];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.banner, { height: animation }]}>
        <LinearGradient
          colors={['#f100d1cc', '#4d50fd']}
          style={styles.background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        <Animated.Image
          resizeMode="contain"
          resizeMethod="scale"
          source={logo}
          style={styles.image}
        />
      </Animated.View>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiper}
          index={index}
          onChange={setIndex}
          slides={slides}
        />
      </View>
    </View>
  );
}

export default Auth;
