import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMsg,
  SubmitBtn,
} from "../components/forms";
import AuthApi from "../api/auth";
import ScreenTemp from "../components/ScreenTemp";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(4, "Password is not so secure!")
    .label("Password"),
});
function LoginWindow() {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await AuthApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };
  return (
    <ScreenTemp style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-blue2.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMsg error="Invalid Email and/or Password" visible={loginFailed} />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          logo="email"
          name="email"
          placeholder="Email Id"
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType={"default"}
          logo="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <SubmitBtn title="Login" />
      </AppForm>
    </ScreenTemp>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 35,
    marginTop: 35,
  },
});
export default LoginWindow;
