import React from "react";
import styles from "./Auth.style";
import { Animated, View, Easing } from "react-native";
import Swiper from "../../components/Swiper/Swiper";
import store from "../../system/Store";
import { runInAction } from "mobx";
import { checkUser, loginUser, signUpUser } from "../../helpers/apiRequests";
import toast from "../../helpers/toast";
import { createAccountValidate } from "./Auth.logic";
import { LinearGradient } from 'expo-linear-gradient';

import Intro from "./Steps/Intro";
import Username from "./Steps/Username";
import Password from "./Steps/Password";

// tslint:disable-next-line: no-var-requires
const logo = require("../../assets/images/gitlogo-small.png");

function Auth() {
  const swiper = React.useRef(null) as any;

  // auth fields
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  /**
   * New users need to confirm the password and use another
   * route in the backend
   */
  const [isNewUser, setIsNewUser] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  /**
   * Current Swipe index
   */
  const [index, setIndex] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  /**
   * Banner animation
   */
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

  function onLoadBanner(e: any) {
    if (!height) {
      const h = e.nativeEvent.layout.height;
      setAnimation(new Animated.Value(h));
      setHeight(h);
    }
  }

  /**
   * Function called when user clicks "Back"
   */
  function swiperBack() {
    setLoading(false);
    setPassword("");
    setConfirmPassword("");
    swiper?.current?.prev?.();
  }

  /**
   */
  React.useEffect(() => {
    if (index > 0) {
      hideBanner();
    } else {
      showBanner();
    }
  }, [index]);

  /**
   * Checks if the GitHub user exists
   */
  const checkUserExist = async () => {
    if (!username) {
      toast("Digite seu Github");
      return;
    }
    setLoading(true);
    const userExist = await checkUser(username);

    if (userExist.error) {
      toast(userExist.error || "Usuário não existe no Github");
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

  /**
   * This function checks if the user is correct and saves his token in the Mobx store
   */
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

  /**
   * This function validates the user's information to create a new account,
   * sends it to the backend and saves it to the Mobx store
   */
  const createAccount = async () => {
    const validate = createAccountValidate(password, confirmPassword);
    if (validate) {
      toast(validate);
      return;
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

  // each array item is a swiper step
  const slides = [
    <Intro
      key="1"
      onPress={() => swiper?.current?.next?.()}
    />,
    <Username
      key="2"
      onBack={() => swiperBack()}
      onPress={() => checkUserExist()}
      username={username}
      setUsername={(e) => setUsername(e)}
      loading={loading}
    />,
    <Password
      key="3"
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
      <Animated.View
        style={[styles.banner, height ? { height: animation } : null]}
        onLayout={onLoadBanner}
      >
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
