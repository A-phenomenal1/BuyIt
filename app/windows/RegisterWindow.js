import React, { useState } from "react";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  ErrorMsg,
  SubmitBtn,
} from "../components/forms";
import ScreenTemp from "../components/ScreenTemp";
import UsersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import Loader from "../components/Loader";
import Colors from "../config/Colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email Id"),
  password: Yup.string()
    .required()
    .min(4, "Password is not so secure!")
    .label("Password"),
});
function RegisterWindow() {
  const registerApi = useApi(UsersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An Unexpected Error Occurs");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <Loader
        visible={registerApi.loading || loginApi.loading}
        color={Colors.black}
      />
      <ScreenTemp style={styles.screen}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-blue2.png")}
        />
        <AppForm
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMsg error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            maxLength={50}
            logo="account"
            name="name"
            placeholder="FullName"
          />
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
            keyboardType={"default"}
            logo="lock"
            name="password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <SubmitBtn title="Register" />
        </AppForm>
      </ScreenTemp>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 35,
    marginTop: 35,
  },
});
export default RegisterWindow;
